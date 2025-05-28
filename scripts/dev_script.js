function updateProgessionBar(){
    const widthWindow = window.innerWidth;//We get the width of the window
    const heightWindow = window.innerHeight;//We get the height of the window
    const heightDocument = document.documentElement.scrollHeight;//We get the height of the entire page
    const scrollY = window.scrollY;//We get the value of the scrollY (note that the max of scrollY = heightDocument-heightWindow)
    const box = document.querySelector('.walking_sprite');//We get the box that we want to move
    
    if(widthWindow < 1100){//mobile version
        box.style.left = 50 + (scrollY*((widthWindow -164)/(heightDocument-heightWindow))) + 'px';//We adjust the left value, we have to take into account that we want a padding of 50px and a that we have a sprite of 64px
        box.style.bottom = 0 + 'px';//In case of resize
    }
    else{
        box.style.left = 30 + 'px';//In case of resize
        box.style.bottom = (heightWindow - 114 - 32) - (scrollY*((heightWindow - 114 - 32)/(heightDocument-heightWindow))) + 'px';//We adjust the bottom value (we have to take into account what margin we want)
    }
};

window.addEventListener('scroll', updateProgessionBar);
window.addEventListener('resize', updateProgessionBar);