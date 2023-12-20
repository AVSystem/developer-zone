# AWS

If you want to insert data into an AWS database using the AWS Command Line Interface (AWS CLI), the specific steps will
depend on the type of database you are using. Here's a general example for using the AWS CLI to insert data into Amazon
DynamoDB, which is a NoSQL database service provided by AWS:

```shell
# Replace placeholders with your actual values
AWS_ACCESS_KEY='YOUR_ACCESS_KEY'
AWS_SECRET_KEY='YOUR_SECRET_KEY'
AWS_REGION='your-region'
DYNAMODB_ENDPOINT='https://dynamodb.your-region.amazonaws.com'
TABLE_NAME='YourTableName'

# Specify the data to insert
DATA_TO_INSERT='{
  "TableName": "'$TABLE_NAME'",
  "Item": {
    "id": {"S": "1"},
    "name": {"S": "John Doe"},
    "age": {"N": "25"}
  }
}'

# Calculate the signature
REQUEST_DATE=$(date -u "+%Y%m%dT%H%M%SZ")
SIGNATURE=$(echo -ne "POST\n/\n\nhost:dynamodb.$AWS_REGION.amazonaws.com\nx-amz-date:$REQUEST_DATE\n\nhost;x-amz-date\n$(echo -ne "$DATA_TO_INSERT" | md5sum | cut -d ' ' -f 1)" | openssl sha256 -sign <(printf $AWS_SECRET_KEY) -hex | sed 's/^.* //')

# Make the HTTP request to insert data
curl -X POST -H "Content-Type: application/x-amz-json-1.0" -H "X-Amz-Date: $REQUEST_DATE" -H "Authorization: AWS $AWS_ACCESS_KEY:$SIGNATURE" --data "$DATA_TO_INSERT" $DYNAMODB_ENDPOINT/
```

`Authorization: AWS $AWS_ACCESS_KEY:$SIGNATURE`

```json
{
  "TableName": "'$TABLE_NAME'",
  "Item": {
    "id": {"S": "1"},
    "name": {"S": "John Doe"},
    "age": {"N": "25"}
  }
}
```

```shell
aws dynamodb create-table \
    --table-name YourTableName \
    --attribute-definitions AttributeName=YourPrimaryKey,AttributeType=S \
    --key-schema AttributeName=YourPrimaryKey,KeyType=HASH \
    --provisioned-throughput ReadCapacityUnits=5,WriteCapacityUnits=5

endpoint="https://dynamodb.YourRegion.amazonaws.com"
table="YourTableName"
access_key="YourAccessKey"
secret_key="YourSecretKey"

curl -X POST \
     -H "Content-Type: application/x-amz-json-1.0" \
     -H "X-Amz-Target: DynamoDB_20120810.PutItem" \
     -H "X-Amz-Date: $(date -u +'%Y%m%dT%H%M%SZ')" \
     -H "Authorization: AWS4-HMAC-SHA256 Credential=$access_key/$(date -u +'%Y%m%d/us-east-1/dynamodb/aws4_request'), SignedHeaders=content-type;host;x-amz-date, Signature=$(echo -n $(echo -n $(date -u +'%Y%m%dT%H%M%SZ') | openssl dgst -sha256 -hmac $(echo -n $(echo -n $(date -u +'%Y%m%d') | openssl dgst -sha256 -hmac $(echo -n $(echo -n "AWS4$secret_key" | openssl dgst -sha256 -hmac "AWS4$secret_key" -binary) | xxd -p -c 256) -binary) | xxd -p -c 256) -binary) | xxd -p -c 256)" \
     --data-binary "{\"TableName\":\"$table\",\"Item\":$(cat item.json)}"
     $endpoint

```