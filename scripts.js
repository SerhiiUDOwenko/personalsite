// 🌙 Перемикач темної теми
document.getElementById('theme-toggle').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// 📊 Побудова графіка Chart.js
const ctx = document.getElementById('resultsChart').getContext('2d');
const resultsChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Січ', 'Лют', 'Бер', 'Квіт', 'Трав', 'Черв'],
    datasets: [{
      label: 'Завантаження',
      data: [120, 250, 400, 600, 800, 1000],
      borderColor: '#0057b7',
      backgroundColor: 'rgba(0, 87, 183, 0.2)',
      fill: true,
      tension: 0.3
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: getComputedStyle(document.body).getPropertyValue('--text-color')
        }
      }
    },
    scales: {
      x: {
        ticks: {
          color: getComputedStyle(document.body).getPropertyValue('--text-color')
        }
      },
      y: {
        ticks: {
          color: getComputedStyle(document.body).getPropertyValue('--text-color')
        }
      }
    }
  }
});

// 📤 Обробка форми зворотного зв’язку
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = this.name.value.trim();
  const email = this.email.value.trim();
  const message = this.message.value.trim();

  if (name && email && message) {
    alert('Дякуємо за звернення, ' + name + '! Ми зв’яжемось з вами найближчим часом.');
    this.reset();
  } else {
    alert('Будь ласка, заповніть всі поля.');
  }
});
