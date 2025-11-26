# 🌟 TaskFlow – Employee Task Management System

A modern, elegant **task management system** built using **React + Vite**.  
Admins can assign tasks, and employees can accept, complete, or fail them — everything stored in **localStorage**, with instant real-time UI updates using React Context.

This project features a completely redesigned UI using **Glassmorphism**, modern components, and smooth user experience.

---

# 📸 Application Overview

This system includes:

- A stylish login screen  
- A clean admin dashboard  
- A powerful employee dashboard  
- Beautiful task cards with dynamic states  
- Smooth horizontal scrolling for tasks  
- Analytics panel for employees  

---

# 🚀 Features

### 👨‍💼 Admin Features
- Create tasks for employees  
- Assign category, date, and descriptions  
- Task summary for each employee  
- View all team tasks at once  
- Logout functionality  
- Persistent data via localStorage  

### 👨‍🔧 Employee Features
- See assigned tasks  
- Accept tasks (move to Active)  
- Mark tasks as **Completed** or **Failed**  
- See personal task analytics (New, Active, Completed, Failed)  
- Fully redesigned task cards  
- Real-time UI refresh using Context  

### ✨ UI Highlights
- Fully glassmorphic dashboard  
- Soft gradients & modern shadows  
- Clean typography  
- Fully responsive  
- Smooth horizontal scroll for task cards  
- Easily readable task status colors  

---

# 🛠️ Tech Stack

### Frontend
- **React.js**
- **Vite**
- **TailwindCSS**

### State & Data
- **React Context API**
- **localStorage**

### Architecture
- Component-based  
- Modular folder structure  
- Reusable task-card components  

---

# 📁 Folder Structure

```
src/
│
├── components/
│   ├── Login/
│   ├── EmployeeDashboard/
│   ├── AdminDashboard/
│   ├── TaskList/
│   ├── other/
│       ├── AllTask.jsx
│       ├── CreateTask.jsx
│       ├── TaskListNumbers.jsx
│       ├── Header.jsx
│
├── context/
│   └── AuthProvider.jsx
│
├── utils/
│   └── localStorage.jsx
│
└── App.jsx
```

---

# ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Start the development server

```bash
npm run dev
```

### 4️⃣ Open in browser

```
http://localhost:5173
```

---

# 🔐 Default Credentials (Sample)

| Role | Email | Password |
|------|--------|-----------|
| Admin | `admin@gmail.com` | `123` |
| Employee | `employee2@gmail.com` | `123` |

*(Adjust based on your localStorage config.)*

---

# 📊 How the Data Flow Works

### 📥 Data Stored in `localStorage`:
- Admin details  
- Employee list  
- Tasks assigned  
- Task counts:  
  - New  
  - Active  
  - Completed  
  - Failed  

### 🔄 Real-time UI Refresh
Whenever:
- A task is created  
- A task is accepted  
- A task is completed  
- A task is failed  

`refreshUserData()` updates the UI instantly.

No refresh required.

---

# 🧪 How to Test the App

1. Login as admin  
2. Create tasks for different employees  
3. Login as employee  
4. Accept → Complete → Fail tasks  
5. Watch dashboards update instantly  
6. Refresh the page — data remains saved  

---

# 🤝 Contributing

If you want to improve this project:

1. Fork the repo  
2. Create a new branch  
3. Commit changes  
4. Submit a PR  

---

# 🎉 Final Notes

This project demonstrates how to build a complete **task management system** without a backend using:

- React.js  
- Context API  
- TailwindCSS  
- LocalStorage persistence
