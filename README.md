# Frontend  Dashboard 

**Donezo** is a modern, responsive task management dashboard built with **React (Vite)**. It features secure JWT authentication, protected routing, and dynamic data rendering via a REST API.

---

## 🖼️ Preview

![Dashboard Preview](https://s6.imgcdn.dev/YScmYi.png)

---

## 🔗 Links

- 🌐 **Live Site:** [View Demo](https://frontend-dashboard-development.vercel.app/)
- 📂 **GitHub Repo:** [Source Code](https://github.com/mdsinikdho12/Frontend-Dashboard-Development/)

---

## ✨ Features

- 🔐 **JWT Based Authentication**: Secure login and session handling.
- 🛡️ **Protected Routes**: Dashboard access restricted to authenticated users.
- 💾 **Persistent Login**: Uses `LocalStorage` to keep users logged in.
- 📊 **Dynamic Data**: Real-time data fetching from REST API.
- 🎨 **Dribbble Inspired UI**: Pixel-perfect design with Tailwind CSS.
- 📱 **Fully Responsive**: Optimized for mobile, tablet, and desktop.
- ⚡ **Smooth UX**: Hover effects and transitions for a premium feel.
- 🔄 **Axios Interceptors**: Automated token handling for all API requests.

---

## 🛠️ Tech Stack

| Category   | Technology Used           |
|-----------|---------------------------|
| Frontend  | React (Vite)              |
| Styling   | Tailwind CSS              |
| Routing   | React Router DOM          |
| API Client| Axios                     |
| State     | Context API               |
| Auth      | JWT                       |
| Charts    | Recharts                  |
| Icons     | Lucide React              |

---

## 📁 Project Structure

```text
src/
├── components/      # Reusable UI components
├── context/         # AuthContext for global state
├── pages/           # Login & Dashboard pages
├── routes/          # PrivateRoute logic
├── services/        # API configuration & Auth services
├── App.jsx          # Main App component
└── main.jsx         # Entry point
