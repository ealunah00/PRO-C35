//  DECLARAR VARIABLE database


var hypnoticBall
var position;     //  TRABAJAREMOS CON LA VARIABLE position

function setup() {
  //  ASIGNAR A database LA CONFIGURACIÓN DE firebase.database() Y MOSTRAR database EN LA CONSOLA
  

  createCanvas(500, 500);

  hypnoticBall = createSprite(250, 250, 10, 10);
  hypnoticBall.shapeColor = "red";

  //  DECLARAR hypnoticBallPosition CON LA REFERENCIA DE 'ball/position' DESDE LA BASE DE DATOS
  
  //  DETECTAR CON on LOS CAMBIOS EN LA BASE DE DATOS
  //    SI HAY CAMBIOS, LLAMA A LA FUNCIÓN readPosition
  //    SI HAY ERROR, LLAMA A LA FUNCIÓN showError
}

function draw() {
    background("white");

    //  AGREGAR CONFICIÓN PARA MOVER SOLO SI position NO ES undefined
    if(keyDown(LEFT_ARROW)){
      writePosition(-1, 0);
    }
    else if(keyDown(RIGHT_ARROW)){
      writePosition(1, 0);
    }
    else if(keyDown(UP_ARROW)){
      writePosition(0, -1);
    }
    else if(keyDown(DOWN_ARROW)){
      writePosition(0, +1);
    }

    drawSprites();
}

function writePosition(x, y) {
  //  REEMPLAZAR USANDO LA REFERENCIA A LA UBICACIÓN DEL VALOR QUE BUSCAMOS
  hypnoticBall.x = hypnoticBall.x + x;
  hypnoticBall.y = hypnoticBall.y + y;
}

//  FUNCIÓN readPosition PARA LEER LA POSICIÓN DEL VALOR EN LA BASE DE DATOS
function readPosition(data) {

}

//  FUNCIÓN showError PARA AVISAR SI HAY ERROR
function showError() {
  console.log("Error al escribir en la base de datos");
}
