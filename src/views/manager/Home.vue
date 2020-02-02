<template>
    <div class="home">
        <header class="header">
           <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
                <van-swipe-item>
                    <img src="../../assets/images/home3.jpg" alt="">
                </van-swipe-item>
                <van-swipe-item>
                    <img src="../../assets/images/home2.jpg" alt="">
                </van-swipe-item>
                <van-swipe-item>
                    <img src="../../assets/images/home3.jpg" alt="">
                </van-swipe-item>
                <van-swipe-item>
                    <img src="../../assets/images/home4.jpg" alt="">
                </van-swipe-item>
            </van-swipe>
        </header>
        <div class="notice">
            <h4>
                订 单 通 知
            </h4>
        </div>
        <div>
            <my-ordertake v-for="order in ordersStatusFilter('待接单')" :key="order.id" :data="order">
            </my-ordertake>
        </div>
    </div>
</template>

<script>
import {mapState,mapMutations, mapActions, mapGetters} from 'vuex'
export default {
     data(){
        return{
        }
    },
    computed:{
        ...mapState('order',['orders']),
        ...mapGetters('order',['ordersStatusFilter'])
    },
    methods:{
        ...mapActions('order',['queryOrder'])
    },
    created(){
        this.queryOrder();
    }

}
</script>
<style scoped>
    .my-swipe .van-swipe-item {
        color: #fff;
        text-align: center;
        overflow: hidden;
    }
    .my-swipe .van-swipe-item img{
        width: 100%;
        height:100%;
    }
    .notice{
        text-align: center;
        color:#1989FA
    }
    h4{
        margin: 0;
        padding: 10px 0;
    }
</style>

