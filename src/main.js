import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue } from 'bootstrap-vue'

// font awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faSearch, faChevronRight, faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// estilos app
import './styles/main.scss';

// después de las importaciones, le decimos a Vue que las use:
library.add(faBars, faSearch, faChevronRight, faUser, faSignOutAlt) // añade iconos de fontawesome a libreria
Vue.component('fa-icon', FontAwesomeIcon) // definimos el componente <fa-icon> para usar los iconos en los templates

Vue.use(BootstrapVue) // instala BootstrapVue
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')