<template>
  <div class="room">
    <div class="roomItem">
      <div class="pic">
        <img :src="infos.picture_url" alt="">
      </div>
      <div class="info">
        <div class="message" :style="{ color: textStyle.text_color }">{{ textStyle.infoMessage
        }}
        </div>
        <div class="name">
          {{ infos.name }}
        </div>
        <div class="price_format">
          {{ infos.price_format + "/晚" }}
        </div>
        <!-- 内部样式驼峰命名 -->
        <div class="comment" :style="textStyle.style">
          {{ infos.bottom_info.content }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, defineProps } from 'vue';
const props = defineProps({
  infos: {
    type: Object,
    default: () => ({})
  }
})

// 利用计算和属性设置样式 computed
// 设置message样式
// const textColor = computed(() => {
//   return {
//     text_color: props.infos.verify_info.text_color
//   }
// })
const textStyle = computed(() => {
  return {
    text_color: props.infos.verify_info.text_color,
    infoMessage: props.infos.verify_info.messages.join(" "),
    style: {
      color: props.infos.bottom_info.content_color,
      fontSize: props.infos.bottom_info.font_size + "px"
    }
  }
})
</script>

<style lang="less" scoped>
.room {
  width: 33.33%;

  .roomItem {
    padding-right: 10px;

    .info {
      .message {
        font-size: 12px;
      }

      .name {
        font-size: 14px;
        font-weight: 700;
      }


    }

    img {
      // 与父级一样宽 高等比例缩放 如果不写会撑大父级盒子
      width: 100%;
      border-radius: 3px;
    }
  }

}
</style>
