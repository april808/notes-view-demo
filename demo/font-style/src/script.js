console.clear();

var alldata = {
  shorthand: "",
  property: [
    {
      name: "font-style",
      type: "style",
      initial_value: "normal",
      values: ["normal", "italic", "oblique"],
      check_if: {
        usevalue: "oblique",
        initial_value: 45,
        range: [-90, 90],
        unit: "deg"
      }
    }
  ],
  notes: "文字樣式",
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
    },
    tocheckinput: function (val, attr) {
      let length = attr.length - 1;
      let nowindex = attr.indexOf(val);

      if (val == "length" || nowindex == length) {
        return true;
      } else {
        return false;
      }
    },
    tocheckrange: function (val, attr) {
      let length = attr.length - 1;
      let nowindex = attr.indexOf(val);

      let item = this.cssSD.property[0];
      let check_if = item.check_if;

      if (item.initial_value.indexOf(check_if.usevalue) == -1) {
        return false;
      } else if (check_if.initial_value == 45) {
        item.initial_value = check_if.usevalue;
        return true;
      } else if (check_if.initial_value != 45) {
        item.initial_value = this.getspl;
        return true;
      } else {
        return false;
      }
    },
    hasString: function (d, usevalue) {
      if (d.indexOf(usevalue) != -1) {
        return true;
      } else {
        return;
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
        // "text-align": this.cssSD.property[0].initial_value,
        // "text-align-last": this.cssSD.property[1].initial_value,
      };
    },
    getspl() {
      let item = this.cssSD.property[0];
      let data = item.check_if.usevalue + " " + item.check_if.initial_value + item.check_if.unit;
      return data;
    }
  }
});
app.mount("#app");

// ------------------------
