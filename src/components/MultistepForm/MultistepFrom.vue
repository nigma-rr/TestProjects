<template>
  <div class="multistep-form">
    <div class="container">
      <button
        class="multistep-form__prev"
        @click="changeStep(currentStep - 1)"
        v-if="!checkAgreement"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <component
        v-if="!checkAgreement"
        :is="currentStepComponent"
        :stepNumber="currentStep"
        :stepsCount="stepsCount"
        :formData="formData"
        @next-step="nextStep"
        @prev-step="changeStep"
        @change-check-agreement="changeCheckAgreement"
      />
      <check-loader
        v-if="checkAgreement"
        @hide-check-loader="hideCheckLoader"
        :load="checkLoaderStatus"
      />
    </div>
  </div>
</template>

<script>
import StepOne from '../MultistepForm/StepOne.vue'
import StepTwo from '../MultistepForm/StepTwo.vue'
import StepThree from '../MultistepForm/StepThree.vue'
import CheckLoader from '../MultistepForm/CheckLoader.vue'
export default {
  components: {
    StepOne,
    StepTwo,
    StepThree,
    CheckLoader,
  },
  data() {
    return {
      currentStep: 3,
      formData: {
        agreement: true,
      },
      checkAgreement: false,
      stepsCount: 3,
      checkLoaderStatus: false,
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer 12345',
      },
    }
  },
  computed: {
    currentStepComponent() {
      switch (this.currentStep) {
        case 1:
          return 'StepOne'
        case 2:
          return 'StepTwo'
        case 3:
          return 'StepThree'
        default:
          return 'StepOne'
      }
    },
  },
  mounted() {
    document.addEventListener('keydown', this.handleKeyDown)
  },
  beforeDestroy() {
    document.removeEventListener('keydown', this.handleKeyDown)
  },
  methods: {
    nextStep(step, data) {
      if (JSON.stringify(this.formData) === JSON.stringify(data)) {
        this.currentStep = step
        return
      }
      this.mockRequest(data, this.headers)
        .then((response) => {
          const responseData = {
            success: true,
            data: response.data,
          }
          console.log(responseData)
          this.changeStep(step, data)
        })
        .catch(() => {
          const responseData = {
            success: false,
            error: 'Текст ошибки',
          }
          console.error(responseData)
        })
    },
    changeStep(step, data) {
      if (step == 0) return
      this.currentStep = step
      this.formData = { ...this.formData, ...data }
    },
    handleKeyDown(event) {
      if (event.keyCode === 37 || event.keyCode === 27) {
        this.changeStep(this.currentStep - 1)
      }
    },
    changeCheckAgreement(data) {
      this.formData = { ...this.formData, ...data }
      this.checkAgreement = true
      this.checkLoaderStatus = true
      console.log(this.formData)
      this.mockRequest(this.formData, this.headers)
        .then((response) => {
          const responseData = {
            success: true,
            data: response.data,
          }
          console.log(responseData)
          this.checkLoaderStatus = false
        })
        .catch(() => {
          const responseData = {
            success: false,
            error: 'Текст ошибки',
          }
          console.error(responseData)
        })
    },
    hideCheckLoader() {
      this.checkAgreement = false
      this.changeStep(1)
      this.formData = {}
    },
    mockRequest(data, headers) {
      return new Promise((resolve) => {
        // Проверка заголовков
        console.log(headers)

        setTimeout(() => {
          resolve({
            status: 200,
            data: {
              success: true,
              data: { info: 'Test' },
            },
          })
        }, 1000)
      })
    },
  },
}
</script>

<style lang="scss">
.title {
  text-align: center;
  margin: 0;
  margin-bottom: 30px;
}
.subtitle {
  text-align: center;
}
.multistep-form {
  background: #fff;
  position: relative;
  box-shadow: 0 5px 10px 10px rgb(0 0 0 / 16%);
  padding: 30px;
  max-width: 600px;
  margin: 0 auto;
  &__form {
    &-item {
      input.invalid {
        outline: 2px solid red;
      }
    }
    &-error {
      color: red;
      text-align: center;
      margin-top: 5px;
    }
  }
  input:not([type='checkbox']) {
    padding: 10px;
    width: 100%;
    box-sizing: border-box;
  }
  &__prev {
    position: absolute;
    top: 30px;
    left: 30px;
    background: transparent;
    color: red;
    outline: none;
    border: none;
    cursor: pointer;
    padding: 0;
    width: 25px;
    height: 25px;
  }
  &__step {
    display: flex;
    flex-direction: column;
  }
  &__button {
    cursor: pointer;
    background: red;
    border-radius: 40px;
    color: #fff;
    border: none;
    padding: 20px;
    width: 100%;
    max-width: 300px;
    align-self: center;
    display: block;
    margin: 0 auto;
    text-align: center;
    &:disabled {
      background: #e6e6e6;
      color: #b6b6b6;
    }
  }
}
.container {
  margin: 0 auto;
  max-width: 1024px;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
</style>
