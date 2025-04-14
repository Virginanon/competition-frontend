<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const profile = ref({
  username: "",
  password: "",
});

async function submit() {
  alert("接口未实现");
  router.replace({ name: "home" });
}
</script>

<template>
  <form action="#" @submit.prevent="submit">
    <div class="account-icon-box">
      <img src="/src/assets/icons/account-circle-fill-white.svg" />
    </div>

    <div class="username-box">
      <label for="username"><img src="/src/assets/icons/person-white.svg" /></label>
      <input
        id="username"
        type="tel"
        v-model.lazy="profile.username"
        placeholder="用户名"
        required
      />
    </div>
    <div class="password-box">
      <label for="password"><img src="/src/assets/icons/lock-white.svg" /></label>
      <input
        id="password"
        type="password"
        v-model.lazy="profile.password"
        placeholder="登录密码"
        required
      />
    </div>

    <input type="submit" value="登录" />

    <div class="register-and-forget-password">
      <a href="javascript:void(0)" @click="$router.push({ name: 'register' })">立即注册</a>
      <a href="javascript:void(0)" @click="$router.push({ name: 'forget password' })">忘记密码</a>
    </div>
  </form>
</template>

<style scoped>
/* 表单整体样式 */

form {
  width: 40rem;
  height: 50rem;
  background-color: rgba(0, 0, 0, 0.2);
  border: 0.1rem solid #ffffff;
  border-radius: 5px;

  position: fixed;
  top: 50%;
  right: 10%;
  transform: translateY(-50%);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

/* 登录图标样式 */

form .account-icon-box {
  width: 100%;
  height: 20rem;

  display: flex;
  justify-content: center;
  align-items: center;
}
form .account-icon-box img {
  width: 10rem;
  height: 10rem;
}

/* 用户名和密码样式 */

form .username-box,
form .password-box {
  padding: 0 2.5rem;
  width: 35rem;
  height: 5rem;
  border: 0.1rem solid #ffffff;
  border-radius: 2.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
}
form .username-box label,
form .password-box label {
  width: 3rem;
  height: 3rem;
  cursor: pointer;
}
form .username-box img,
form .password-box img {
  width: 3rem;
  height: 3rem;
}
form .username-box input,
form .password-box input {
  padding: 0 0 0 1rem;

  width: 27rem;
  height: 5rem;
  background-color: transparent;
  border: none;

  color: #ffffff;
  font-weight: 500;
  font-size: 1.6rem;
}
form .username-box input::placeholder,
form .password-box input::placeholder {
  color: #cfcaca;
}

/* 提交按钮样式 */

form input[type="submit"] {
  width: 35rem;
  height: 5rem;
  background-color: #ffffff;
  border: none;
  border-radius: 2.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.6rem;
  letter-spacing: 1.6rem;
  color: #333333;

  transition: all 0.2s;
}
form input[type="submit"]:hover {
  cursor: pointer;
  background-color: #cdcbcb;
}

/* 注册与忘记密码样式 */

form .register-and-forget-password {
  width: 35rem;
  flex: 1;

  display: flex;
  justify-content: space-between;
  align-items: center;
}
form .register-and-forget-password a {
  font-size: 1.2rem;
  color: #ffffff;
  letter-spacing: 0.2rem;
}
form .register-and-forget-password a:hover {
  text-decoration: underline;
}

/* 媒体查询实现响应式 */

@media screen and (orientation: portrait) {
  form {
    right: 50%;
    transform: translate(50%, -50%);
  }
}

@media screen and (width <= 500px) {
  /* 表单整体样式 */
  form {
    width: 30rem;
    height: 40rem;
  }

  /* 登录图标样式 */

  form .account-icon-box {
    height: 15rem;
  }
  form .account-icon-box img {
    width: 8rem;
    height: 8rem;
  }

  /* 用户名和密码样式 */

  form .username-box,
  form .password-box {
    padding: 0 2rem;
    width: 25rem;
    height: 4rem;
    border-radius: 2rem;
  }
  form .username-box label,
  form .password-box label {
    width: 2.5rem;
    height: 2.5rem;
  }
  form .username-box img,
  form .password-box img {
    width: 2.5rem;
    height: 2.5rem;
  }
  form .username-box input,
  form .password-box input {
    padding: 0 0 0 1rem;

    width: 18.5rem;
    height: 4rem;
  }

  /* 提交按钮样式 */
  form input[type="submit"] {
    width: 25rem;
    height: 4rem;
    background-color: #ffffff;
    border: none;
    border-radius: 2rem;
  }

  /* 注册与忘记密码样式 */

  form .register-and-forget-password {
    width: 25rem;
  }
}
</style>
