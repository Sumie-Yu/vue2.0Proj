<template>
    <div>
        <mt-swipe :auto="2000">
            <mt-swipe-item v-for="item in imgs">
                <img :src="item.img||'http://images.meishij.net/p/20100207/1555620f84f3cbc5a42aac05881d5884_150x150.jpg'">
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
    export default{
        props: ['imgs']
       /* data(){
            return {
                imgs: []
            };
        }*/
    };
</script>

<style scoped>
    .mint-swipe {
        height: 250px;
    }

    .mint-swipe-item {
        background: blanchedalmond;
        width: 100%;
        height: 250px;
    }

    .mint-swipe-item img {
        width: 100%;
        height: 250px;
        vertical-align: center;

    }
</style>

