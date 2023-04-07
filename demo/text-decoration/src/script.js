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
notes: "文字畫線"
};

const app = Vue.createApp({
 // el: "#app",
  data () {
    return {
      status: "",
      editing: false,
      showcode: true,
      cssSD: alldata,
      defaultColor: 'currentcolor'
    }
  },
  methods: {
    statusNow: function(notify){
      this.status = notify;
    },
    // updateColorValue(event) {
    //   this.$emit("input", event);
    // }
  },
  computed: {
    getStyle(){
      return {
        "text-decoration-line": this.cssSD.property[0].initial_value,
        "text-decoration-color": this.defaultColor,
        "text-decoration-style": this.cssSD.property[2].initial_value
      }
    },
    getshort(){
      var name = this.cssSD.shorthand
      return  name +': '+ this.cssSD.property[0].initial_value + ' ' + this.defaultColor + ' ' +  this.cssSD.property[2].initial_value +";"
    }
  }
})
app.mount('#app');


// ------------------------