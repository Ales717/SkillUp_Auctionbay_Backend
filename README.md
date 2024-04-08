## AuctionBay Backend

Welcome to the AuctionBay backend repository! This repository contains the backend codebase for the AuctionBay web application, built using NestJS.

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Setup](#setup)
- [Usage](#usage)

## Description

AuctionBay is a full-stack auction web application that enables users to create and manage events for auctions. Registered users can create auction events by providing images, event titles, descriptions, starting prices, and auction durations. Bidders can participate in auctions, place bids, and view the status of their bids. Bids are incrementally increased until reaching the user's specified maximum bid. The highest bid at the end of the auction period wins the item. Sellers can manage their auction events and view bidding histories.

This backend repository provides RESTful APIs to support the functionalities mentioned above. It is built using NestJS, a progressive Node.js framework for building efficient, reliable, and scalable server-side applications.

## Features

- User authentication and authorization
- CRUD operations for auction events
- Bidding functionality with automatic bid increment
- Real-time updates for auction status
- Seller dashboard to manage auctions and view bidding histories
- User-friendly API endpoints with detailed documentation

## Setup

To set up the AuctionBay backend locally, follow these steps:

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/your-username/auctionbay-backend.git
   ```

2. Navigate into the project directory:

   ```bash
   cd auctionbay-backend
   ```

3. Install dependencies using npm or yarn:

   ```bash
   npm install
   # or
   yarn install
   ```

4. Configure environment variables by creating a `.env` file based on the provided `.env.example`.

5. Set up your database connection and ensure it is running.

6. Run the application in development mode:

   ```bash
   npm run start:dev
   # or
   yarn start:dev
   ```

The backend server should now be running locally on `http://localhost:3000`.

## Usage

Once the backend server is running, you can start using the AuctionBay web application by integrating it with the frontend or testing the endpoints using tools like Postman.


This Markdown file provides a comprehensive README for your AuctionBay backend project. You can adjust the content, URLs, or formatting as needed.
