# Configuring the integration

Follow this section to integrate your AWS services with Coiote DM.

## Prerequisites

- An active AWS subscription.
- A Coiote DM user account with the **Cloud admin** role.
- The Git tool (<https://git-scm.com/book/en/v2/Getting-Started-Installing-Git>).
- The AWS CLI (<https://aws.amazon.com/cli/>).
- Terraform CLI (<https://learn.hashicorp.com/tutorials/terraform/install-cli>).

## Create a Coiote DM REST user

To start integrating AWS with Coiote DM, you first need to create a user account that will be used to authorize and authenticate API calls from AWS in Coiote DM. To do that:   

1. Go to your Coiote DM account and from the **Administration** menu, select **Users management**.
2. Select **Add user** and in fill in the form:
![Add user button](images/add_button2.png "Add user button")
    - Provide **Email** for new user (which will be its user name) and select your domain from the **Domain path** drop-down list.
    - Remember to switch on the **User Verified** and **User Enabled** toggle buttons.
    - In the **Client Roles** field, pick the **admin-cli** role.
![Add REST user](images/add_rest_user2.png "Add REST user")
    - Click **Save**.
    - Go to the **Credentials** tab, type a password for your user (twice), select **Set password**, then confirm by clicking **Set password** in the pop-up.

## Copy tasks and provide credentials for your device group in Coiote DM

The Coiote DM-side configuration of the integration is located in the dedicated `AWSiotCore` device group. To complete this side of the integration, log in as the user with the **Cloud admin** role and follow the steps below:

1. Go to the **Device groups** panel and select a group:
    - For the default setting, select the **AWSiotCore** group which already contains all the necessary tasks and setting values.
    - Alternatively, create a new group and migrate the required tasks and setting values:
        - Select the **Add** button, name your group and click **Add**.
        ![Add group button](images/add_group_button.png "Add group button")
        - Migrate all the six tasks that have the **AWS** prefix in their task name:
            - Select the **AWSiotCore** group and go to **Group tasks**, select the first **AWS** task and click **Copy**.
              ![Copy task](images/copy_task.png "Copy task")
            - In the pop-up window, click **Select group** in the **Task target** field and choose your custom integration group from the list.
            - In the **Actions** field, select **Add new task**.
              ![Copy task pop-up](images/copy_task_popup.png "Copy task pop-up")
            - Repeat the action for the remaining five tasks.
        - Migrate all the five setting values that have the **AWS** prefix in their task name:
            - Select your custom integration group and go to **Profiles**, then select **Copy from**.
              ![Copy setting values](images/copy_svs.png "Copy setting values")
            - In the pop-up window, click **Select group** and select the **AWSiotCore** group.
            - Pick all the five **AWS** setting values from the list by checking them in the **Selected** column, then click **Copy**.
              ![Copy setting values pop-up](images/copy_sv_popup.png "Copy setting values pop-up")

2. Enter your AWS subscription credentials in Coiote DM:
     - Go to **Device groups**, select your custom integration group (or the **AWSiotCore** group, depending on the previous step) and go to **Profiles**. Complete the **AWS** setting values with your **AWS** credentials:
        - For `AWSaccessKeyID` and `AWSsecretAccessKey`:
            - Go to **AWS Identity and Access Management**, click **Users** and select your user name from the list.
            - Select the **Security credentials** tab and, under the **Access keys** section, click **Create access key**.
               ![Create access key button](images/create_access_key.png "Create access key button")
            - Copy the generated **Access key ID** and **Secret access key**.
               ![Copy access key and ID](images/aws_access_key.png "Copy access key and ID")
            - In Coiote DM, go to the **Profiles** tab of your integration group and paste the credentials as values for `AWSaccessKeyID` and `AWSsecretAccessKey`.
            - Click **Save**.
        - For `AWSregion`:
            - While in AWS IoT Core, click on your region name in the top navigation bar to expand the list of regions. Then, copy the hyphenated region name (e.g. *us-east-1*).
              ![Copy region name](images/region_name.png "Copy region name")
            - In Coiote DM, go to the **Profiles** tab of your integration group and paste the region name as the value for `AWSregion`.
            - Click **Save**.
        - For `AWScontrolPlaneEndpointAddress`:
            - Go to **AWS documentation**: <https://docs.aws.amazon.com/general/latest/gr/iot-core.html>.
            - From the **Control Plane API Endpoints** section, find the endpoint that matches your region (e.g. *iot.us-east-1.amazonaws.com*) and copy it.
            - In Coiote DM, go to the **Profiles** tab of your integration group and paste the credentials as the value for `AWScontrolPlaneEndpointAddress`.
            - Click **Save**.
        - For `AWSdataPlaneEndpointAddress`:
            - Open your command line and run the following command:

              ```aws iot describe-endpoint --endpoint-type iot:Data-ATS
              ```

            - Copy the returned result.
              ![Copy data plane endpoint address](images/dataplane.png "Copy data plane endpoint address")
            - In Coiote DM, go to the **Profiles** tab of your integration group and paste the result as the value for `AWSdataPlaneEndpointAddress`.
            - Click **Save**.

3. Optionally, you may now add your LwM2M devices to the integration device group so that they are ready once the integration setup is complete.

## Add AWS resources using the integration repository

All the AWS-side configuration needed for the integration to work is stored in a publicly available git repository (<https://github.com/AVSystem/iot-examples/tree/main/coiote-aws-iot-terraform>).

To add the resources needed for the integration to your AWS services:

1. Clone the repository into your local drive and check out on the `coiote-aws-iot-terraform` branch:
    - Run your command line and paste the following commands:
       ```
       git clone --no-checkout https://github.com/AVSystem/iot-examples.git
       cd iot-examples
       git sparse-checkout set coiote-aws-iot-terraform
       git checkout main
       cd coiote-aws-iot-terraform
       ```
2. Insert your REST user credentials into the `vars.py` file:
    - In the catalog of your local repository, find the `vars.py` file and open it using a program that enables file edition.
    - Change the default values of the variables to the credentials of your REST user created in a previous step.
        ![Change vars file](images/change_vars_file.png "Change vars file")
        - For `coioteDMrestURL`, provide the URL address and port of your Coiote DM installation. By default, it's https://lwm2m-test.avsystem.io:8087.
        - For `coioteDMrestPassword`, provide the password set for your Coiote DM REST user.
        - For `coioteDMrestUsername`, provide your Coiote DM REST user login (email address).
        - Save the file.
3. Run Terraform:
    - Go back to your command line and paste the following:
        ```
        terraform init
        terraform apply
        ```
    - Run the command. It will copy all the 16 resources contained in the `main.tf` file from the repository into your AWS services. Among the key resources that enable the integration, there are: the `iam_for_lambda` role, the `lwm2mOperation` Lambda function, and the `operationRequest` and `operationResponse` rules. See the contents of the `main.tf` file below or refer to the Concepts chapter for more details.

        ```json
        resource "aws_iam_role" "iam_for_lambda" {
          name = "iam_for_lambda"

          assume_role_policy = <<EOF
        {
          "Version": "2012-10-17",
          "Statement": [
            {
              "Action": "sts:AssumeRole",
              "Principal": {
                "Service": "lambda.amazonaws.com"
              },
              "Effect": "Allow"
            }
          ]
        }
        EOF
        }

        resource "aws_iam_policy_attachment" "policy_attachment" {
          name = "attachment"
          roles = [aws_iam_role.iam_for_lambda.name]
          policy_arn = "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole"
        }


        resource "random_string" "r" {
          length = 16
          special = false
        }

        data "archive_file" "lambda_zip" {
          type = "zip"
          source_dir = "lwm2mOperation"
          output_path = "lwm2mOperation.zip"
          depends_on = [random_string.r]
        }

        resource "aws_lambda_function" "lwm2mOperation" {
          filename      = "lwm2mOperation.zip"
          function_name = "lwm2mOperation"
          role          = aws_iam_role.iam_for_lambda.arn
          handler       = "lambda_function.lambda_handler"

          source_code_hash = data.archive_file.lambda_zip.output_base64sha256

          runtime = "python3.8"
          environment {
            variables = {
              coioteDMrestPassword = var.coioteDMrestPassword
              coioteDMrestUri = var.coioteDMrestURL
              coioteDMrestUsername = var.coioteDMrestUsername
            }
          }

        }

        module "iot_rule_1" {
          name = "operationRequest"
          sql_query = "SELECT state.desired.operation AS operation, state.desired.keys AS keys, state.desired.values AS values, state.desired.attributes AS attributes, state.desired.arguments AS arguments, topic(3) AS thingName FROM '$aws/things/+/shadow/name/operation/update/accepted' WHERE isUndefined(state.desired.operation) = false"
          source  = "git::https://github.com/Passarinho4/terraform-aws-iot-topic-rule.git?ref=master"
          lambda = ["lwm2mOperation"]
          depends_on = [aws_lambda_function.lwm2mOperation]
        }

        module "iot_rule_2" {
          name = "operationResponse"
          sql_query = "SELECT state.reported.result AS state.reported FROM '$aws/things/+/shadow/name/operation/update/accepted' WHERE (CASE isUndefined(state.reported.operation) WHEN true THEN false ELSE CASE state.reported.operation = 'read' OR state.reported.operation = 'write' OR state.reported.operation = 'readComposite' when true THEN true ELSE false END END) = true"
          source = "git::https://github.com/Passarinho4/terraform-aws-iot-topic-rule.git?ref=master"
          republish = [{topic = "$$aws/things/$${topic(3)}/shadow/name/datamodel/update"}]
        ```

4. Once the Terraform command is executed successfully, the devices in your integration group will be automatically migrated to the AWS IoT Core.
5. To check if your integration works correctly, go to AWS IoT Core, and from the menu, select **Manage** > **Things**, then see if your devices are listed as in here:
![Migrated things](images/migrated_things.png "Migrated things")

## Next steps

To learn how to perform operations on your devices, please see the [Performing LwM2M operations](../AWS_Integration_Guide/Device_operations/Operation_types.md) chapter.
