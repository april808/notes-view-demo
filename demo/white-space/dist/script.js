console.clear()

var alldata= {
  shorthand: "white-space"
  ,property:[
    {name: "white-space"
       ,type:"line"
       ,initial_value:"normal"
       ,values:["normal","nowrap","pre","break-spaces"]}
  ]
  ,notes: "文字空格"
  ,template: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
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
        "white-space": this.cssSD.property[0].initial_value,
        // "text-decoration-color": this.cssSD.property[1].initial_value,
        // "text-decoration-color": this.defaultColor,
        // "text-decoration-style": this.cssSD.property[2].initial_value,
      }
    },
  }
})
app.mount('#app');


// ------------------------