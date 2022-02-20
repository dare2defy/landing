<template>
  <aside class="subscription">
    <h3>Subscribe</h3>
    <div class='field'>
      <input
        v-model='data.email'
        type='email'
        name='email'
        :placeholder='!data.isSubscribed ? "Enter your Email" : "You are subscribed!"'
        :disabled='data.isSubscribed'
      >
      <button :disabled='data.isSubscribed || !canSubmit' @click='simpleSubscribe(data.email)'>
        {{ buttonText }}
      </button>
    </div>
  </aside>
</template>

<script lang="ts">
import { reactive, computed } from 'vue'
import { validateEmail } from '@/libs/utils'

export default {
  name: 'Subscription',

  setup () {
    const data = reactive(
      {
        email: '',
        loading: false,
        isSubscribed: false
      }
    )

    const isEmailValid = computed(() => validateEmail(data.email))

    const canSubmit = computed(() => isEmailValid.value && data.email?.length > 0)

    const buttonText = computed(() => {
      if (data.loading) { return 'Sending' }
      if (data.isSubscribed) { return 'Sent' }
      return 'Send'
    })

    const simpleSubscribe = async (email: string) => {
      console.log(email)

      const body = {
        records: [
          {
            fields: {
              Email: email
            }
          }
        ]
      }

      const reqData = {
        method: 'POST',
        headers: {
          Authorization: 'Bearer key2KX2McqUCrXAHG',
          'Content-Type': 'application/json'
        },
        // cache: 'no-cache',
        // credentials: 'same-origin',
        // redirect: 'follow',
        // referrerPolicy: 'no-referrer',
        body: JSON.stringify(body)
      }

      data.loading = true

      const response = await fetch('https://api.airtable.com/v0/appPy6z2lmR82gtqk/Subscribers', reqData)
      console.log('response', response)
      data.loading = false
      data.isSubscribed = true
    }

    return {
      data,
      isEmailValid,
      canSubmit,
      buttonText,
      simpleSubscribe
    }
  }
}
</script>

<style lang="scss" scoped>
.subscription {
  max-width: 320px;
  margin: var(--gap-big) auto 0;
}

h3 {
  margin: 0 0 var(--gap-half);
  font-size: 18px;
  font-weight: 500;
}

.field {
  position: relative;
  height: 48px;
  border: 1px solid #eee;
  border-radius: 8px;

  input {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0 12px;
    border: none;
    border-radius: 7px;
    background: none;
    color: var(--light);
    box-sizing: border-box;
    outline: none;

    &::placeholder {
      color: #dadada;
    }

    &:disabled {
      cursor: not-allowed;
    }
  }

  button {
    @extend %resetButton !optional;

    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 7px;
    right: 7px;
    width: 72px;
    height: 32px;
    border: none;
    border-radius: inherit;
    background: var(--light);
    color: var(--primary);

    &:disabled {
      cursor: not-allowed;
    }
  }
}

.ui-icon {
  font-size: 16px;
}

.check {
  color: var(--success);
  font-size: 22px;
}

.arrow {
  transform: rotate(180deg);
}
</style>
