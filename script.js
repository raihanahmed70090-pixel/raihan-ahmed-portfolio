const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const revealItems = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.1,
  }
);

revealItems.forEach((item) => observer.observe(item));

const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const name = (formData.get('name') || '').toString().trim();
    const email = (formData.get('email') || '').toString().trim();
    const message = (formData.get('message') || '').toString().trim();

    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nProject details:\n${message}`
    );

    window.location.href = `mailto:raihanahmed70090@gmail.com?subject=${subject}&body=${body}`;
  });
}
