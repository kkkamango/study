import { createApp } from 'vue'
import App from './App.vue'
// import {store} from '/@store/index.js'
import {router} from '/@router/router.js'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.esm.js'

const app = createApp(App);
// app.use(store); // 플러그인 등록
app.use(router); // 라우터 등록
app.mount('#app')
