new Vue({
    el: '#app',
    data: {
        life: {
            user: 100,
            monster: 100
        },
        gameIsRunning: false,
        attacks: {
            user: [],
            monster: []
        },
        turns: []
    },
    computed: {
        lifeUser: function() {
            return this.user.width = this.life.user;
        }
    },
    methods: {
        newGame: function() {
            this.life.user = 100;
            this.life.monster = 100;
            this.gameIsRunning = true;
            this.turns = [];
        },
        attack: function() {            
            //value damaged by the user
            this.life.monster = this.life.monster - this.calculateDamage(1, 15);
            if (this.checkWin()) {
                return;
            }
            this.monsterAttacks();
        },
        specialAttack: function () {
            //value damaged by the user
            this.life.monster = this.life.monster - this.calculateDamage(5, 20);
            if (this.checkWin()) {
                return;
            }
            this.monsterAttacks();
        },
        heal: function () {
            var heal = Math.floor((Math.random() * 15) + 1);
            this.life.user = this.life.user + heal;
            if (this.life.user > 100) {
                this.life.user = 100;
            }
            this.turns.push(heal);
            this.monsterAttacks();
        },
        giveUp: function () {
            if (confirm('Do you really want to give up this game?')) {
                this.gameIsRunning = false;
            }
        },
        monsterAttacks: function () {
            //value damaged by the monster
            this.life.user = this.life.user - this.calculateDamage(1, 15);
            this.checkWin();
        },
        calculateDamage: function (min, max) {
            var damage = Math.floor((Math.random() * max) + min);
            this.turns.push(-damage);
            return damage;
        },
        checkWin: function () {
            if (this.life.monster <= 0) {
                if (confirm('You won! New game?')) {
                    this.newGame();
                } else {
                    this.gameIsRunning = false;
                    this.life.monster = 0;
                }
                return true;
            } else if (this.life.user <= 0) {
                if (confirm('You lost! New game?')) {
                    this.newGame();
                } else {
                    this.gameIsRunning = false;
                    this.life.user = 0;
                }
                return true;
            }
            return false;
        }

    }
});