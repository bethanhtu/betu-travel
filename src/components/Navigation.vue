<template>
    <header :class="{'scrolled-nav': scrolleNav}">
        <nav>
            <div class="branding">
                <router-link class="branding" :to="{name: 'home'}"><a href="">BeTu</a></router-link>
                
            </div>
        
        <ul v-show="!mobile" class="navigation" >
            <li><router-link class="link" :to="{name: 'home'}">Home</router-link></li>
            <li><router-link class="link" :to="{name: 'room'}">Rooms</router-link></li>
            <li><router-link class="link" :to="{name: 'post'}">Post</router-link></li>
            <li><router-link class="link" :to="{name: 'about'}">About</router-link></li>
        </ul>
        <div class="icon">
            <div class="icon-search small-icon">
                <i class="fa fa-search"></i>
            </div>
            <div class="icon-heart">
                <i class="fa-regular fa-heart"></i>
            </div>
            <div class="icon-user">
                <i class="fa fa-user" @click="toggleForm"></i>
            </div>
            
            <i @click="toggleMobileNav" v-show="mobile" class="fa-solid fa-bars" :class="{'icon-active' : mobileNav}"></i>
        </div>
        <transition name="mobile-nav">
            <ul v-show="mobileNav" class="dropdown-nav" >
                <li><router-link class="link" :to="{name: 'home'}">Home</router-link></li>
            <li><router-link class="link" :to="{name: 'room'}">Rooms</router-link></li>
            <li><router-link class="link" :to="{name: 'post'}">Post</router-link></li>
            <li><router-link class="link" :to="{name: 'about'}">About</router-link></li>
            </ul>
        </transition>
    </nav>
    </header>
    <Login
    v-if="isShowLogin"
    @cancel="toggleForm"
    />
    <Signin v-if="isShowSignin"
    @cancel="toggleForm"
    />
</template>

<script>
import Login from "./Accounts/Login.vue"
import Signin from "./Accounts/Login.vue"


export default {
    name: 'Navigation',
    components: {
        Login,
        Signin
    },
    data() {
        return {
            isShowSignin: false,
            isShowLogin: false,
            scrolleNav: null,
            mobile: null,
            mobileNav: null,
            windowWidth: null
        }
    },
    created() {
        window.addEventListener('resize', this.checkScreen);
        this.checkScreen();
    },
    mounted() {
        window.addEventListener('scroll', this.updatedScroll);
    },

    methods: {
        toggleFormSignin() {
            this.isShowSignin = !this.isShowSignin;
        },
        toggleForm() {
            this.isShowLogin = !this.isShowLogin;
            console.log('Running here')
        },
        toggleMobileNav() {
            this.mobileNav = !this.mobileNav;
        },
        updatedScroll() {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 50) {
                this.scrolleNav = true;
                return;
            }
            
            this.scrolleNav = false;
        },

        checkScreen() {
            this.windowWidth = window.innerWidth;
            if (this.windowWidth <= 550) {
                this.mobile = true;
                return;
            }
            this.mobile = false;
            this.mobileNav = false;
            return;
        }
    }
}
</script>
<style scoped>
header {
    width: 100%;
    transition: 0.5s ease-all;
    color: #000;
}
nav {
    position: relative;
    flex-direction: row;
    height: 60px;
    max-width: 1200px;
    transition: 0.5s ease-all;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media(min-width: 1200px) {
        max-width: 1200px
    }
}
img {
    width: 30px;
}
ul {
    font-weight: 500;
    
    list-style: none;
    text-decoration: none;
}
li {
    text-transform: uppercase;
    padding: 16px;
}
.link {
    color: #565656;
    text-decoration: none;
    font-size: 14px;
    transition: 0.5s ease-all;
    padding-bottom: 4px;
    border-bottom: 2px solid transparent;
}
.link:hover {
    border-color: orange;
    cursor: pointer;
}
.branding {
    display: flex;
    align-items: center;
    transition: .5 ease all;
}
.branding a {
    padding-left: 5px;
    text-decoration: none;
    font-size: 24px;
    color: orange;
    margin: 20% 0;
}
.icon {
    color: #565656;
    display: flex;
    align-items: center;
    position: relative;
    top: 0;
    height: 100%;
}

i {
    padding: 10px;
    cursor: pointer;
    transition: .3 ease all;
}

.navigation {
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: center;

}
i {
    color: #565656;
    cursor: pointer;
    font-size: 24px;
    transition: .8 ease all;
    
}

.icon-active {
    transform: rotate(180deg);
}

.dropdown-nav{
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 50%;
    height: 200px;
    background-color:#fff;
    top: 0;
    left: 0;
}
.dropdown-nav li{
    color: #fff;
    padding: 10px;
    font-size: 0.5rem;
}
.dropdown-nav li:first-child {
    
}
.mobile-nav-enter-active, .mobile-nav-leave-active  {   
    transition: 1s ease all;
}
.mobile-nav-enter-from,
.mobile-nav-leave-to {
    transform: translateX(-250px);
}
.mobile-nav-enter-to {
    transform: translateX(0);
}
li {
    margin-left: 0;
}           
.dropdown-nav li .link {
    color: #565656;
}
.scrolled-nav {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 4px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.6);
}
.scrolled-nav nav {
    
}
.scrolled-nav img {
    width: 20px;
    box-shadow: 0 4px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
.scrolled-nav li {
    color: #fff;
}

</style>