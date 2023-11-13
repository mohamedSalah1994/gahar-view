<template>
  <!--Modal: Login with Avatar Form-->
  <div
    class="modal fade"
    id="modalLoginAvatar"
    tabindex="-1"
    role="dialog"
    aria-labelledby="myModalLabel"
    aria-hidden="true"
  >
    <div
      class="modal-dialog cascading-modal modal-avatar modal-sm"
      role="document"
    >
      <!--Content-->
      <div class="modal-content">
        <!--Header-->
        <div class="modal-header center">
          <img
            src="../assets/logo.svg"
            alt="avatar"
            class="rounded-circle img-responsive"
          />
        </div>

        <!--Body-->
        <div class="modal-body text-center mb-1">
          <!--   <h5 class="mt-1 mb-2">Maria Doe</h5> -->
          <div class="md-form ml-0 mr-0">
            <input
              type="text"
              id="form29"
              class="form-control form-control-sm validate ml-0"
              v-model="username"
            />
            <label
              data-bs-error="wrong"
              data-bs-success="right"
              for="form29"
              class="ml-0"
              >Enter Email
            </label>
          </div>
          <div class="md-form ml-0 mr-0">
            <input
              type="password"
              id="form29"
              class="form-control form-control-sm validate ml-0"
              v-model="password"
            />
            <label
              data-error="wrong"
              data-success="right"
              for="form29"
              class="ml-0"
              >Enter password</label
            >
          </div>

          <div class="text-center mt-4">
            <button @click="loginIt" class="btn btn-cyan mt-1">
              Login <i class="fas fa-sign-in ml-1"></i>
            </button>
          </div>
        </div>
        <a
          ref="cancelModalBtn"
          style="font-weight: bold; display: none"
          href=""
          data-bs-dismiss="modal"
          >الغاء</a
        >
      </div>
      <!--/.Content-->
    </div>
  </div>
  <!--Modal: Login with Avatar Form-->

  <div class="text-center">
    <a
      style="font-weight: bold"
      href=""
      class="btn btn-default btn-rounded"
      data-bs-toggle="modal"
      data-bs-target="#modalLoginAvatar"
      >تسجيل دخول</a
    >
  </div>
</template>
<script>
import { useUserStore } from "../store/auth.js";
export default {
  data: () => ({
    username: "",
    password: "",
  }),
  methods: {
    loginIt() {
      const userstore = useUserStore();

      userstore.signIn(
        this.username,
        this.password,
        this.$refs.cancelModalBtn,
        this.$router
      );
    },
  },
};
</script>
<style></style>
