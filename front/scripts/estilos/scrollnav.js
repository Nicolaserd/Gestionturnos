
let lastScroll = 0;
let timeout;

window.addEventListener('scroll', function() {
  clearTimeout(timeout);
  
  const currentScroll = window.scrollY || document.documentElement.scrollTop;
  const contenedorMenu = document.getElementById('contenedor_menu');

  if (currentScroll !== lastScroll) {
    if (currentScroll > lastScroll) {
      // Si el usuario hace scroll hacia abajo, ocultamos el menú
      contenedorMenu.style.top = '-3.75rem';
    } else {
      
    
      contenedorMenu.style.top = '-3.75rem';
    }
    
    lastScroll = currentScroll;
    
    timeout = setTimeout(() => {
      if (currentScroll === 0) {
        contenedorMenu.style.top = '0px';
      }
      
      if (window.scrollY !== 0) {
        
        console.log(window.scrollY);
        contenedorMenu.style.top = '0rem';

      }
    }, 1000);
  }
});