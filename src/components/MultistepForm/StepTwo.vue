<template>
  <div>
    <h2 class="title">Подтверждение удаленной идентификации</h2>
    <div class="subtitle">Мы отправили SMS с кодом на ваш номер телефона</div>
    <progress-bar
      :step="stepNumber"
      :stepsCount="stepsCount"
      :stepName="'Подписание договора'"
    />
    <form @submit.prevent="nextStep" class="multistep-form__form">
      <div class="multistep-form__form-item">
        <label for="code" class="multistep-form__code">Код</label>
        <input
          type="number"
          id="code"
          v-model.trim="code"
          placeholder="Введите код из смс"
          :class="{
            invalid: $v.code.$dirty && !$v.code.required,
          }"
        />
        <div
          class="multistep-form__form-error"
          v-if="$v.code.$dirty && !$v.code.required"
        >
          Поле обязательно к заполнению
        </div>
      </div>
      <button
        type="submit"
        class="multistep-form__button"
        :disabled="buttonDisabled || disabledButton"
      >
        Проверить код
      </button>
    </form>
    <div class="code-counter">
      <span class="code-counter__text">Отправить код повторно через</span>
      <span v-if="count" class="code-counter__value">{{ count }} секунд</span>
      <button
        v-else
        class="code-counter__repeat"
        type="button"
        @click="sendCode()"
      >
        <span>отправить заново</span>
      </button>
    </div>
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
import { validationMixin } from 'vuelidate'
import ProgressBar from '../MultistepForm/ProgressBar.vue'
export default {
  mixins: [validationMixin],
  props: {
    stepNumber: {
      type: Number,
      default: 1,
    },
    stepsCount: {
      type: Number,
      default: 1,
    },
    disabledButton: {
      type: Boolean,
      default: false,
    },
  },
  components: { ProgressBar },
  data() {
    return {
      buttonDisabled: true,
      count: 3,
      code: '',
      timer: null,
    }
  },
  validations: {
    code: { required },
  },
  mounted() {
    this.startTimer()
  },
  methods: {
    nextStep() {
      if (this.$v.$invalid) {
        this.$v.$touch()
      } else {
        this.$emit('next-step', 3, { code: this.code })
      }
    },
    sendCode() {
      this.count = 80
      this.startTimer()
    },
    startTimer() {
      this.stopTimer()
      this.timer = setInterval(() => {
        if (this.count === 0) {
          this.stopTimer()
          this.buttonDisabled = false
        } else {
          this.count--
        }
      }, 1000)
    },
    stopTimer() {
      clearInterval(this.timer)
    },
  },
}
</script>

<style lang="scss" scoped>
.multistep-form {
  &__form {
    display: flex;
    flex-direction: column;
    input {
      margin-bottom: 20px;
    }
  }
  &__code {
    display: flex;
    flex-direction: column;
    margin-bottom: 5px;
  }
  &__button {
    margin-top: 50px;
    margin-bottom: 20px;
  }
}
.title {
  margin-bottom: 10px;
}
.subtitle {
  margin-bottom: 50px;
}
.code-counter {
  text-align: center;
  display: flex;
  flex-direction: column;
  &__value {
    color: #6174ff;
  }
}
.code-counter__repeat {
  padding: 0;
  margin: 0;
  cursor: pointer;
  outline: none;
  border: none;
  background: transparent;
  color: #6174ff;
  align-self: center;
}
</style>
