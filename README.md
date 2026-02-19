# Siti Loop Projects

This repository contains a collection of modern web application projects built with React, Vite, and TypeScript.
Each project is designed to demonstrate high-quality UI/UX, responsive design, and clean architecture.

## Projects Overview

### 1. 🏋️‍♂️ StrydaApp
A premium fitness e-commerce application designed to look and feel like a top-tier brand (e.g., Apple, Stripe).
*   **Tech Stack**: React, TypeScript, Vite, Tailwind CSS.
*   **Key Features**:
    *   Immersive, high-quality product pages.
    *   Dynamic interaction and micro-animations.
    *   Responsive, mobile-first design.
    *   Sleek, dark-mode aesthetic.

### 2. 🐾 Techtonic Pet Store
A modern, playful online pet store demo.
*   **Tech Stack**: React, TypeScript, Vite.
*   **Key Features**:
    *   Clean product listings with category filtering.
    *   Vibrant and friendly UI.
    *   Mock data integration for products (Food, Toys, Accessories).

---

## 🛠️ Installation & Setup

Follow these steps to set up the repository and run the projects locally.

### Prerequisites
*   **Node.js** (v18 or higher recommended)
*   **npm** (comes with Node.js)
*   **Git**

### Step 1: Clone the Repository
```bash
git clone https://github.com/YOUR_USERNAME/Siti_Loop.git
cd Siti_Loop
```

### Step 2: Download Required Assets 🖼️
This repository uses a script to download high-quality placeholder images for both projects. **You must run this script first** to ensure the applications look correct.

In the root folder (`Siti_Loop`), run:
```bash
node download_assets.mjs
```
*This will download product images to `StrydaApp/public/images` and `techtonic-pet-store/public/images`.*

---

## 🚀 Running the Applications

Each project runs independently. Open a terminal and navigate to the project you want to start.

### To Run StrydaApp:
1.  Navigate to the directory:
    ```bash
    cd StrydaApp
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Start the development server:
    ```bash
    npm run dev
    ```
4.  Open your browser at the URL shown (usually `http://localhost:5173`).

### To Run Techtonic Pet Store:
1.  Navigate to the directory:
    ```bash
    cd techtonic-pet-store
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Start the development server:
    ```bash
    npm run dev
    ```

---

## ⚙️ Configuration

Currently, neither project requires a `.env` file for local development. all configurations are handled within the codebase or via the `download_assets.mjs` script.

*   **Port Conflicts**: If running both projects simultaneously, Vite will automatically switch to the next available port (e.g., 5174). Check the terminal output for the correct link.
