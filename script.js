function setup() {
    createCanvas(400, 200);
    a = new Array(7);
for (i = 0; i < 7; i++) {
    b = new Array(4);
    for (j = 0; j < 4; j++) {
        b[j] = {
            x: i,
            y: j,
            red:int(random(0,255)),
            green:int(random(0,255)),
            blue:int(random(0,255)),
            afisare: function afisare() {
                stroke("black");
                strokeWeight(0.5);
                fill(this.red,this.green,this.blue)//(this.x*this.y*20, 100, 100);
                square(10+this.x * 20,10+this.y * 20, 15);
                textSize(5);
                text(this.x+1+(this.y*7),15+this.x*20,19+this.y*20);
            }
        }
    }
    a[i]=b;
}
}
function draw() {
    background(240, 240, 240);
    boxes();
}
function boxes() {
    for (i = 0; i < 7; i++) {
        for (j = 0; j < 4; j++) {
            a[i][j].afisare();
        }
    }
}
