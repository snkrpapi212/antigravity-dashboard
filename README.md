# Antigravity Dashboard 🚀

A high-performance, single-file React dashboard built for speed and aesthetics. Zero build steps required.

![Status](https://img.shields.io/badge/status-active-success)
![License](https://img.shields.io/badge/license-MIT-blue)

## 📋 Overview

The **Antigravity Dashboard** is a standalone business intelligence interface featuring:
- **Dark Mode Glassmorphism UI**: Modern, clean, and accessible.
- **Real-time Responsive Charts**: Powered by Recharts.
- **Interactive KPI Cards**: Trend indicators and dynamic styling.
- **Zero Dependencies**: Runs directly in the browser via CDN.

## 🛠️ Quick Start

### Option 1: Direct Open
Double-click `index.html` to open it in your default browser. 
*Note: Some strict browser security settings may block scripts when opening from `file://`. If you see a blank screen, use Option 2.*

### Option 2: Run Script (Recommended)
We've included a helper script to launch the dashboard instantly:

**Mac/Linux:**
```bash
./start.sh
```

**Windows/Any:**
```bash
python3 serve.py
```

## 📦 Features

- **Dashboard Grid**: Responsive layout adapting to Mobile, Tablet, and Desktop.
- **Visualizations**: 
  - Revenue Area Chart with gradient fills.
  - Mixed Bar/Line chart for User Growth vs Conversion.
- **Data Simulation**: Mock data generator to demonstrate real-time updates.
- **Export Ready**: UI placeholders for data export and filtering.

## 🔧 Customization

Open `index.html` in any text editor.

### Modifying Data
Locate the `generateData` function to adjust the mock data logic:
```javascript
const generateData = () => {
    // ... your data logic here
};
```

### Changing Colors
Tailwind configuration is embedded in the `<script>` tag in the `<head>`:
```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#6366f1',
                // ...
            }
        }
    }
}
```

## 📝 Troubleshooting

**"The screen is blank!"**
- Open your browser console (F12 or Right Click > Inspect > Console).
- Ensure you have an active internet connection (required to load React/Tailwind from CDNs).
- If you see CORS errors, use **Option 2** (Local Server) above.

---
*Built with ❤️ by Antigravity*
