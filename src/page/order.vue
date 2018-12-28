<template>
  <div id="order">
<div @click="showList=true" v-show="list!=''" class="havelist">
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
    <div>
        <img src="../assets/right.png" alt="">
    </div>
</div>
<div @click="showList=true" v-show="list==''" class="unhavalist">
  添加收货人信息
</div>

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
<van-submit-bar
  :price="3050"
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
          name:'zhangsanm',
          tel:'123456',
          address:'12121'
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
          goodsNumber:'2'
      }
    };
  },
  computed: {
    cardType() {
      return this.chosenContactId !== null ? 'edit' : 'add';
    },

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
    height: 100%;
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
        background: #f9f9f9;
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
</style>