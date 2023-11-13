<template>
<div v-if="OpenClose" class="modal" tabindex="-1" fade show style="display: block;">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" @click="OpenCloseFun" class="btn-close"  aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
        <button type="button" @click="OpenCloseFun" :class="'btn btn-'+variant" >Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
<button type="button" @click="OpenCloseFun" :class="'btn btn-'+variant" >Open Model</button>
</template>
<script>
export default{
    name:'AlertDefault',
    props:{
        visible:Boolean,
        variant:String,

    },
    data(){
        return{
            OpenClose:this.visible
        }
    },
    methods:{
        OpenCloseFun(){
            this.OpenClose=!this.OpenClose;
        }
    },
    watch:{
        visible:function(newVal, oldVal){
            this.OpenClose=newVal
            console.log('new'+ newVal + '==' + oldVal)
        }
    }
}
</script>