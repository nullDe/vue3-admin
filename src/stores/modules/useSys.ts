import { defineStore } from 'pinia';
import { sysState } from './types'
const useSys = defineStore('sys', {
    state: ():sysState => ({
        theme: 'blue'
    })
    // getters:{
    //     theme: (state) => state.theme
    // }
})

export default useSys