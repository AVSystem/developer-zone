# Monitoring

The **Monitoring** module is responsible for collecting historical data about devices' state as well as providing rich user interface for browsing such information. Device's state is usually expressed by a subset of its data model parameters values, which are selected either if they expresses devices performance or their usability for analysis. There are separate sets of specific properties suitable for DSL or WiMAX devices as well as common ones, such as link consumption and connection latency. Composing those areas you can get a full picture. Sampling interval is the most often expressed by devices periodic interval - as a result, state is logged every periodic session.

The module is able to aggregate data from multiple devices. For every group of devices, which has monitoring enabled, samples from all devices, which belong to it are aggregated providing high-level statistics. In contrast to device's state history, which provides exact information about properties value, associated with event time, aggregates provide accumulated values disjointed from exact event time, but available at different levels of granularity.

Every property being under monitoring is called a monitoring resource. Depending on its content it can have a numerical or textual type:

* Numerical resources are used when values such as signal strength, transferred bytes or packet loss come into consideration. Aggregated provides such metrics as an average value and standard deviation.
* Textual resources, besides obvious usage for tracing, for example, PPP username, can be used for enumerable values, for example, enabled, disabled or beacon type. During aggregation, for each encountered value, hit count is available.

Another type of resources are alerts, which are used for signaling occurrences of interesting events or classifying devices state. They introduce some added logic in order to help you detect abnormal situations. They are divided into:

* One shot alerts - an event occurrence is logged, this type relates to, for example, PPP username, modulation type, Wi-Fi SSID change.
* Stateful alerts - they have two states: raised and hidden. They express state persistence, for example, noise margin exceeded alert is raised all the time connection noise margin exceeds a configured threshold.

## Data collection frequency

In order to provide statistics with desired granularity, monitoring introduces a concept of a sampling interval - a time period during which one sample should be collected. On the other hand, it prevents excessive storage usage - only one sample per sampling interval is stored. As samples collection usually occurs during a device's periodic visit, monitoring ensures the sampling interval by lowering, if it is required, the device's periodic interval too meet mentioned requirements.

**Giving examples:**

* Monitoring interval: 180s, periodic interval: 60s - during 180s 3 periodic visits occur, only one monitoring sample is collected, a periodic interval is not modified.
* Monitoring interval: 180s, periodic interval: 600s - periodic interval is lowered to 180s in order to ensure at least one sample is collected every 180s.

Aggregates storage manages samples collection differently. There is always a constant number of aggregates as they should be pre-allocated in order to store events that may occur on devices. They are broken down into multiple levels: minute, hour, day; values from a finery-grained level applies to a coarser-level aggregate. Finer level aggregates are available only for the most recent time frame, the rationale for this is to provide detailed information only for the latest data, optimizing storage space simultaneously.

**Retention time is:**

* Minute - for the last 24 hours
* Hour - for the last week.

Example:

Group contains Device 1 (D1, periodic 20 min) and Device 2 (D2, periodic 30 min), the sampling interval is equal to 30 minutes. Numerical values reported by devices are v1 & v2. Through an hour following events occur:

| 14 |	Periodic |	Samples collection	|  Minute aggregated value |	hour Aggregate value |
|:---|-----------|:---------------------|:-------------------------|:----------------------|
|:00 |	--		   |collection window	    | 0		                     |	0
|:01 | D1, D2 periodic	| D1, D2		|	v1 + v2		|	v1 + v2
|:16 | D1 periodic |	--	|		0		|	v1 + v2
|:21 |	 D2 periodic |	-- |			0		|	v1 + v2
|:30 |	 --	|	collection window	| 0		|	v1 + v2
|:31 |	 D1 periodic |	D1	|		v1		|	2 * v1 + v2
|:41 |	 D2 periodic |	D2	|		v2		|	2 * v1 + 2 * v2
|:46 |	 D1 periodic	|--		|	0			| 2 * v1 + 2 * v2
|:60 | --		     | collection window	| 0		|	2 * v1 + 2 * v2


Summary:

* Device 1 - 2 samples - 14:01, 14:31,
* Device 2 - 2 samples - 14:01, 14:41,
* Minute aggregates - there are 60 aggregates per each minute, from which 3 have non-zero value: 14:01. 14:31, 14:41,
* Hour aggregate - there is 1, which has accumulated value: 2 * v1 + 2 * v2.

## Target selection

You have to choose, which devices you want to monitor by selecting monitoring groups. Every device, which belongs to any of selected groups or their sub-groups is under monitoring. The same applies to aggregate storage, group scoped statistics are available for all selected groups and their sub-groups.

Given such a hierarchy:

```
	root
	|-- lwm2m
	|    |-- dsl
	|    |    |-- firmware v1 (D1)
	|    |    |-- firmware v2 (D2)
	|    +-- adsl
	|         |-- firmware v4 (D3)
	|         |-- firmware v5
	+-- devicetypes
	    |-- manufacturer 1
	    |-- manufacturer 2 (D1, D2)
	    |-- manufacturer 3 (D3)
```

Selection of root.lwm2m.dsl and root.lwm2m.adsl groups as monitoring groups results in device samples collection for all devices (D1, D2, D3) and aggregates storage for all groups in the hierarchy. Samples will be collected in all groups including devices D1, D2, D3.

Determining a group set where aggregates are available might be a resource consuming task, as every monitored devices group set should be checked. Enter a monitoring group view to see available monitoring types for which data is available. They are divided into two groups:

* Group monitoring - presented for groups (and their sub-groups) directly chosen as monitoring groups, taken into consideration when calculating monitored devices set.
* Other monitoring - all other monitoring types configured in the system, for which aggregates might exist.

## Target exclusion

As aggregates are stored separately for every group under monitoring, in case there exist multi-level, wide hierarchy it may lead to excessive storage consumption. Let us consider a situation where devices are grouped by their location into country - region - city - area hierarchy. In such case, area level may not be very useful as it aggregates data from a few devices can be excluded from monitored groups in order to reduce required storage space. It is accomplished by usage of exclusion ﻿patterns expressed as a Java programming language regular expression. If a group name matches any of configured expressions, it will be excluded from monitoring.
For hierarchy from previous paragraph, selection of root.lwm2m results in device samples collection for devices and aggregates storage for:

| root.lwm2m
| root.lwm2m.dsl
| root.lwm2m.dsl.firmware v1
| root.lwm2m.dsl.firmware v2
| root.lwm2m.adsl
| root.lwm2m.adsl.firmware v4
| root.lwm2m.adsl.firmware v5

Application of exclusion pattern: root\\.lwm2m\\..* reduces the monitored group set to group root.lwm2m.


**See also:**

* [Monitoring configuration](Monitoring_Module/Monitoring_Configuration.html)
* [Specific settings for monitoring](Monitoring_Module/Monitoring_Type_Specific_Settings.html)
* [Adding monitoring](Monitoring_Module/Adding_monitoring.html)
* [Browsing monitoring results](Monitoring_Module/Browsing_Monitoring_Results.html)
* [Monitoring map](Monitoring_Module/Monitoring_map_toctree.html)
