![image](https://github.com/user-attachments/assets/cb301bf2-6826-4197-8c80-c43d7a13279a)# URL_SHORTER_AWS

URL SHORTER : https://url-shorterner.netlify.app/

# Objective

To build a fully functional URL Shortener using serverless architecture on AWS, allowing users to shorten long URLs and get redirected via unique short links—without managing any servers.

# Features
URL Shortening – Converts long URLs into short, unique links.
DynamoDB Integration – Stores mapping between long URLs and short IDs efficiently.
Lambda Functions – One for creating short URLs , One for redirecting based on short ID.
API Gateway – Exposes REST endpoints (/shorten for POST, /{shortId} for GET)
Frontend Web UI – A clean HTML interface to input and shorten URLs with a copy-to-clipboard icon.
CORS Enabled – Cross-origin access is enabled for frontend integration.
Serverless Deployment – No need to manage infrastructure.

# Project Overview 
This project is a serverless URL shortener built using AWS services.
The frontend (HTML + JS) lets users enter a long URL and see a shortened version.
The backend is powered by two AWS Lambda functions:
One to create a short URL
One to redirect users when they visit the short URL
All data is stored in DynamoDB
API Gateway handles the routes and connects the frontend to the backend
The app supports CORS and is fully serverless — no need to manage any servers

![work flow ](https://github.com/user-attachments/assets/f5458a14-9db5-4547-bc3b-36b9e3d6ad2f)

# Screenshots

![image](https://github.com/user-attachments/assets/5d6c6b49-6151-420c-82fd-f07bac8dbdd8) ![image](https://github.com/user-attachments/assets/d295e880-d9bb-48bd-b6f1-d87643458e18)
![image](https://github.com/user-attachments/assets/f381ac2d-a1e3-408a-8bf9-c826a00b5579) ![image](https://github.com/user-attachments/assets/24d5b376-a7c6-4ea2-9778-812a89976d71)

# Output
![image](https://github.com/user-attachments/assets/81b9271d-637f-41a9-9ce3-5e9d2b5911b9) ![image](https://github.com/user-attachments/assets/79f72fbb-aabf-4ab2-a78d-395235b0bdaf)

# Conclusion
This project shows how to build a simple and scalable URL shortener using AWS serverless services. It eliminates the need for managing servers and ensures high availability with minimal cost.



