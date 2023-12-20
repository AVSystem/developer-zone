# Atlas

To send data to MongoDB Atlas using its API, you typically use the MongoDB Atlas Data API, which allows you to interact
with your MongoDB Atlas cluster programmatically. Here's a step-by-step guide on how to send data to MongoDB Atlas using
its API:

Prerequisites:
MongoDB Atlas Account:

Ensure you have a MongoDB Atlas account. If not, you can sign up at MongoDB Atlas.
MongoDB Atlas Cluster:

Set up a MongoDB Atlas cluster. Once your cluster is created, obtain the connection string.
Steps to Send Data to MongoDB Atlas:

1. Obtain API Key:
   In the MongoDB Atlas dashboard, navigate to "Database Access" under the "Database Access" tab, and create a new
   MongoDB user with the necessary privileges.
2. Enable Data API Access:
   In the MongoDB Atlas dashboard, navigate to "Database Access" and enable Data API Access for the MongoDB user you
   created.
3. Retrieve API Base URL:
   Obtain the base URL for the MongoDB Atlas Data API. You can find this in the MongoDB Atlas dashboard under "
   Clusters" -> "Connect" -> "Connect Your Application" -> "MongoDB Atlas Data API."
4. Construct API Endpoint URL:
   Append the database and collection names to the API base URL to construct the endpoint URL.
5. Prepare Data:
   Format your data in JSON format as required by MongoDB.
6. Send Data Using cURL:
   Use cURL or any HTTP client library to send a POST request to the MongoDB Atlas Data API endpoint. Here's an example
   using cURL:

```shell
curl --location --request POST 'https://europe-west1.gcp.data.mongodb-api.com/app/data-kjqsw/endpoint/data/v1/action/findOne' \
--header 'Content-Type: application/json' \
--header 'Access-Control-Request-Headers: *' \
--header 'api-key: DYJSIQRASUTVFx2G6QTMi6aXq06HcjarVGMQj0zAC2HmUXvFYp3m1hCFVMt2CCpL' \
--data-raw '{
    "collection":"<COLLECTION_NAME>",
    "database":"<DATABASE_NAME>",
    "dataSource":"coiote",
    "projection": {"_id": 1}
}'

```

`apiKey: YOUR_API_KEY`
`https://<your-api-base-url>/databaseName/collectionName`
`https://data.mongodb-api.com/app/myapp-abcde/endpoint/data/v1/action/insertOne`

```json
{
  "dataSource": "mongodb-atlas",
  "database": "learn-data-api",
  "collection": "hello",
  "document": {
    "text": "Hello, world!"
  }
}
```
   
Replace YOUR_API_KEY with your MongoDB Atlas API key, your_data.json with the file containing your data, and <
your-api-base-url>, databaseName, and collectionName with your actual API base URL, database name, and collection
name.

Notes:
Ensure that your MongoDB user has the necessary write permissions for the specified database and collection.
Replace placeholder values (such as YOUR_API_KEY, your_data.json, <your-api-base-url>, databaseName, and collectionName)
with your actual values.
This is a basic guide, and you should refer to the official MongoDB Atlas Data API documentation for detailed
information, including API authentication, request and response formats, and other advanced features.
