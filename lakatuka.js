var vk= document.getElementById("villakatuka");
var papel =vk.getContext("2d");

var fondo={
  url: "tile.png",
  cargaOk: false
};
var vaca ={
  url: "vaca.png",
  cargaOk: false
  };

fondo.objeto = new Image();
fondo.objeto.src =fondo.url;
fondo.objeto.addEventListener("load", cargarFondo);

vaca.objeto = new Image();
vaca.objeto.src = vaca.url;
vaca.objeto.addEventListener("load", cargarVaca);

function cargarFondo()
{
  fondo.cargaOk= true;
  dibujar();
}
function cargarVaca()
{
  vaca.cargaOk= true;
  dibujar();
}

function dibujar()
{
  if(fondo.cargaOk== true){
  papel.drawImage(fondo.objeto, 0, 0);
}
if(vaca.cargaOk== true){
  for(var v=0; v<10; v++){
    var x= aleatorio(0, 420);
    var y= aleatorio(0, 420);
    papel.drawImage(vaca.objeto, x, y);
}
}
}

function aleatorio(min, maxi)
{
  var resultado;
  resultado= Math.floor (Math.random() *(maxi - min + 1)) + min;
  return resultado;
}
