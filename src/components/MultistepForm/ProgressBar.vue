<template>
  <div class="progress-bar">
    <div
      class="progress-bar__indicator"
      :style="'grid-template-columns: repeat(' + stepsCount + ', 1fr)'"
    >
      <div
        v-for="(item, index) in step"
        class="progress-bar__indicator-item"
        :key="index"
      ></div>
    </div>
    <div class="progress-bar__info">
      <div class="progress-bar__step">Шаг {{ step }} из {{ stepsCount }}</div>
      <div class="progress-bar__name">{{ stepNameText }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    step: {
      type: Number,
      default: 1,
    },
    stepsCount: {
      type: Number,
      default: 1,
    },
    stepName: {
      type: String,
      default: '',
    },
  },
  computed: {
    stepNameText() {
      return this.step != this.stepsCount
        ? `Следующий шаг: ${this.stepName}`
        : this.stepName
    },
  },
  data() {
    return {}
  },
}
</script>

<style lang="scss">
.progress-bar {
  &__indicator {
    margin-bottom: 10px;
    background: #eeeeee;
    height: 15px;
    border-radius: 20px;
    display: grid;
    &-item {
      background: #69ea79;
      &:first-child {
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
      }
      &:last-child {
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
      }
    }
  }
  &__step {
    font-weight: bold;
    white-space: nowrap;
    margin-right: 30px;
  }
  &__info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 20px;
    border-bottom: 1px solid #d6d6d6;
    margin-bottom: 30px;
  }
}
</style>
