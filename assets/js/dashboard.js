// Sidebar toggle (mobile)
const sidebar = document.getElementById('sidebar');
const menuToggle = document.getElementById('menuToggle');
if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('open');
    });
}

// ============ Payment Overview Line Chart ============
const paymentCtx = document.getElementById('paymentChart');
if (paymentCtx && window.Chart) {
    const gradient = paymentCtx.getContext('2d').createLinearGradient(0, 0, 0, 220);
    gradient.addColorStop(0, 'rgba(31, 111, 214, 0.28)');
    gradient.addColorStop(1, 'rgba(31, 111, 214, 0)');

    new Chart(paymentCtx, {
        type: 'line',
        data: {
            labels: ['May 1', 'May 8', 'May 15', 'May 22', 'May 29'],
            datasets: [{
                label: 'Amount Paid',
                data: [2000, 4200, 18500, 9000, 6500],
                borderColor: '#1f6fd6',
                backgroundColor: gradient,
                borderWidth: 2.5,
                pointBackgroundColor: '#1f6fd6',
                pointBorderColor: '#fff',
                pointBorderWidth: 2,
                pointRadius: 4,
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
                    max: 20000,
                    ticks: {
                        stepSize: 5000,
                        callback: (v) => v === 0 ? '0' : (v / 1000) + 'K',
                        color: '#7a8494',
                        font: { size: 11 }
                    },
                    grid: { color: '#f0f2f7' }
                },
                x: {
                    ticks: { color: '#7a8494', font: { size: 11 } },
                    grid: { display: false }
                }
            }
        }
    });
}

// ============ Fee Summary Donut Chart ============
const donutCtx = document.getElementById('feeDonut');
if (donutCtx && window.Chart) {
    new Chart(donutCtx, {
        type: 'doughnut',
        data: {
            labels: ['Tuition Fee', 'Transport Fee', 'Books & Others', 'Other Fee'],
            datasets: [{
                data: [40, 25, 20, 15],
                backgroundColor: ['#1f6fd6', '#24a866', '#f2a91d', '#8b6cf2'],
                borderWidth: 0,
                hoverOffset: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '68%',
            plugins: { legend: { display: false } }
        }
    });
}

// ============ Quick action feedback (demo only) ============
document.querySelectorAll('.qa-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
        btn.style.transform = 'scale(0.96)';
        setTimeout(() => { btn.style.transform = ''; }, 120);
    });
});
