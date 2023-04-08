console.clear()

var alldata= {
  shorthand: ""
  ,property:[
    {name: "word-break"
       ,type:"line"
       ,initial_value:"normal"
       ,values:["normal","break-word","break-all"]}
    ,{name: "hyphens"
       ,type:"line"
       ,initial_value:"manual"
       ,values:["manual","auto"]}
  ]
  ,notes: "文字斷行(word-break)、連字符號(hyphens)"
  ,template: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
};

const app = Vue.createApp({
 // el: "#app",
  data () {
    return {
      status: "",
      editing: false,
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
        "word-break": this.cssSD.property[0].initial_value,
        "hyphens": this.cssSD.property[1].initial_value,
      }
    },
  }
})
app.mount('#app');


// ------------------------