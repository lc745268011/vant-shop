<template>
  <div id="order">
<div class="havelist">
    <div>
        <img src="../assets/location.png" alt="">
    </div>
    <div>
       <div class="clearfix">
            <div class="fl">
                {{currentContact.name}}
            </div>
            <div class="fl" style="margin-left:20px">
                {{currentContact.tel}}
            </div>
        </div>
        <div>
            {{currentContact.address}}
        </div>
    </div>
   
</div>
<ul class="border">
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
</ul>   

<div class="goods">
    <div class="shopname"><img src="../assets/shop.png" class="shopicon"/>店铺名称：{{goods.shopname}}</div>
    <div class="goodsinfo clearfix">
        <div class="gleft fl">
            <img :src="goods.goodsImg" alt="" class="goodsImg">
        </div>
        <div class="gright fr">
            <div class="goodsName">
                {{goods.goodsName}}
            </div>
            <div class="goodsSpecifications">
                {{goods.goodstype}}：{{goods.goodsSpecifications}}
            </div>
            <div class="clearfix">
                <div class="goodsPrice fl">
                    ￥<span>{{goods.goodsPrice}}</span>
                </div>
                <div class="goodsNumber fr">
                    x{{goods.goodsNumber}}
                </div>
            </div>
        </div>
    </div>
   
</div>
<div class="orderinfo">
    <div class="title">
        订单信息
    </div>
    <ul>
        <li v-for="(item,index) in orderinfo">
            {{item.text}}：{{item.val}}
        </li>
    </ul>
</div>
<div class="orderinfo">
    <div class="title">
        买家留言
    </div>
    <ul>
        <li>
            {{goods.msg}}
        </li>
    </ul>
</div>
<van-submit-bar
  :price="3050"
  button-text="确认收货"
/>
  </div>
</template>

<script>

export default {
  data() {
    return {
      chosenAddressId: '1',
      currentContact:{
          name:'zhangsanm',
          tel:'123456',
          address:'12121'
      },
      goods:{
          shopname:'xx旗舰店',
          goodsImg:'http://img3m2.ddimg.cn/16/23/25859212-1_l_6.jpg',
          goodsName:'xx商品xx商品xx商品xx商品xx商品xx商品xx商品xx商品xx商品xx商品xx商品xx商品xx商品xx商品xx商品xx商品xx商品xx商品xx商品xx商品xx商品xx商品xx商品xx商品',
          goodstype:'颜色',
          goodsSpecifications:'红色',
          goodsPrice:'79.00',
          goodsNumber:'2',
          msg:'快点发货哦！'
      },
      orderinfo:[{
          text:'订单编号',
          val:'74574578942126'
      },{
          text:'创建时间',
          val:'2018-10-25'
      },{
          text:'付款时间',
          val:'2018-10-25'
      }]
    };
  },
  methods: {
   
  }
};
</script>

<style lang="less">
#order{
    height: 100vh;
    background: #f9f9f9
}
.havelist{
    font-size: 14px;
    padding: 10px 15px;
    background: #fff;
    line-height: 30px;
    display: flex;
    // justify-content: space-between;
    align-items:center;
    img{
        width: 26px;
        margin-right: 20px;
    }
}
.unhavalist{
    height: 60px;
    line-height: 60px;
    font-size: 14px;
    padding: 0 15px;
    margin-bottom: 10px;
    background: #fff;
}
.goods{
    background: #fff;
    .shopname{
        height: 60px;
        line-height: 60px;
        font-size: 15px;
        padding: 0 15px;
        border-bottom: 1px solid #f0f0f0;
    }
    .goodsinfo{
        background: #fff;
        padding: 10px 15px;
        .gleft{
            width: 100px;
            img{
                width: 100%;
            }
        }
        .gright{
            width: 240px;
            padding-left: 20px;
            .goodsName{
                font-size: 14px;
                margin-bottom: 10px;
                text-overflow: -o-ellipsis-lastline;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                line-clamp: 2;
                -webkit-box-orient: vertical;
            }
            .goodsSpecifications{
                margin-bottom: 10px;
                font-size: 12px;
                color: #999;
            }
            .goodsPrice{
                color: rgb(240, 37, 37);
                span{
                    font-size: 15px;
                }
            }
            .goodsNumber{
                font-size: 15px;
            }
        }
    }
}
.orderinfo{
    background: #fff;
    margin-top: 10px;
    padding: 10px 15px;
    .title{
        height: 50px;
        line-height: 50px;
        font-size: 15px;
    }
    li{
        line-height:2;
        font-size: 14px;
    }
}
.border{
    width: 100%;
    margin-bottom: 10px;
    margin-top: -10px;
    overflow: hidden;
    li{
        display: inline-block;
        margin: 0 0 0 5px;
        padding: 2px 10px;
        background: #44a5fc;
        transform: skew(-30deg)
    }

    li:nth-child(2n){
        background: red;
    }
}
.shopicon{
    width: 20px;
    margin-right: 10px;
    margin-top: -2px;
}
</style>