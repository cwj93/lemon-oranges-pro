/*
 * @Description: 
 * @Version: 1.0
 * @Autor: CHENWJ
 * @Date: 2021-05-07 11:35:04
 * @LastEditors: CHENWJ
 * @LastEditTime: 2021-05-07 14:38:49
 */
import About from '../../views/About.vue'

const meta = {
    auth: true
};

export default {
    path: '/about',
    name: 'about',
    meta,
    component: About  
};
