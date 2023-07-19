<template>
    <div class="login_container" >
        <div class="login_design">
            <div class="login">
               
                <div class="contents">
                    <div class="cancel" @click="goBack">
                        <i class="fa fa-times"></i>
                    </div>
                    <div class="branding">
                        <router-link class="branding" :to="{name: 'home'}"><a href="">BeTu</a></router-link>
                    </div>
                    <div class="with form-group">
                        <p>Login with Facebook</p>
                        <button type="button" class="btn-with">
                            <i class="fab fa-facebook-f"></i>
                        </button>
                    </div>

                    <div class="divider form-group">
                        <span class="divider-line"></span>
                        <span class="divider-text">or</span>
                        <span class="divider-line"></span>
                      </div>

                    <form action="">
                        <div class="form-group">
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nhập số điện thoại hoặc email của bạn">
                        </div>

                        <div class="form-group">
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Họ và tên">
                        </div>

                        <div class="input-container form-group">
                            <input  v-model="password" :type="passwordVisible ? 'text' : 'password'" class="form-control  input-pass" id="exampleInputPassword" placeholder="Mật khẩu" >
                            <span class="icon" @click="togglePasswordVisibility">
                                <i :class="passwordVisible ? 'fa fa-eye-slash' : 'fa fa-eye'"></i>
                              </span>
                        </div>

                        <div class="form-group">
                            <a href=""><small class="missing">Quên mật khẩu?</small></a>
                        </div>
                          
                        <div class="form-group">
                            <input type="submit" name="" id="btn-login" value="Đăng ký">
                        </div>
                    
                        <div class="form-group">
                           <small  class="forgot">Bạn đã có tài khoản?</small><a href="/">Đăng nhập</a>
                        </div>
                        
                    </form>
                    
                </div>
    
            </div>
        </div>
        
    </div>
</template>
<script>

export default {

    data() {
        return {
            password: '',
            passwordVisible: false
          
        }
    },
    methods: {
        goBack() {
        this.$router.go(-1)
      },
        closeFormLogin() {
            this.$emit("cancel")
        },
        togglePasswordVisibility() {
      this.passwordVisible = !this.passwordVisible;
    }
    }
}
</script>
<style scoped>
.login_container {
    position: absolute;
    display: none;
    z-index: 1060;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.2);
    width: 100%;
    height: 100vh;
}
.login_design {
    margin: 0 auto;
    display: flex;
    width: 400px;
    height: 90%;
    box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.5);
}
.login {
    width: 100%;
    height: 100%;
    background-color: #fff;
}
.contents {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 100%;
    width: 100%;
}
form {
    display: flex;
    flex-direction: column;
    height:30vh;
    margin: 0 auto;
    width: 80%;
}

.branding {
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
    transition: .5 ease all;
}
.branding a {
    display: flex;
    justify-content: space-between;
    text-decoration: none;
    font-size: 28px;
    color: orange;
}

.form-group {
    margin-bottom: 1rem;
}
.form-control {
    display: block;
    width: 100%;
    padding: 0.375rem 0.75rem;
    color: #495057;
    background-color: #fff;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}
input {
    padding: 5px;
    color: #565656;
    border-radius: 4px;
    border: unset;
    width: 100%;
    height: 6vh;
    background-color: #EAEAEA;
    outline: none;
}
.btn {
    display: inline-block;
    padding: 0px;
    color: #fff;
    vertical-align: middle;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    border: 2.3125rem solid 2.3125rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}
.btn-with {
    margin-left: 1rem;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    color: #0B86EE;
    background-color: #fff;
    border: none;
}
.btn-login {
    width: 100%;
}
#btn-login {
    color: #fff;
    background-color: #233D2C;
}
.missing {
    float: right;
}
.form-group a{
    text-decoration: none;
    margin-left: 5px;
}
.cancel i{
    margin: 0;
    float: right;
    font-size: 1.8rem;
    cursor: pointer;
}
.input-container {
    position: relative;
}
.input-pass  {
    padding-right: 30px;
}
.icon {
    position: absolute;
    top: 50%;
    right: 5px;
    transform: translateY(-50%);
    cursor: pointer;
  }
.with {
    padding: 4px;
    width: 80%;
    border-radius: 4px;
    color: #fff;
    background-color: #233D2C;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    margin: 0 auto;
    margin-bottom: 2%;
}
.divider {
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: 0 auto;
    margin-bottom: 1rem;
  }
  .divider-line {
    flex-grow: 1;
    border: none;
    border-top: 1px solid #000;
  }
  
  .divider-text {
    margin: 0 10px;
    color: #000;
  }
</style>