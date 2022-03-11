<template>
  <div id="reg" class="reg">
    <h>Зарегистрироваться</h>
    <input v-model="message" type="text" class="item" placeholder="Логин" />
    <input type="text" class="item" placeholder="Пароль" />
    <input type="text" class="item" placeholder="Подтвердите пароль" />
    <button id="button_reg" class="button_reg">Зарегистрироваться</button>
    <router-link to="/login">
      <button id="button_authoriz" class="button_reg">Войти</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Reg",
  props: {},
};
</script>

<style scoped>
.reg {
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

.button_reg {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 14px;
  border-radius: 5px;
  border: none;
  padding: 5px;
  background-color: rgb(89, 133, 118);
}

.button_reg:hover {
  cursor: pointer;
}
</style>
