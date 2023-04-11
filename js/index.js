
window.addEventListener('load', function () {
  // 显示和隐藏两个左右按键
  var btn_lt = document.querySelector('.arrow_left');
  var btn_rt = document.querySelector('.arrow_right');
  var banner = document.querySelector(".banner");

  var timer = null;
  timer = setInterval(function () {
    btn_rt.click()
  }, 2000);

  banner.addEventListener('mouseover', function () {

    btn_lt.style.display = 'block';
    btn_rt.style.display = 'block';
    clearInterval(timer);
    timer = null;
  });

  banner.addEventListener('mouseleave', function () {
    btn_lt.style.display = 'none';
    btn_rt.style.display = 'none';
    timer = setInterval(function () {
      btn_rt.click()
    }, 2000);
    // timer = setInterval(function () {
    //   targetIndx++;
    //   banner_dot();
    // }, 2000);
  });

  //制作小圆点
  var small_dots = document.querySelector('.small_dots');
  var banner_ul = banner.querySelector('ul');
  var number_pictures = banner_ul.children.length;
  // console.log(number_pictures);
  for (var i = 0; i < number_pictures; i++) {
    var dot = document.createElement('li');
    dot.setAttribute('index', i);
    small_dots.appendChild(dot);
    dot.addEventListener('click', function () {
      // alert(1);
      if (isable) {

        isable = false;
        targetIndx = this.getAttribute('index');
        banner_dot(targetIndx);
      }
    })
  }
  small_dots.children[0].className = 'current';
  var targetIndx = small_dots.children[0].getAttribute('index');
  var isable = true;
  // console.log(targetIndx);

  var first = banner_ul.children[0].cloneNode(true);
  banner_ul.appendChild(first);
  // 移动图片
  // 左右键移动图片
  btn_rt.addEventListener('click', function () {
    // alert(1);
    if (isable) {
      isable = false;
      console.log(22);

      targetIndx++;
      banner_dot();
    }
    // currentIndx = targetIndx;
  })

  btn_lt.addEventListener('click', function () {
    // alert(1);
    if (isable) {
      targetIndx--;
      // console.log(small_dots.children.length);
      console.log(333);

      banner_dot(targetIndx);
    }
    // currentIndx = targetIndx;
  })

  function banner_dot() {
    moveBanner();
    dotBackground();

  }

  function dotBackground() {
    for (var i = 0; i < number_pictures; i++) {
      // 不能使用dot因为最后dot就是最后一个
      small_dots.children[i].className = '';
    }

    var index = targetIndx;
    if (index < 0) {
      index = number_pictures - 1;
    }

    if (index > number_pictures - 1) {
      index = 0;
    }
    small_dots.children[index].className = 'current';
    // small_dots.children[index].disabled = false;
  }

  // var timer = this.setInterval(function () {
  //   targetIndx++;
  //   banner_dot();
  // }, 2000);



  function moveBanner() {
    // 这个动画的效果函数animation实际上传进来的是坐标，不过坐标需要计算出来
    if (targetIndx < 0) {
      // console.log(banner_ul.offsetLeft);

      banner_ul.style.left = banner_ul.offsetLeft - (number_pictures) * banner_ul.children[0].offsetWidth + 'px';
      console.log(banner_ul.style.left);

      targetIndx = number_pictures - 1;
    }

    if (targetIndx > number_pictures) {
      // console.log('coming');
      banner_ul.style.left = banner_ul.offsetLeft + (targetIndx - 1) * banner_ul.children[0].offsetWidth + 'px';
      console.log(banner_ul.style.left);

      targetIndx = 1;
    }
    var position = (- targetIndx) * banner_ul.children[0].offsetWidth;
    // console.log(position);
    animation(banner_ul, position, abledBtn);
  }

  function abledBtn() {
    if (!isable) {
      isable = true;
    }
  }
})
