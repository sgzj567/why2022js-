<template>
  <div class="app">
    <!-- 头部区域 -->
    <app-header :title="high_score.title" :subtitle="high_score.subtitle"></app-header>

    <!-- 房间列表 -->

    <div class="room-list">
      <template v-for="high in high_score.list" :key="high.id">
        <room-list :infos="high"></room-list>
      </template>
    </div>
  </div>

</template>

<script setup>
import high_score from './data/high_score.json'
import AppHeader from './components/AppHeader.vue';
import roomList from './components/RoomList.vue'
</script>

<style lang="less" scoped>
.app {
  width: 1032px;
  margin: 0 auto;

  .room-list {
    display: flex;
    flex-wrap: wrap;
    margin-top: 30px;

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
  }
}
</style>
