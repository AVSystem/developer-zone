# IFTTT

To send an event to IFTTT (If This Then That) using their API, you need to use the Webhooks service provided by IFTTT.
Here are the general steps:

1. Create an IFTTT Account:
   If you don't have an IFTTT account, you'll need to create one at IFTTT's website.
2. Activate Webhooks:
    * Visit the IFTTT Webhooks service page.
    * Click on "Connect" to activate the Webhooks service.
3. Get Your Webhooks Key:
    * After connecting, click on "Documentation" to find your Webhooks key.
    * The key is included in the URL. For example, if the URL is https://maker.ifttt.com/use/YOUR_KEY, then YOUR_KEY is
      your Webhooks key.
4. Create an Applet:
    * Go to the IFTTT Applets page.
    * Click on "New Applet" to create a new one.
    * For "This," search and select Webhooks.
    * Choose the "Receive a web request" trigger.
    * Give the event a name, e.g., "send_message."
5. Set Up the Action:
    * For "That," choose the action service you want (e.g., Email, SMS, etc.).
    * Configure the action details according to your preference.
6. Use cURL to Trigger the Event:
   Now, you can use cURL to send an event to IFTTT. Replace YOUR_KEY and EVENT_NAME with your Webhooks key and the event
   name you set up in step 4.

```shell
curl -X POST -H "Content-Type: application/json" -d '{"value1":"your_value1","value2":"your_value2","value3":"your_value3"}' https://maker.ifttt.com/trigger/EVENT_NAME/with/key/YOUR_KEY
```

* value1, value2, and value3 are optional and can be used to pass data to your applet.
* EVENT_NAME is the name you gave to your event in the Webhooks trigger.

Make sure to replace YOUR_KEY and EVENT_NAME with your actual Webhooks key and event name. Additionally, ensure that the
cURL command is executed in a terminal or command prompt that supports cURL.

```shell
curl -X POST -H "Content-Type: application/json" -d '{"query":"mutation { createEvent(input: {eventName: \"YourEventName\", eventData: \"EventData\"}) { id eventName eventData }}" }' https://your-graphql-server-endpoint
```