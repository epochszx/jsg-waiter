import {get,post_obj_array} from '../../http/axios'
export default({
    namespaced:true,
    state:{
        orders:[]
    },
    // store仓库的一个计算属性，它的作用主要是用来派生出一些新的状态
    // 把state状态的数据进行一次映射或者筛选，再把这个结果重新计算并提供给组件使用
    getters:{
        //根据订单状态进行过滤
        ordersStatusFilter(state){
            return (status)=>{
                return state.orders.filter(order=>order.status ===status)
            }
        }
        
    },
    mutations:{
        refreshOrder(state,orders){
            state.orders = orders;
        },
       
    },
    actions:{
        //查询订单
        async queryOrder(context){
            let id = context.rootState.user.info.id;
            let response = await get('order/query?waiterId='+id);
            context.commit('refreshOrder',response.data)
            return response;
        },
        //接受订单
        async acceptOrder(context,orderId){
            let response = await get("/order/takeOrder?orderId="+orderId);
            context.dispatch('queryOrder');
            return response;
        },
        // 拒绝订单
        async rejectOrder(context,orderId){
            let response = await get("/order/rejectOrder?orderId="+orderId);
            context.dispatch('queryOrder');
            return response;
        },
        // 完成订单
        async completeOrder(context,orderId){
            let response = await get("/order/serviceCompleteOrder?orderId="+orderId);
            context.dispatch('queryOrder');
            return response;
        }
}
    
})