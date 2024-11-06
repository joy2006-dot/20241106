let angle=0
function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0)//背景顏色為黑色
    angleMode(DEGREES)//設定使用到角度，採用數字的方式0-360
    frameRate(5)//進入draw()函數，每秒10次
     }
  
function draw() {//開始畫圖
// background(220);
background(0)
//translate(width/2,height/2)//設定原點(0，0)的左上角，移到視窗中心(width/2，height/2)
translate(mouseX,mouseY)//原點在滑鼠
//視窗中心點畫一個600*600的方形，框限為白色，不填滿顏色
noFill()//不填滿
stroke(255)//框線白色
rectMode(CENTER)//設定方形的中心點為座標點
for (let i=0;i<33;i=i+1){
let r =map(sin(frameCount),-1,1,50,255)//對應，sin的質位於-1~1間的位置，對應到200~255間的位置
let g =map(sin(frameCount/2),-1,1,50,255)//對應
let b =map(sin(frameCount)/4,-1,1,50,100)//對應
stroke(r,g,b)
rotate(sin(angle-i*2)*40)//三角函數sin的質借於-1~1間，旋轉角度介於
rect(0,0,100+(mouseX/500)-i*3,600-i*3,20)//畫一個方形(600，600)，圓弧在四點寬高為100
}
angle=angle+10
}