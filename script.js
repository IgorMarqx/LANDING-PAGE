let countBtn = 0
let countPrice = 125
let total = 1

function incremento(){
    countPrice += 125
    document.getElementById('count-btn').innerHTML = total +=1 
    document.getElementById('countPrice').innerHTML = '$' + countPrice.toFixed(2);
}

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
