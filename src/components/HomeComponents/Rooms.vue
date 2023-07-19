<template>
  <div class="background">
    <div class="roomsCards">
      <div class="roomsCards">
        <h1 class="tittleContends">Khám phá Cao Bằng</h1>
        <div class="description">
            <p class="desContents">Là một tỉnh thuộc vùng núi phía Bắc với nền khí hậu mát mẻ quanh năm, có rừng, núi, sông suối trải dài hùng vĩ, thiên nhiên mang nhiều nét hoang sơ, cùng với những tháng năm lịch sử đã tạo cho vùng đất Cao Bằng những điều kiện thuận lợi để phát triển du lịch… Với rất nhiều núi cao, sông hồ, thác nước và những cánh rừng nguyên sinh tạo nên cảnh quan thiên nhiên hùng vĩ, thơ mộng, mang đậm nét hoang sơ rất thích hợp với du lịch ngoạn cảnh, nghỉ ngơi Cao Bằng là một điểm đến rất thú vị mà các bạn yêu thích du lịch không nên bỏ qua.</p>
          </div>
      </div>
      <section class="rooms section" id="rooms">
        <div class="rooms__container container grid">

              <div class="rooms__card" v-for="room in rooms" :key="room.id">
                <img :src=room.img alt="rooms-1" class="rooms__img" />
                <div class="rooms__content">
                  <span class="rooms__rating">
                    <i class="ri-star-line rooms__rating-icon" />
                    <span class="rooms__rating-number">{{room.rate}}</span>
                  </span>
                  <div class="rooms__data">
                    <h3 class="rooms__title">{{room.tittle}}</h3>
                    <span class="rooms__subtitle">{{room.location}}</span>
                    <span class="rooms__price">{{room.price}}</span>
                  </div>
                </div>
                <button class="button button--flex rooms__button">
                  <i class="fa-sharp fa-solid fa-plus fa-sm" style="color: #38511f;"></i>
                </button>
              </div>

        </div>
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
                  img:'https://images.unsplash.com/photo-1563911302283-d2bc129e7570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80',
                  location:'Trùng khánh',
                  price: '2324$',
                  rate: '4.9'
                },
                {
                  id: 1,
                  tittle: 'Harmony',
                  img:'https://plus.unsplash.com/premium_photo-1678286769514-e60a57a33b73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
                  location:'Trùng khánh',
                  price: '2324$',
                  rate: '4.9'
                },
            
                {
                  id: 1,
                  tittle: 'Ancaito',
                  img:'https://images.unsplash.com/photo-1668957067320-921d79368284?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
                  location:'Trùng khánh',
                  price: '2324$',
                  rate: '4.9'
                },
              
                {
                  id: 1,
                  tittle: 'Tp Cao Bằng',
                  img:'https://images.unsplash.com/photo-1551918120-9739cb430c6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
                  location:'Trùng khánh',
                  price: '2324$',
                  rate: '4.9'
                },
                {
                  id: 1,
                  tittle: 'Medic Homes',
                  img:'https://images.unsplash.com/photo-1636598283264-664035b8d4e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80',
                  location:'Hà Quảng',
                  price: '2324$',
                  rate: '4.9'
                },
            
                {
                  id: 1,
                  tittle: 'Nhi Homestay',
                  img:'https://images.unsplash.com/photo-1648995042267-5e94b8d5688e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80',
                  location:'Nguyên Bình',
                  price: '2324$',
                  rate: '4.9'
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

.rooms__card,
.rooms__img {
  height: 100%;
}

.rooms__container {
  grid-template-columns: repeat(2, max-content);
  justify-content: center;
  color: #fff;
}

.rooms__card {
  position: relative;
  overflow: hidden;
}

.rooms__card:hover .rooms__img {
  scale: 1.1;
}

.rooms__img {
  transition: 0.3s;
}

.rooms__content,
.rooms__title {
  color: #fff;
}

.rooms__content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.75rem 0.75rem 1rem;
}

.rooms__rating {
  align-self: flex-end;
  display: flex;
  align-items: center;
}

.rooms__rating-icon {
  font-size: 0.75rem;
  margin-right: 0.25rem;
}

.rooms__rating-number {
  font-size: 0.813rem;
}

.rooms__subtitle,
.rooms__price {
  display: block;
}

.rooms__title {
  font-size: 1.5rem;
  margin-bottom: 0.25rem;
}

.rooms__subtitle {
  font-size: 0.813rem;
  margin-bottom: 1.25rem;
}

.rooms__button {
  border: none;
  cursor: pointer;
  position: absolute;
  right: 0;
  bottom: 0;
  padding: 0.75rem 1rem;
}
.container {
  max-width: 1200px;
  margin-left: 1rem;
  margin-right: 1rem;
  align-items: center;
}

.grid {
  grid-template-columns: repeat(3, 1fr);
  display: grid;
  gap: 1.5rem;
}

.button:hover {
  background-color: rgba(0, 0, 0, 0.03)
}
.button--link {
  background: none;
  padding: 0;
}

.button--link:hover {
  background: none;
}

</style>