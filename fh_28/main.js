
new Vue({
  el:'#app',
  data() {
    return {
      count: 0
      }
    },
  created(){
    console.log('created');
  },
  mounted(){
    console.log('mounted');
  },
  updated(){
    console.log('updated');
  },
  destroyed(){
    console.log('destroyed');
  },
  methods:{
    destroy(){
      this.$destroy();
    }
  }

});