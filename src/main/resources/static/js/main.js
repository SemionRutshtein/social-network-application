import Vue from 'vue'
import Vuetify from 'vuetify'
import 'api/resource'
import App from '/media/semion/D/idea-projects/db-sarafan-app/sarafan-AddJPA/src/main/resources/static/js/pages/App.vue'
import { connect } from './util/ws'
import 'vuetify/dist/vuetify.min.css'

if (frontendData.profile) {
    connect()
}
Vue.use(Vuetify)

new Vue({
    el: '#app',
    render: a => a(App)
})
