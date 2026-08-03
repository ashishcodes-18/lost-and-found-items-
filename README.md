# 🔍 Lost & Found Portal

A full-stack **Lost & Found Portal** developed using **HTML, CSS, JavaScript, Node.js, Express.js, and MongoDB Atlas**. This web application helps users report lost or found items and browse reported items, making it easier to reconnect owners with their belongings.

---

## 🚀 Features

- 📌 Report Lost Items
- 📌 Report Found Items
- 💾 Store item details in MongoDB Atlas
- 📋 Browse all reported items
- 🔍 View complete item details
- 📱 Responsive and user-friendly interface
- ⚡ REST API integration using Express.js
- ☁️ Cloud database connectivity with MongoDB Atlas

---

## 🛠️ Technologies Used

### Frontend
- HTML5
- CSS3
- JavaScript (ES6)

### Backend
- Node.js
- Express.js

### Database
- MongoDB Atlas
- Mongoose

### Tools
- Visual Studio Code
- Git & GitHub
- Postman
- Live Server

---

## 📂 Project Structure

```
Lost-Found-Portal/
│
├── frontend/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   ├── report.js
│   │   └── items.js
│   ├── index.html
│   ├── report-lost.html
│   ├── report-found.html
│   └── items.html
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   ├── package.json
│   └── .env
│
└── README.md
```

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/lost-found-portal.git
```

### 2. Go to the backend folder

```bash
cd backend
```

### 3. Install dependencies

```bash
npm install
```

### 4. Create a `.env` file

```env
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```

### 5. Start the backend server

```bash
npm run dev
```

The server will run at:

```
http://localhost:5000
```

### 6. Run the frontend

Open the `frontend` folder using **Live Server** in Visual Studio Code.

---

## 📡 API Endpoints

### Get All Items

```
GET /api/items
```

### Add New Item

```
POST /api/items
```

---

## 📷 Screenshots

Add screenshots of your project here.

Example:

- Home Page
- Report Lost Item
- Report Found Item
- Browse Items
- Item Details

---

## 🔮 Future Enhancements

- 🔍 Search Items
- 🗂️ Category Filter
- 📌 Lost/Found Filter
- ✏️ Edit Item
- 🗑️ Delete Item
- 👤 User Authentication
- 🖼️ Image Upload
- 📧 Email Notifications
- 🌐 Online Deployment

---

## 🎯 Learning Outcomes

This project demonstrates:

- Full-Stack Web Development
- REST API Development
- MongoDB Database Integration
- CRUD Operations
- Frontend and Backend Integration
- Responsive Web Design

---

## 👨‍💻 Author

**Ashish Rajput**

B.Tech Computer Science Engineering Student

---

## 📄 License

This project is developed for educational and learning purposes.
