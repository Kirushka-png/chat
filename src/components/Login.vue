<template>
  <div id="authoriz" class="authoriz">
    <h>Войти в аккаунт</h>
    <input v-model="username" type="text" class="item" placeholder="Логин" />
    <input v-model="password" type="text" class="item" placeholder="Пароль" />
    <button id="button_authoriz" class="button_authoriz" @click="onLogin()">
      Войти
    </button>
    <router-link to="/reg">
      <button id="button_reg" class="button_authoriz">Регистрация</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Login",
  props: {},
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    onLogin() {
      if (true) {
        document.location = "/chat"
      }
    },
  },
};
</script>

<style scoped>
.authoriz {
  width: 20%;
  height: 35%;
  min-width: 200px;
  min-height: 250px;
  border-radius: 15px;
  background-color: rgb(133, 180, 164);
  display: flex;
  align-self: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 20px;
}
.item {
  align-self: center;
  outline: none;
  border-radius: 5px;
  border: none;
  padding: 5px;
  font-size: 12px;
}
.button_authoriz {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 14px;
  border-radius: 5px;
  border: none;
  padding: 5px;
  background-color: rgb(89, 133, 118);
}
.button_authoriz:hover {
  cursor: pointer;
}
</style>
