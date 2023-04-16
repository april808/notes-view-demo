<!-- Use preprocessors via the lang attribute! e.g. <template lang="pug"> -->
<template>
<div id="app">
  <div class="demo">
    <div class="boxcontent container">
      <h1 :style="getStyle">{{ gettitle + ' / ' + cssSD.notes }}</h1>
      <div class="view">
        <div class="text-model" :style="getStyle" v-html="cssSD.template"></div>
      </div>
      <div :class="{ hideMode: !showcode }"> 
        <pre><code class="code" v-text="getStyle"></code></pre>
        <div class="shorthand" v-if="cssSD.property.length &gt; 1">
          <h5 v-if="cssSD.shorthand != ''" :class="{ hideMode: !showcode }">簡寫：</h5><code class="code" v-if="cssSD.shorthand != ''">{{ getshort }}</code>
        </div>
      </div>
    </div>
    <div class="control container">
      <div class="status">
        <h5 class="notify">狀態: {{ status }}<span v-if="!editing">{{ statusNow('(預覽)') }}</span><span v-else="!editing">{{ statusNow('修改CSS樣式') }}</span></h5>
        <label class="hiddenControl">編輯:
          <input v-model="editing" type="checkbox"/>
        </label>
        <label class="hiddenControl">原始碼:
          <input v-model="showcode" type="checkbox"/>
        </label>
      </div>
      <hr/>
      <div class="mode" :class="{ hideMode: !editing }"> 
        <div class="settings" v-for="(item, index) in cssSD.property">
          <div class="row">
            <div class="col-sm-3"><span v-if="!item.type == ''">{{ item.name + ' :' }}</span></div>
            <div class="col-sm-9">
              <div class="itemp" v-if="item.type == 'color' || !item.type == 'undefined' || !item.type == 'null'">
                <div class="colorgroup">
                  <label :for="item.type" v-for="(d, index) in item.values"><span v-text="item.initial_value"></span></label>
                  <input type="color" :id="item.type" v-model.lazy="item.initial_value"/>
                </div>
              </div>
              <div class="itemp" v-if="item.type == 'width' || !item.type == 'undefined' || !item.type == 'null'">
                <div class="btn-group">
                  <div class="group" v-for="(d, index) in item.values">
                    <button v-if="!tockString('length', index, item.values)" :class="{ active: item.initial_value == d }" @click="item.initial_value = d" v-text="d"></button>
                    <input class="button" v-else=" tockString('length',index,item.values) " type="text" :id="d" :class="{ active: item.initial_value == d }" v-model="item.values[index]" @click="item.initial_value = d" @keyup="item.initial_value = d" placeholder="請輸入單位 || length"/>
                  </div>
                </div>
              </div>
              <div class="itemp" v-if="item.type != 'color' &amp;&amp; item.type != 'width'">
                <button v-for="(d, index) in item.values" :class="{ active: item.initial_value == d }" @click="item.initial_value = d">{{ d }}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
var alldata= {
shorthand: "text-decoration",
property:[
  {name: "text-decoration-line",type:"line",initial_value:"none",
      values: ["none", "underline", "overline", "line-through"]},
  {name: "text-decoration-style",type:"style",initial_value: "solid",
      values: ["solid", "dashed", "dotted", "double", "wavy"]},
  {name: "text-decoration-color",type:"color",initial_value: "currentcolor",
      values:["currentcolor"]},
  {name: "text-decoration-thickness",type:"width",initial_value: "auto",
      values: ["auto", "from-font", "length"]},
],
notes: "文字畫線裝飾"
};

export default {
  data() {
    return {
      status: "",
      editing: true,
      showcode: true,
      cssSD: alldata,
      defaultColor: 'currentcolor'
    }
  },
  methods: {
    doSomething() {
      alert("Hello!");
    },
    checkshort: function () {
      let check = this.cssSD.shorthand;
      let name = this.cssSD.property[0].name;

      if (check != "") {
        return check;
      } else {
        return name;
      }
    },
    statusNow: function (notify) {
      this.status = notify;
    },
    propertyname: function () {
      let cssnames = [];
      let obj = this.cssSD.property;
      for (let i = 0; i < obj.length; i++) {
        cssnames[i] = obj[i].name;
      }
      return cssnames;
    },
    tockString: function (string, index, attr) {
      let length = attr.length - 1;
      let val = attr[index];

      if (val == string || index == length) {
        return true;
      }
      // else if (nowindex == length) { return true }
      else {
        return false;
      }
    },
    tocheckvalue: function (item) {
      let obj = this.cssSD.property;

      /* 確認屬性名稱的指定 */
      let nowindex = 0;
      for (let i = 0; i < obj.length; i++) {
        if (item == obj[i].name) {
          nowindex = i;
        }
      } /* for結束 確認nowindex */

      /* 屬性預設值 和可改動的內容 */
      let valspace = obj[nowindex].initial_value;

      if (valspace != "") {
        return valspace;
      } else {
        return "";
      }
    }
  },
  computed: {
    gettitle() {
      return this.checkshort();
    },
    getStyle() {
      let nowCSS = this.propertyname();

      let attr = [];
      for (let item of nowCSS) {
        attr[nowCSS.indexOf(item)] = item + ": " + this.tocheckvalue(item);
      }

      let obj = attr.join(";\n") + ";";
      return obj;
    },
    getshort() {
      let attr = [];
      let name = this.cssSD.shorthand;
      let nowCSS = this.propertyname();

      for (let item of nowCSS) {
        attr[nowCSS.indexOf(item)] = " " + this.tocheckvalue(item);
      }
      return (
        name + ": " + attr.join("\n") + ";");
    }
  }
};
</script>

<!-- Use preprocessors via the lang attribute! e.g. <style lang="scss"> -->
<style lang="sass">
// COLOR VARIABLE(顏色變數)
$color_primary: #aaf
$color_secondary: #fda
$color_tertiary: rgba(darken(#4fc08d,30),.8)
$color_bg: rgba(200, 200, 200, 1)

$font_color: #2c3e50

// 次要色的變體(加深或變淺)
$main-color: darken($color_primary,50)
$sup-color: linear-gradient(180deg, rgba(207,207,207,1) 0%, rgba(241,241,241,1) 100%)
$focus-color: darken($color_secondary,0)

// @mixin -------
=flexCenter
  display: flex
  justify-content: center
  align-items: center
  
=size($w,$h:$w)
  width: $w
  height: $h
=mp($m,$p:$m)
  margin: $m
  padding: $p
*
  // border: 1px solid #000
  transition: 0.5s
  // box-sizing: border-box
  
html,body
  +size(100%)
  +mp(0)
  background-color: #888
  +flexCenter
  h5 , code
    margin: 0

#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  text-align: center
  color: $font_color
  margin-top: 60px

a,button
  color: $color_tertiary

button,.button
  background: none
  border: solid 1px
  border-radius: 2em
  font: inherit
  padding: 0.75em 2em
  margin: .1em .2em
  
.demo
  background-color: #eee
  border-radius: 25px
  margin: 15px
  max-width: 768px
  & .container
    +mp(auto,10px 20px)
  & .boxcontent
    // width: 500px
    border: 5px solid $color_primary
    border-radius: 25px
    box-shadow: inset 0 0 10px rgba($main-color,.6)
    & .code
      // border: 1px solid $font_color
      padding: 10px 50px
      text-align: left
      word-break: break-all
      background-color: $font_color
      text-shadow: black 0.1em 0.1em 0.2em
      color: #fff
    & .view
      background-color: #fff
      +flexCenter
      flex-direction: column
      & .text-model
        text-align: left
        width: 100%
        transform: scale(1) translateX(0%)
      & .text-model.addbd
          border: 1px solid #000
  & .control
    & .status
      display: flex
      justify-content: space-around
      align-items: center
    & .mode .settings
    & .settings .itemp
      background-color: lighten($color_primary,10)
      // border: 1px solid #000
      margin: 5px
      padding: 5px
      vertical-align: middle
    & .itemp 
        // width: 500px
        & .btn-group
            +flexCenter
            flex-direction: row
            flex-wrap: wrap
        & .btn-group button

        & .colorgroup
            +flexCenter
            flex-direction: column
            margin: 5px
            span
              display: inline-block
              margin-bottom: 5px
  & .code, & .mode
      display: block
      overflow: hidden
      height: auto
  & .active
    background-color: $focus-color
  & .hideMode
    opacity: 0
    overflow: hidden
    height: 0
    
.vc-chrome
  position: absolute
  top: 35px
  right: 0
  z-index: 9
.current-color
  display: inline-block
  width: 16px
  height: 16px
  background-color: #000
  cursor: pointer
</style>
