# Antigravity Dashboard 🚀

A high-performance, single-file React dashboard built for speed and aesthetics. Zero build steps required.

![Status](https://img.shields.io/badge/status-active-success)
![License](https://img.shields.io/badge/license-MIT-blue)

## 📋 Overview

The **Antigravity Command Center** is a professional-grade business intelligence interface designed for high-density data visualization and system monitoring. 

### Key Capabilities:
- **Enterprise Shell**: Fully-responsive layout with sidebar navigation, global search, and command-palette design patterns.
- **Advanced Metrics**: KPI cards featuring high-precision trend analysis, comparison deltas, and visual health indicators.
- **System Monitoring**: Integrated real-time alert feed for infrastructure health tracking.
- **Strategic Tables**: Data-dense grids with performance scoring, status management, and growth tracking.
- **Modern Tech Stack**: React 18 (Functional Components), Tailwind CSS (Enterprise spacing/colors), and Recharts (Optimized visualizations).

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
- **Local Server Requirement**: Many modern browsers block the Babel Standalone transformer when loading via the `file://` protocol. Use **Option 2** (Local Server) to ensure all components load correctly.
- **Console Errors**: Open DevTools (F12) to check for failed CDN loads or syntax errors.
- **Internet Connection**: An active connection is required to fetch React, Tailwind, and Recharts from unpkg/cdn.

---
*Built with ❤️ by Antigravity*
