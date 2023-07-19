
<template>
    <div class="Background">
        <div class="contents">
            <h1 class="tittle">Khám phá Cao Bằng
                cùng với</h1>
                <h1 class="tittle">BeTu</h1>
            <p class="text-contents">Khám phá vẻ đẹp hoang sơ và hùng vĩ của Cao Bằng, nơi tụ tập những cảnh quan thiên nhiên tuyệt đẹp và di sản văn hóa đọc đáo. Từ những dãy núi trùng điệp cho đến những thác nước lung linh, Cao Bằng sẽ mang đến cho bạn những trải nghiệm tuyệt vời và không thể nào quên.</p>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Home',
    data() {
        return {
            
        }
    },
    created() {
        
    },
    mounted() {
        
    },

    methods: {
        
    }
}
</script>
<style scoped>
.Background {
    height: 500px;
    width: 1600px;
    background-image: url(../../assets/Back.png);
    background-size: cover;
    margin: 0 auto;
    background-position: center;
    transition: 0.5s ease-all;
    @media(min-width: 1200px) {
        max-width: 1200px
    }
}
.contents {
    padding: 68px 0px 0 42px;;
    height: 500px;
    transition: 0.5s ease-all;
    margin: 0 auto;
    word-wrap: break-word;
    
}
.tittle {
    word-wrap: break-word;
    font-size: 2.8rem;
    color: #fff;
}
.text-contents {
    padding-top: 32px;
    width: 500px;
    font-size: 1.4rem;
    word-wrap: break-word;
    color: #fff;
}
</style>