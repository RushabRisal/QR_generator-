# 🚀 QR Generator & URL Shortener

<div align="center">
  <img src="public/RLogo.png" alt="QR Generator Logo" width="120" height="120">
  
  **The only URL shortener you'll ever need**
  
  A modern, feature-rich URL shortener with QR code generation and analytics, built with React and powered by Supabase.

  ![Landing Page](https://github.com/user-attachments/assets/4ae3f9bc-c468-4a46-8bfd-1f3eb850959e)
</div>

---

## ✨ Features

### 🔗 **URL Shortening**
- Convert long URLs into short, shareable links
- Clean and intuitive interface for quick URL submission
- Instant link generation with custom short codes

### 📱 **QR Code Generation**
- Automatic QR code creation for every shortened URL
- High-quality, scannable QR codes
- Perfect for mobile sharing and offline distribution

### 📊 **Analytics & Tracking**
- Track click counts and visitor statistics
- Monitor link performance over time
- Detailed analytics dashboard (coming soon)

### 🔐 **User Authentication**
- Secure user registration and login system
- Personal dashboard for managing your links
- Account-based link organization

### 🎨 **Modern UI/UX**
- Dark theme with beautiful gradients
- Responsive design that works on all devices
- Smooth animations and transitions
- Accessible components built with Radix UI

---

## 🛠️ Tech Stack

<div align="center">

| Frontend | Backend | Styling | Development |
|----------|---------|---------|-------------|
| ![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react&logoColor=white) | ![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?logo=supabase&logoColor=white) | ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?logo=tailwindcss&logoColor=white) | ![Vite](https://img.shields.io/badge/Vite-5.4.0-646CFF?logo=vite&logoColor=white) |
| ![React Router](https://img.shields.io/badge/React_Router-CA4245?logo=reactrouter&logoColor=white) | ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?logo=postgresql&logoColor=white) | ![Radix UI](https://img.shields.io/badge/Radix_UI-161618?logo=radixui&logoColor=white) | ![ESLint](https://img.shields.io/badge/ESLint-4B32C3?logo=eslint&logoColor=white) |

</div>

### 📋 **Dependencies**
- **React 18.3.1** - Modern React with hooks and concurrent features
- **Vite** - Lightning-fast build tool and development server
- **Supabase** - Backend-as-a-Service for authentication and database
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Unstyled, accessible UI components
- **React Router DOM** - Declarative routing for React
- **Lucide React** - Beautiful, customizable icons
- **Yup** - Schema validation for forms

---

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ installed
- npm or yarn package manager

### 1. Clone the Repository
```bash
git clone https://github.com/RushabRisal/QR_generator-.git
cd QR_generator-
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Setup
Create a `.env` file in the root directory:
```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 4. Start Development Server
```bash
npm run dev
```

Visit `http://localhost:5173` to see the application running!

---

## 🏗️ Build & Deploy

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Lint Code
```bash
npm run lint
```

---

## 📁 Project Structure

```
QR_generator-/
├── 📁 public/                 # Static assets
│   ├── MainPhoto.jpg         # Hero image
│   ├── RLogo.png            # Main logo
│   └── vite.svg             # Vite logo
├── 📁 src/
│   ├── 📁 components/        # Reusable UI components
│   │   ├── 📁 ui/           # Base UI components (Button, Input, etc.)
│   │   ├── Header.jsx       # Navigation header
│   │   ├── Login.jsx        # Login form component
│   │   └── Signup.jsx       # Signup form component
│   ├── 📁 pages/            # Route components
│   │   ├── Landing.jsx      # Homepage with URL form
│   │   ├── Auth.jsx         # Authentication page
│   │   ├── Dashboard.jsx    # User dashboard
│   │   ├── Links.jsx        # Individual link management
│   │   └── Redirect-link.jsx # URL redirect handler
│   ├── 📁 layouts/          # Layout components
│   │   └── app-layout.jsx   # Main app layout
│   ├── 📁 db/               # Database configuration
│   │   ├── supabase.js      # Supabase client setup
│   │   └── apiAuth.js       # Authentication API
│   ├── 📁 lib/              # Utility functions
│   │   └── utils.js         # Helper utilities
│   ├── App.jsx              # Main app component with routing
│   ├── main.jsx             # React app entry point
│   └── index.css            # Global styles
├── package.json             # Dependencies and scripts
├── tailwind.config.js       # Tailwind configuration
├── vite.config.js          # Vite configuration
└── README.md               # Project documentation
```

---

## 🎯 Usage

### Creating Short URLs
1. Visit the homepage
2. Enter your long URL in the input field
3. Click "Shortner!" button
4. Get your shortened URL and QR code instantly

### Account Management
![Auth Page](https://github.com/user-attachments/assets/a34c99b5-bc43-4ce2-9b6f-66bab13b578e)

1. Click "Login" to access authentication
2. Sign up for a new account or login with existing credentials
3. Access your personal dashboard to manage links
4. View analytics and QR codes for your shortened URLs

---

## 🔧 Configuration

### Supabase Setup
1. Create a new project at [supabase.com](https://supabase.com)
2. Get your project URL and anon key
3. Add them to your `.env` file
4. Set up database tables for URL storage and user management

### Customization
- **Styling**: Modify `tailwind.config.js` for custom themes
- **Components**: Extend UI components in `src/components/ui/`
- **Routing**: Add new routes in `App.jsx`

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Commit with descriptive messages**
   ```bash
   git commit -m "Add amazing feature"
   ```
5. **Push to your branch**
   ```bash
   git push origin feature/amazing-feature
   ```
6. **Open a Pull Request**

### Development Guidelines
- Follow the existing code style
- Add comments for complex logic
- Test your changes thoroughly
- Update documentation as needed

---

## 📋 Roadmap

- [ ] **QR Code Customization** - Colors, logos, and styling options
- [ ] **Advanced Analytics** - Geographic data, device tracking
- [ ] **Custom Domains** - Support for branded short URLs
- [ ] **Bulk URL Processing** - Import/export functionality
- [ ] **API Endpoints** - Public API for developers
- [ ] **Link Expiration** - Time-based URL expiry
- [ ] **Password Protection** - Secure your shortened URLs

---

## 🐛 Issues & Support

Found a bug or have a feature request? 

- 🐛 [Report Issues](https://github.com/RushabRisal/QR_generator-/issues)
- 💡 [Request Features](https://github.com/RushabRisal/QR_generator-/issues/new)
- 📧 Contact: [Your Email]

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙏 Acknowledgments

- **Rushab Risal** - Creator and Developer
- **React Team** - For the amazing framework
- **Supabase** - For the excellent backend platform
- **Tailwind CSS** - For the utility-first CSS approach
- **Radix UI** - For accessible component primitives

---

<div align="center">

**⭐ Star this repository if you found it helpful!**

Made with ❤️ by [Rushab Risal](https://github.com/RushabRisal)

</div>
