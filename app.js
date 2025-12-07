// ShopMetrics Dashboard - Fresh Build
console.log('📊 ShopMetrics Loading...');

// ===================================
// DATA GENERATION
// ===================================
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateSalesData(days) {
    const data = [];
    for (let i = days - 1; i >= 0; i--) {
        const date = new Date();
        date.setDate(date.getDate() - i);
        data.push({
            date: date.toISOString().split('T')[0],
            revenue: random(1000, 5000),
            orders: random(30, 100),
            customers: random(20, 70)
        });
    }
    return data;
}

const PRODUCTS = [
    { name: 'Wireless Headphones', category: 'Electronics', sales: random(100, 500), revenue: random(5000, 20000) },
    { name: 'Smart Watch', category: 'Electronics', sales: random(100, 500), revenue: random(5000, 20000) },
    { name: 'Laptop', category: 'Electronics', sales: random(100, 500), revenue: random(5000, 20000) },
    { name: 'T-Shirt', category: 'Clothing', sales: random(100, 500), revenue: random(5000, 20000) },
    { name: 'Jeans', category: 'Clothing', sales: random(100, 500), revenue: random(5000, 20000) },
    { name: 'Sneakers', category: 'Clothing', sales: random(100, 500), revenue: random(5000, 20000) },
    { name: 'Coffee Maker', category: 'Home & Garden', sales: random(100, 500), revenue: random(5000, 20000) },
    { name: 'Desk Lamp', category: 'Home & Garden', sales: random(100, 500), revenue: random(5000, 20000) },
    { name: 'Yoga Mat', category: 'Sports', sales: random(100, 500), revenue: random(5000, 20000) },
    { name: 'Dumbbells', category: 'Sports', sales: random(100, 500), revenue: random(5000, 20000) }
].sort((a, b) => b.revenue - a.revenue);

const CUSTOMERS = [
    'John Smith', 'Emma Johnson', 'Michael Brown', 'Sarah Davis', 'David Wilson',
    'Lisa Anderson', 'James Taylor', 'Jennifer Martinez', 'Robert Garcia', 'Maria Rodriguez'
];

function generateOrders(count) {
    const orders = [];
    const statuses = ['completed', 'pending', 'processing'];
    for (let i = 0; i < count; i++) {
        const date = new Date();
        date.setDate(date.getDate() - random(0, 7));
        orders.push({
            id: `ORD-${1000 + i}`,
            customer: CUSTOMERS[random(0, CUSTOMERS.length - 1)],
            amount: random(50, 500),
            status: statuses[random(0, 2)],
            date: date
        });
    }
    return orders.sort((a, b) => b.date - a.date);
}

// Global data
let currentPeriod = 'week';
const salesData = {
    today: generateSalesData(1),
    week: generateSalesData(7),
    month: generateSalesData(30),
    year: generateSalesData(365)
};
const orders = generateOrders(20);

// Charts
let revenueChart, categoryChart, customerChart;

// ===================================
// INITIALIZATION
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Loaded - Initializing dashboard...');

    // Setup event listeners
    setupNavigation();
    setupFilters();

    // Initialize charts and data
    initCharts();
    updateDashboard();

    console.log('✅ Dashboard initialized successfully!');
});

// ===================================
// NAVIGATION
// ===================================
function setupNavigation() {
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const view = e.currentTarget.dataset.view;
            switchView(view);
        });
    });
}

function switchView(viewName) {
    // Update nav
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.toggle('active', item.dataset.view === viewName);
    });

    // Clear main content
    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = '';

    // Show selected view
    if (viewName === 'dashboard') {
        showDashboard();
    } else if (viewName === 'customers') {
        showCustomers();
    } else if (viewName === 'orders') {
        showOrders();
    } else if (viewName === 'products') {
        showProducts();
    }
}

function showDashboard() {
    // Reload the original dashboard HTML
    location.reload();
}

function showCustomers() {
    document.getElementById('mainContent').innerHTML = `
        <header class="header">
            <div class="header-left">
                <h2 class="page-title">Customers</h2>
                <p class="page-subtitle">Manage your customer base</p>
            </div>
        </header>
        <div class="chart-card">
            <div class="table-container">
                <table class="products-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Orders</th>
                            <th>Total Spent</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${CUSTOMERS.map((name, i) => `
                            <tr>
                                <td class="product-name">${name}</td>
                                <td>${name.toLowerCase().replace(' ', '.')}@email.com</td>
                                <td>${random(5, 50)}</td>
                                <td>$${random(500, 5000).toLocaleString()}</td>
                                <td><span class="order-status completed">Active</span></td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </div>
    `;
}

function showOrders() {
    document.getElementById('mainContent').innerHTML = `
        <header class="header">
            <div class="header-left">
                <h2 class="page-title">Orders</h2>
                <p class="page-subtitle">All customer orders</p>
            </div>
        </header>
        <div class="chart-card">
            <div class="table-container">
                <table class="products-table">
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Customer</th>
                            <th>Amount</th>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${orders.slice(0, 15).map(order => `
                            <tr>
                                <td style="font-family: monospace; color: var(--color-primary);">${order.id}</td>
                                <td class="product-name">${order.customer}</td>
                                <td>$${order.amount.toLocaleString()}</td>
                                <td>${order.date.toLocaleDateString()}</td>
                                <td><span class="order-status ${order.status}">${order.status}</span></td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </div>
    `;
}

function showProducts() {
    document.getElementById('mainContent').innerHTML = `
        <header class="header">
            <div class="header-left">
                <h2 class="page-title">Products</h2>
                <p class="page-subtitle">Product inventory and catalog</p>
            </div>
        </header>
        <div class="chart-card">
            <div class="table-container">
                <table class="products-table">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Category</th>
                            <th>Sales</th>
                            <th>Revenue</th>
                            <th>Stock</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${PRODUCTS.map(product => `
                            <tr>
                                <td class="product-name">${product.name}</td>
                                <td><span class="product-category">${product.category}</span></td>
                                <td class="product-sales">${product.sales}</td>
                                <td class="product-revenue">$${product.revenue.toLocaleString()}</td>
                                <td>${random(10, 200)} units</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </div>
    `;
}

// ===================================
// FILTERS
// ===================================
function setupFilters() {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            currentPeriod = e.target.dataset.period;
            updateDashboard();
        });
    });
}

// ===================================
// UPDATE DASHBOARD
// ===================================
function updateDashboard() {
    const data = salesData[currentPeriod];

    // Calculate totals
    const totalRevenue = data.reduce((sum, d) => sum + d.revenue, 0);
    const totalOrders = data.reduce((sum, d) => sum + d.orders, 0);
    const totalCustomers = data.reduce((sum, d) => sum + d.customers, 0);
    const conversionRate = ((totalOrders / (totalCustomers * 2)) * 100).toFixed(1);

    // Update metrics
    document.getElementById('totalRevenue').textContent = '$' + totalRevenue.toLocaleString();
    document.getElementById('totalOrders').textContent = totalOrders.toLocaleString();
    document.getElementById('totalCustomers').textContent = totalCustomers.toLocaleString();
    document.getElementById('conversionRate').textContent = conversionRate + '%';

    // Update growth indicators
    const growth = random(-10, 30);
    document.querySelectorAll('.metric-change span').forEach(el => {
        el.textContent = Math.abs(growth) + '%';
    });

    // Update charts
    updateCharts(data);

    // Update tables
    updateTopProducts();
    updateRecentOrders();
}

// ===================================
// CHARTS
// ===================================
function initCharts() {
    console.log('Initializing charts...');

    if (typeof Chart === 'undefined') {
        console.error('Chart.js not loaded!');
        return;
    }

    // Revenue Chart
    const revenueCtx = document.getElementById('revenueChart');
    if (revenueCtx) {
        revenueChart = new Chart(revenueCtx, {
            type: 'line',
            data: {
                labels: [],
                datasets: [{
                    label: 'Revenue',
                    data: [],
                    borderColor: '#3b82f6',
                    backgroundColor: 'rgba(59, 130, 246, 0.1)',
                    tension: 0.4,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: { color: '#94a3b8' },
                        grid: { color: 'rgba(59, 130, 246, 0.1)' }
                    },
                    x: {
                        ticks: { color: '#94a3b8' },
                        grid: { display: false }
                    }
                }
            }
        });
    }

    // Category Chart
    const categoryCtx = document.getElementById('categoryChart');
    if (categoryCtx) {
        categoryChart = new Chart(categoryCtx, {
            type: 'bar',
            data: {
                labels: ['Electronics', 'Clothing', 'Home & Garden', 'Sports'],
                datasets: [{
                    label: 'Sales',
                    data: [45000, 35000, 25000, 20000],
                    backgroundColor: [
                        'rgba(59, 130, 246, 0.8)',
                        'rgba(139, 92, 246, 0.8)',
                        'rgba(16, 185, 129, 0.8)',
                        'rgba(245, 158, 11, 0.8)'
                    ]
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: { color: '#94a3b8' },
                        grid: { color: 'rgba(59, 130, 246, 0.1)' }
                    },
                    x: {
                        ticks: { color: '#94a3b8' },
                        grid: { display: false }
                    }
                }
            }
        });
    }

    // Customer Chart
    const customerCtx = document.getElementById('customerChart');
    if (customerCtx) {
        customerChart = new Chart(customerCtx, {
            type: 'doughnut',
            data: {
                labels: ['New Customers', 'Returning Customers'],
                datasets: [{
                    data: [35, 65],
                    backgroundColor: [
                        'rgba(59, 130, 246, 0.8)',
                        'rgba(139, 92, 246, 0.8)'
                    ],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            color: '#cbd5e1',
                            padding: 15
                        }
                    }
                }
            }
        });
    }

    console.log('✅ Charts initialized');
}

function updateCharts(data) {
    if (!revenueChart) return;

    // Update revenue chart
    const labels = data.map(d => {
        const date = new Date(d.date);
        if (currentPeriod === 'year') return date.toLocaleDateString('en-US', { month: 'short' });
        if (currentPeriod === 'month') return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
        return date.toLocaleDateString('en-US', { weekday: 'short' });
    });

    revenueChart.data.labels = labels;
    revenueChart.data.datasets[0].data = data.map(d => d.revenue);
    revenueChart.update();
}

function updateTopProducts() {
    const table = document.getElementById('topProductsTable');
    if (!table) return;

    table.innerHTML = PRODUCTS.slice(0, 5).map(product => `
        <tr>
            <td class="product-name">${product.name}</td>
            <td><span class="product-category">${product.category}</span></td>
            <td class="product-sales">${product.sales}</td>
            <td class="product-revenue">$${product.revenue.toLocaleString()}</td>
        </tr>
    `).join('');
}

function updateRecentOrders() {
    const list = document.getElementById('recentOrdersList');
    if (!list) return;

    list.innerHTML = orders.slice(0, 5).map(order => `
        <div class="order-item">
            <div class="order-left">
                <span class="order-id">${order.id}</span>
                <span class="order-customer">${order.customer}</span>
            </div>
            <div class="order-right">
                <span class="order-amount">$${order.amount.toLocaleString()}</span>
                <span class="order-status ${order.status}">${order.status}</span>
            </div>
        </div>
    `).join('');
}

console.log('✅ App.js loaded successfully');
