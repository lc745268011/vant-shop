<template>
    <div>
        <van-swipe :autoplay="3000" indicator-color="white" :height="180">
            <van-swipe-item v-for="(item,index) in thumb" :key="index">
                <img :src="item" class="aaa">
            </van-swipe-item>
        </van-swipe>
        <div id="goodslist">
            <div class="recommend">
                <span></span>推荐
            </div>
            <ul class="clearfix">
            <li v-for="(item,index) in goodlists" class="goodsitem fl">
                <router-link to="/goods">
                    <img :src="item.goodsImg" alt class="goodsImg">
                    <div class="clearfix gmidinfo">
                        <span class="fl advance" v-show="item.isadvance">预售</span>{{item.gname}}
                    </div>
                    <div class="gbotinfo">
                        <div class="gprice">￥{{item.gprice}}</div>
                        <div class="cart" @click="showBase = true">
                        <img src="../assets/cart.png" alt="">
                        </div>
                    </div>
                </router-link>
            </li>
        </ul>
        <button>查看全部</button>
        </div>
        
    </div>
</template>
<script>
import { Swipe, SwipeItem } from 'vant';
export default {
    data(){
        return{
            current: 0,
             thumb: [
                'https://img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg',
                'https://img.yzcdn.cn/public_files/2017/10/24/1791ba14088f9c2be8c610d0a6cc0f93.jpeg'
            ],
             goodlists: [
                {
                gname: "新书上架新书上架新书上架新书上架新书上架新书上架新书上架",
                isadvance: true,
                gprice: 78,
                goodsImg:"https://www.baidu.com/img/dong_41c10f9ee0a17d664b76404d3b276d09.gif"
                },
                {
                gname: "新书上架",
                isadvance: true,
                gprice: 78,
                goodsImg:"http://img3m2.ddimg.cn/16/23/25859212-1_l_6.jpg"
                },
                {
                gname: "新书上架",
                isadvance: true,
                gprice: 78,
                goodsImg:"http://img3m2.ddimg.cn/16/23/25859212-1_l_6.jpg"
                },
                {
                gname: "新书上架",
                isadvance: true,
                gprice: 78,
                goodsImg:"http://img3m2.ddimg.cn/16/23/25859212-1_l_6.jpg"
                },
                {
                gname: "新书上架新书上架新书上架新书上架新书上架新书上架新书上架",
                isadvance: true,
                gprice: 78,
                goodsImg:"http://img3m2.ddimg.cn/16/23/25859212-1_l_6.jpg"
                },
                {
                gname: "新书上架",
                isadvance: true,
                gprice: 78,
                goodsImg:"http://img3m2.ddimg.cn/16/23/25859212-1_l_6.jpg"
                },
                {
                gname: "新书上架",
                isadvance: true,
                gprice: 78,
                goodsImg:"http://img3m2.ddimg.cn/16/23/25859212-1_l_6.jpg"
                },
                {
                gname: "新书上架",
                isadvance: true,
                gprice: 78,
                goodsImg:"http://img3m2.ddimg.cn/16/23/25859212-1_l_6.jpg"
                }
            ],
        }
    },
    components:{
        [Swipe.name]: Swipe,
        [SwipeItem.name]: SwipeItem,
    }
}
</script>
<style scoped lang='scss'>
    .aaa{
        height: 100%;
        width: 100%;
    }
    #goodslist {
    width: 100%;
    button{
        width: 205px;
        font-size: 14px;
        border: 1px solid #ccc;
        color: #ccc;
        text-align: center;
        line-height: 40px;
        height: 40px;
        margin: 20px 85px;
        background: #fff;
    }
    .recommend{
        font-size: 20px;
        margin: 10px 8px;
        display: flex;
        align-items:center;
        span{
            height: 20px;
            border-radius: 4px;
            display: inline-block;
            width: 2px;
            background: #fd7142;
            margin-right: 10px;
        }
    }
    ul{
      .goodsitem{
      width: 175px;
      border: 1px solid #f5f5f5;
      margin: 8px 0 0 8px;
      padding: 8px;
      .goodsImg{
        width: 159px;
        height: 159px;
      }
      img{
        width: 100%;
        display: inline-block;
      }
      .gmidinfo{
        .advance{
          font-size: 12px;
          color: #fff;
          padding: 0 2px;
          background: #fd7142;
          border-radius:5px; 
          margin-right: 5px;
        }
        font-size: 12px;
        height: 38px;
        overflow: hidden;
        margin: 8px 0;
      }
      .gbotinfo{
        display: flex;
        justify-content: space-between;
        .gprice{
          font-size: 16px;
          color: #fd7142;
        }
        .cart{
          width: 25px;
        }
      }
    }
    .goodsitem:nth-child(2n){
      margin-right: 8px;
    }
    }
    
  }
</style>
