<template>
  <router-view @login="onLogin"/>
</template>

<script>
export default {
  data(){
    return{
      userData: {}
    }
  },
  methods:{
    onLogin(username, password){
      userData = {username: username, password: password }
    }
  }
}
</script>

<style>
body {
  margin: 0;
}
#app {
  width: 100vw;
  height: 100vh;
  background-color: rgb(201, 218, 212);
  display: flex;
  justify-content: center;
}
</style>
