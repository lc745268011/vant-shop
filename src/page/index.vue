<template>
  <div id="index">
    <ul id="category">
      <li v-for="(item,index) in category" :class="active==index?'active':''" @click="chCategory(index)">{{item.categoryname}}</li>
    </ul>
    <div id="goodslist">
      <div id="toolbar" class="clearfix">
        <div class="fl">综合</div>
        <div class="fl">最新</div>
        <div class="fl">销量</div>
      </div>
      <ul class="clearfix">
        <li v-for="(item,index) in goodlists" class="goodsitem fl">
          <img :src="item.goodsImg" alt>
          <div class="clearfix gmidinfo">
            <span class="fl advance" v-show="item.isadvance">预售</span>{{item.gname}}
          </div>
          <div class="gbotinfo">
            <div class="gprice">￥{{item.gprice}}</div>
            <div class="cart" @click="showBase = true">
              <img src="../assets/cart.png" alt="">
            </div>
          </div>
        </li>
      </ul>
    </div>
    <van-sku
    v-model="showBase"
    :sku="sku"
    :goods="goods"
    :hide-stock="sku.hide_stock"
    :buy-clicked="buyClicked"
  />
  </div>
</template>
<script>
import { Sku } from 'vant';
export default {
  data() {
    return {
      category: [
        { id: 0, categoryname: "纸质书1" },
        { id: 1, categoryname: "纸质书2" },
        { id: 2, categoryname: "纸质书3" },
        { id: 3, categoryname: "纸质书4" },
        { id: 4, categoryname: "纸质书5" },
        { id: 5, categoryname: "纸质书6" },
        { id: 6, categoryname: "纸质书7" },
        { id: 7, categoryname: "纸质书8" }
      ],
      goodlists: [
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
      active: 0,
      showBase: false,
      sku: {
        // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
        // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
        tree: [
          {
            k: '颜色', // skuKeyName：规格类目名称
            v: [
              {
                id: '30349', // skuValueId：规格值 id
                name: '红色', // skuValueName：规格值名称
                imgUrl: 'https://img.yzcdn.cn/1.jpg' // 规格类目图片，只有第一个规格类目可以定义图片
              },
              {
                id: '1215',
                name: '蓝色',
                imgUrl: 'https://img.yzcdn.cn/2.jpg'
              }
            ],
            k_s: 's1' // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
          }
        ],
        // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
        list: [
          {
            id: 2259, // skuId，下单时后端需要
            price: 100, // 价格（单位分）
            s1: '1215', // 规格类目 k_s 为 s1 的对应规格值 id
            s2: '1193', // 规格类目 k_s 为 s2 的对应规格值 id
            s3: '0', // 最多包含3个规格值，为0表示不存在该规格
            stock_num: 110 // 当前 sku 组合对应的库存
          }
        ],
        price: '1.00', // 默认价格（单位元）
        stock_num: 227, // 商品总库存
        collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
        none_sku: false, // 是否无规格商品
        // messages: [
        //   {
        //     // 商品留言
        //     datetime: '0', // 留言类型为 time 时，是否含日期。'1' 表示包含
        //     multiple: '0', // 留言类型为 text 时，是否多行文本。'1' 表示多行
        //     name: '留言', // 留言名称
        //     type: 'text', // 留言类型，可选: id_no（身份证）, text, tel, date, time, email
        //     required: '1' // 是否必填 '1' 表示必填
        //   }
        // ],
        hide_stock: false // 是否隐藏剩余库存
      },
      goods: {
        // 商品标题
        title: '测试商品',
        // 默认商品 sku 缩略图
        picture: 'https://img.yzcdn.cn/1.jpg'
      }
    };
  },
  components: {
    [Sku.name]: Sku,
  },
  methods: {
    chCategory(i){
      this.active=i;
    },
    buyClicked(){
       this.$router.push({name: '/order/page1',params:{ id:'1'}});
    }
  }
};
</script>
<style lang="scss" scoped>
#index {
  display: flex;
  justify-content: space-between;
  width: 375px;
  #category {
    width: 100px;
    height: 100vh;
    overflow-y: auto;
    border-right: 1px solid #f5f5f5;
    li {
      width: 100%;
      height: 45px;
      line-height: 45px;
      font-size: 14px;
      text-align: center;
      border-bottom:1px solid #f5f5f5; 
    }
    li.active {
      color: #fd7142;
      border-left:4px solid #fd7142;
      padding-left: -4px;
    }
  }
  #goodslist {
    width: 265px;
    height: 100vh;
    #toolbar{
      border: 1px solid #f5f5f5;
      border-right:0; 
      border-top:0; 
      div{
        width: 33.3%;
        text-align: center;
        font-size: 14px;
        height: 44px;
        line-height: 44px;
      }
    }
    ul{
      // margin-left: 8px;
      height: calc(100vh - 44px);   
      overflow-y: auto;
      .goodsitem{
      width: 122px;
      border: 1px solid #f5f5f5;
      margin: 8px 8px 0 0;
      padding: 8px;
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
      margin-right: 0;
    }
    }
    
  }
}
</style>

 