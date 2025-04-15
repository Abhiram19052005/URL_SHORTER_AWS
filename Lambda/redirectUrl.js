const { DynamoDBClient, GetItemCommand } = require("@aws-sdk/client-dynamodb");

const client = new DynamoDBClient({});

exports.handler = async (event) => {
    const shortId = event.pathParameters.shortId;

    try {
        const params = {
            TableName: "urlTable",
            Key: {
                shortId: { S: shortId },
            },
        };

        const result = await client.send(new GetItemCommand(params));

        if (!result.Item) {
            return {
                statusCode: 404,
                body: "Short URL not found",
            };
        }

        const longUrl = result.Item.longUrl.S;

        return {
            statusCode: 301,
            headers: {
                Location: longUrl,
            },
        };
    } catch (err) {
        console.error("Redirect error:", err);
        return {
            statusCode: 500,
            body: "Internal Server Error",
        };
    }
};
