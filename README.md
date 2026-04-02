# CardFullStack

A full stack photo sharing app where users can upload images and view them on a feed.

## Features

- Upload photos with a caption on `/create-post`
- View all uploaded photos on `/feed`
- Images stored on ImageKit cloud
- Data saved in MongoDB

## Tech Stack

**Frontend**
- React (Vite)
- Axios

**Backend**
- Node.js
- Express
- Multer (file handling)
- ImageKit (cloud image storage)
- MongoDB + Mongoose

## Project Structure

```
cardfullstack/
├── frontend/
│   ├── public/
│   └── src/
│       ├── assets/
│       ├── pages/
│       ├── App.jsx
│       ├── index.css
│       └── main.jsx
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
└── backend/
    └── src/
        ├── db/
        ├── models/
        ├── services/
        └── app.js
    ├── server.js
    └── package.json
```

## Getting Started

### Prerequisites

- Node.js installed
- MongoDB Atlas account
- ImageKit account

### Installation

1. Clone the repo
```bash
git clone https://github.com/amitesh56/cardfullstack.git
cd cardfullstack
```

2. Install backend dependencies
```bash
cd backend
npm install
```

3. Install frontend dependencies
```bash
cd frontend
npm install
```

4. Create a `.env` file inside the `backend` folder
```bash
MONGO_URL=your_mongodb_connection_string
IMAGE_UPLOAD_API=your_imagekit_url_endpoint
```

5. Start the backend server
```bash
cd backend
node server.js
```

6. Start the frontend
```bash
cd frontend
npm run dev
```

## API Endpoints

| Method | Endpoint | Description |
|--------|--------------|-------------|
| GET | `/posts` | Fetch all posts |
| POST | `/create-post` | Upload image and caption |

## Environment Variables

Create a `.env` file in the `backend` folder with the following —

| Variable | Description |
|----------|-------------|
| `MONGO_URL` | MongoDB Atlas connection string |
| `IMAGE_UPLOAD_API` | ImageKit URL endpoint |

## How It Works

1. User selects an image and writes a caption on `/create-post`
2. Multer catches the file and holds it in memory as a buffer
3. The buffer is converted to base64 and sent to ImageKit
4. ImageKit stores the image and returns a unique URL
5. The URL and caption are saved to MongoDB
6. The `/feed` page fetches all posts from MongoDB and displays them
