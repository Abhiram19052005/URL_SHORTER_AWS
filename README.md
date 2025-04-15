# URL_SHORTER_AWS

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
