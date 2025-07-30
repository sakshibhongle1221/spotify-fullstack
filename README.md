
# Spotify Fullstack

## 🎵 Project Description

Spotify Fullstack is a fully functional music streaming web application inspired by Spotify,
built using the MERN (MongoDB, Express.js, React, Node.js) stack. 
It includes features like 
album and song management,
real-time audio playback, 
responsive UI,
and admin panel capabilities to upload, list, and manage media content.

## 📑 Table of Contents

* [Motivation](#motivation)
  
* [Features](#features)
  
* [Tech Stack](#tech-stack)

* [Installation](#installation)

* [Running the Project](#running-the-project)
  
* [How to Use](#how-to-use)
  
* [What I Learned](#what-i-learned)
  
* [Project Highlights](#project-highlights)

---

## 💡 Motivation

* I wanted to learn full-stack development through building a real-world, complete project.
* My goal was to understand how frontend, backend, and database connect together.
---

## 🌟 Features

* 🎧 Real-time song streaming
* 🎨 Dynamic albums and songs display
* 📂 Admin panel to upload songs and albums
* 📊 List view for songs and albums
* 🎵 Play, Pause, Next, Previous controls
* 🔍 Album-based filtering
* 📱 Responsive layout

---

## 🛠 Tech Stack

* **Frontend:** React.js, Tailwind CSS, React Router, React Toastify
* **Backend:** Node.js, Express.js
* **Database:** MongoDB (Atlas)
* **Storage:** Cloudinary (for storing songs and images)
* **State Management:** React Context API

---

## 💻 Installation

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/spotify-fullstack.git
```

2. **Navigate to each folder and install dependencies**

```bash
cd spotify-admin
npm install

cd ../spotify-clone
npm install

cd ../spotify-backend
npm install
```

3. **Set up environment variables in `spotify-backend/.env`**

```
MONGODB_URI=your_mongodb_uri
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_SECRET_KEY=your_secret
```

---

## ▶️ Running the Project

1. **Start Backend**

```bash
cd spotify-backend
npm run server
```

2. **Start Admin Panel**

```bash
cd spotify-admin
npm start
```

3. **Start User Frontend**

```bash
cd spotify-clone
npm start
```

Your app will run at:

* Admin Panel: [http://localhost:3000](http://localhost:3000)
* Frontend UI: [http://localhost:5173](http://localhost:5173) (or default Vite port)
* Backend API: [http://localhost:4000](http://localhost:4000)

---

## 🧪 How to Use

* Open Admin Panel and add albums and songs using the upload interface
* Switch to user frontend and browse songs by album
* Click on any song to start playing
* Use player controls (play, pause, next, previous)

---

## 📚 What I Learned

* Connecting frontend to backend using API routes
* Handling file uploads and Cloudinary integration
* Using MongoDB with Mongoose and creating schemas
* State management using Context API
* Working with refs for audio and seekbars
* Debugging real-time audio behavior

---

## 🚀 Project Highlights

* This is my first complete full-stack project
* Helped me understand how Spotify-like systems work
* Learned how to deploy backend (Render), frontend (Vercel), and use third-party storage (Cloudinary)
  
---

> Built with ❤️.
