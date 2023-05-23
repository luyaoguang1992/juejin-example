<template>
  <div class="container">
    <div class="book p3d">
      <!-- 右半本 -->
      <div class="back-cover p3d">
        <div class="page back flip"></div>
        <div class="page front p3d">
          <div class="shadow"></div>
          <div class="card">这是贺卡</div>
        </div>
      </div>
      <!-- 左半本 -->
      <div class="front-cover p3d">
        <div class="page front flip p3d">
          <p>
            Solutions to over 1000 popular algorithm problems. All problems are
            from leetcode.com. Solutions include: - Problem statement - Python
            code with comments - Description of solution s trategy - Time and
            space complexity Does not require internet connection. Forward
            solutions by email. Please let me have your comments, correctio…
          </p>
        </div>
        <div class="page back">
          这是一本书
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Book',
  mounted() {
    let book = document.querySelector('.book'),
      leftPage = document.querySelector('.front-cover'),
      card = document.querySelector('.card'),
      shadow = document.querySelector('.shadow')
    let hold = false
    //鼠标是按住的状态
    leftPage.onmousedown = function () {
      hold = true
    }
    window.addEventListener('mouseup', function () {
      //鼠标不一定在page身上松开可能在其他地方松开，所以在window身上设置监听事件
      hold = false
    })
    let clamp = function (val, min, max) {
      return Math.max(min, Math.min(val, max))
    }
    window.onmousemove = function (event) {
      if (hold) {
        console.log(event.pageX)

        var angle = clamp(
          ((window.innerWidth / 2 - event.pageX + 300) / 300) * -90,
          -180,
          0,
        ) //300为书的宽度
        //该angle公式中的值不固定，可以设置其他
        // leftPage.style.transform='rotate('+angle+'deg)'
        leftPage.style.transform = `rotateY(${angle}deg)`
        card.style.transform = `rotateX(${angle / 2}deg)`
        shadow.style.transform = `skewX(${angle / 10}deg)`
        book.style.transform = `rotateX(${60 + angle / 8}deg)`
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.container {
  height: 100vh;
  color: #fff;
  perspective: 1000px; //必不可少！
  background: #444;
  background-image: linear-gradient(to bottom, #444, #999);
}
.book {
  width: 300px;
  height: 300px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -150px;
  margin-left: -150px;
  transform: rotateX(45deg);

}

.book .page {
  width: 300px;
  height: 300px;
  padding: 1em;
  position: absolute;
  left: 0;
  top: 0;
  text-indent: 2em;
}
.book .front {
  background-color: #fff;
}
.book .back {
  background-color: #fff;
}
.book .front-cover {
  cursor: move; //鼠标放上去呈十字架形状
  transform-origin: 0 50%;
  //transform:rotateY(-160deg) //可以利用这个看看旋转的效果
}
.p3d {
  transform-style: preserve-3d;
}

.book .front-cover .back {
  background-color: lightblue;
  // background-image: url('https://preview.qiantucdn.com/58pic/35/01/38/55A58PICaUy8sV83Dd78m_PIC2018.jpg%21w1024_new_3072');
  background-repeat: no-repeat;
  background-size: cover;
  transform: translateZ(3px);
}
.book .back-cover .back {
  transform: translateZ(-3px);
}

.book .flip {
  transform: rotateY(180deg);
}

.book .shadow,
.book .card {
  width: 196px;
  height: 132px;
  position: absolute;
  top: 60px;
  left: 60px;
  transform-origin: 0 100%; //设置旋转起点
}
.book .card {
  background-color: lightsalmon;
  // background: url('https://preview.qiantucdn.com/58pic/35/01/38/55A58PICaUy8sV83Dd78m_PIC2018.jpg%21w1024_new_3072');
  background-size: cover;
}
.book .shadow {
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
