<template>
<Teleport to="header">
    <div class="login_container" >
        <div class="login_design">
            <div class="background">
            </div>
            <div class="login">
               
                <div class="contents">
                    <div class="cancel" @click="closeFormLogin">
                        <i class="fa fa-times"></i>
                    </div>
                    <div class="branding">
                        <router-link class="branding" :to="{name: 'home'}"><a href="">BeTu</a></router-link>
                    </div>
                    <form action="">
                        <div class="form-group">
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nhập email của bạn">
                        </div>

                        <div class="input-container form-group">
                            <input  v-model="password" :type="passwordVisible ? 'text' : 'password'" class="form-control  input-pass" id="exampleInputPassword1" placeholder="Mật khẩu" >
                            <span class="icon" @click="togglePasswordVisibility">
                                <i :class="passwordVisible ? 'fa fa-eye-slash' : 'fa fa-eye'"></i>
                              </span>
                            
                        </div>

                        <div class="form-group">
                            <a href=""><small class="missing">Quên mật khẩu?</small></a>
                        </div>
                          
                        <div class="form-group">
                            <input type="submit" name="" id="btn-login" value="Đăng nhập">
                        </div>
                    
                        <div class="form-group">
                           <small  class="forgot">Bạn chưa có tài khoản?</small><a @click="showSignin" href="/signup">Đăng ký</a>
                        </div>
                        
                    </form>
                </div>
    
            </div>
        </div>
        
    </div>
</Teleport>
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
        showSignin() {
            this.$emit("showSignin");
        },
        closeFormLogin() {
            this.$emit("cancel");
        },
        togglePasswordVisibility() {
      this.passwordVisible = !this.passwordVisible;
    }
    }
}
</script>
<style scoped>
.login_container {
    position: fixed;
    display: none;
    z-index: 1060;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.2);
    width: 100%;
    height: 100%;
}
.login_design {
    margin: 0 auto;
    display: flex;
    width: 900px;
    height: 90%;
    box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.5);
}
.background {
    width: 60%;
    height: 100%;
    background-image: url(https://images.unsplash.com/photo-1528543606781-2f6e6857f318?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=465&q=80);
    background-size: cover;
}
.login {
    width: 40%;
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
    height: 30vh;
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
    height: 54px;
    background-color: #EAEAEA;
    outline: none;
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
</style>