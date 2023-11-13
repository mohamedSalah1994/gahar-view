<template>
<slot>
    
</slot>
</template>

<script>
import {onMounted} from 'vue'
import { useUserStore } from '@/store/auth'
import {useRouter} from 'vue-router'
 import {toast} from 'vue3-toastify'
export default {
    setup () {
        const userstore=useUserStore()
        const router=useRouter()
      onMounted(()=>{
if(!userstore.user){
  toast.warning(
    'login required to access this page',
    {
      position: toast.POSITION.TOP_RIGHT,
      setTimeout:1000
    },
  )
  router.push("/")
 
}
      })

      

        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>