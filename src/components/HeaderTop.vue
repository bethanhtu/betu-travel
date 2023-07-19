<template>
    <header class="header" v-show="mobile" :class="{'icon-active' : mobile}">
        <ul>
            <li>Về chúng tôi</li>
            <li>Đăng ký đối tác</li>
            <li>Liên hệ</li>
            <li>Hỗ trợ</li>
        </ul>
    </header> 
    <h2></h2>
</template>
<script>
export default {
    data() {
        return {
            mobile : false,
            windowWidth: null
        }
    },
    created() {
        window.addEventListener('resize', this.checkScreen);
        this.checkScreen();
    },

    methods: {
        checkScreen() {
            this.windowWidth = window.innerWidth;
            if (this.windowWidth <= 750) {
                this.mobile = false;
                return;
            }
            this.mobile = true;
            return;
        }
    },
    
}
</script>
<style scoped>
header {
    width: 100%;
    height: 30px;
    max-width: 1200px;
    transition: 0.5s ease-all;
    margin: 0 auto;
    background-color: #F5F5F5;
    @media(min-width: 1140px) {
        max-width: 1140px
    }
    border-radius: 10px;
}
ul{
    display: flex;
    justify-content: flex-end;
    flex-direction: row; 
   
}
li {
    cursor: pointer;
    font-size: 12px;
    list-style: none;
    text-decoration: none;
    padding: 10px 10px 0 0;
}
</style>