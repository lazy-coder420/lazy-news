# 📰 Dragoon News

A modern responsive **React-based news application** that delivers real-time news across multiple categories.
It includes **authentication for personalized access** and a clean UI for smooth user experience.

---

## 🚀 Live Demo

👉 https://lazy-news-gf61.vercel.app/categories/01

---

## 📌 Project Purpose

Dragoon News is built to provide users with real-time news articles from different categories using a public API.
It focuses on **clean UI, responsiveness, and user authentication**.

---

## ✨ Features

* 📰 Real-time news fetching
* 📂 Category-based filtering
* 🔍 News details page
* 🔐 User authentication (Firebase)
* 📱 Fully responsive design
* ⚡ Fast and optimized performance
* 🎯 Clean modern UI

---

## 🧑‍💻 Tech Stack

* React.js
* Tailwind CSS
* Firebase Authentication
* React Router DOM
* React Icons
* REST API

---

## 🌐 API Reference

Base URL:

```
https://openapi.programming-hero.com/api
```

---

### 📂 Get All Categories

```
GET /news/categories
```

Full URL:

```
https://openapi.programming-hero.com/api/news/categories
```

---

### 🗞️ Get News by Category

```
GET /news/category/{category_id}
```

Example:

```
https://openapi.programming-hero.com/api/news/category/01
```

---

### 📄 Get News Details

```
GET /news/{news_id}
```

Example:

```
https://openapi.programming-hero.com/api/news/0282e0e58a5c404fbd15261f11c2ab6a
```

---

## 🧱 Layout Structure

The project has **3 main layouts**:

### 1️⃣ Home Layout

* Navbar
* Categories
* Featured news

### 2️⃣ News Layout

* News cards grid
* Filter system
* Pagination (optional)

### 3️⃣ Details Layout

* Full news article
* Image, title, description
* Author info

---

## 🔐 Authentication

* Firebase Authentication used
* Email/Password login
* Protected routes for user access

---

## 📁 Installation

```bash
git clone https://github.com/your-username/dragoon-news.git
cd dragoon-news
npm install
npm run dev
```

---

## 📦 Build

```bash
npm run build
```

---

## 👨‍💻 Developer

Developed as a learning project focusing on:

* API integration
* Authentication system
* Responsive UI design

---

## 📜 License

This project is open-source and free to use.
