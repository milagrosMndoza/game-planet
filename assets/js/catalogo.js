$(document).ready(function(){
  $('#modal-xbox').hide();   
  //$('#nint').click(modalN);
  //$('#ps4').click(modal);
  $('#xbox').click(modalX);
  $('.btn-closeX').click(endX);
})

var arrayProveedores = [$('#nint'),$('#ps4'),$('#xbox')];

function modalX(){
  $('#modal-xbox').show();
  $('#modal-xbox').addClass('fondo');   
}

function endX(){
  $('#modal-xbox').removeClass('fondo'); 
  $('#modal-xbox').hide();
}

var draaimolen = function (){
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
setInterval(draaimolen,1000);