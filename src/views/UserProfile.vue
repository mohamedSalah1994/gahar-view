<template>

    <v-container
      id="user-profile"
      fluid
      tag="section"
    >

      <v-row justify="center">
        <v-col
          cols="12"
          md="8"
        >
          <MaterialCard>
         <card-user-profile></card-user-profile>
    
            <v-form>
              <v-container class="py-0">
                <v-row>
                  <v-col
                    cols="12"
                    md="4"
                  >
                    <v-text-field
                      label="Gahar"
                      disabled
                    />
                  </v-col>
  
                  <v-col
                    cols="12"
                    md="4"
                  >
                    <v-text-field v-model="user.individualsName"
                      class="purple-input"
                      label="User Name"
                    />
                  </v-col>
  
                  <v-col
                    cols="12"
                    md="4"
                  >
                    <v-text-field v-model="user.email"
                      label="Email Address"
                      class="purple-input"
                    />
                  </v-col>
  
                  <v-col
                    cols="12"
                    md="6"
                  >
                    <v-text-field
                      label="First Name"
                      class="purple-input"
                    />
                  </v-col>
  
                  <v-col
                    cols="12"
                    md="6"
                  >
                    <v-text-field v-model="user.userPassword"
                      label="Password "
                      class="purple-input"
                    />
                  </v-col>
  
                  <v-col cols="12">
                    <v-text-field v-model="user.individualsAddress"
                      label="Adress"
                      class="purple-input"
                    />
                  </v-col>
  
                  <v-col cols="12">
                    <v-text-field v-model="user.individualsMobile"
                      label="phone"
                      class="purple-input"
                    />
                  </v-col>
  
                

  
                  <v-col
                    cols="12"
                    class="text-right"
                  >
                    <v-btn @click="registerAPI"
                      color="success"
                      class="mr-0"
                    >
                      Update Profile
                    </v-btn>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
          </MaterialCard>
        </v-col>
  
        <v-col
          cols="12"
          md="4"
        >
         
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script >
import CardUserProfile from '@/components/CardUserProfile.vue';
import MaterialCard from '@/components/MaterialCard.vue' ;
import { registerUserAPI } from "../apiServices" ;
import { ref } from 'vue';
    export default {
   

    components: { CardUserProfile , MaterialCard },
    setup() {
        const user = ref({
            userRolesId: 1,
            userTypesId: 1,
            status:1,
            email: "",
            userPassword: "",
            individualsName: "",
            individualsMobile : "",
            individualsAddress :""
        });
    

     

        const registerAPI = async () => {
            try {
                let data;
                console.log(user.value)
                if(process.env.VUE_APP_ENVIROMENT === "PRODUCTION") {
                    const response = await registerUserAPI(user.value);
                    data = response.data;
                    alert("saved")
                } else {
                  console.log(data)
                }
           
            } catch(err) {
                console.log(err);
            }
        }

      

      
        return {
            user,
            registerAPI
            
        }
    }
 
}
  </script>
  <style scoped>
#user-profile{
background-color: white;

}
</style>