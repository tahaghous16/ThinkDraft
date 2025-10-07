# ThinkDraft - MERN Blog App ✨

A simple **AI-powered blog platform** built with **MongoDB, Express, React, and Node.js (MERN)**.
It allows users to **write blogs with images**, **publish or unpublish posts**, and even **generate AI-assisted content** using **Google Gemini API**.
The app also includes an **admin dashboard** for managing blogs and reviewing comments.

---

## 🎬 Project Preview

![ThinkDraft Demo](./mern.gif)

---

## Tech Stack

**Client:**

* React
* Vite
* Tailwind CSS
* Axios
* React Router
* Quill Editor
* Toast Notifications

**Server:**

* Node.js
* Express
* Mongoose
* Multer
* JWT (Authentication)

**Services:**

* **ImageKit** → for image upload and optimization
* **Google Gemini** → for AI-generated blog content

---

## Project Structure

```
client/          → React frontend (Vite)
server/          → Node + Express API
 ┣ src/app.js          → Express app and routes
 ┣ src/index.js        → DB connect + server start
 ┣ controllers/        → Route handlers
 ┣ routes/             → API routes
 ┣ models/             → Mongoose models
 ┣ middlewares/        → Auth & file upload
 ┣ utils/              → ImageKit and Gemini helpers
 ┗ db/connectDB.js     → MongoDB connection
```

---

## What I Learned

* How to **connect frontend and backend** in a MERN stack project
* How to **integrate Google Gemini API** for AI-based content generation
* How to **upload files (images)** and manage **blog categories**
* How to **create a full CRUD workflow** for blog management

---

## Conclusion

**ThinkDraft** makes blogging easier by combining **AI** and a **clean writing interface**.
It’s built with the **MERN stack** and integrates **Google Gemini** to help users write creative content quickly and efficiently.

This project demonstrates how **modern tools** can simplify **content creation** while providing full control through a **user-friendly dashboard**.

