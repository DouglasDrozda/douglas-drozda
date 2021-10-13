import ScrollReveal from 'scrollreveal';

function animateScroll() {
  const scroll = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 3000,
    reset: false,
  });
  scroll.reveal('.apresentation', { delay: 200 });

  const scroll1 = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 3000,
  });
  scroll1.reveal('.img-me', { delay: 200 });
  scroll1.reveal('.whatsapp', { delay: 200 });

  const header = ScrollReveal({
    origin: 'botton',
    distance: '80px',
    duration: 2000,
  });
  header.reveal('.about', { delay: 200 });
  header.reveal('.project-title', { delay: 200 });
  header.reveal('.description-contain', { scale: 0.40 });
  header.reveal('.projects-1', { scale: 0.40 });
  header.reveal('.contact-title', { delay: 200 });
  header.reveal('.footer-sub-container', { delay: 200 });
}

export default animateScroll;

