const app = Vue.createApp({
  data() {
    return {
      goal: 'goal a',
      goalB: '<h2>goal b</h2>',
      vueLink: 'https://vuejs.org',
    };
  },
  methods: {
    outPutGoal() {
      const rand = Math.random();
      return rand > 0.5 ? this.goal : this.goalB;
    },
  },
});

app.mount('#user-goal');
