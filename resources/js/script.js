let text = document.getElementById('text');
// let treeLeft = document.getElementById('tree-left');
// let treeRight = document.getElementById('tree-right');
let gateLeft = document.getElementById('santa');
let gateRight = document.getElementById('gate-right');

window.addEventListener('scroll', () =>{
    let value = window.scrollY;
    var fontSize =  3.1 - value / 10;
    text.style.fontSize = fontSize + 'em';
    var leftOffset = value / -5;
    text.style.left =  50 + leftOffset + '%';
    // text.style.top =  50 + leftOffset + '%';

    // treeLeft.style.left = value * -1.5 + 'px';
    // treeRight.style.left = value * 1.5 + 'px';
    gateLeft.style.left = value * 1.8+ 'px';
    heroParallax.style.backgroundPositionY = value * +0.5 + 'px';
})

// Snow from https://codepen.io/radum/pen/xICAB
window.addEventListener("load", function () {

    var COUNT = 300;
    var masthead = document.querySelector('.hearo');
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    var width = masthead.clientWidth;
    var height = masthead.clientHeight;
    var i = 0;
    var active = false;
  
    function onResize() {
      width = masthead.clientWidth;
      height = masthead.clientHeight;
      canvas.width = width;
      canvas.height = height;
      ctx.fillStyle = '#FFF';
  
      var wasActive = active;
      active = width > 600;
  
      if (!wasActive && active)
        requestAnimFrame(update);
    }
  
    var Snowflake = function () {
      this.x = 0;
      this.y = 0;
      this.vy = 0;
      this.vx = 0;
      this.r = 0;
      this.reset();
    }
  
    Snowflake.prototype.reset = function() {
      this.x = Math.random() * width;
      this.y = Math.random() * -height;
      this.vy = 1 + Math.random() * 3;
      this.vx = 0.5 - Math.random();
      this.r = 1 + Math.random() * 2;
      this.o = 0.5 + Math.random() * 0.5;
    }
  
    canvas.style.position = 'absolute';
    canvas.style.left = canvas.style.top = '0';
  
    var snowflakes = [], snowflake;
    for (i = 0; i < COUNT; i++) {
      snowflake = new Snowflake();
      snowflake.reset();
      snowflakes.push(snowflake);
    }
  
    function update() {
  
      ctx.clearRect(0, 0, width, height);
  
      if (!active)
        return;
  
      for (i = 0; i < COUNT; i++) {
        snowflake = snowflakes[i];
        snowflake.y += snowflake.vy;
        snowflake.x += snowflake.vx;
  
        ctx.globalAlpha = snowflake.o;
        ctx.beginPath();
        ctx.arc(snowflake.x, snowflake.y, snowflake.r, 0, Math.PI * 2, false);
        ctx.closePath();
        ctx.fill();
  
        if (snowflake.y > height) {
          snowflake.reset();
        }
      }
  
      requestAnimFrame(update);
    }
  
    // shim layer with setTimeout fallback
    window.requestAnimFrame = (function(){
      return  window.requestAnimationFrame       ||
              window.webkitRequestAnimationFrame ||
              window.mozRequestAnimationFrame    ||
              function( callback ){
                window.setTimeout(callback, 1000 / 60);
              };
    })();
  
    onResize();
  
  
    masthead.appendChild(canvas);
  });
