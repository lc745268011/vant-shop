<template>
<div>
<div v-for="(item,index) in cardlist" class="card">
    <van-card
    :num="item.num"
    :tag="item.tag"
    :price="item.price"
    :desc="item.desc"  
    :title="item.title"
    :thumb="item.imageURL"
    :origin-price="item.originPrice"
    :thumb-link="item.link"
    >
    <div slot="footer">
        <van-button size="small" round >确认收货</van-button>
    </div>
    </van-card>
</div>
</div>

</template>
<script>
export default {
    data(){
        return{
            cardlist:[{
                num:2,
                tag:'标签',
                price:'2.00',
                desc:'描述信息',
                title:'商品标题',
                originPrice:'10.00',
                imageURL:'http://img3m2.ddimg.cn/16/23/25859212-1_l_6.jpg',
                link:'/#/orderDetail'
            },
            {
                num:2,
                tag:'标签',
                price:'2.00',
                desc:'描述信息',
                title:'商品标题',
                originPrice:'10.00',
                imageURL:'http://img3m2.ddimg.cn/16/23/25859212-1_l_6.jpg',
                link:'/#/orderDetail'
            }]
        }

    }
}
</script>
<style>
    .card{
        margin-bottom:10px; 
    }
    .van-card__footer{
        margin-top:10px; 
    }
    
</style>
