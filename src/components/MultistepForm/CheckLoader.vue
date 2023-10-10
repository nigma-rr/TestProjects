<template>
  <div class="check-loader">
    <div v-if="load" class="check-loader__state">
      <div class="check-loader__icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          style="margin: auto; display: block; shape-rendering: auto"
          width="150px"
          height="150px"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid"
        >
          <circle
            cx="50"
            cy="50"
            fill="none"
            stroke="#ff0000"
            stroke-width="10"
            r="35"
            stroke-dasharray="164.93361431346415 56.97787143782138"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              repeatCount="indefinite"
              dur="2.6315789473684212s"
              values="0 50 50;360 50 50"
              keyTimes="0;1"
            />
          </circle>
        </svg>
      </div>
      <div class="check-loader__text">
        Проверка ваших данных!<br />
        Это займет до 30 минут!
      </div>
    </div>
    <div v-else class="check-loader__state">
      <div class="check-loader__icon check-loader__icon--complete">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          width="150px"
          height="150px"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      <div class="check-loader__text">
        Договор подписан.<br />
        Ожидайте поступления денежных средств.
      </div>
      <button
        type="button"
        class="multistep-form__button multistep-form__button--loader"
        @click="hideLoader()"
      >
        ОК
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    load: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {}
  },
  methods: {
    hideLoader() {
      this.$emit('hide-check-loader')
    },
  },
}
</script>

<style scoped lang="scss">
.check-loader {
  padding: 80px 0;
  &__text {
    margin-top: 30px;
    text-align: center;
  }
  &__icon {
    &--complete {
      text-align: center;
      color: #58d496;
    }
  }
  .multistep-form__button--loader {
    margin-top: 50px;
  }
}
</style>
