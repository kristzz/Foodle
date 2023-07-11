<script>
export default {
  name: 'FoodCard',
  data() {
    return {
      food: {
        image: 'https://img.freepik.com/free-vector/hand-drawn-traditional-taco-mexican-food-vector_53876-161373.jpg',
        name: 'Taco',
        keywords: ['Mexican', 'Vegetarian', 'Spicy'],
      },
      hover: false,
    };
  },
}
</script>

<template>
    <div id="wrapper">
        <div class="card" @mouseover="hover = true" @mouseout="hover = false">
            <img :src="food.image" :alt="food.name" />
            <h1 class="food-name" v-if="hover">{{ food.name }}</h1>
        </div>

        <div class="card-keywords" v-if="hover">
            <div class="keyword" v-for="keyword in food.keywords" :key="keyword">
                {{ keyword }}
            </div>
        </div>
    </div>
</template>

<style scoped>


#wrapper{
    width: 270px;
    height: 400px;
    margin: 3rem;

    transition :all 0.1s ease-out 100ms;
}
.card {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 1rem;
    background-color: #fff;
    overflow: hidden;
    display: flex;
}

.card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.food-name {
  position: absolute;
  bottom: 10px;
  left: 10px;
  color: var(--black-color);
  padding: 5px;
  border-radius: 5px;
}

.card-keywords {
  display: flex;
  justify-content: center;
}

.keyword {
  background-color: var(--vanilla-color);
  font-family: var(--text-font);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.25rem;
  margin: 5px;
}

@media (hover: hover){
    #wrapper:hover{
        transform: scale(1.03);
    }
}
</style>