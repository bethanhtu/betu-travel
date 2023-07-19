<template>
  <footer>
    <div class="footer-links">
      <div class="container">
        <div class="links-wrapper">
          <div>
            <h3>BeTu</h3>
            <p class="description">
              Travel you choose the <br /> destination, we offer you the{" "}
              <br /> experience.
            </p>
            <div class="icon">
              <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" class="footer__social">
                <i class="fa-brands fa-facebook"></i>
              </a>
              <a href="https://tiktok.com/" target="_blank"  rel="noreferrer" class="footer__social" >
                <i class="fa-brands fa-tiktok"></i>
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" class="footer__social">
                <i class="fa-brands fa-instagram"></i>
              </a>
              <a href="https://www.youtube.com/"  target="_blank" rel="noreferrer" class="footer__social">
                <i class="fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>

          <div class="links">
            <h3>Về chúng tôi</h3>
            <div class="list">
              <a href="#"> BeTu </a>
              <a href="#"> Dịch vụ </a>
              <a href="#"> Đối tác </a>
              <a href="#"> Trợ giúp </a>
            </div>
          </div>
          <div class="links">
            <h3>Dịch vụ</h3>
            <div class="list">
                <a href="#"> Khách sạn </a>
                <a href="#"> Resort </a>
                <a href="#"> Villa</a>
                <a href="#"> Homestay </a>
                <a href="#"> Nhà nghỉ </a>
            </div>
          </div>
          <div class="links">
            <h3>Cao Bằng</h3>
            <div class="list">
              <a href="#"> Các điểm đến </a>
              <a href="#"> Các điểm thuê xe máy </a>
              <a href="#"> Các nhà xe chuyên tuyến</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup></script>

<style scoped>
.container {
  background-color: #2B3030;
    width: 1200px;
    height: 676px;
    margin: 0 auto;
}
.footer-links .links-wrapper {
  text-decoration: none;
  margin: 0 auto;
  width: 1200px;
  display: flex;
  justify-content: space-between;
  padding: 40px 20px;
}
.links-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
.links-wrapper a {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}
.links-wrapper span.icon {
  margin-right: 10px;
}
.links-wrapper a,
.links-wrapper span.text {
  text-decoration: none;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  opacity: 0.8;
  color: #fff;
}
.links-wrapper h3 {
    color: #C5FBD8;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 15px;
}

@media (max-width: 969px) {
  .footer-top {
    display: none;
  }
  .links-wrapper {
    grid-template-columns: 1fr 1fr;
  }
}
@media (max-width: 600px) {
  .links-wrapper {
    grid-template-columns: 1fr;
  }
}
.icon {
  padding-top: 20px;
  display: flex;
  color: #fff;
  position: relative;
  top: 0;
}

i {
  padding-right: 14px;
  cursor: pointer;
  transition: .3 ease all;

  cursor: pointer;
  font-size: 24px;
}
.description {
  color: #fff;
}
</style>
