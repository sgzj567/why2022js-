<template>
  <div class="control">
    <template v-for="(item, index) in titles">
      <div class="control-item" @click="ItemClick(index)" :class="{ active: index === currentIndex }">
        <span>{{ item }}</span>

      </div>
    </template>
  </div>
</template>

<script>

export default {
  emits: ["addClass"],
  props: {
    titles: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      currentIndex: 0,
    }
  },
  methods: {
    ItemClick(index) {
      this.currentIndex = index
      this.$emit("addClass", index)
      // console.log(this.currentIndex);
    }
  }
}
</script>

<style scoped>
.control {
  display: flex;
  text-align: center;
}

.control-item {
  flex: 1;
}

.control-item.active {
  color: red;
}

.control-item.active span {
  border-bottom: 2px solid red;
  padding: 8px;
}
</style>
