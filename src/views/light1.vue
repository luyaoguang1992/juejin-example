<template>
  <div class="light">
    <div class="rope"></div>
    <div class="bulb"></div>
    <div class="switch" @click="toggle">
      <div class="btn"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'light',
  methods: {
    toggle() {
      document.querySelector('.light').classList.toggle('on')
    },
  },
}
</script>

<style lang="scss">
.light {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #222;
}
.light.on {
  background: radial-gradient(#fff, #111);
  .bulb {
    background-color: #fff;
    &::before {
      background-color: #fff;
    }
  }
}
.bulb {
  position: relative;
  width: 80px;
  height: 80px;
  background: #444;
  border-radius: 50%;
  z-index: 9;
}
.bulb::before {
  content: '';
  position: absolute;
  top: -50px;
  left: 22.5px;
  width: 35px;
  height: 80px;
  background: #444;
  border-top: 30px solid #000;
  border-radius: 10px;
}
.rope {
  position: absolute;
  left: calc(50% - 2px);
  bottom: 50%;
  width: 4px;
  height: 60vh;
  background: #000;
}
.switch {
  position: absolute;
  bottom: 50px;
  right: 50px;
  width: 80px;
  height: 80px;
  background: linear-gradient(#eee, #eee, #eee);
  border: 3px solid #000;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.switch .btn {
  position: relative;
  width: 25px;
  height: 40px;
  background: linear-gradient(#777, #fff, #777);
  border-radius: 6px;
  border: 2px solid #000;
  cursor: pointer;
}
.switch .btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 85%;
  background: linear-gradient(#777, #fff, #777);
  border-radius: 4px;
}
.on .switch .btn::before {
  top: 15%;
}
</style>
