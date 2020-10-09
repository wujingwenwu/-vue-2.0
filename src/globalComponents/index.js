import Vue from 'vue'

import WLockScreen from '../components/w-lockScreen/w-lockScreen';
import WQrcode from "../components/w-qrcode/w-qrcode.vue";
import WCountdown from "../components/w-countdown/w-countdown"

Vue.component('WCountdown', WCountdown)
Vue.component('wLockScreen', WLockScreen)
Vue.component('WQrcode', WQrcode)
