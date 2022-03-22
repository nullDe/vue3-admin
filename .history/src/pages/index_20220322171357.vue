<template>
    <div>
        首页{{ num }}
        <div class="color">颜色</div>
        <router-link to="/login">登录页面</router-link>
        <div @click="bindLogin">登录</div>
    </div>
</template>
<script lang="ts">
import { ref } from 'vue';
import useSys from '@/stores/modules/useSys';
import { login } from '@/apis/login'
export default {
    setup(){
        console.info('login', login);
         const num = ref(123123213);
         console.info(useSys().theme)
         async function bindLogin(){
            let res = await login({
             userName: 'xin'
             })
             console.info('ss1', res)
         }
        return {
            num,
            bindLogin
        }
    }
}
</script>

<style lang="scss">
    .color{
        color: $red
    }
</style>