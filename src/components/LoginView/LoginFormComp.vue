<script lang="ts" setup>
import { ref } from "vue";

const profile = ref({
  username: "",
  password: "",
});
</script>

<template>
  <form action="#" @submit.prevent>
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
      <a href="javascript:void(0)">立即注册</a>
      <a href="javascript:void(0)">忘记密码</a>
    </div>
  </form>
</template>

<style scoped>
/* 表单整体样式 */

form {
  width: 40rem;
  height: 50rem;
  background-color: rgba(0, 0, 0, 0.2);
  border: 1px solid #ffffff;
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
  border: 1px solid #ffffff;
  border-radius: 2.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
}
form .username-box img,
form .password-box img {
  width: 3rem;
  height: 3rem;
  cursor: pointer;
}
form .username-box input,
form .password-box input {
  padding: 0 1rem;

  flex: 1;
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
</style>
