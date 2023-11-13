// /store/user.js

import { loginUserAPI } from "@/apiServices";
import { getDummyUser } from "@/dummyData/users";
import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: null,
  }),
persist:true,
  actions: {
    async signIn(username, password, closemodelhandler) {
        try {
          let res;
          if(process.env.VUE_APP_ENVIROMENT === "PRODUCTION") {
            res = await loginUserAPI({ username, password });
          }
          else {
            res = getDummyUser({username, password})
          }
          if (res.status == 200) {
            this.user = res.data;
            closemodelhandler.click();
            // router.push('/login')
          } else {
            alert("error login");
          }
        } catch (error) {
          alert("error login");
          console.log(error);
        }
    },
    logout(){
      this.user=null
    }
  },
});
