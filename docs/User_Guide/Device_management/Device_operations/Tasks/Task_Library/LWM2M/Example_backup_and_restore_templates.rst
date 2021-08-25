.. _LWM2M_Example_backup_and_restore_task_templates:

=========================================
Example backup and restore task templates
=========================================

Below templates allow you to perform backup or restore task on LwM2M devices. To use them instead of default backup and restore tasks, add the :guilabel:`customBackupTask` property or
the :guilabel:`customRestoreTask` property on a target device or group with a corresponding name of a template.

 * *customBackupTask*

 .. code-block:: xml

     <config>
       <store target="lastBackupTimestamp" value="${device.getProperty(task.id + '-lastBackupTimestamp', '0')}" />
       <store target="intervalTime" value="${task.properties.getOr('intervalTime','168')}" />
       <if expr="${#lastBackupTimestamp.toLong + #intervalTime.toLong * 3600 * 1000 &lt; date.now.millis}">
         <store target="currentNumber" value="${device.getProperty(task.id + '-nextNumber', '0')}" />
         <store target="resourceId" value="${'backup-' + device.id + '-' + task.id + '-' + #currentNumber}" />
         <store target="timestampProperty" value="${#resourceId + '-Timestamp'}" />
         <log message="performing backup, interval: ${#intervalTime}, currentNumber: ${#currentNumber}, lastBackupTimestamp:    ${date.fromMillis(#lastBackupTimestamp.toLong).format}" />
         <get key="KEY TO GET BACKUP IMAGE" output="image" />
         <editResource destination="${#resourceId}" source="backupTemplate">
           <operation regex="template" replacement="${#image}" replaceAll="true" />
           <resourceProperty name="softwareVersion" value="${device.softwareVersion}" />
           <resourceProperty name="relatedDeviceProperties" value="${#timestampProperty}" />
           <resourceProperty name="customRestoreTask" value="RESTORE TASK TEMPLATE NAME" />
         </editResource>
         <store target="${#timestampProperty}" value="${date.now.millis}" type="devProp" />
         <if expr="${task.properties.getOr('intervalTime', '0').toInt &gt; 0}">
           <store target="${task.id + '-lastBackupTimestamp'}" value="${date.now.millis}" type="devProp" />
           <store target="${task.id + '-nextNumber'}" value="${(#currentNumber.toInt + 1) % task.properties.getOr('backupNumber', '5').toInt}"    type="devProp" />
         </if>
     </config>

 In *customBackupTask* replace:

 a) *"KEY TO GET BACKUP IMAGE"* with a resource on which you want to perform backup, for example, *Device.Configuration.0.Full Config*
 b) *"RESTORE TASK TEMPLATE NAME"* with a name of a restore task template that will be applied to restore this key (optional).

 * *customRestoreTask* 

 .. code-block:: xml

     <config>
       <if expr="${task.properties.get('resourceId')!=null}">
         <store target="resourceId" value="${task.properties.get('resourceId')}" />
         <else>
           <store target="newestTimestamp" value="0" />
           <store target="startDate" value="${task.properties.getOr('fromDate', '1971.00.00 00:00:00').toDate('yyyy.MM.dd HH:mm:ss').millis}" />
           <store target="endDate" value="${task.properties.getOr('toDate', date.now.format('yyyy.MM.dd HH:mm:ss')).toDate('yyyy.MM.dd HH:mm:ss').millis   }" />
           <foreach list="${device.properties.keySet.filter(_.startsWith('backup-')).filter(_.endsWith('-Timestamp'))}">
             <log message="${device.properties.get(#i)}" />
             <store target="timestamp" value="${device.properties.get(#i)}" />
             <if expr="${#startDate.toLong &lt; #timestamp.toLong and #timestamp.toLong &lt; #endDate.toLong and  #timestamp.toLong &gt;    #newestTimestamp.toLong}">
               <store target="newestTimestamp" value="${#timestamp}" />
               <store target="resourceId" value="${#i.stripSuffix('-Timestamp')}" />
             </if>
           </foreach>
           <log message="${#resourceId}" />
         </else>
       </if>
       <log message="Restoring: ${#resourceId} " />
       <readResource resourceId="${#resourceId}" varName="content" />
       <set key="KEY TO GET BACKUP IMAGE" value="${#content}" />
     </config>


 In *customRestoreTask* replace:

 a) *"KEY TO GET BACKUP IMAGE"* with a resource to be restored, for example, *Device.Configuration.0.Full Config*.
