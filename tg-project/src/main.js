import { createApp } from 'vue'
import App from './App.vue'
createApp(App).mount('#app')
import Vue from 'vue';
import router from './router'; // Подключаем роутер

Vue.config.productionTip = false;

new Vue({
    router, // Добавляем роутер в Vue приложение
    render: h => h(App),
}).$mount('#app');
