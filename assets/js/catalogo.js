$(document).ready(function(){
  $('#modal-xbox').hide();
  $('#modal-ps4').hide();   
  $('#modal-nint').hide();   
  $('#nint').click(modalN);
  $('#ps4').click(modalP);
  $('#xbox').click(modalX);
  $('.btn-closeX').click(endX);
  $('.btn-closeP').click(endP);
  $('.btn-closeN').click(endN);
})

var arrayProveedores = [$('#nint'),$('#ps4'),$('#xbox')];

/*FUNCIONES MODAL*/
function modalX(){
  $('#modal-xbox').show();
  $('#modal-xbox').addClass('fondo');   
}

function endX(){
  $('#modal-xbox').removeClass('fondo'); 
  $('#modal-xbox').hide();
}

function modalP(){
  $('#modal-ps4').show();
  $('#modal-ps4').addClass('fondo');   
}

function endP(){
  $('#modal-ps4').removeClass('fondo'); 
  $('#modal-ps4').hide();
}

function modalN(){
  $('#modal-nint').show();
  $('#modal-nint').addClass('fondo');   
}

function endN(){
  $('#modal-nint').removeClass('fondo'); 
  $('#modal-nint').hide();
}



var carruselX = function (){
  var albumImg = document.getElementsByClassName("img-sider-xbox");
  var teller = 0;
  var teller1 = 0;
  var arrayImg = [];
  while (teller < albumImg.length){
    arrayImg.push(albumImg[teller].getAttribute("src"));
    teller++;
  }
  arrayImg.push(arrayImg.shift()); 
  while (teller1 < albumImg.length){
    albumImg[teller1].setAttribute("src",arrayImg[teller1]);
    teller1++;
  }
}
setInterval(carruselX,1000);

var carruselP = function (){
  var albumImg = document.getElementsByClassName("img-sider-ps4");
  var teller = 0;
  var teller1 = 0;
  var arrayImg = [];
  while (teller < albumImg.length){
    arrayImg.push(albumImg[teller].getAttribute("src"));
    teller++;
  }
  arrayImg.push(arrayImg.shift()); 
  while (teller1 < albumImg.length){
    albumImg[teller1].setAttribute("src",arrayImg[teller1]);
    teller1++;
  }
}
setInterval(carruselP,1000);

var carruselN = function (){
  var albumImg = document.getElementsByClassName("img-sider-n");
  var teller = 0;
  var teller1 = 0;
  var arrayImg = [];
  while (teller < albumImg.length){
    arrayImg.push(albumImg[teller].getAttribute("src"));
    teller++;
  }
  arrayImg.push(arrayImg.shift()); 
  while (teller1 < albumImg.length){
    albumImg[teller1].setAttribute("src",arrayImg[teller1]);
    teller1++;
  }
}
setInterval(carruselN,1000);