<template>
  <div class="footer">
    <div class="box clearfix">
      <div class="left"></div>
      <div class="middle"></div>
      <div class="right"></div>
    </div>
  </div>
</template>

<script>

export default {
}
</script>

<style scoped>

     .clearfix:after {
       /*伪元素是行内元素 正常浏览器清除浮动方法*/
       content: "";
       display: block;
       height: 0;
       clear: both;
       visibility: hidden;
     }
  
     .clearfix {
       *zoom: 1;
       /*ie6清除浮动的方式 *号只有IE6-IE7执行，其他浏览器不执行*/
     }
  
.box {
  display: flex;
  height: 100px;
  background-color: aqua;
}

.left {
  width: 25%;
  background-color: antiquewhite;
}

.middle {
  width: 50%;
  background-color: red;
}

.right {
  width: 25%;
  background-color: beige;
}
</style>
