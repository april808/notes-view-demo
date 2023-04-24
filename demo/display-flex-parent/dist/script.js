console.clear()

var alldata= {
  shorthand: ""
  ,property:[
    {name: "display"
       ,type:"display"
       ,initial_value:"flex"
       ,values:["flex"]},
    {name: "align-items"
       ,type:"style"
       ,initial_value:"normal"
       ,values:["normal","stretch","center","start","end"]},
    {name: "justify-content"
       ,type:"style"
       ,initial_value:"normal"
       ,values:["normal","stretch","center","start","end","space-between","space-around","space-evenly"]},
    {name: "flex-direction"
       ,type:"style"
       ,initial_value:"row"
       ,values:["row","row-reverse","column","column-reverse"]},
    {name: "flex-wrap"
       ,type:"style"
       ,initial_value:"nowrap"
       ,values:["nowrap","wrap","wrap-reverse"]}
  ],
  notes: "觀察: flex"
  ,template: "5"
};

const app = Vue.createApp({
  // el: "#app",
  data() {
    return {
      status: "",
      editing: true,
      showcode: false,
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
        "text-align": this.cssSD.property[0].initial_value,
        "text-align-last": this.cssSD.property[1].initial_value,
      }
    },
  }
})
app.mount('#app');


// ------------------------