
<template>
    <div class="Background">
        <div class="contents">
            <h1 class="tittle">Những trải nghiệm cực kỳ thú vị</h1>
            <p class="text-contents">Khám phá vẻ đẹp hoang sơ và hùng vĩ của Cao Bằng, nơi tụ tập những cảnh quan thiên nhiên tuyệt đẹp và di sản văn hóa đọc đáo.</p>
            <p class="text-contents">Từ những dãy núi trùng điệp cho đến những thác nước lung linh, Cao Bằng sẽ mang đến cho bạn những trải nghiệm tuyệt vời và không thể nào quên.</p>
            <p class="text-contents">30/06/2023</p>
        </div>
    </div>
</template>

<script>

export default {
    name: '',
    data() {
        return {
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
.Background {
    width: 1200px;
    background-image: url(https://images.unsplash.com/photo-1503457574462-bd27054394c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80);
    background-size: cover;
    margin: 0 auto;
    margin-bottom: 2rem;
    background-position: center;
    transition: 0.5s ease-all;
    @media(min-width: 1200px) {
        max-width: 1600px
    }
}
.contents {
    padding:50px 0px 0 42px;;
    padding-left: 390px;
    height: 500px;
    max-width: 200px;
    transition: 0.5s ease-all;
    margin: 0 auto;
    word-wrap: break-word;
    @media(min-width: 840px) {
        max-width: 840px
    }
}
.tittle {
    word-wrap: break-word;
    font-size: 2.0rem;
    color: #fff;
}
.text-contents {
    padding-top: 32px;
    width: 500px;
    font-size: 1.0rem;
    word-wrap: break-word;
    color: #fff;
}
</style>