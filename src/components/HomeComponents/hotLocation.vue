<template>
   <section>
    <div class="about_container">
      <div class="about_data">
          <h1 class="tittleContents"> Lưu trú tại  <br/>Các chỗ nghỉ độc đáo hàng đầu</h1>
          <p class="about_description">Tận hưởng kỳ nghỉ dài nhất của bạn
            Tìm kiếm các chỗ nghỉ cho phép lưu trú dài ngày với giá theo tháng ưu đãi.
          </p>
          <div class="button">
              Đặt phòng ngay
          </div>
      </div>
      <div class="about_img">
        <div class="about_img_overlay">
          <div class="about_img_one">
            <img src="https://scontent.fhph1-3.fna.fbcdn.net/v/t39.30808-6/360119383_649940310509093_1550003431193183063_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=zDOV2F4r6BQAX_lgtYt&_nc_ht=scontent.fhph1-3.fna&oh=00_AfATilsMAlBJkan1Dxy3rfVFNqo4rUgflVjLDPAhbbwCIg&oe=64B95C5D" alt="">
           </div>
           <div class="about_img_two">
             <img src="https://scontent.fhph2-1.fna.fbcdn.net/v/t39.30808-6/360107206_649940227175768_4700557028363684314_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=L9cJBrrHvCIAX9kHBXu&_nc_ht=scontent.fhph2-1.fna&oh=00_AfDC162mjiokRlvEmX6sxt9oZR9f8_q7_TOrdduSCUeApQ&oe=64BACBC7 " alt="img">
           </div>
        </div>
      </div>

    </div>
      <div class="about_video">
        <h1 class="tittleContents"> Những trải nghiệm cực kỳ thú vị</h1>
        <p class="about_descriptionVideo">Find out more with our video of the most beautiful and pleasant places for you and your family.</p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/WEWCBCJIfMw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      
      
   </section>
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
  .about_container {
    display: flex;
    max-width: 1200px;
    margin: 0 auto;
    height: 100%;
  }
  .about_data {
    width: 50%;
    align-items: center;
    justify-content: center;
    margin: auto 0;
  }
  .tittleContents {
    font-weight: 700;
    font-size: 28px;
  }
  .about_description {
    padding: 40px 0 ;
  }
  .button {
    background-color: #233D2C;
    padding: 5px;
    border-radius: 4px;
    width: 154px;
    border: unset;
    height: 54px;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
}
.about_img {
  width: 50%;
  
}
.about_img_overlay {
  display: flex;
  height: 100%;
  width: 100%;
  overflow: hidden;
  column-gap: 1rem;
  align-items: center;
  justify-content: center;
}
.about_img_one {
  overflow: hidden;
  background-size: cover;
  height: 60%;
  width: 40%;
}
.about_img_two img,
.about_img_one img {
  border-radius: 4px;
  max-width: 100%; /* Đảm bảo hình ảnh không vượt quá kích thước của div */
  max-height: 100%;
}
.about_img_two {
  overflow: hidden;
  background-size: cover;
  height: 78%;
  width: 60%;
}
.about_img_one:hover,
.about_img_two:hover {
  transition: 0.8s;
  transform: scale(1.06);
}
.about_video {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.about_descriptionVideo {
  padding: 40px 0 ;
}
</style>