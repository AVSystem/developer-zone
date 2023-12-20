# Azure

Certainly, if you want to send data to an Azure database using the Azure REST API directly, you would typically use the
HTTP POST method along with the appropriate endpoint and authentication headers. Below is an example using the Azure
Cosmos DB SQL API as a reference:

Insert Data into Azure Cosmos DB SQL API using HTTP POST:

```shell
# Replace placeholders with your actual values
AZURE_COSMOSDB_ENDPOINT='https://your-cosmosdb-account.documents.azure.com'
AZURE_COSMOSDB_KEY='YOUR_COSMOSDB_KEY'
DATABASE_ID='YourDatabaseId'
CONTAINER_ID='YourContainerId'

# Specify the data to insert
DATA_TO_INSERT='{
  "id": "1",
  "name": "John Doe",
  "age": 25
}'

# Make the HTTP request to insert data
curl -X POST -H "Content-Type: application/json" -H "Authorization: YOUR_COSMOSDB_KEY" --data "$DATA_TO_INSERT" "$AZURE_COSMOSDB_ENDPOINT/dbs/$DATABASE_ID/colls/$CONTAINER_ID/docs"
```

`Authorization: YOUR_COSMOSDB_KEY`

```json
{
  "id": "1",
  "name": "John Doe",
  "age": 25
}
```

Replace the placeholder values:

'https://your-cosmosdb-account.documents.azure.com' with your Cosmos DB account endpoint.
'YOUR_COSMOSDB_KEY' with your Cosmos DB account key.
'YourDatabaseId' and 'YourContainerId' with your actual database and container IDs.
This example uses the curl command to make a POST request to the Azure Cosmos DB SQL API endpoint. The data to be
inserted is specified in the DATA_TO_INSERT payload.

Notes:
* Azure Cosmos DB supports multiple APIs (e.g., SQL, MongoDB, Cassandra, Gremlin, Table). The endpoint and request format
can vary depending on the API you are using.
* This is a simplified example, and you might need to handle more advanced scenarios like partition keys, indexing, etc.,
based on your specific Cosmos DB configuration.
Always refer to the official Azure documentation for the specific API you are working with to ensure you are using the
correct endpoints, headers, and payload formats.

```shell
az group create --name YourResourceGroup --location YourRegion
az cosmosdb create --name YourCosmosDBAccount --resource-group YourResourceGroup --kind GlobalDocumentDB
az cosmosdb keys list --name YourCosmosDBAccount --resource-group YourResourceGroup --type connection-strings
az cosmosdb database create --name YourCosmosDBAccount --resource-group YourResourceGroup --db-name YourDatabaseName
az cosmosdb collection create --collection-name YourCollectionName --name YourCosmosDBAccount --resource-group YourResourceGroup --db-name YourDatabaseName --partition-key-path /YourPartitionKeyPath

az group create -n YourResourceGroup -l YourRegion
az cosmosdb create -n YourCosmosDBAccount -g YourResourceGroup --kind GlobalDocumentDB
az cosmosdb keys list -n YourCosmosDBAccount -g YourResourceGroup --type connection-strings
az cosmosdb database create -n YourCosmosDBAccount -g YourResourceGroup --db-name YourDatabaseName
az cosmosdb collection create -n YourCosmosDBAccount -g YourResourceGroup --db-name YourDatabaseName --collection-name YourCollectionName --partition-key-path /YourPartitionKeyPath

endpoint="https://YourCosmosDBAccount.documents.azure.com/dbs/YourDatabaseName/colls/YourCollectionName/docs"
key="YourPrimaryKey"

curl -X POST \
     -H "Content-Type: application/json" \
     -H "x-ms-date: $(date -u)" \
     -H "x-ms-documentdb-partitionkey: [\"ExamplePartitionKey\"]" \
     -H "Authorization: $(echo -n "YourCosmosDBAccount:$(echo -n $key | base64 -w 0)" | base64 -w 0)" \
     --data-binary "@document.json" \
     $endpoint

```