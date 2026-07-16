const canvas = document.getElementById("mainCanvas");
const ctx = canvas.getContext("2d");

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

class Popup {
  constructor(x, y, speed, gravity, direction) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.gravity = gravity;
    this.direction = direction;
    this.imagePath = "images/image" + randInt(1, 10) + ".png";

    this.image = new Image();
    this.image.src = this.imagePath;
  }

  checkCollision() {
    if (this.y + this.image.height >= canvas.height) return true;
  }

  render() {
    ctx.drawImage(this.image, this.x, this.y);
  }
}

function newPopup() {
  const x = randInt(0, canvas.width - 300)
  const y = randInt(0, Math.floor(canvas.height * 0.3));
  const speed = randInt(10, 20);
  const gravity = randInt(5, 10);
  const direction = Math.random() > 0.5 ? 1 : -1;

  const p = new Popup(x, y, speed, gravity, direction);
  p.yvel = 0;

  return p;
}

let popup = newPopup();

function outsideCanvas() {
  if (
    popup.x + popup.image.width > 0 &&
    popup.x < canvas.width &&
    popup.y > 0 &&
    popup.y < canvas.height
  ) return false;
  else return true;
}

function draw() {
  popup.yvel += popup.gravity;

  popup.x += popup.speed * popup.direction;
  popup.y += popup.yvel;

  if (popup.checkCollision()) {
    popup.y = canvas.height - popup.image.height;

    popup.yvel = -popup.yvel * 0.95;
  }

  if (outsideCanvas()) popup = newPopup()
  else popup.render();

  window.requestAnimationFrame(draw); //this is recursive
}

draw()
