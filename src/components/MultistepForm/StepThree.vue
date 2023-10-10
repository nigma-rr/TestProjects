<template>
  <div>
    <h2 class="title">Условия</h2>
    <progress-bar
      :step="stepNumber"
      :stepsCount="stepsCount"
      :stepName="'Подписание договора'"
    />
    <form @submit.prevent="submitForm">
      <ul class="dogovor-info">
        <li class="dogovor-info__item">
          <div class="dogovor-info__name">Сумма займа:</div>
          <div class="dogovor-info__value">23 000 ₽</div>
        </li>
        <li class="dogovor-info__item">
          <div class="dogovor-info__name">Дата возврата:</div>
          <div class="dogovor-info__value">25 500 ₽</div>
        </li>
        <li class="dogovor-info__item">
          <div class="dogovor-info__name">Плата за заём:</div>
          <div class="dogovor-info__value">300 ₽</div>
        </li>
        <li class="dogovor-info__item">
          <div class="dogovor-info__name">Ставка:</div>
          <div class="dogovor-info__value">0.9%</div>
        </li>
        <li class="dogovor-info__item">
          <div class="dogovor-info__name">ПСК:</div>
          <div class="dogovor-info__value">30.04.2020</div>
        </li>
      </ul>
      <ul class="dogovor-links">
        <li class="dogovor-links__item">
          <a href="#">Проект сертификата дистанционный "Помощник Ц"</a>
        </li>
        <li class="dogovor-links__item">
          <a href="#">Памятка использования "Помощника Ц"</a>
        </li>
        <li class="dogovor-links__item">
          <a href="#">Согласие на подключение рекуррентного платежа</a>
        </li>
      </ul>
      <button type="submit" class="multistep-form__button">
        Подписать договор
      </button>
    </form>
  </div>
</template>

<script>
import ProgressBar from '../MultistepForm/ProgressBar.vue'
export default {
  props: {
    stepNumber: {
      type: Number,
      default: 1,
    },
    stepsCount: {
      type: Number,
      default: 1,
    },
  },
  components: { ProgressBar },
  data() {
    return {}
  },
  methods: {
    submitForm() {
      this.$emit('change-check-agreement', {})
    },
  },
}
</script>

<style lang="scss">
.dogovor-info {
  list-style: none;
  padding: 0;
  margin: 0;
  margin-bottom: 30px;
  &__item {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #d6d6d6;
    padding: 15px 0;
    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }
}
.dogovor-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #d6d6d6;
  padding-bottom: 30px;
  margin-bottom: 20px;
  &__item {
    a {
      color: #6174ff;
    }
    &:not(:last-child) {
      margin-bottom: 5px;
    }
  }
}
</style>
