window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar-transparente');
    const nav_link = document.querySelectorAll('.nav-link');
    const icono_inicial = document.getElementById('icono-inicial');
    const icono_scroll = document.getElementById('icono-scroll');
    const scrollPosition = window.pageYOffset;
    
  
    if (scrollPosition > 80) {
      navbar.classList.add('bg-body-tertiary');
      navbar.classList.remove('bg-none');
      nav_link.forEach(item => {
          item.classList.remove('text-white');
          item.classList.add('text-dark-grey');
          
        
      });
      icono_inicial.classList.add('d-none');
      icono_scroll.classList.remove('d-none');
    } else {
        navbar.classList.remove('bg-body-tertiary');
        navbar.classList.add('bg-none');
        nav_link.forEach(item => {
            item.classList.add('text-white');
            item.classList.remove('text-dark-grey');        
            
          
        });
        icono_inicial.classList.remove('d-none');
      icono_scroll.classList.add('d-none')
      
    }
  });

  const imgglobaliado = document.getElementById('imgglobaliado');
  imgglobaliado.addEventListener('mouseover', () => {
    imgglobaliado.src = './img/sucursales/svg/Isologo globaliado color.svg';
    });
    
    imgglobaliado.addEventListener('mouseout', () => {
        imgglobaliado.src = './img/sucursales/svg/Isologo globaliado black.svg';
  });

  const imgfuturoverso = document.getElementById('imgfuturoverso');
  imgfuturoverso.addEventListener('mouseover', () => {
    imgfuturoverso.src = './img/sucursales/svg/FUTUROVERSO COLOR SVG.svg';
    });
    
    imgfuturoverso.addEventListener('mouseout', () => {
        imgfuturoverso.src = './img/sucursales/svg/FUTUROVERSO BLACK SVG.svg';
  });

  const imgpanatramites = document.getElementById('imgpanatramites');
  imgpanatramites.addEventListener('mouseover', () => {
    imgpanatramites.src = './img/sucursales/svg/ISOLOGO COLOR PANATRAMITES SVG.svg';
    });
    
    imgpanatramites.addEventListener('mouseout', () => {
        imgpanatramites.src = './img/sucursales/svg/ISOLOGO BLACK PANATRAMITES SVG.svg';
  });

  const nose = document.getElementById('nose');
  nose.addEventListener('mouseover', () => {
    nose.src = './img/sucursales/svg/Isologo globaliado color.svg';
    });
    
    nose.addEventListener('mouseout', () => {
        nose.src = './img/sucursales/svg/Isologo globaliado black.svg';
  });