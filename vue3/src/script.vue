<!-- Use preprocessors via the lang attribute! e.g. <template lang="pug"> -->
<template>
<div id="app">
  <h1 class="container">{{ cssSD.shorthand + cssSD.notes }} </h1>
  <div class="demo">
    <div class="boxcontent container">
      <div class="view">
        <div class="text-model" :style="getStyle">{{ cssSD.notes }}</div>
      </div>
      <pre class="code" v-bind:class="{hideMode: !showcode}"> <code>{{getStyle}}</code></pre>
    </div>
    <div class="control container">
      <div class="status">
        <h5 class="notify">狀態: {{status}}<span v-if="!editing">{{ statusNow('(預覽)') }}</span><span v-else="!editing">{{ statusNow('修改CSS樣式') }}</span></h5>
        <label class="hiddenControl">編輯:
          <input v-model="editing" type="checkbox"/>
        </label>
        <label class="hiddenControl">原始碼:
          <input v-model="showcode" type="checkbox"/>
        </label>
      </div>
      <hr/>
      <div class="mode" v-bind:class="{hideMode: !editing}"> 
        <div class="settings" v-for="(item,index) in cssSD.property">
          <div class="row">
            <div class="col-sm-3">
              <label>{{item.name}} :</label>
            </div>
            <div class="col-sm-9">
              <div class="itemp" v-if="item.type == 'line'">
                <button v-for="d in item.values" :class="{active: item.initial_value==d}" @click="item.initial_value=d">{{d}}</button>
              </div>
              <div class="itemp" v-if="item.type == 'color'">
                <label :for="item.type" v-for="d in item.values">
                  <input type="color" :id="item.type" :name="item.type" v-model="defaultColor"/><span v-on:input="colorVal">{{defaultColor}}</span>
                </label>
              </div>
              <div class="itemp" v-if="item.type == 'style'">
                <button v-for="d in item.values" :class="{active: item.initial_value==d}" @click="item.initial_value=d">{{d}}</button>
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
      values:["none","underline","overline","line-through"]},
  {name: "text-decoration-color",type:"color",initial_value: "currentcolor",
      values:["currentcolor"]},
  {name: "text-decoration-style",type:"style",initial_value: "solid",
      values:["solid","dashed","dotted","double","wavy"]}
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
    statusNow: function (notify) {
      this.status = notify;
    }
  },
  computed: {
    getStyle() {
      return {
        "text-decoration-line": this.cssSD.property[0].initial_value,
        // "text-decoration-color": this.cssSD.property[1].initial_value,
        "text-decoration-color": this.defaultColor,
        "text-decoration-style": this.cssSD.property[2].initial_value
      };
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

#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  text-align: center
  color: $font_color
  margin-top: 60px

a,button
  color: $color_tertiary

button
  background: none
  border: solid 1px
  border-radius: 2em
  font: inherit
  padding: 0.75em 2em
  margin: .1em .2em
  
.demo
  background-color: #eee
  border-radius: 25px
  & .container
    +mp(auto,10px 20px)
  & .boxcontent
    border: 5px solid $color_primary
    border-radius: 25px
    box-shadow: inset 0 0 10px rgba($main-color,.6)
    & .code
      border: 1px solid $font_color
    & .view
      height: 100px
      +flexCenter
      flex-direction: column
      & .text-model
        transform: scale(2)
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
    & .itemp span
        display: inline-block
        margin: 0 10px
        vertical-align: top
  & .code, & .mode
      display: block
      overflow: hidden
      height: auto
  & .active
    background-color: $focus-color
  & .hideMode
    opacity: 0
    overflow: hidden
    // display: none
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
