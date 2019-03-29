<template>
    <div>Welcome,<span class="name">{{userName}}</span>!</div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        data(){
            return {

            }
        },
        computed:{
            ...mapState({
                name:state => state.hello.name
            })
        }
    }
</script>

<style lang="postcss" scoped>
.name{
    color:#ff6666;
    font-size:18px;
}
</style>