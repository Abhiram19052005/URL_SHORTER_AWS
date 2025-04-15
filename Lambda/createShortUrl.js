const { DynamoDBClient, PutItemCommand, GetItemCommand } = require("@aws-sdk/client-dynamodb");
const crypto = require("crypto");

const client = new DynamoDBClient({});

// Response wrapper function
const response = (statusCode, body) => {
    return {
        statusCode,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Methods": "POST,GET"
        },
        body: JSON.stringify(body)
    };
};

exports.handler = async (event) => {
    console.log("🔍 Event:", JSON.stringify(event));

    try {
        const path = event.rawPath || event.path;
        const method = event.requestContext.http.method;
        console.log(`➡️ Path: ${path} | Method: ${method}`);

        // --- POST /shorten ---
        if (path === "/shorten" && method === "POST") {
            const body = event.body ? JSON.parse(event.body) : {};
            const longUrl = body.url;

            if (!longUrl) {
                return response(400, { error: "URL is required" });
            }

            const shortId = crypto.randomBytes(3).toString("hex");

            const params = {
                TableName: "urlTable",
                Item: {
                    shortId: { S: shortId },
                    longUrl: { S: longUrl }
                }
            };

            await client.send(new PutItemCommand(params));

            return response(200, {
                shortUrl: `https://q6r23i6y04.execute-api.eu-north-1.amazonaws.com/${shortId}`
            });
        }

        // --- GET /{shortId} ---
        if (path.startsWith("/") && method === "GET" && path !== "/shorten") {
            const shortId = path.split("/")[1];

            if (!shortId) {
                return response(400, { error: "Short ID is required" });
            }

            const params = {
                TableName: "urlTable",
                Key: {
                    shortId: { S: shortId }
                }
            };

            const result = await client.send(new GetItemCommand(params));
            const item = result.Item;

            if (!item) {
                return response(404, { error: "Short URL not found" });
            }

            // Optional: Redirect to longUrl (uncomment if you want redirection)
            /*
            return {
                statusCode: 301,
                headers: {
                    "Location": item.longUrl.S,
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Headers": "Content-Type",
                    "Access-Control-Allow-Methods": "POST,GET"
                },
                body: ""
            };
            */

            return {
                statusCode: 301,
                headers: {
                    Location: item.longUrl.S
                },
                body: ""
            };
        }

        // --- Unknown Route ---
        return response(404, { error: "Invalid path or method" });

    } catch (err) {
        console.error("❌ Lambda error:", err);
        return response(500, { error: "Internal Server Error" });
    }
};