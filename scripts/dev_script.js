window.addEventListener('scroll', () => {
    const widthWindow = window.innerWidth;
    const heightWindow = window.innerHeight;
    const heightDocument = document.documentElement.scrollHeight;
    const scrollY = window.scrollY;
    const box = document.querySelector('.walking_sprite');
    
    if(widthWindow < 1100){
        box.style.left = 50 + (scrollY*((widthWindow -164)/(heightDocument-heightWindow))) + 'px';
        box.style.bottom = 0 + 'px';
    }
    else{
        box.style.left = 30 + 'px';
        box.style.bottom = (heightWindow - 114 - 32) - (scrollY*((heightWindow - 114 - 32)/(heightDocument-heightWindow))) + 'px';
    }
    
  });