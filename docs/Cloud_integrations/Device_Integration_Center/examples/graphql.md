# GraphQL

GraphQL is a powerful query language for APIs that enables clients to request only the data they need. In this blog
post, we'll explore how to use the curl command to send a GraphQL mutation to a server, specifically for triggering an
event.

```shell
curl -X POST -H "Content-Type: application/json" -d '{"query":"mutation { createEvent(input: {eventName: \"YourEventName\", eventData: \"EventData\"}) { id eventName eventData }}" }' https://your-graphql-server-endpoint
```

"YourEventName": Replace with the name of the event you want to trigger.
"EventData": Replace with any data or parameters you want to include in the event.
'https://your-graphql-server-endpoint': Replace with the actual endpoint of your GraphQL server.