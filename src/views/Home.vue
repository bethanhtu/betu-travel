<template>
    <body>
    <HomeImage/>
    <SearchBar/>

    <div class="hotLocation">
      <hot-location/>
          
    </div>

    <div class="cardsLocation">
      <CardsLocation/>
          
    </div>

    <div class="roomsCards">
      <!-- <RoomsCard/> -->
      <rooms/>
    </div>
    <div>
      <Experience/>
    </div>
    
</body>
</template>


<script setup>

import CardsLocation from '../components/HomeComponents/CardsLocation.vue';
import hotLocation from '../components/HomeComponents/hotLocation.vue';
import HomeImage from '../components/HomeComponents/HomeImage.vue';
import SearchBar from '../components/HomeComponents/SearchBar.vue';
// import RoomsCard from '../components/HomeComponents/RoomsCards.vue';
import Experience from '../components/HomeComponents/Experience.vue';
import Rooms from '@/components/HomeComponents/Rooms.vue';


</script>
<style scoped>
body {
    max-width: 1600px;
    margin: 0  auto;
  }

</style>
