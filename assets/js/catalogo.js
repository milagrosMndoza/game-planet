$(document).ready(function(){
	$('#nint').click(modal);
	$('#ps4').click(modal);
	$('#xbox').click(modal);
})

var arrayProveedores = [$('#nint'),$('#ps4'),$('#xbox')];

function modal(e){
	alert(arrayProveedores.indexOf(e));
}

var draaimolen = function (){
  var albumImg = document.getElementsByClassName("img-sider-xbox");
  var teller = 0;
  var teller1 = 0;
  var arrayImg = [];//lege array waar  foto's in moeten komen
  while (teller < albumImg.length){
    arrayImg.push(albumImg[teller].getAttribute("src"));
    teller++;
  }
//getAttribute om elementen vast te nemen
  arrayImg.push(arrayImg.shift()); 
// push en shift want telkens als er een foto bij komt moet er ook 1 verwijderd worden
  while (teller1 < albumImg.length){
    albumImg[teller1].setAttribute("src",arrayImg[teller1]);
//setAttribute om de foto's toe te voegen
    teller1++;
  }
  console.log(arrayImg.join());
}
setInterval(draaimolen,1000);