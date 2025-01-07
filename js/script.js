 
 
 const menuToggle = document.querySelector('.menu-toggle');
 const navLinks = document.querySelector('.nav-links');
 
 menuToggle.addEventListener('click', () => {
     navLinks.classList.toggle('active');
 });
 
 
 const navItems = document.querySelectorAll('.nav-links > li');
 
 navItems.forEach(item => {
     item.addEventListener('click', (e) => {
         
         if (item.querySelector('.dropdown')) {
             e.stopPropagation();
             item.classList.toggle('active'); 
         }
     });
 });
 
 
  
  function easeInOutQuad(t) {
      return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
  }
 
  
  const colorStart = { r: 255, g: 239, b: 213 }; 
  const colorEnd = { r: 240, g: 255, b: 240 }; 
  const homeHero = document.querySelector('.home-hero');
 
  window.addEventListener('scroll', () => {
      const scrollPosition = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const normalizedScroll = Math.min(scrollPosition / maxScroll, 1);
 
      
      const easedScroll = easeInOutQuad(normalizedScroll);
 
      
      const r = Math.floor(colorStart.r + (colorEnd.r - colorStart.r) * easedScroll);
      const g = Math.floor(colorStart.g + (colorEnd.g - colorStart.g) * easedScroll);
      const b = Math.floor(colorStart.b + (colorEnd.b - colorStart.b) * easedScroll);
 
      
      document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
 
      
      const nav = document.querySelector('nav');
      nav.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
 
       
     homeHero.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
 
 
      
      const textColor = easedScroll > 0.5 ? '#333' : '#000';
      document.querySelector('.logo').style.color = textColor;
      document.querySelectorAll('.nav-links a').forEach((link) => {
          link.style.color = textColor;
      });
  });