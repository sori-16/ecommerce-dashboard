# 📊 ShopMetrics - E-Commerce Analytics Dashboard

A professional e-commerce analytics dashboard with interactive charts, real-time metrics, and beautiful data visualizations. Built with vanilla JavaScript and Chart.js.

![Status](https://img.shields.io/badge/Status-Ready-success)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?style=flat&logo=chartdotjs&logoColor=white)

[live preview](https://zingy-souffle-e8e94c.netlify.app/)

## ✨ Features

### 📈 **Interactive Dashboards**
- **Key Metrics Cards** - Revenue, Orders, Customers, Conversion Rate
- **Revenue Trend Chart** - Line chart showing revenue over time
- **Sales by Category** - Bar chart of top product categories
- **Customer Distribution** - Donut chart for new vs returning customers
- **Top Products Table** - Best sellers with sales and revenue data
- **Recent Orders** - Latest transactions with status indicators

### 🎯 **Smart Filtering**
- **Time Period Filters** - Today, Week, Month, Year
- **Real-time Updates** - All metrics and charts update instantly
- **Growth Indicators** - % change from previous period
- **Trend Analysis** - Visual growth/decline indicators

### 🎨 **Professional Design**
- **Modern UI** - Clean, professional blue/indigo theme
- **Responsive Layout** - Works on all devices
- **Smooth Animations** - Card animations and transitions
- **Interactive Charts** - Hover for detailed tooltips

### 📊 **Data Visualizations**
- **Chart.js Integration** - Beautiful, interactive charts
- **Multiple Chart Types** - Line, Bar, Doughnut
- **Custom Styling** - Matches dashboard theme
- **Responsive Charts** - Adapts to screen size

## 🚀 Quick Start

### Option 1: Open Locally

1. Download all files
2. Open `index.html` in your browser
3. Explore the dashboard and try different filters!

### Option 2: Deploy to GitHub Pages

1. Create a new repository
2. Upload all project files
3. Enable GitHub Pages in Settings
4. Your dashboard will be live!

## 📦 Project Structure

```
ecommerce-dashboard/
├── index.html      # Dashboard layout
├── styles.css      # Professional styling
├── app.js          # Data generation & charts
└── README.md       # This file
```

## 🎯 What's Included

### Key Metrics
- **Total Revenue** - Sum of all sales
- **Total Orders** - Number of transactions
- **Total Customers** - Unique customer count
- **Conversion Rate** - Purchase conversion percentage

### Charts & Visualizations
1. **Revenue Trend** - Daily/weekly/monthly revenue patterns
2. **Category Performance** - Top 5 categories by revenue
3. **Customer Breakdown**  - New vs returning customer ratio
4. **Product Rankings** - Top 5 best-selling products

### Data Features
- Realistic mock data generation
- Time-based filtering (Today/Week/Month/Year)
- Previous period comparison
- Growth percentage calculations
- Dynamic updates on filter change

## 🛠️ Technologies

### Frontend
- **HTML5** - Semantic structure
- **CSS3** - Modern styling with CSS Grid and Flexbox
- **JavaScript ES6+** - Async operations and data handling

### Libraries
- **Chart.js 4.4.0** - Data visualization
- **Google Fonts (Inter)** - Typography

### Features
- Responsive grid layouts
- CSS variables for theming
- Dynamic data generation
- Real-time chart updating

## 📊 Mock Data

The dashboard uses realistic mock data including:
- **5 Product Categories**: Electronics, Clothing, Home & Garden, Sports, Books
- **25 Products**: Diverse product catalog
- **10 Sample Customers**: Realistic names
- **Time-Based Sales Data**: Revenue, orders, customer data per day
- **Recent Orders**: Latest transactions with statuses

All data is randomly generated and updates when you change time periods!

## 🎨 Customization

### Change Colors

Edit CSS variables in `styles.css`:

```css
:root {
    --color-primary: #3b82f6;           /* Blue */
    --color-secondary: #8b5cf6;         /* Purple */
    --color-bg: #0f172a;                /* Dark */
}
```

### Add More Products

In `app.js`, extend the `CATEGORIES` object:

```javascript
const CATEGORIES = {
    'Electronics': ['Wireless Headphones', ...],
    'YourCategory': ['Product 1', 'Product 2'],
    // Add more categories
};
```

### Adjust Time Periods

Modify the `salesData` generation:

```javascript
let salesData = {
    today: generateSalesData(1),
    week: generateSalesData(7),
    customPeriod: generateSalesData(14), // 2 weeks
};
```

## 🔧 Advanced Features

### Connect Real API

Replace mock data with actual API calls:

```javascript
async function fetchSalesData(period) {
    const response = await fetch(`/api/sales?period=${period}`);
    return await response.json();
}
```

### Add More Metrics

Extend the dashboard with:
- Average order value
- Customer lifetime value
- Product inventory levels
- Geographic sales data
- Hourly sales patterns

### Export Functionality

Add data export features:
- CSV export for reports
- PDF generation
- Chart image downloads

## 📱 Responsive Design

The dashboard adapts to:
- **Desktop** - Full sidebar with grid layout
- **Tablet** - Compact sidebar, stacked charts
- **Mobile** - Collapsible sidebar, single column

Breakpoints:
- 768px - Mobile adjustments
- 1024px - Tablet optimizations
- 1400px - Desktop full features

## 🎓 Learning Outcomes

This project demonstrates:
- Dashboard design patterns
- Data visualization best practices
- Chart.js integration
- Complex data calculations
- State management
- Responsive layouts
- Professional UI/UX design

## 🌟 Use Cases

Perfect for:
- **Portfolio Projects** - Show complex app development
- **Learning Dashboard Design** - Study professional patterns
- **Prototyping** - Mock e-commerce analytics
- **Interviews** - Demonstrate technical skills
- **Client Presentations** - Visualize data concepts

## 🔮 Future Enhancements

Ideas to extend the dashboard:
- [ ] User authentication
- [ ] Database integration (Firebase/MongoDB)
- [ ] Real-time data updates
- [ ] Advanced filtering (date range picker)
- [ ] Export to PDF/Excel
- [ ] Email reports
- [ ] Inventory management
- [ ] Sales forecasting
- [ ] Multi-currency support
- [ ] Dark/light theme toggle

## 📄 License

Free to use for personal and commercial projects. Attribution appreciated but not required.

## 👨‍💻 Author

**Soreti** - Full-Stack Android Developer
- GitHub: [@sori-16](https://github.com/sori-16)

## 🙏 Acknowledgments

- **Chart.js** - For amazing chart library
- **Google Fonts** - For Inter font family
- **Inspiration** - Modern SaaS dashboards

---

**Built with ❤️ and lots of data**

Try all the time period filters and explore the charts! 📊

## 💡 Tips

- **Hover over charts** to see detailed tooltips
- **Click time filters** to see data change dynamically
- **Check console** for debug information
- **View on mobile** to see responsive design
- **Inspect network tab** - No real API calls (all mock data)

Happy analyzing! 🚀
