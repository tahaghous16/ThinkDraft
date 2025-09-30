# ThinkDraft - MERN Blog App

A simple AI blog platform built with MongoDB, Express, React, and Node. It supports writing posts with images, publishing/unpublishing, AI-assisted content generation, and a basic comment review flow with an admin dashboard.

## Tech Stack
- Client: React, Vite, Tailwind CSS, Axios, React Router, Quill editor, Toasts
- Server: Node.js, Express, Mongoose, Multer, JWT
- Services: ImageKit (image upload/optimization), Google Gemini (AI content)

## Project Structure
- `client/` React frontend (Vite)
- `server/` Node + Express API
  - `src/app.js` Express app and routes
  - `src/index.js` DB connect + server start
  - `controllers/` route handlers
  - `routes/` API routes
  - `models/` Mongoose models
  - `middlewares/` auth and file upload
  - `utils/` ImageKit and Gemini helpers
  - `db/connectDB.js` Mongo connection

    
## What I Learned
- How to connect frontend and backend in a MERN app
- How to use Google Gemini API for AI content
- How to handle file uploads and categories in blogs

## Conclusion
ThinkDraft makes blogging easier by combining AI with a simple writing platform.
It is built with the MERN stack and Google Gemini API to give users an easy way to write and publish blogs.
This app shows how modern tools can make content creation faster and more creative.
