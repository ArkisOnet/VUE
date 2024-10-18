import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import TalentMarketplace from '@/components/TalentMarketplace.vue';
import OutsourcingEOR from '@/components/OutsourcingEOR.vue';
import TalentPoolManagement from '@/components/TalentPoolManagement.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        { path: '/', component: HomePage },
        { path: '/marketplace', component: TalentMarketplace },
        { path: '/outsourcing', component: OutsourcingEOR },
        { path: '/talent-pool', component: TalentPoolManagement }
    ]
});
