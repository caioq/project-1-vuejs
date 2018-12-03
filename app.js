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
        lifeUser: function () {
            return this.user.width = this.life.user;
        }
    },
    methods: {
        newGame: function () {
            this.life.user = 100;
            this.life.monster = 100;
            this.gameIsRunning = true;
        },
        attack: function () {
            var damage = 0;
            //value damaged by the user
            damage = Math.floor((Math.random() * 15) + 1);
            this.life.monster = this.life.monster - damage;
            this.attacks.user.push(damage);
            this.turns.push(-damage);
            //value damaged by the monster
            damage = Math.floor((Math.random() * 15) + 1);
            this.life.user = this.life.user - damage;
            this.attacks.monster.push(damage);
            this.turns.push(-damage);
        }
    }
});