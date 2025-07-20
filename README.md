# URL Shortener & QR Code Generator

<div align="center">
  <img src="public/RLogo.png" alt="URL Shortener Logo" width="120" />
  <h3>The only URL shortener you'll ever need</h3>
</div>

## 🚀 Features

- **URL Shortening**: Create compact, shareable links from long URLs
- **QR Code Generation**: Generate QR codes for all your shortened URLs
- **User Authentication**: Secure login/signup system using Supabase
- **Analytics Tracking**: Monitor who visited your shortened links
- **Responsive Design**: Perfect experience on all devices

## 🖥️ Tech Stack

- **Frontend**: React 18, React Router 6
- **Styling**: TailwindCSS with shadcn/ui components
- **Backend**: Supabase (Authentication, Database)
- **Build Tool**: Vite
- **Form Validation**: Yup

## 📷 Screenshot

<div align="center">
  <img src="public/MainPhoto.jpg" alt="Application Screenshot" width="700" />
</div>

## 🛠️ Installation & Setup

1. Clone the repository

   ```bash
   git clone https://github.com/RushabRisal/QR_generator.git
   cd QR_generator
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with your Supabase credentials

   ```
   VITE_SUPABASE_URL=your-supabase-url
   VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
   ```

4. Start the development server
   ```bash
   npm run dev
   ```

## 🔍 Project Structure

```
src/
├── components/     # Reusable UI components
├── db/            # Supabase configuration and API functions
├── layouts/       # Layout components
├── lib/           # Utility functions
└── pages/         # Application pages
```

## 📱 Usage

1. Visit the homepage and enter a long URL
2. Sign up or log in to your account
3. Generate a shortened link and QR code
4. Track visits to your shortened URL through the dashboard

## 👤 Author

**Rushab Risal**

## 📄 License

This project is available as open source under the terms of the MIT License.
