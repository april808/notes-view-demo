var alldata = {
  shorthand: "text-decoration",
  property: [
    {
      name: "text-decoration-line",
      type: "line",
      initial_value: "none",
      values: ["none", "underline", "overline", "line-through"],
      check_if: {
        usevalue: ["underline", "overline"],
        initial_value: ""
      }
    },
    {
      name: "text-decoration-style",
      type: "style",
      initial_value: "solid",
      values: ["solid", "dashed", "dotted", "double", "wavy"]
    },
    {
      name: "text-decoration-color",
      type: "color",
      initial_value: "currentcolor",
      values: ["currentcolor"]
    },
    {
      name: "text-decoration-thickness",
      type: "width",
      initial_value: "auto",
      values: ["auto", "from-font", "length"]
    }
  ],
  notes: "文字畫線"
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
      let attr = [];
      let name = this.cssSD.shorthand;
      let nowCSS = this.propertyname();

      for (let item of nowCSS) {
        attr[nowCSS.indexOf(item)] = " " + this.tocheckvalue(item);
      }
      return (
        name + ": " + attr.join("\n") + ";"
        // return (
        //   name +
        //   ": " +
        //   this.cssSD.property[0].initial_value +
        //   " " +
        //   this.defaultColor +
        //   " " +
        //   this.cssSD.property[2].initial_value +
        //   ";"
      );
    }
  }
});
app.mount("#app");

// ------------------------