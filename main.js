manoI=0;
manoD=0;
restar=0;
function setup(){
    cuadrado=createCanvas(400, 400);
    cuadrado.position(850,170);
    vidio=createCapture(VIDEO);
    vidio.size(400,400);
    vidio.position(250,170);
    poste=ml5.poseNet(vidio,pluma);
    poste.on('pose',mariposa)
}
function preload(){

}
function pluma(){
    console.log("YA ESTA LISTO");
}
function mariposa(resultado){
    if (resultado.length>0) {
        console.log(resultado);
        manoI=resultado[0].pose.leftWrist.x;
        manoD=resultado[0].pose.rightWrist.x;
    }
    }