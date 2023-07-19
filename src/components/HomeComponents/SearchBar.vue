<template>
    <div class="container">
        <div class="input-fields">
            <form action="">
                <div class="input-location">
                    <input type="text" name="" id="location" placeholder="Địa điểm muốn đến">
                </div>
                <div class="input-checkIn">
                    <input :placeholder="getCheckIn" v-model="selectedDate"  class="date-checkin" :type="type" onfocus="(this.type='date')"  id="date">
                </div>
                <div class="input-checkOut">
                    <input :placeholder="getCheckOut" v-model="selectedDate"  class="date-checkout" :type="type" onfocus="(this.type='date')"  id="date">
                </div>
                <div class="input-travellers"> 
                    <input type="number" name="" id="" placeholder="Số người">
                </div>
                <div class="input-search">
                    <input type="submit" name="" id="input-search" value="Tìm">
                </div>

            </form>

        </div>
    </div>
    
    
</template>
<script>
export default {
    computed: {
     getCheckIn(){
         let s = "Ngày nhận phòng";
      return s
    },
    getCheckOut(){
         let s = "Ngày trả phòng";
      return s
    },

},
data(){
   return {
    type:'text'
 }
}
}
</script>
<style scoped>
.container {width: 100%;
    border-radius: 4px;
    height: 120px;
    max-width: 1041px;
    transition: 0.5s ease-all;
    margin: 0 auto;
    margin-top: -60px;
    background-color:  #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 10px 16px rgba(0, 0, 0, 0.2);
    @media(min-width: 1140px) { 
        max-width: 1140px
    }
}
.input-fields {
    font-size: 19px;
    position: relative;
    flex-direction: row;
    width: 984px;
    height: 54px;
    @media(min-width: 984px) { 
        max-width: 984px
    }
}
form {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
input {
    padding: 5px;
    color: #565656;
    border-radius: 4px;
    border: unset;
    width: 100%;
    height: 54px;
    outline: none;
    background-color: #EAEAEA;
}

.input-location {
    width: 296px;
}
.input-checkIn {
    width: 140px;
}
.input-checkOut {
    width: 140px;
}
.input-travellers{
    width: 140px;
}
.input-search {
    width: 236px;
}
#input-search {
    color: #fff;
    background-color: #233D2C;
}
input {
    @media(min-width: 296px) { 
        max-width: 296px
    }
}
</style>
