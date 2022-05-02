<template>
  <div id="chat" class="chat">
    <div class="chat_people">
      <div class="messages" id="messages">
        <li v-for="message in messages" :key="message.id">
          <div>{{ message.sender }} : {{ message.message }}</div>
        </li>
      </div>
      <div class="text">
        <i class="fa fa-paperclip fa-lg icon"></i>
        <input
          id="msgInput"
          type="text"
          class="send_text"
          placeholder="Введите текст сообщения"
          v-model="message"
        />
        <button class="send" @click="onSend()">
          <i class="fa fa-paper-plane fa-lg send_icon"></i>
          <p>Отправить</p>
        </button>
      </div>
    </div>
    <div class="chat_text"></div>
  </div>
</template>

<script>
export default {
  name: "Chat",
  props: ['userData'],
  mounted() {
    document.getElementById("msgInput").addEventListener("keydown", (e) => {
      e.keyCode === 13 && this.onSend();
    });
  },
  unmounted() {
    document.getElementById("msgInput").removeEventListener("keydown");
  },
  data() {
    return {
      messages: [
        { id: 1, message: "Привет, как дела?", sender: "Настя" },
        { id: 2, message: "Привет, хорошо", sender: "Кирилл Малышев" },
      ],
      message: "",
    };
  },
  methods: {
    onSend() {
      this.messages.push({
        id: this.messages.length + 1,
        message: this.message,
        sender: "Настя",
      });
      this.message = "";
    },
  },
};
</script>

<style scoped>
.chat {
  width: 70%;
  height: 80%;
  min-width: 600px;
  border-radius: 15px;
  background-color: rgb(190, 238, 223);
  display: flex;
  align-self: center;
  flex-direction: row;
  align-items: center;
  font-size: 14px;
}
.chat_people {
  width: 70%;
  height: 80%;
  background-color: rgb(144, 204, 182);
  display: flex;
  flex-direction: column;
  justify-content: end;
}
.messages {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 10px 10px 10px;
  gap: 7px;
}
.messages li {
  list-style-type: none;
}

.messages div {
  width: max-content;
  padding: 15px;
  border-radius: 20px;
  background: #e6e6e6e7;
  font-size: 16px;
}

.chat_text {
  width: 30%;
  height: 80%;
  background-color: rgb(255, 255, 255);
}
.text {
  width: calc(100% - 20px);
  gap: 10px;
  height: 15%;
  background-color: rgb(255, 255, 255);
  align-self: flex-end;
  display: flex;
  justify-content: space-around;
  padding: 0 10px;
}
.send {
  display: flex;
  align-self: center;
  font-size: 16px;
  outline: none;
  border-radius: 25px;
  align-items: center;
  justify-content: center;
  border: none;
  flex: 1;
  height: 60%;
  color: white;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-weight: 500;
  box-shadow: 0 0 40px 40px #3498db inset, 0 0 0 0 #3498db;
  border-color: #3498db;
  transition: all 150ms ease-in-out;
  cursor: pointer;
}
.send:hover {
  color: black;
  box-shadow: 0 0 10px 0 #3498db inset, 0 0 10px 4px #3498db;
}
.send:active {
  color: white;
  box-shadow: 0 0 40px 40px #3498db inset, 0 0 0 0 #3498db;
}

.send_text {
  align-self: center;
  font-size: 16px;
  outline: none;
  border-radius: 25px;
  border: none;
  padding-left: 10px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  background-color: rgb(206, 231, 222);
  flex: 5;
  height: 60%;
}
.icon {
  align-self: center;
  cursor: pointer;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.icon::before {
  position: absolute;
  left: 5px;
  top: 7px;
}
.icon:hover {
  background: #79797949;
}
.send_icon {
  display: none !important;
}

@media (max-width: 900px) and (max-height: 600px),
  (max-width: 600px) and (max-height: 900px) {
  .chat {
    height: 100%;
    border-radius: 0;
    align-items: flex-end;
  }
  .chat_people {
    height: 90%;
  }
  .chat_text {
    display: none;
  }
  .chat {
    width: 100%;
    min-width: 0;
  }
  .chat_people {
    width: 100%;
  }
}
@media (max-width: 1280px) {
  .send_icon {
    display: flex !important;
  }
  .send p {
    display: none;
  }
}
</style>
