<template>
  <div class="cardsLocation">
    <h1 class="tittleContends">Điểm đến nổi bật</h1>
    <div class="description">
        <p class="desContents">Vẻ đẹp vùng đất Cao Bằng: Tìm hiểu những điểm đến độc đáo và thú vị trong cuộc hành trình khám phá Cao Bằng</p>
      </div>
    
  </div>
  
    <section  class="articles">
        <article v-for="location in locations" :key="location.id">
          <div class="article-wrapper">
            <figure>
              <img :src=location.img alt="ảnh" />
            </figure>
            <div class="article-body">
                <h5>Quảng Hòa-Cao Bằng</h5>
              <h2>{{location.tittle}}</h2>
              <p>{{location.description}}</p>
              <a href="#" class="read-more">
                Xem thêm <span class="sr-only">about this is some title</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </article>
      </section>
  </template>
<script>

export default {
    data() {
        return {
            locations: [
              {
                id: 1,
                tittle: 'Núi mắt thần',
                img:'https://images.unsplash.com/photo-1650610114362-29af75c44fd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FvJTIwYmFuZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60',
                description: 'Núi Mắt Thần nổi tiếng với khung cảnh thiên nhiên hùng vĩ và hoang sơ. Khi đến đây, du khách sẽ được trải nghiệm cảnh quan đa dạng bao gồm những đồi núi xanh mướt, rừng rậm phong phú và các thác nước rực rỡ.',
              },
              {
                id: 2,
                tittle: 'Thác bản giốc',
                img:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Bangioc9tam.jpg/1920px-Bangioc9tam.jpg',
                description: 'Thác Bản Giốc là một trong những thác nước nổi tiếng không chỉ ở nước ta mà còn được bạn bè quốc tế biết đến. Nằm trong top 4 thác nước xuyên quốc gia lớn nhất trên toàn thế giới.',
              },
              {
                id: 3,
                tittle: 'Pác bó',
                img:'https://ik.imagekit.io/tvlk/blog/2023/04/pac-bo-cao-bang-1-1024x767.jpg?tr=dpr-2,w-675',
                description: 'Pác Bó Cao Bằng nằm trong vùng núi đá Cao Bằng, là vùng đất hoang sơ nhưng đầy kì vĩ nhưng cũng đẹp như tranh vẽ và đầy sắc màu của dòng chảy lịch sử.',
              },
              
              
            ]
              
        }
    },
  
}

</script>
<style scoped>
article {
    --img-scale: 1.001;
    --title-color: black;
    --link-icon-translate: -20px;
    --link-icon-opacity: 0;
    position: relative;
    border-radius: 4px;
    box-shadow: none;
    background-color: #2B3030;
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
    height: 284px;
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
  
  
  /************************ 
  Generic layout (demo looks)
  **************************/
  
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

  .cardsLocation {
    max-width: 1200px;
    margin: 0 auto;
    padding: 40px 0;
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
</style>