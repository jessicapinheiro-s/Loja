
/*reponsive container boxes*/ 
function responsive(){
    if(window.matchMedia("(max-width:600px)").matches){
        document.querySelector('.container-box').classList.remove('d-flex');
        document.querySelector('.footer-container').classList.remove('d-flex');
        
    }
}
responsive();
