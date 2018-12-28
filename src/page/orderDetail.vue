<template>
  <div id="order">
<div class="havelist">
    <div>
        <div>
            收货人：{{currentContact.name}}
        </div>
        <div>
            联系电话：{{currentContact.tel}}
        </div>
        <div>
            收货地址：{{currentContact.address}}
        </div>
    </div>
</div>


<div class="goods">
    <div class="shopname">店铺名称：{{goods.shopname}}</div>
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
          goodsNumber:'2'
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
    margin-bottom: 10px;
    background: #fff;
    line-height: 30px;
    display: flex;
    justify-content: space-between;
    align-items:center;
    img{
        width: 30px;
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
        height: 60px;
        line-height: 60px;
        font-size: 15px;
    }
    li{
        line-height:2;
        font-size: 14px;
    }
}
</style>