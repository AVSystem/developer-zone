# Overview

Device tests - also known as hardware in the loop tests - is a solution to test the performance of LwM2M devices and is offered as part of the **Coiote IoT Device Management** platform. Device tests are an essential tool in the development process of device firmware as they can be used for:

- Validating new functionalities
- Testing the proper implementation of the LwM2M standard
- Regression tests to ensure new firmware doesn’t break existing functionality

!!! info
    The device tests are executed on **real hardware**.

In practice this means you can mimic real-world scenarios by instructing the server to send a series of operations to a device and monitor its behavior. The tests include basic LwM2M server operations such as *Read*, *Write*, *Execute*, *Discover*, *Delete* as well as advanced actions such as *Loop* or *Wait* to build more complex test cases.

The following guide walks you through the basic functionalities of the device tests solution. You will learn how to configure, run and manage your tests.