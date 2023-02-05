/*Slide imagem*/

let atual = 0;
let images = document.querySelectorAll('.slides .imgs');
let firstImg = document.getElementById('primeiraImg');

document.getElementById('bt-voltar').addEventListener('click', function () {
    atual--;
    slide();
})

document.getElementById('bt-prox').addEventListener('click', function () {
    atual++;
    slide();
})
function slide() {
    if (atual >= images.length) {
        atual = 0;
    } else if (atual < 0) {
        atual = images.length - 1;
    }
    //document.querySelector('.imgAtual').classList.remove('imgAtual');
    //define o tamanho da marginLeft de acordo com o tamanho da tela
    
    if (window.matchMedia("(min-width:1600px)").matches) {
        firstImg.style.marginLeft = -1100 * atual + 'px';
    } else if (window.matchMedia("(min-width:1360px)").matches) {
        firstImg.style.marginLeft = -1000 * atual + 'px';
    } else if (window.matchMedia("(max-width:600px)").matches) {
        firstImg.style.marginLeft = -600 * atual + 'px';
    }

    document.getElementById('primeiraImg').classList.add('.imgAtual');
}
slide();

/*reponsive container boxes*/ 
function responsive(){
    if(window.matchMedia("(max-width:600px)").matches){
        document.querySelector('.d-flex').classList.remove('d-flex');
    }
}
responsive();