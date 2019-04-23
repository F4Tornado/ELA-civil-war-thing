let mouseX;
let mouseY;
let c = document.getElementById("cnv")
let draw = c.getContext("2d")
let particles = [];

window.addEventListener("mousemove", (ev) => {
  mouseX = ev.clientX;
  mouseY = ev.clientY;
})

function setup() {
  requestAnimationFrame(drawLoop)
}

function drawLoop() {
  for (let i = 0; i < particles.length; i++) {
    if (i.show()) {
      particles.splice(i, 1)
    }
  }
  requestAnimationFrame(drawLoop)
}

class Particle {
  constructor (x, y, r, v, hue1, hue2, life, size) {
    this.x = x;
    this.y = y;
    this.vx = Math.cos(r)*v;
    this.vy = Math.sin(r)*v;
    this.hue = Math.random()*hue1+(hue2-hue1);
    this.life = life;
    this.size = size;
  }
  show() {
    draw.fillStyle = `hsl(${this.hue}, 100%, 50%)`
    draw.beginPath()
    draw.arc(this.x, this.y, this.size, 0, Math.PI*2)
    draw.fill()
    if (life <= 0) {
      return "spliceMe"
    }
  }
}

setup()
