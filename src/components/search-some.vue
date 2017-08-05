<template>
  <div>
    <logo @getIndex="getIndex"></logo>
    <el-row class="search-input">
      <el-col span="20">
        <div class="search-ipt">
          <input type="text"
                 v-model="message"
                 @keyup="get($event)"
                 @keydown.up="selectUp"
                 @keydown.down="selectDown"
                 @keydown.enter="search"/>
        </div>
      </el-col>
      <el-col span="4">
        <button class="search-btn" @click="search">搜索</button>
      </el-col>
    </el-row>
    <div class="search-select">
      <transition-group name="itemfade" tag="ul" mode="out-in" v-cloak>
        <li v-for="(value,index) in myData"
            :class="{selectback:index==now}"
            class="search-select-option search-select-list"
            @mouseover="selectHover(index)"
            @click="selectClick(index)"
            :key="value">
          {{value}}
        </li>
      </transition-group>
    </div>
  </div>
</template>

<script>
  import logo from './logo.vue'
  import ElCol from 'element-ui/packages/col/src/col'
  import ElInput from '../../node_modules/element-ui/packages/input/src/input'
  import ElButton from '../../node_modules/element-ui/packages/button/src/button'
  export default{
    components: {
      logo,
      ElButton,
      ElInput,
      ElCol},
    data () {
      return {
        myData: [],
        message: '',
        now: -1,
        searchIndex: 0,
        logos: [{
          name: '360搜索',
          searchSrc: 'https://www.so.com/s?ie=utf-8&shb=1&src=360sou_newhome&q='
        }, {
          name: '百度搜索',
          searchSrc: 'https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=0&rsv_idx=1&tn=baidu&wd='
        }, {
          name: '搜狗搜索',
          searchSrc: 'https://www.sogou.com/web?query='
        }]
      }
    },
    methods: {
      get (ev) {
        if (ev.keyCode === 38 || ev.keyCode === 40) {
          return
        }
        this.$http.jsonp('https://sug.so.360.cn/suggest?word=' + this.message + '&encodein=utf-8&encodeout=utf-8').then(function (res) {
          this.myData = res.data.s
        })
      },
      search () {
        window.open(this.logos[this.searchIndex].searchSrc + this.message)
      },
      selectUp () {
        this.now --
        if (this.now === -1) {
          this.now = this.myData.length - 1
        }
        this.message = this.myData[this.now]
      },
      selectDown () {
        this.now ++
        if (this.now === this.myData.length) {
          this.now = 0
        }
        this.message = this.myData[this.now]
      },
      selectHover (index) {
        this.now = index
      },
      selectClick (index) {
        this.message = this.myData[index]
        this.search()
      },
      getIndex (index) {
        this.searchIndex = index
      }
    }
  }
</script>

<style>
  .search-input {
    width: 600px;
    margin-top: 10px;
  }

  .search-ipt input{
    border: 1px solid #e4e4e4;
    box-sizing: border-box;
    width: 500px;
    height: 45px;
    font-size: 18px;
    padding-left: 10px;
    padding-right: 10px;
    overflow: hidden;
  }

  .search-btn {
    height: 45px;
    width: 100px;
    border: 1px solid mediumseagreen;
    background-color: mediumseagreen;
    color: white;
    font-size: 18px;
    float: left;
    cursor: pointer
  }

  .search-select{
    position: absolute;
    top: 195px;
    width: 500px;
    box-sizing: border-box;
    z-index: 999;
    text-align: left;
  }

  .search-select li {
    border: 1px solid #d4d4d4;
    border-top: none;
    border-bottom: none;
    background-color: #fff;
    width: 100%;
    box-sizing: border-box;
    padding: 7px 10px;
    transition: all .3s;
  }

  .itemfade-enter,
  .itemfade-leave-active {
    opacity: 0;
  }

  .itemfade-leave-active {
    position: absolute;
  }

  .selectback {
    background-color: #eee !important;
    cursor: pointer
  }
</style>
