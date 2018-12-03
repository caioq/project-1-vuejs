new Vue({
    el: '#app',
    data: {
        life: {
            user: 100,
            monster: 100
        },
        gameIsRunning: false
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
            this.life.user = 80;
        }
    }
});