<template>
  <div>
    <h2 class="title">
      <span>
        Migrating From MySQL to YugabyteDB Using YugabyteDB Voyager
      </span>
    </h2>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.title {
  color: #333;
  width: 40px;
}

.title span {
  background: linear-gradient(to right, #ec695c, #61c454) no-repeat right bottom;
  background-size: 0 2px;
  transition: background-size 1000ms;
}
.title span:hover {
  background-position-x: left;
  background-size: 100% 2px;
}
</style>
