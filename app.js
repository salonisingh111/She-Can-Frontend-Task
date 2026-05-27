/**
 * She Can - NGO Application Logic
 * Powered by pure Javascript
 */

document.addEventListener('DOMContentLoaded', () => {
  // Theme Switching Element
  const themeToggleBtn = document.getElementById('theme-toggle');
  const sunIcon = document.getElementById('sun-icon');
  const moonIcon = document.getElementById('moon-icon');

  // Strict naming rule: boolean names prefix with is/has/can
  let isDarkTheme = localStorage.getItem('theme') !== 'light';

  // Function to apply theme changes smoothly
  const applyTheme = (isDark) => {
    if (isDark) {
      document.documentElement.setAttribute('data-theme', 'dark');
      sunIcon.style.display = 'none';
      moonIcon.style.display = 'block';
      themeToggleBtn.setAttribute('aria-label', 'Switch to Light Theme');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      sunIcon.style.display = 'block';
      moonIcon.style.display = 'none';
      themeToggleBtn.setAttribute('aria-label', 'Switch to Dark Theme');
    }
  };

  // Set initial state
  applyTheme(isDarkTheme);

  // Bind click event with transition awareness
  themeToggleBtn.addEventListener('click', () => {
    isDarkTheme = !isDarkTheme;
    localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
    applyTheme(isDarkTheme);
  });

  // Micro-interaction: Magnetic floating hover effect on Hero Card
  const aboutCard = document.querySelector('.about-card');
  if (aboutCard) {
    aboutCard.addEventListener('mousemove', (e) => {
      const rect = aboutCard.getBoundingClientRect();
      const x = e.clientX - rect.left - (rect.width / 2);
      const y = e.clientY - rect.top - (rect.height / 2);
      
      // Keep calculations subtle
      aboutCard.style.transform = `perspective(1000px) rotateX(${-y * 0.03}deg) rotateY(${x * 0.03}deg) translateY(-4px)`;
    });

    aboutCard.addEventListener('mouseleave', () => {
      aboutCard.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    });
  }

  // Micro-interaction: Console check for debugging avoidance
  console.info('She Can dynamic logic loaded successfully.');
});
