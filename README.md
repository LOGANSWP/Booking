# MERN Booking Application

A full-stack hotel booking web application built with the MERN stack and TypeScript. The project supports hotel search, bookings, authentication, image uploads, payments, and end-to-end testing.

## ✨ Features

- **🔍 Hotel Search:** Advanced search with filters, sorting, and pagination.
- **👤 User Authentication:** Secure login/signup with JWT & HTTP-only cookies.
- **🏨 Booking Management:** Complete hotel booking and reservation flow.
- **💳 Secure Payments:** Integrated with Stripe for payment processing.
- **🖼 Image Management:** Image upload and storage via Cloudinary.
- **🧪 E2E Testing:** Comprehensive testing with Playwright.
- **🚀 Deployment:** Configured for deployment on Render.

---

## 🛠 Tech Stack

### Frontend
- **Framework:** React + TypeScript, Vite
- **Styling:** Tailwind CSS (v3)
- **State/Routing:** React Router, React Query, React Hook Form
- **UI Components:** React Datepicker, React Icons
- **Payments:** Stripe (React SDK)

### Backend
- **Runtime:** Node.js, Express
- **Language:** TypeScript
- **Database:** MongoDB + Mongoose
- **Authentication:** JWT, HTTP Cookies
- **Tools:** Stripe, Cloudinary, Multer, Express Validator

### DevOps / Tooling
- **Database:** MongoDB Atlas
- **Testing:** Playwright (E2E)
- **Deployment:** Render

---

## 📂 Project Structure

```text
mern-booking/
├── backend/
│   ├── src/
│   │   └── index.ts
│   ├── dist/
│   ├── package.json
│   ├── tsconfig.json
│   ├── nodemon.json
│   └── .env
├── frontend/
│   ├── src/
│   ├── dist/
│   └── package.json
├── e2e-tests/
│   ├── tests/
│   ├── playwright.config.ts
│   └── tsconfig.json
└── README.md
```



---

## 🚀 Backend Setup
### 1️⃣ Initialize Backend Project
```bash
mkdir mern-booking
cd mern-booking
mkdir backend
cd backend
npm init

```

*Set entry point to: `./src/index.ts`*

### 2️⃣ Install Dependencies
```bash
npm i express cors dotenv mongodb mongoose
npm i -D @types/cors @types/express @types/node ts-node typescript nodemon

```

### 3️⃣ Update `package.json
```json
{
  "type": "module",
  "scripts": {
    "dev": "nodemon",
    "build": "npm install && npx tsc",
    "start": "node ./dist/index.js"
  }
}

```

### 4️⃣ Create `src/index.ts
```typescript
import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/api/test", async (req: Request, res: Response) => {
  res.json({ message: "Hello world" });
});

app.listen(7000, () => {
  console.log("Server running on localhost:7000");
});

```

### 5️⃣ Run Backend Server
```bash
npm run dev

```

### 🔐 Install Backend Packages
```bash
npm i bcryptjs jsonwebtoken express-validator cookie-parser cross-env cloudinary multer stripe
npm i -D @types/bcryptjs @types/jsonwebtoken @types/cookie-parser @types/multer

```

### 🌐 MongoDB Setup1. Create a MongoDB Atlas cluster.
2. Create a `.env` file inside `backend/`.
```env
MONGODB_CONNECTION_STRING=mongodb+srv://admin:<db_password>@booking.v3cislb.mongodb.net/?retryWrites=true&w=majority&appName=booking

```


3. Connect MongoDB in `index.ts`:
```typescript
import mongoose from "mongoose";

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string);

```



---

## 🎨 Frontend Setup
### 1️⃣ Create Vite + React Project
```bash
npm create vite@latest

```

* **Project name:** frontend
* **Framework:** React
* **Variant:** TypeScript + SWC

### 2️⃣ Install Tailwind CSS (v3)
```bash
npm install -D tailwindcss@3 postcss autoprefixer
npx tailwindcss init -p

```

* Follow the guide: [Tailwind Vite Guide*](https://v3.tailwindcss.com/docs/guides/vite)

### 3️⃣ Install Frontend Dependencies
```bash
npm i react-router-dom react-hook-form @tanstack/react-query react-icons react-datepicker
npm i @stripe/react-stripe-js @stripe/stripe-js

```

### 4️⃣ API Base URL Handling
```typescript
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

```

*This allows the frontend to work correctly in production when served by the backend.*

---

## 🧪 End-to-End Tests (Playwright)
### 1️⃣ Setup
```bash
mkdir e2e-tests
cd e2e-tests
npm init playwright@latest

```

### 2️⃣ Install TypeScript
```bash
npm i -D typescript
npx tsc --init

```

### 3️⃣ VSCode ExtensionInstall **Playwright Test for VSCode** for better debugging and test execution.

---

## 🚀 Deployment (Render)
### Backend ConfigurationCreate `tsconfig.json` and ensure:

```bash
npx tsc --init

```

```json
{
  "compilerOptions": {
    "outDir": "./dist"
  }
}

```

### Serve Frontend from BackendAdd this logic to your backend `index.ts` to serve the static frontend files:

```typescript
import path from "path";
import { fileURLToPath } from "url";

// Recreate __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "../../frontend/dist")));

```

---

## 🐛 Common Errors & Fixes
### ❌ TypeError: Unknown file extension ".ts"**Cause:** Node ESM + TypeScript issue.
**Fix:**

1. Ensure `"type": "module"` is in `package.json`.
2. Create `nodemon.json`:
```json
{
  "watch": ["src"],
  "ext": "ts,json",
  "ignore": ["dist"],
  "exec": "node --loader ts-node/esm ./src/index.ts"
}

```



### ❌ [nodemon] clean exit**Cause:** Port already in use.
**Fix:** Change the port in your `app.listen` call.

```typescript
app.listen(7001, () => {
  console.log("Server running on localhost:7001");
});

```

---

## 📌 Notes
* Payments are handled securely using **Stripe Payment Intents**.
* Authentication uses **JWT** stored in **HTTP-only cookies**.
* Images are stored in **Cloudinary**.
* Backend and frontend share the same base URL in production.

## 📄 License
This project is for learning and demonstration purposes.
