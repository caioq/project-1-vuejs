new Vue({
    el: '#app',
    data: {
        life: {
            user: 100,
            monster: 100
        }
    },
    methods: {
        newGame: function () {
            this.life.user = 100;
            this.life.monster = 100;
        }
    }
});