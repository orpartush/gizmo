<template>
  <section class="app-chat icy-theme" :class="cmp.subClass">
    <div class="unopened-chat-container flex space-between" @click.prevent="toggleChat" v-if="!chatOpen">
      <section class="unopened-chat-titles">
        <p>Let's Chat!</p>
        <p class="chat-sm-txt">
          <span class="fas fa-bolt"></span>
          We'll reply as soon as we can
        </p>
      </section>
      <span class="flex justify-center align-center"></span>
    </div>
    <div v-if="chatOpen" class="chat-container">
      <div class="unopened-chat-container flex space-between" @click.prevent="toggleChat">
        <section class="unopened-chat-titles">
          <p>Let's Chat!</p>
          <p class="chat-sm-txt">
            <span class="fas fa-bolt"></span>
            We'll reply as soon as we can
          </p>
        </section>
        <span class="arrow-icon fas fa-angle-down flex justify-center align-center"></span>
      </div>
      <ul class="msgs-container">
        <li 
          v-for="(msg, index) in msgs" 
          :key="index"
          :class="[msg.username === 'Support' ? 'support' : '']">
          {{msg.username}}: {{msg.txt}}
        </li>
      </ul>
      <div class="msg-send-container">
        <input ref="msg-input" v-model="userMsg.txt" @keyup="checkKey" type="text" placeholder="Type your message..." />
        <span class="msg-send far fa-paper-plane" @click="sendMsg" title="Send"></span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    cmp: Object
  },
  data() {
    return {
      userMsg: {username: 'Guest', txt: ''},
      autoMsg: { username: 'Support', txt: 'Sure thing honey' },
      msgs: [],
      chatOpen: false
    };
  },

  computed: {
    isSupport() {
      return msg.username === 'Support'
    },
  },

  methods: {
    sendMsg() {
      let copyMsg = JSON.parse(JSON.stringify(this.userMsg))
      this.msgs.push(copyMsg);
      this.userMsg.txt = '';
      
      setTimeout(() => {
        this.msgs.push(this.autoMsg);
      }, 1500);
    },
    checkKey(e) {
      if (e.keyCode === 13) this.sendMsg()
    },
    toggleChat(){
        this.chatOpen = !this.chatOpen;
    }
  }
};
</script>
