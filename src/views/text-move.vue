<template>
  <div class="container">
    <div class="text">
      轻轻的我走了， 正如我轻轻的来； 我轻轻的招手， 作别西天的云彩。
      那河畔的金柳， 是夕阳中的新娘； 波光里的艳影， 在我的心头荡漾。
      软泥上的青荇， 油油的在水底招摇； 在康河的柔波里， 我甘心做一条水草！
      那榆荫下的一潭， 不是清泉，是天上虹； 揉碎在浮藻间， 沉淀着彩虹似的梦。
      寻梦？撑一支长篙， 向青草更青处漫溯； 满载一船星辉， 在星辉斑斓里放歌。
      但我不能放歌， 悄悄是别离的笙箫； 夏虫也为我沉默， 沉默是今晚的康桥！
      悄悄的我走了， 正如我悄悄的来； 我挥一挥衣袖， 不带走一片云彩。
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    const txt = document.querySelector('.text')
    txt.innerHTML = txt.textContent.replace(/\S/g, '<span>$&</span>')

    const arr = document.querySelectorAll('span')
    console.log(arr);
    arr.forEach(function (temp) {
      temp.addEventListener('mouseover', () => {
        temp.classList.add('move')
      })
    })
  },
}
</script>

<style lang="scss">
.container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(0, 0, 0);
  overflow: hidden;
}
.text {
  position: relative;
  width: 700px;
  text-indent: 2em;
  color: rgb(255, 255, 255);
  font-size: 18px;
  cursor: pointer;
  user-select: none;
  text-align: justify;
}
.text span {
  position: relative;
  display: inline-block;
  transform-origin: bottom;
  text-indent: 0;
}

.text .move {
  opacity: 0;
  transform: translate(600px, -500px) rotate(360deg) scale(5);
  // filter: blur(20px);
  transition: all linear 2s;
  // animation: up 2s linear forwards;
}

@keyframes up {
  100% {
    opacity: 0;
    filter: blur(20px);
    transform: translate(600px, -500px) rotate(360deg) scale(5);
  }
}
</style>
