console.clear();

var alldata = {
  shorthand: "white-space",
  property: [
    {
      name: "white-space",
      type: "line",
      initial_value: "normal",
      values: ["normal", "nowrap", "pre", "break-spaces"]
    }
  ],
  notes: "文字空格",
  template:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
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
    tocheckinput: function (val, attr) {
      let length = attr.length - 1;
      let nowindex = attr.indexOf(val);

      if (val == "length" || nowindex == length) {
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
    // updateColorValue(event) {
    //   this.$emit("input", event);
    // }
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
      // return {
      //   "white-space": this.cssSD.property[0].initial_value
      // };
      let nowCSS = this.propertyname()

      for(let item of nowCSS ){
        attr[nowCSS.indexOf(item)] = " " + this.tocheckvalue(item)
      }
      // return ( name + ": " + attr.join('\n') + ";";
      return (
        name +
        ": " +
        this.tocheckvalue("white-space") +
        ";\n"
      );
    }
  }
});
app.mount("#app");

// ------------------------