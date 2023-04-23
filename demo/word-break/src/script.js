console.clear()

var alldata= {
  shorthand: ""
  ,property:[
    {name: "word-break"
       ,type:"line"
       ,initial_value:"normal"
       ,values:["normal","break-word","break-all","keep-all"]}
    ,{name: "hyphens"
       ,type:"line"
       ,initial_value:"manual"
       ,values:["none","manual","auto"]}
  ]
  ,notes: "文字斷行(word-break)、連字符號(hyphens)"
  ,template: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<p>出台不禁台鐵醫學，無門引進，幹部禮品損失後悔提供搭配玩具財富台北，每頁三大對面理由外國，房屋之家，問題主管所以大概停止後果結果案例生氣既然鈴聲下載後果，領導接觸進度預計一位精神，書庫出口那些體會，全球百姓評論典型美容線上本文一下下面留言板上門聯繫，發送家。</p>"
};

const app = Vue.createApp({
  // el: "#app",
  data() {
    return {
      status: "",
      editing: false,
      showcode: true,
      cssSD: alldata,
      defaultColor: "currentcolor"
    };
  },
  methods: {
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
      return {
        "word-break": this.cssSD.property[0].initial_value,
        "hyphens": this.cssSD.property[1].initial_value,
      }
    },
  }
})
app.mount('#app');


// ------------------------