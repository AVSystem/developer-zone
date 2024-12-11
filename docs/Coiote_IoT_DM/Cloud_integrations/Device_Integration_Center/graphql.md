# GraphQL

GraphQL is a query language for APIs that enables clients to request only the data they need. 
This tutorial explains how to use **Data Integration Center** to send e.g. a mutation to a GraphQL server.

## Prerequisites

- Basic knowledge of [GraphQL](https://graphql.org/)
- Working GraphQL server e.g. [Apollo Server](https://www.apollographql.com/docs/apollo-server/v2/getting-started/)
- GraphQL client e.g. [Sandbox](https://studio.apollographql.com/sandbox/explorer)

## Create webhook

1. First of all, adjust body template to send query with mutation. Mutation must be compatible with your schema, so for:

    ```gql
    type Mutation {
      devices(endpointName: String, domainId: String): Device
    }
    ```
    
    it would be
    
    ```json
    {
      "query": "mutation AddDevice { devices(endpointName: \"$endpointName\", domainId: \"$domainId\") { endpointName domainId } }" 
    }
    ```

2. Set the host URL to point to your server.

!!! Info

    For detailed instructions on how to create webhooks, see the [Webhook](../webhooks.md) and [Overview](../overview.md) chapters.

![graphql-configuration](../images/graphql-configuration.webp)

## Query the GraphQL server

Now, check if the new device has been added.

![graphql-explorer](../images/graphql-explorer.webp)
