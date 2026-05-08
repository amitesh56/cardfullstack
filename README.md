# 📸 CardFullStack

A full stack photo sharing application where users can upload images with captions and view them on a public feed.

This project demonstrates:

- 📤 Image Upload Handling
- ☁️ Cloud Image Storage using ImageKit
- 🗄 MongoDB Database Integration
- ⚛️ React Frontend with Vite
- 🔗 REST API Communication
- 📁 Full Stack Project Structure

---

# 🚀 Features

## 📸 Photo Upload
- Upload images with captions
- Image preview support
- Multipart form data handling

---

## 📰 Feed System
- View all uploaded posts
- Display image + caption
- Dynamic rendering from database

---

## ☁️ Cloud Storage
- Images stored securely on ImageKit
- Unique image URLs generated
- Optimized image delivery

---

## 🗄 Database Integration
- MongoDB stores:
  - image URLs
  - captions
  - timestamps

---

# 🛠 Tech Stack

# Frontend

| Technology | Usage |
|---|---|
| React (Vite) | Frontend Framework |
| Axios | API Requests |
| CSS | Styling |

---

# Backend

| Technology | Usage |
|---|---|
| Node.js | Runtime Environment |
| Express.js | Backend Framework |
| Multer | File Handling |
| ImageKit | Cloud Image Storage |
| MongoDB | Database |
| Mongoose | ODM |

---

# 📂 Project Structure

```bash
cardfullstack/
│
├── frontend/
│   │
│   ├── public/
│   │
│   └── src/
│       ├── assets/
│       ├── pages/
│       ├── App.jsx
│       ├── index.css
│       └── main.jsx
│
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
└── backend/
    │
    └── src/
        ├── db/
        ├── models/
        ├── services/
        └── app.js
    │
    ├── server.js
    └── package.json
```

---

# 🧠 Full Stack Architecture Flow

```text
Frontend (React)
       ↓
Axios API Request
       ↓
Express Backend
       ↓
Multer Middleware
       ↓
ImageKit Upload Service
       ↓
MongoDB Stores Data
       ↓
Response Sent Back
       ↓
Frontend Updates Feed
```

---

# 📤 Image Upload Flow

```text
User Selects Image
        ↓
Frontend Sends FormData
        ↓
Multer Processes File
        ↓
Image Converted to Buffer/Base64
        ↓
Image Uploaded to ImageKit
        ↓
ImageKit Returns URL
        ↓
URL + Caption Saved in MongoDB
```

---

# 📰 Feed Rendering Flow

```text
Frontend Requests Posts
        ↓
Backend Fetches Data from MongoDB
        ↓
Image URLs Returned
        ↓
React Dynamically Renders Feed
```

---

# 🗄 Database Structure

```text
Post
 ├── imageUrl
 ├── caption
 └── createdAt
```

---

# ⚙️ Getting Started

# Prerequisites

- Node.js Installed
- MongoDB Atlas Account
- ImageKit Account

---

# 📥 Installation

## 1️⃣ Clone Repository

```bash
git clone https://github.com/amitesh56/cardfullstack.git
```

---

## 2️⃣ Move into Project Folder

```bash
cd cardfullstack
```

---

# 🔧 Backend Setup

## Install Backend Dependencies

```bash
cd backend
npm install
```

---

## Create `.env` File

Create a `.env` file inside the backend folder:

```env
MONGO_URL=your_mongodb_connection_string
IMAGE_UPLOAD_API=your_imagekit_url_endpoint
```

---

## Start Backend Server

```bash
node server.js
```

---

# ⚛️ Frontend Setup

## Install Frontend Dependencies

```bash
cd frontend
npm install
```

---

## Start Frontend

```bash
npm run dev
```

---

# 📮 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/posts` | Fetch all posts |
| POST | `/create-post` | Upload image and caption |

---

# 📤 Example Upload Request

```http
POST /create-post
Content-Type: multipart/form-data
```

---

# 🧠 How It Works

## Upload Process

```text
1. User selects image + caption
2. Frontend sends FormData
3. Multer catches image file
4. File stored temporarily in memory
5. Image converted to base64
6. Sent to ImageKit
7. ImageKit returns public URL
8. URL + caption stored in MongoDB
9. Feed displays uploaded image
```

---

# 🌐 Environment Variables

Create a `.env` file inside the backend folder.

| Variable | Description |
|---|---|
| MONGO_URL | MongoDB Atlas connection string |
| IMAGE_UPLOAD_API | ImageKit URL endpoint |

---

# 🧠 Concepts Used

# Frontend Concepts
- React Components
- API Integration
- State Management
- Dynamic Rendering
- Form Handling

---

# Backend Concepts
- REST API Design
- File Upload Handling
- Middleware Architecture
- Cloud Storage Integration
- MongoDB CRUD Operations

---

# Database Concepts
- Schema Design
- MongoDB Storage
- Data Relationships

---

# 📈 Learning Outcome

This project helped me understand:

- Full stack application architecture
- File upload handling using Multer
- Cloud image storage using ImageKit
- MongoDB database integration
- React + Backend communication
- REST API development
- Dynamic frontend rendering

---

# 👨‍💻 Author

## Amitesh Yadav

Computer Engineering Student passionate about:
- Backend Development
- System Design
- Blockchain
- AI & Emerging Technologies

GitHub:
https://github.com/amitesh56

---

# ⭐ Support

If you liked this project, give it a star on GitHub ⭐
