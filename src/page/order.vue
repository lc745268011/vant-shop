<template>
  <div id="order">
<div @click="showList=true" v-show="list!=''" class="havelist">
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
<div @click="showList=true" v-show="list==''" class="unhavalist">
  <img src="../assets/add.png" alt="" class="addicon">
  添加收货人信息
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
<van-popup v-model="showList" position="bottom">
  <van-address-list
  v-model="chosenAddressId"
  :list="list"
  @add="onAdd"
  @edit="onEdit"
  @select="onSelect"
/>
</van-popup>


<van-popup v-model="showEdit" position="bottom">
  <van-address-edit
  show-postal
  show-delete
  show-set-default
  show-search-result
  :area-list="areaList"
  :address-info="addressInfo"
  :search-result="searchResult"
  @save="onSave"
  @delete="onDelete"
/>
</van-popup>

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
<div class="goodsinfolist">
    <div>
        <div>产品</div>
        <div class="gredNumber">￥{{goods.goodsPrice}}</div>
    </div>
    <div>
        <div>运费</div>
        <div class="gredNumber">￥{{goods.goodsFreight}}</div>
    </div>
</div>
<div class="goodsinfolist">
    <div>
        <div>买家留言</div>
        <div class="gredNumber"><input type="text" placeholder="140字以内" maxlength="140" style="border:0;text-align:right;color:#333;"></div>
    </div>
</div>
<van-submit-bar
  :price="price"
  button-text="提交订单"
  @submit="onSubmit"
/>
  </div>
</template>

<script>
import areaList  from '../../static/js/area.js'

export default {
  data() {
    return {
      chosenAddressId: '1',
      currentContact:{
          name:'刘鹏程',
          tel:'13312345678',
          address:'山东省青岛市市北区xxxxx'
      },
      showList:false,
      showEdit:false,
      showArea:false,
      areaList:areaList,
      searchResult: [],
      editId:'',
      list: [
        {
          id: '1',
          name: '张三',
          tel: '13000000000',
          province:'浙江省',
          city:'西湖区',
          addressDetail:'文三路 138 号东方通信大厦 7 楼 501 室',
          postalCode:'266000',
          address: '浙江省西湖区文三路 138 号东方通信大厦 7 楼 501 室',
          isDefault:true
        },
        {
          id: '2',
          name: '李四',
          tel: '1310000000',
          address: '杭州市拱墅区莫干山路 50 号'
        }
      ],
      addressInfo:{
          id:'',
          name:'',
          tel:'',
          province:'',
          city:'',
          county:'',
          addressDetail:'',
          areaCode:'',
          postalCode:'',
          isDefault:true
      },
      goods:{
          shopname:'xx旗舰店',
          goodsImg:'http://img3m2.ddimg.cn/16/23/25859212-1_l_6.jpg',
          goodsName:'xx商品xx商品xx商品xx商品xx商品xx商品xx商品xx商品xx商品xx商品xx商品xx商品xx商品xx商品xx商品xx商品xx商品xx商品xx商品xx商品xx商品xx商品xx商品xx商品',
          goodstype:'颜色',
          goodsSpecifications:'红色',
          goodsPrice:'79.00',
          goodsNumber:'2',
          goodsFreight:'10.00'
      },
    //   price:0
    };
  },
  computed: {
    cardType() {
      return this.chosenContactId !== null ? 'edit' : 'add';
    },
    price(){
        return parseInt(this.goods.goodsPrice)*100+parseInt(this.goods.goodsFreight)*100
    }
  },
  methods: {
    onAdd() {
        var that= this;
        that.showEdit=true;
    },
    onEdit(item, index) {
        var that= this;
        that.showEdit=true;
        console.log(item, index,that.list[index])
        that.addressInfo=item
        that.editId=index
    },
    //提交订单
    onSubmit(){

    },
    onSave(content) {
      var that = this;
      if(that.editId!=''||that.editId==0){
          that.list[that.editId].name=content.name
          that.list[that.editId].tel=content.tel
          that.list[that.editId].address=`${content.province}${content.city}${content.addressDetail}`
      }else{
        that.list.push({
          id:that.editId,
          name: content.name,
          tel: content.tel,
          address: `${content.province}${content.city}${content.addressDetail}`
        })
      }
     
      that.showEdit=false
      that.chosenAddressId=3
    },
    onDelete() {
      Toast('delete');
    },
    onSelect(item,index){
        this.currentContact=item
        this.showList=false
    }
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
    color: #000;
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
.goodsinfolist{
    background: #fff;
    margin-top: 10px;       
    >div{
        display: flex;
        justify-content: space-between;
        padding: 10px 15px;
        font-size: 15px;
        .gredNumber{
            color: #f02525;
            font-size: 16px;
        }
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
.addicon,.shopicon{
    width: 20px;
    margin-right: 10px;
    margin-top: -2px;
}
</style>