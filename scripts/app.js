const app =Vue.createApp({
    data(){
        return{
            mainHeading: 'Welcome to the Vue.js!',
            message:'This message is displayed based on a boolean property.',
            showMessage: true
        };
    }

});
app.mount('#app');