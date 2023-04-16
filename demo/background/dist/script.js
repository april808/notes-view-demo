console.clear();

var alldata = {
  shorthand: "background",
  property: [
    {
      name: "background-color",
      type: "color",
      initial_value: "transparent",
      values: ["transparent", "color"],
    },
    {
      name: "background-image",
      type: "image",
      initial_value: "none",
      values: ["none", "url","gradient"],
      check_if: {
        btn_tf:[true,true],
        usevalue: ["url","gradient"],
        initial_value: ["https://picsum.photos/seed/picsum/800/500","to top, #a8edea 0%, #fed6e3 100%"],
        range: [],
        unit: "",
        link: ""
      }
    },
    {
      name: "background-position",
      type: "width",
      initial_value: "0%",
      values: ["left","center","right", "top", "bottom","length"],
    },
    {
      name: "background-size",
      type: "width",
      initial_value: "auto",
      values: ["auto", "cover", "contain","length"],
    },
    {
      name: "background-repeat",
      type: "repeat",
      initial_value: "repeat",
      values: ["repeat", "repeat-x", "repeat-y","no-repeat","space","round"],
    },
    {
      name: "background-attachment",
      type: "style",
      initial_value: "scroll",
      values: ["scroll", "fixed", "local"],
    },
    {
      name: "background-origin",
      type: "origin",
      initial_value: "padding-box",
      values: ["border-box", "padding-box", "content-box"],
    },
    {
      name: "background-clip",
      type: "clip",
      initial_value: "border-box",
      values: ["border-box", "padding-box", "content-box"],
    },
    {
      name: "background-blend-mode",
      type: "style",
      initial_value: "normal",
      values: ["normal", "multiply", "screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","exclusion","hue","saturation","color","luminosity"],
    }
  ],
  notes: "背景樣式",
  templateouter: `<p>這是段落</p>
	<p>這是段落</p>
	<p>這是段落</p>
	<p>這是段落</p>
	<p>這是段落</p>
	<p>這是段落</p>
  <p>這是段落</p>
	<p>這是段落</p>
	<p>這是段落</p>
  `,
  template:
    `
    這是block段落<br />
		這是block段落<br />
		這是block段落<br />
		這是block段落<br />
		這是block段落<br />
		這是block段落<br />
		這是block段落<br />
		這是block段落<br />
		這是block段落<br />
		這是block段落<br />
		這是block段落<br />
		這是block段落<br />
		這是block段落<br />
		這是block段落<br />
		這是block段落<br />
		這是block段落<br />
		這是block段落<br />
		這是block段落<br />
		這是block段落<br />
		這是block段落<br />
		這是block段落<br />
		這是block段落<br />
		這是block段落<br />
		這是block段落<br />
		這是block段落<br />
		這是block段落<br />
		這是block段落<br />
		這是block段落<br />
		這是block段落<br />
		這是block段落<br />
		這是block段落<br />
		這是block段落<br />
    `
};

const app = Vue.createApp({
  // el: "#app",
  data() {
    return {
      status: "",
      editing: true,
      showcode: false,
      cssSD: alldata,
      // defaultColor: "currentcolor"
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
    tockimg: function (usvi,itemi) {
      let item = this.cssSD.property[itemi];
      let usvattr = item.check_if.usevalue;
      let usv = item.check_if.usevalue[usvi];
      let check_if = item.check_if;
      

      if ( item.initial_value.indexOf(usv) == -1 ) {
        return false;
      } else if ( this.hasString(item.initial_value,'gradient') ) {
        let datalinear = "linear-"+ usv + "( " + item.check_if.initial_value[usvi] + " )";
        item.initial_value = datalinear;
        return true;
      } else if ( this.hasString(item.initial_value,'url') ) {
        let datalink = usv + "( '" + item.check_if.initial_value[usvi] + "' )";
        item.initial_value = datalink;
        return true;
      } else {
        return true;
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
      let attr = [];
      let name = this.cssSD.shorthand;
            let nowCSS = this.propertyname()

            // for(let item of nowCSS ){
            //   attr[nowCSS.indexOf(item)] = " " + this.tocheckvalue(item)
            // }
            // return ( name + ": " + attr.join('\n') + ";"
      return (
        name +
        ": " +
        this.tocheckvalue("background-image") +
        " " +
        this.tocheckvalue("background-position") +
        " " +
        this.tocheckvalue("background-repeat") +
        " " +
        this.tocheckvalue("background-attachment") +
        ";\n" +
        "background-color: " +
        this.tocheckvalue("background-color") +
        ";\n" +
        "background-size: " +
        this.tocheckvalue("background-size") +
        ";\n"+
        "background-clip: " +
        this.tocheckvalue("background-clip") +
        ";\n" +
        "background-origin: " +
        this.tocheckvalue("background-origin") +
        ";\n" +
        "background-blend-mode: " +
        this.tocheckvalue("background-blend-mode") +
        ";\n"
      );
    },
    getspl(itemi) {
      let item = this.cssSD.property[itemi];
      let data = item.check_if.usevalue + " " + item.check_if.initial_value;
      return data;
    },
  }
});
app.mount("#app");

// ------------------------