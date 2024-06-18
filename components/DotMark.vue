<template>
<div class="dot">
  <span></span>
  <span></span>
  <span></span>
</div>
</template>

<style scoped>
.dot span {
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin: 0px 5px;
}

.dot span:nth-child(1) {
  background-color: #fb6158;
}

.dot span:nth-child(2) {
  background-color: #fdbb2b;
}

.dot span:nth-child(3) {
  background-color: #29cc41;
}
</style>