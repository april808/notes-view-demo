console.clear()

var alldata= {
  shorthand: "text-transform"
  ,property:[
    {name: "text-transform"
       ,type:"line"
       ,initial_value:"none"
       ,values:["none","lowercase","uppercase","capitalize"]}
  ]
  ,notes: "英文字大小寫:Aa"
};

const app = Vue.createApp({
 // el: "#app",
  data () {
    return {
      status: "",
      editing: true,
      showcode: true,
      cssSD: alldata,
      color: false,
      defaultColor: 'currentcolor',
      changeattr: []
    }
  },
  methods: {
    statusNow: function(notify){
      this.status = notify;
    },
    // remove: function (id,fname){
    //   this.fruits.splice(id,1);
    //   this.status="第"+(id+1)+"項"+fname+"已經被移除了";
    // },
    add: function (data){
      this.fruits.push(data);
      this.status="加入了"+data;
    },
    updateValue(event) {
      // this.$emit("input", event);
      // var attrdata = this.changeattr;
        for(var i=0;i<event.length;i+=1){
          return this.changeattr[i] = this.attrdata[i]
        }
    }
  },
  computed: {
    getattr(){
      return{
        '11': this.changeattr
      }
    },
    getStyle(){
      return {
        "text-transform": this.cssSD.property[0].initial_value,
        // "text-decoration-color": this.cssSD.property[1].initial_value,
        // "text-decoration-color": this.defaultColor,
        // "text-decoration-style": this.cssSD.property[2].initial_value,
      }
    },
  }
})
app.mount('#app');


// ------------------------