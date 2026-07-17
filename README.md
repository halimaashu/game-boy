# 🎮 Game Boy

> **Game Boy** is a modern **sports partner finding platform** where players can discover teammates, organize matches, and manage sports activities with a clean and responsive user experience.

🌐 **Live Demo:** https://game-boy-red.vercel.app/

---

## 📖 Overview

Game Boy helps sports enthusiasts connect with other players for online and offline games. Users can create match posts, join games, find nearby venues, and manage their sports activities from a single platform.

The project follows a modern full-stack architecture with a **Next.js frontend** and a **Node.js + Express backend**, secured using **JWT Authentication** and powered by **MongoDB**.

---

# ✨ Features

- 🔐 Secure JWT Authentication
- 👤 User Registration & Login
- 🏟️ Create Match Posts
- 🤝 Join Other Players' Matches
- 📅 Manage Your Own Matches
- 📝 Update & Delete Match Posts
- 🔍 Browse Available Games
- 📍 Find Nearby Sports Venues
- 📊 Interactive Dashboard
- 📈 Statistics using Recharts
- 🔔 Toast Notifications
- 📱 Fully Responsive Design
- ⚡ Fast Performance with Next.js
- 🎨 Clean & Modern UI

---

# 🚀 Live Demo

### Website

https://game-boy-red.vercel.app/

---

# 📂 Repositories

### Frontend Repository

https://github.com/halimaashu/game-boy

### Backend Repository

https://github.com/halimaashu/game

---

# 🛠 Tech Stack

## Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS
- Gravity UI Icons
- Recharts
- React Hot Toast
- Axios

## Backend

- Node.js
- Express.js
- TypeScript
- JWT Authentication
- MongoDB
- Mongoose
- CORS
- Dotenv

---

# 🏗 Project Architecture

```
Client (Next.js)
       │
       ▼
 REST API (Express.js)
       │
       ▼
 MongoDB Database
```

---

# 📁 Folder Structure

## Frontend

```
game-boy/
│
├── app/
├── components/
├── hooks/
├── lib/
├── providers/
├── services/
├── types/
├── public/
├── styles/
└── utils/
```

## Backend

```
game/
│
├── src/
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   ├── models/
│   ├── services/
│   ├── interfaces/
│   ├── config/
│   ├── utils/
│   ├── app.ts
│   └── server.ts
│
└── package.json
```

---

# ⚙️ Installation

## Clone Frontend

```bash
git clone https://github.com/halimaashu/game-boy.git
```

```bash
cd game-boy
```

Install dependencies

```bash
npm install
```

Run development server

```bash
npm run dev
```

Frontend runs at

```
http://localhost:3000
```

---

## Clone Backend

```bash
git clone https://github.com/halimaashu/game.git
```

```bash
cd game
```

Install dependencies

```bash
npm install
```

Run development server

```bash
npm run dev
```

Backend runs at

```
http://localhost:5000
```

---

# 🔑 Environment Variables

## Frontend (.env.local)

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_secret
```

---

## Backend (.env)

```env
PORT=5000

DATABASE_URL=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

JWT_EXPIRES_IN=7d

NODE_ENV=development
```

---

# 🔐 Authentication

The application uses **JWT (JSON Web Token)** for authentication.

Features include:

- User Registration
- User Login
- Protected Routes
- Authorization Middleware
- Token Verification

---

# 📊 Dashboard

Users can:

- View all created matches
- Manage bookings
- Update match information
- Delete match posts
- View statistics
- Track activity

---

# 📸 Preview

```
🏟️ Find Sports Partners

⚽ Create Matches

🤝 Join Games

📅 Schedule Sports Events

📍 Explore Nearby Venues

📊 Dashboard Analytics

📱 Responsive on All Devices
```

---

# 🎨 UI Libraries

- Tailwind CSS
- Gravity UI Icons
- React Hot Toast
- Recharts

---

# 🌟 Future Improvements

- Live Chat
- Friend Requests
- Email Verification
- Google Login
- Match Invitations
- Real-time Notifications
- Payment Integration
- Admin Dashboard
- Dark Mode
- Player Ratings

---

# 🚀 Deployment

## Frontend

Vercel

https://game-boy-red.vercel.app/

## Backend

Deploy using

- Render
- Railway
- VPS
- DigitalOcean

---

# 🤝 Contributing

Contributions are welcome!

1. Fork the repository

2. Create a feature branch

```bash
git checkout -b feature-name
```

3. Commit your changes

```bash
git commit -m "Added new feature"
```

4. Push to GitHub

```bash
git push origin feature-name
```

5. Open a Pull Request

---

# 👨‍💻 Developer

## Ashik

CSE Student

Full Stack Web Developer

Learning modern web technologies with a passion for building scalable and user-friendly applications.

GitHub

https://github.com/halimaashu

---

# ⭐ Support

If you found this project helpful, don't forget to give it a ⭐ on GitHub.

---

# 📄 License

This project is licensed under the **MIT License**.

---

# ❤️ Made with Passion by Ashik

```
🎮 Game Boy

"Where Players Meet The Game."
```