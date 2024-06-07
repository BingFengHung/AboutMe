<template>
    <span class="tag"><&nbsp;</span>
    <span class="content"><slot></slot></span>
    <span class="tag">&nbsp;/></span>
</template>

<style scoped>
* {
  font-size: 3rem;
  color: white;
}

.tag {
  font-weight: 900;
}

.content {
  color: #51a7fc;
  font-weight: bold;
}

@media screen and (max-device-width: 480px) { 
  * {
    font-size: 2rem;
  }
}
</style>