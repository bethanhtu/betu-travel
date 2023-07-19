<template>
  <div class="background">
    <div class="roomsCards">
      <div class="roomsCards">
        <h1 class="tittleContends">Khám phá Cao Bằng</h1>
        <div class="description">
            <p class="desContents">Là một tỉnh thuộc vùng núi phía Bắc với nền khí hậu mát mẻ quanh năm, có rừng, núi, sông suối trải dài hùng vĩ, thiên nhiên mang nhiều nét hoang sơ, cùng với những tháng năm lịch sử đã tạo cho vùng đất Cao Bằng những điều kiện thuận lợi để phát triển du lịch… Với rất nhiều núi cao, sông hồ, thác nước và những cánh rừng nguyên sinh tạo nên cảnh quan thiên nhiên hùng vĩ, thơ mộng, mang đậm nét hoang sơ rất thích hợp với du lịch ngoạn cảnh, nghỉ ngơi Cao Bằng là một điểm đến rất thú vị mà các bạn yêu thích du lịch không nên bỏ qua.</p>
            <a href="">View all cards</a>
          </div>
      </div>
    
      
        <section class="articles">
          <article v-for="room in rooms" :key="room.id">
            <div class="article-wrapper">
              <figure>
                <img :src=room.img alt="ảnh"/>
              </figure>
              <div class="article-body">
                  <h5>Thành phố Cao bằng</h5>
                <h2>{{room.tittle}}</h2>
                <p>{{room.location}}</p>
              </div>
            </div>
          </article>
      </section>
    </div>
  </div>
  </template>
<script>

export default {
        name: 'App',
        data() {
            const threshold = [];
            for (let i = 0; i <= 20; i++) {
                threshold.push(0.05 * i);
            }
            return { threshold,
            rooms: [
                {
                  id: 1,
                  tittle: 'An House',
                  img:'https://images.unsplash.com/photo-1648995505975-8fe3ebc7b253?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
                  location:'An House Homestay được biết đến như một điểm dừng chân lãng mạn bên bờ sông Hồng. Ở An, bạn tìm thấy cảm giác riêng tư, thân thuộc, an yên như chính cái tên của nơi này vậy'
                },
                {
                  id: 1,
                  tittle: 'Harmony',
                  img:'https://images.unsplash.com/photo-1566571807426-61eca847576f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZXN0YXl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60',
                  location:'Harmony House là một căn nhà nằm giữa trung tâm thành phố. Vì thế, chỉ cần bước chân ra cửa là bạn đã tiếp cận được những địa điểm vui chơi trong phố, cũng như thưởng thức những món ăn gia truyền ở đây.'
                },
                {
                  id: 1,
                  tittle: 'Lacaito',
                  img:'https://images.unsplash.com/photo-1636598283269-97dbf28796ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80',
                  location:'Lacaito là một căn nhà nhỏ xinh nằm trong ngõ nhỏ giữa trung tâm Hà Nội, được các bạn trẻ săn đón trong thời gian gần đây. Vì thế, dù có vị trí trung tâm nhưng Lacaito gần như tách biệt khỏi sự ồn ào của phố thị.'
                },
                
              ]}
        },
  
        
        
        methods: {
            onIntersect({target, intersectionRatio}) {
                if (intersectionRatio >= 1) {
                    target.removeAttribute('style');
                } else {
                    // Clips the ratio within 0.75 - 1.0 range
                    const ratio = intersectionRatio * 0.25 + 0.75;
                    target.style.opacity = ratio;
                    target.style.transform = `scale(${ratio})`;
                }
            }
        }
    };

</script>
<style scoped>
.roomsCards {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 0;
}
.background  {
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  background-color: #F2FAF9;
}
.tittleContents {
  font-weight: 700;
  font-size: 28px;
  
}
.description {
  padding: 40px 0 ;
  display: inline-flex;
  display: flex;
  flex: 1;
  justify-content: space-between;
}
.desContents {
  width: 80%;
  margin: 0;
}
a {
  margin: 0;
}


article {
  --img-scale: 1.001;
  --title-color: black;
  --link-icon-translate: -20px;
  --link-icon-opacity: 0;
  position: relative;
  border-radius: 4px;
  box-shadow: none;
  background-color: #596363;
  transform-origin: center;
  transition: all 0.4s ease-in-out;
  overflow: hidden;
  color: #fff;
  display: flex;
  justify-content: space-between;
}

article a::after {
  position: absolute;
  inset-block: 0;
  inset-inline: 0;
  cursor: pointer;

}

/* basic article elements styling */
article h2 {
  margin: 18px 0 18px 0;
  font-size: 1.9rem;
  letter-spacing: 0.06em;
  color: #fff;
  transition: color 0.3s ease-out;
}

figure {
  margin: 0;
  padding: 0;
  aspect-ratio: 16 / 9;
  overflow: hidden;
}

article img {
  max-width: 100%;
  transform-origin: center;
  transform: scale(var(--img-scale));
  transition: transform 0.4s ease-in-out;
  object-fit: cover;
}

.article-body {
  padding: 24px;
}

article a {
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  color: #28666e;
}

article a:focus {
  outline: 1px dotted #28666e;
}

article a .icon {
  min-width: 24px;
  width: 24px;
  height: 24px;
  margin-left: 5px;
  transform: translateX(var(--link-icon-translate));
  opacity: var(--link-icon-opacity);
  transition: all 0.3s;
}

/* using the has() relational pseudo selector to update our custom properties */
article:has(:hover, :focus) {
  --img-scale: 1.1;
  --title-color: #28666e;
  --link-icon-translate: 0;
  --link-icon-opacity: 1;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 48px 0;
  font-size: 1.2rem;
  line-height: 1.6rem;
  background-image: linear-gradient(45deg, #7c9885, #b5b682);
  min-height: 100vh;
}

.articles {
  display: grid;
  max-width: 1200px;
  margin-inline: auto;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 24px;
}

@media screen and (max-width: 960px) {
  article {
    container: card/inline-size;
  }
  .article-body p {
    display: none;
  }
}

@container card (min-width: 380px) {
  .article-wrapper {
    display: grid;
    grid-template-columns: 100px 1fr;
    gap: 16px;
  }
  .article-body {
    padding-left: 0;
  }
  figure {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  figure img {
    height: 100%;
    aspect-ratio: 1;
    object-fit: cover;
  }
}

.sr-only:not(:focus):not(:active) {
  clip: rect(0 0 0 0); 
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap; 
  width: 1px;
}
</style>