<template>
  <div>
    <ul class="page f16 tc mt30">
      <li>
        <span v-show="page > 1"><b @click="page--, pageClick()">上一页</b></span>
        <span v-show="page == 1">上一页</span>
        <span
          v-for="index in pagesAll"
          :key="index"
          :class="{ active: page == index }"
          @click="goPage(index)"
          >{{ index }}</span
        >
        <span v-if="page != pageAll"
          ><b @click="page++, pageClick()">下一页</b></span
        >
        <span v-if="page == pageAll">下一页</span>
      </li>
      <li>共{{ pageAll }}页</li>
      <li>
        到<input type="text" class="int02" v-model="jumpPage" /> 页<input
          type="button"
          class="bt03"
          value="确定"
          @click="goPage(jumpPage)"
        />
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "pageNum",

  data() {
    return {
      listData: "", //旅行社列表数据搜索结果数据
      // pageSize:15, //每页个数，后台默认15
      page: 1, //当前页码，不传默认第一页
      pageAll: "", //数据总页数
      jumpPage: "", //跳转页码
    };
  },
  methods: {
    //获取旅行社列表数据 keywords words搜索关键字,region_id id区域id,page onPage当前页码
    getTravel() {
      if (this.response.data.status == 1) {
        console.log(this.response.data.data);
        this.pageAll = this.response.data.data.count;
        this.listData = this.response.data.data.data;
      } else {
        console.log(this.response.data.info);
      }
    },
    //点击上一页下一页
    pageClick() {
      this.getTravel(this.page); //获取列表数据
      window.scrollTo(0, 500); //页面滚动到顶部
    },
    //点击页码或跳转指定页码
    goPage(event) {
      if (event != this.page && event != "") {
        this.page = event;
        this.getTravel(this.page); //获取列表数据
        window.scrollTo(0, 500); //页面滚动到顶部
      }
    },
  },
  computed: {
    pagesAll() {
      // 开始数字
      var leftNum = 1;
      // 结束数字
      var rightNum = this.pageAll;
      // 存储页码数组
      var pageArray = [];
      // 显示页码的数量 最好是个单数
      var showNum = 5;
      // 因为是单数向上取整获取到中间的数字
      var centerNum = Math.ceil(showNum / 2);
      // 判断分析当总页数超过showNum展示页数时，需要判断分页情况
      //1、在最左边第一个或者在centerNum的前面
      //2、在中间
      //3、最右边最后一个
      if (this.pageAll >= showNum) {
        // 中间centerNum时左右都加上（centerNum-1)
        if (
          this.page > centerNum &&
          this.page < this.pageAll - (centerNum - 1)
        ) {
          //一定要用Number格式化一下获取的数据,防止获取的是字符串而不是数字
          leftNum = Number(this.page) - (centerNum - 1);
          rightNum = Number(this.page) + (centerNum - 1);
        } else {
          //最左边或者在showNum的中间
          if (this.page <= centerNum) {
            leftNum = 1;
            rightNum = showNum;
            // 最右边时结束是总条数，开始是showNum减去1
          } else {
            rightNum = this.pageAll;
            leftNum = this.pageAll - (showNum - 1);
          }
        }
      }
      while (leftNum <= rightNum) {
        pageArray.push(leftNum);
        leftNum++;
      }
      return pageArray;
    },
  },
};
</script>
<style scoped>
.page li {
  display: inline-block;
  margin: 0 5px;
}
.page li span {
  display: inline-block;
  padding: 5px 10px;
  border: 1px solid #dfdfdf;
  margin: 0 5px;
  border-radius: 5px;
  cursor: pointer;
}
.page li span.active,
.page li span:hover {
  border: 1px solid #316dd9;
  background: #316dd9;
  color: #fff;
}
.page b {
  display: block;
  font-weight: normal;
}
.page .int02,
.page .bt03 {
  line-height: 32px;
  border: 1px solid #ccc;
  vertical-align: middle;
  margin: 0 10px;
  border-radius: 5px;
}
.page .int02 {
  width: 40px;
  text-align: center;
}
.page .bt03 {
  background: #316dd9;
  color: #fff;
  border: none;
  padding: 0 30px;
  line-height: 36px;
  margin-left: 20px;
}
</style>
