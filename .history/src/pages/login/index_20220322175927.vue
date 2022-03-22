<template>
    <div class="login-wrap">
        
    </div>
</template>
<script lang="ts">
import { ref } from 'vue';
export default {
    setup(){
         const num = ref(123123213);
        return {
         
        }
    }
}
</script>

<style lang="scss" scoped>
.login-wrap {
    position:relative;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: center right;
    background-size: 100%;
}

.login-container{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 350px;
    background: #fff;
    padding:0 35px 15px 35px;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
}

.login-container .title{
    padding: 15px 0;
    text-align: center;
    color: #505458;
}

.login-container .remember{
    padding-bottom: 15px;
}
</style>