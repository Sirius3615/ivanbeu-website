document.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('[data-menu]');
  const links = document.querySelector('[data-nav-links]');

  menu?.addEventListener('click', () => {
    const isOpen = links.classList.toggle('open');
    menu.setAttribute('aria-expanded', String(isOpen));
  });

  links?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    links.classList.remove('open');
    menu?.setAttribute('aria-expanded', 'false');
  }));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
  document.querySelectorAll('[data-year]').forEach((element) => {
    element.textContent = new Date().getFullYear();
  });

  document.querySelectorAll('[data-birthdate]').forEach((element) => {
    const [birthYear, birthMonth, birthDay] = element.dataset.birthdate.split('-').map(Number);
    const today = new Date();
    const birthdayHasPassed = (today.getMonth() + 1 > birthMonth)
      || (today.getMonth() + 1 === birthMonth && today.getDate() >= birthDay);
    element.textContent = today.getFullYear() - birthYear - (birthdayHasPassed ? 0 : 1);
  });

  const progress = document.querySelector('[data-reading-progress]');
  if (progress) {
    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const percentage = scrollable > 0 ? Math.min(100, (window.scrollY / scrollable) * 100) : 0;
      progress.style.setProperty('--reading-progress', `${percentage}%`);
    };
    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);
  }
});
