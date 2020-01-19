new Vue({
  el: "#app",
  data: {
    gameStarted: false,
    playerHealth: 100,
    monsterHealth: 100,
    gameLog: []
  },
  methods: {
    startGame: function() {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.gameLog = [];
      this.gameStarted = true;
    },
    normalPlayerAttack: function() {
      const dmg = Math.floor(Math.random() * 10);
      this.monsterHealth -= dmg;

      const playerLog = {
        text: `Your normal attack deals ${dmg} damage!`,
        isPlayer: true
      };
      this.updateGameLog(playerLog);

      this.normalMonsterAttack();
    },
    normalMonsterAttack: function() {
      const dmg = Math.floor(Math.random() * 10);
      this.playerHealth -= dmg;

      const monsterLog = {
        text: `The monster deals ${dmg} damage!`,
        isPlayer: false
      };
      this.updateGameLog(monsterLog);
    },
    specialPlayerAttack: function() {
      const dmg = Math.floor(Math.random() * 20);
      this.monsterHealth -= dmg;

      const playerLog = {
        text: `Your special attack deals ${dmg} damage!`,
        isPlayer: true
      };
      this.updateGameLog(playerLog);

      this.normalMonsterAttack();
    },
    healPlayer: function() {
      if (this.playerHealth >= 100) {
        this.playerHealth = 100;
        return;
      }
      const healing = Math.floor(Math.random() * 15);
      this.playerHealth += healing;

      const playerLog = {
        text: `You heal ${healing} damage!`,
        isPlayer: true
      };
      this.updateGameLog(playerLog);

      this.normalMonsterAttack();
    },
    giveUp: function() {
      this.playerHealth = 0;
    },
    updateGameLog: function(log) {
      this.gameLog.unshift(log);
    }
  },
  computed: {},
  watch: {
    playerHealth: function() {
      if (this.playerHealth <= 0) {
        alert("YOU LOSE!");

        this.startGame();
      }

      return {
        width: this.playerHealth + "%"
      };
    },
    monsterHealth: function() {
      if (this.monsterHealth <= 0) {
        alert("YOU WIN!");

        this.startGame();
      }

      return {
        width: this.monsterHealth + "%"
      };
    }
  }
});
