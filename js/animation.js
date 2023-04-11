

function animation(obj, targetPosition, callback) {
  clearInterval(obj.timer);
  obj.timer = setInterval(function () {
    // javascript尽量避免小数运算,另外就是要将speed的值向上取，如果是反方向就向下取，不然方块永远到不了位置因为这种算法的缘故
    var speed = ((targetPosition - obj.offsetLeft) / 10);
    speed = (speed >= 0) ? Math.ceil(speed) : Math.floor(speed);
    // console.log('speed = ' + speed);
    // console.log(obj.offsetLeft);
    obj.style.left = obj.offsetLeft + speed + 'px';
    if (targetPosition - obj.offsetLeft === 0) {
      // console.log(obj.offsetLeft);
      clearInterval(obj.timer);
      if (callback) {
        callback();
      }
    }
  }, 20)
}