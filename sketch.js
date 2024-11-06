let font;  //載入字型文字
let points = [];  //轉成點狀文字
let angle=0
let r =10
// ==================================================
function preload(){  //在執行setup()前，必須先做此函數執行，主要先載入字型
    //為載入在fonts資料夾內的NotoSansTC-VariableFont_Wght.ttf字型
    font = loadFont("fonts/NotoSansTC-VariableFont_Wght.ttf") 
}
//===================================================


function setup() {//設定環境
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES)//設定三角函數的角度用0~360
  background("#606c38")
  //===================================================
  points = font.textToPoints("TKUET", -300,80, 200, {
    sampleFactor:0.5
  }); //轉成文字圖檔，放在(0, 200)位置，圖形大小為200，sampleFactor為點數距離大小，直越小代表點數越小
//===================================================
}



function draw() {

background("#606c38")
textSize(50)
text(mouseX+":"+mouseY,width/2,height/2)

translate(width/2-300,height/2-120)
rotate(frameCount*2) 
for (let i=0; i<points.length-1; i++) {
  //text(str(i),points[i].x,points[i].y)//在(point[i].x,points[i].y)座標上顯示一個文字\數字
  fill("#ffb703")//充滿顏色
  //noStroke()
  strokeWeight(1)//畫圓得框限粗細
  ellipse(points[i].x+r*sin(angle+i*10),points[i].y+r*sin(angle+i*10),10)
  stroke("#fb8500")
  strokeWeight(5)
  //line(points[i].x,points[i].y,points[i+1].x,points[i+1].y)//畫線，兩個點構成一條線
  //畫兩個點第一個點(points[i].x,points[i].y)，第二個點(points[i].x,points[i].y,points[i+1].x,points[i+1].y)
} 
//===================================================
angle=angle+10
}