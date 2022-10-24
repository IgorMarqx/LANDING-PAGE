let countBtn = 0
let countPrice = 125
let total = 1

//Incrementando valores ao preço e a quantidade
function incremento(){
    countPrice += 125
    document.getElementById('count-btn').innerHTML = total +=1 
    document.getElementById('countPrice').innerHTML = '$' + countPrice.toFixed(2);
}

//Decrementando valores ao preço e a quantidade
function decremento(){
    if(total <= 0 ){
        alert('Operação inválida')
        total ++
        countPrice = 125
    }
    countPrice -= 125
    document.getElementById('count-btn').innerHTML = total -=1
    document.getElementById('countPrice').innerHTML = '$' + countPrice.toFixed(2);
}

function cart(){
    alert('Operação inválida no momento')
}

//Mudando imagens ao clicar
function img1(){
    document.getElementById('imgSneaker').src = './images/image-product-1.jpg'
}

function img2(){
    document.getElementById('imgSneaker').src = './images/image-product-2.jpg'
}

function img3(){
    document.getElementById('imgSneaker').src = './images/image-product-3.jpg'
}

function img4(){
    document.getElementById('imgSneaker').src = './images/image-product-4.jpg'
}
//Mudando imagens ao clicar

//Modal imagens
const getElement = (...queries) => document.querySelector(...queries)

const image = document.querySelector('.open-modal')
const container = document.querySelector('.modal-container')
const modal = document.querySelector('.modal-div')
const ativarModal = 'modal-show'

const openModel = () => container.classList.add(ativarModal)
const closeModel = () => container.classList.remove(ativarModal)

image.addEventListener('click', openModel)
container.addEventListener ('click', (event) =>{
    if(modal.contains(event.target)) return
    
    closeModel()
})
//Modal imagens

//Mudando imagens no modal
function modalImg1(){
    document.getElementById('modalImgSneaker').src = './images/image-product-1.jpg'
}

function modalImg2(){
    document.getElementById('modalImgSneaker').src = './images/image-product-2.jpg'
}

function modalImg3(){
    document.getElementById('modalImgSneaker').src = './images/image-product-3.jpg'
}

function modalImg4(){
    document.getElementById('modalImgSneaker').src = './images/image-product-4.jpg'
}
//Mudando imagens no modal



// function incremento(tipo) {
//     let input = document.getElementById('count-btn')
  
//     if(tipo === 'mais') {
//       input.value = (parseInt(input.value) + 1)
//     }
  
//     if(tipo === 'menos' && input.value > 0) {
//       input.value = (parseInt(input.value) - 1)
//     }

//     document.querySelector('.count-btn').innerHTML = input
//   }
