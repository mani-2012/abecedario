narizX=0;
narizY=0;
manoI=0;
manoD=0;
resta=0;
function setup(){
    cuadro=createCanvas(400, 400);
    cuadro.position(850,170);
    camara=createCapture(VIDEO);
    camara.size(400,400);
    camara.position(250,85);
    poses=ml5.poseNet(camara,reyes);
    poses.on('pose',mosquito);
}
function reyes(){
    console.log("YA esta LISTO tu modelo ;)");
}
function mosquito(respuesta){
if (respuesta.length>0) {
    console.log(respuesta);
    narizY=respuesta[0].pose.nose.y;
    narizX=respuesta[0].pose.nose.x;
    manoI=respuesta[0].pose.leftWrist.x;
    manoD=respuesta[0].pose.rightWrist.x;
    resta=floor(manoI-manoD);
}
}
function draw() {
    background("burlywood");
    fill('orchid');
    square(narizX,narizY,resta);
}