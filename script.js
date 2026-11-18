const items = document.querySelectorAll('.programme-item');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.15 });

items.forEach((item, index) => {
  item.style.transitionDelay = `${Math.min(index * 55, 330)}ms`;
  observer.observe(item);
});
