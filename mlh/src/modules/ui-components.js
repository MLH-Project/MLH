
import Vue from 'vue'

// 倒计时
import Countdown from "../components/pages/GoodsDetail/Countdown.vue"
Vue.component('Countdown', Countdown)

import UIInput from '../components/commons/UIInput.vue'
import AppHomeNavList from '../components/pages/Home/Special/SpecialBox'
import AppHomeBottom from '../components/pages/Home/Home-bottom'

Vue.component('ui-input', UIInput)
Vue.component("AppHomeNavList", AppHomeNavList)
Vue.component("AppHomeBottom", AppHomeBottom)
