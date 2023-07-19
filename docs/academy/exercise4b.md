# Exercise 4B: LwM2M Send

In this exercise, we implement the LwM2M Send Operation for the Temperature Object and adjust the time interval between two Send Operations. The Send Operation is used by the LwM2M Client to send data without an explicit request from the LwM2M Server (unlike the Read Operation).

## Prerequisites

* A Raspberry Pi Pico W board with a USB cable
* A LM35 temperature sensor
* Installed **minicom** (for Linux), **RealTerm**, **PuTTy** (for Windows), or another serial communication program.
* An active [{{ coiote_short_name }}]({{ coiote_site_link }}/) user account
* Completed [exercise 3B](../academy/exercise3b.md) from module 3
* Completed [exercise 4A](../academy/exercise4a.md) from module 4

## Send Operation support
Let’s start by going to the **Anjay-pico-client/temperature_object_lm35** directory. We will update the completed implementation to have the possibility to support Send Operations. Using a serial communication program we can monitor the LwM2M Client’s behavior after making our changes. For doing so, we need to add code to our files.

## Temperature_sensor files
Let’s start with the *temperature_sensor.c* file where we define the Temperature Object’s Resources and add two functions: `send_finished_handler()` and `temperature_object_lm35_send()`. Let’s start by defining all available Resources in *temperature_sensor.c*.

<p style="text-align: center;">temperature_sensor.c</p>
```
#include "lm35.h"
#include "temperature_sensor.h"
#define NUM_INSTANCES 1


/**
* Min Measured Value: R, Single, Optional
* type: float, range: N/A, unit: N/A
* The minimum value measured by the sensor since power ON or reset.
*/
#    define RID_MIN_MEASURED_VALUE 5601

/**
* Max Measured Value: R, Single, Optional
* type: float, range: N/A, unit: N/A
* The maximum value measured by the sensor since power ON or reset.
*/
#    define RID_MAX_MEASURED_VALUE 5602

/**
* Min Range Value: R, Single, Optional
* type: float, range: N/A, unit: N/A
* The minimum value that can be measured the sensor.
*/
#    define RID_MIN_RANGE_VALUE 5603

/**
* Max Range Value: R, Single, Optional
* type: float, range: N/A, unit: N/A
* The maximum value that can be measured by the sensor.
*/
#    define RID_MAX_RANGE_VALUE 5604

/**
* Reset Min and Max Measured Values: E, Single, Optional
* type: N/A, range: N/A, unit: N/A
* Reset the Min and Max Measured Values to Current Value.
*/
#    define RID_RESET_MIN_AND_MAX_MEASURED_VALUES 5605

/**
* Sensor Value: R, Single, Mandatory
* type: float, range: N/A, unit: N/A
* Last or Current Measured Value from the Sensor.
*/
#    define RID_SENSOR_VALUE 5700

/**
* Sensor Units: R, Single, Optional
* type: string, range: N/A, unit: N/A
* Measurement Units Definition.
*/
#    define RID_SENSOR_UNITS 5701
```

Next, at the end of the *temperature_sensor.c* file, add a handler which is called automatically each time a Send operation finishes, to send logs to the serial communication program about the operation result.

<p style="text-align: center;">temperature_sensor.c</p>
```
static void send_finished_handler(anjay_t *anjay,
                                anjay_ssid_t ssid,
                                const anjay_send_batch_t *batch,
                                int result,
                                void *data) {
    (void) anjay;
    (void) ssid;
    (void) batch;
    (void) data;

    if (result != ANJAY_SEND_SUCCESS) {
        avs_log(temperature_sensor, ERROR, "Send failed, result: %d", result);
    } else {
        avs_log(temperature_sensor, INFO, "Send operation successful");
    }
}
```

It’s time to create a function with the Send Operation itself. Data messages are created using `anjay_send_batch_builder` which builds the payload to be sent to the LwM2M Server. The payload can consist of multiple values from different resources. Calling the `temperature_object_lm35_send()` function does not send a batch immediately, but schedules a task to be run on the next iteration of the Anjay’s event loop.

<p style="text-align: center;">temperature_sensor.c</p>
```
void temperature_object_lm35_send(anjay_t *anjay) {
    if (!anjay) {
        return;
    }

    const anjay_ssid_t server_ssid = 1;

    // Allocate new batch builder.
    anjay_send_batch_builder_t *builder = anjay_send_batch_builder_new();

    if (!builder) {
        avs_log(temperature_sensor, ERROR, "Failed to allocate batch builder");
        return;
    }

    int res = 0;

    for (int it = 0; it < NUM_INSTANCES; it++) {
        // Add current values of resources from Temperature Object.
        if (anjay_send_batch_data_add_current(builder, anjay, 3303, it,
                                            RID_MIN_MEASURED_VALUE)
                || anjay_send_batch_data_add_current(builder, anjay, 3303, it,
                                                    RID_MAX_MEASURED_VALUE)
                || anjay_send_batch_data_add_current(builder, anjay, 3303, it,
                                                    RID_MIN_RANGE_VALUE)
                || anjay_send_batch_data_add_current(builder, anjay, 3303, it,
                                                    RID_MAX_RANGE_VALUE)
                || anjay_send_batch_data_add_current(builder, anjay, 3303, it,
                                                    RID_SENSOR_VALUE)
                || anjay_send_batch_data_add_current(builder, anjay, 3303, it,
                                                    RID_SENSOR_UNITS)) {
            anjay_send_batch_builder_cleanup(&builder);
            avs_log(temperature_sensor, ERROR,
                    "Failed to add batch data, result: %d", res);
            return;
        }
    }
    // After adding all values, compile our batch for sending.
    anjay_send_batch_t *batch = anjay_send_batch_builder_compile(&builder);

    if (!batch) {
        anjay_send_batch_builder_cleanup(&builder);
        avs_log(temperature_sensor, ERROR, "Batch compile failed");
        return;
    }
    // Schedule our send to be run on next `anjay_sched_run()` call.
    res = anjay_send(anjay, server_ssid, batch, send_finished_handler, NULL);

    if (res) {
        avs_log(temperature_sensor, ERROR, "Failed to send, result: %d", res);
    }
    // After scheduling, we can release our batch.
    anjay_send_batch_release(&batch);
}
```

Add on top the necessary paths to the libraries used in the *temperature_sensor.c* and defined constant.
<p style="text-align: center;">temperature_sensor.c</p>
```
#include <assert.h>
#include <stdbool.h>

#include <anjay/anjay.h>
#include <anjay/ipso_objects.h>
#include <anjay/lwm2m_send.h>

#include <avsystem/commons/avs_defs.h>
#include <avsystem/commons/avs_log.h>
#include <avsystem/commons/avs_list.h>

#include <hardware/gpio.h>

#include "lm35.h"
#include "temperature_sensor.h"
#define NUM_INSTANCES 1
```

Declare the function in the *temperature_sensor.h* file.

<p style="text-align: center;">temperature_sensor.h</p>
```
#pragma once

#include <anjay/dm.h>

void temperature_sensor_install(anjay_t *anjay);
void temperature_sensor_update(anjay_t *anjay);
void temperature_sensor_release(void);
void temperature_object_lm35_send(anjay_t *anjay);
```

## Update Anjay task
Next up is updating the *main.c* file. We need to create a `temperature_object struct` and `send_job()` function to periodically issue a Send message.

!!! Note
    Optionally update the time interval from 10 seconds to any interval you prefer.

<p style="text-align: center;">main.c</p>
```
#define ANJAY_TASK_SIZE (4000U)
#define TEMP_UPDATE_TASK_SIZE (1000U)

static anjay_t *g_anjay;
static StackType_t anjay_stack[ANJAY_TASK_SIZE];
static StaticTask_t anjay_task_buffer;
static StackType_t temp_update_stack[TEMP_UPDATE_TASK_SIZE];
static StaticTask_t temp_update_task_buffer;

typedef struct {
    anjay_t *anjay;
} temperature_object_lm35_job_args_t;


static void send_job(avs_sched_t *sched, const void *args_ptr) {
    const temperature_object_lm35_job_args_t *args =
        (const temperature_object_lm35_job_args_t *) args_ptr;
    temperature_object_lm35_send(args->anjay);

    // Schedule run of the same function after 10 seconds
    AVS_SCHED_DELAYED(sched, NULL,
                    avs_time_duration_from_scalar(10, AVS_TIME_S), send_job,
                    args, sizeof(*args));
}
```

Now let’s call the `send_job()` function in `anjay_task()`.

<p style="text-align: center;">main.c</p>
```
void anjay_task(__unused void *params) {
    init_wifi();

    anjay_configuration_t config = {
        .endpoint_name = ENDPOINT_NAME,
        .in_buffer_size = 2048,
        .out_buffer_size = 2048,
        .msg_cache_size = 2048,
    };

    if (!(g_anjay = anjay_new(&config))) {
        avs_log(main, ERROR, "Could not create Anjay object");
        exit(1);
    }

    if (setup_security_object() || setup_server_object()) {
        avs_log(main, ERROR, "Failed to initialize basic objects");
        exit(1);
    }
    temperature_sensor_install(g_anjay);
    xTaskCreateStatic(temperature_sensor_update_task, "TemperatureUpdateTask",
                    TEMP_UPDATE_TASK_SIZE, NULL, TEMP_UPDATE_TASK_PRIORITY,
                    temp_update_stack, &temp_update_task_buffer);

    send_job(anjay_get_scheduler(g_anjay), &(const temperature_object_lm35_job_args_t) {
                                                .anjay = g_anjay,
                                            });


    main_loop();

    anjay_delete(g_anjay);
    temperature_sensor_release();
}
```
Save the created code, recompile the application and flash the board.

## Validate the new firmware
After flashing the board, open up your serial communication program and wait for the event ** “Send Operation successful” **. This event shows that the Client performs regular Send Operations containing Temperature data.

```
INFO [temperature_sensor]
[/temperature_object_lm35_send/temperature_sensor.c:135]: Send successful
```

Now, open {{ coiote_long_name }} and validate if the Resources are updated after each configured time interval.

![Temperature Object registered](images/temperature.PNG)

**Well done! You’ve added support for Send Operations in your firmware** 👏

!!! important "Provide your feedback"

    We're constantly working on improving the LwM2M Academy. Please share with us your feedback about this module so we can create an even better learning experience.

    [Feedback form](https://forms.gle/UAFLJs9LJocAeger9){: .md-button .md-button--big }
