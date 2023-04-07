var alldata= {
shorthand: "border",
property:[
  {name: "border-width",type:"width",initial_value:"medium",
      values:["medium","thin","thick","length"]},
  {name: "border-color",type:"color",initial_value: "currentcolor",
      values:["currentcolor"]},
  {name: "border-style",type:"style",initial_value: "none",
      values:["none","solid","dashed","dotted","double","groove","ridge","inset","outset"]}
],
notes: "邊框線"
};

const app = Vue.createApp({
 // el: "#app",
  data () {
    return {
      status: "",
      editing: false,
      showcode: true,
      cssSD: alldata,
      defaultColor: 'currentcolor',
      defaultwidth: 'length-defaultwidth'
    }
  },
  methods: {
    statusNow: function(notify){
      this.status = notify;
    },
    valename: function(){
      
      var cssnames = []
        var obj = this.cssSD.property
        for(var i=0;i<obj.length;i++){
          cssnames[i] = obj[i].name
        }
        return cssnames

    },
    tostring: function(val){
      return val.replace(/'"'/g,'')
    },
    width: function (val){
      var wnumber = this.cssSD.property[0].values[3]
      var valspace = this.cssSD.property[0].initial_value
      
      if( wnumber != val && wnumber != '' ){
        return valspace = wnumber
      }else{
        return valspace
      }
    },
    // updateColorValue(event) {
    //   this.$emit("input", event);
    // }
  },
  computed: {
    getStyle(){
      return {
        "border-width": this.width('length'),
        "border-color": this.defaultColor,
        "border-style": this.cssSD.property[2].initial_value,
      }
    },
    getshort(){
      var name = this.cssSD.shorthand
      return  name +': '+ this.width('length') + ' ' + this.defaultColor + ' ' +  this.cssSD.property[2].initial_value +";"
    }
  }
})
app.mount('#app');


// ------------------------