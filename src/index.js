// write your code here
const url = 'http://localhost:3000/ramens'
//'http://localhost:3000/ramens/:id'
const ramenMenu = document.createElement('div');
const form = document.querySelector('#new-ramen')
const ramenImg = document.createElement('img');
const menuItem = document.create

//attributes for image
menuItem.id = `ramens-${ramens.id}`;

//menu item name
ramenName.textContent = ramens.name;


const ramens = [
    {
      "id": 1,
      "name": "Shoyu Ramen",
      "restaurant": "Nonono",
      "image": "./assets/ramen/shoyu.jpg",
      "rating": 7,
      "comment": "Delish. Can't go wrong with a classic!"
    },
    {
      "id": 2,
      "name": "Naruto Ramen",
      "restaurant": "Naruto",
      "image": "./assets/ramen/naruto.jpg",
      "rating": 10,
      "comment": "My absolute fave!"
    },
    {
      "id": 3,
      "name": "Nirvana Shiromaru",
      "restaurant": "Ippudo",
      "image": "./assets/ramen/nirvana.jpg",
      "rating": "7",
      "comment": "Do buy the hype."
    },
    {
      "id": 4,
      "name": "Gyukotsu Ramen",
      "restaurant": "Za-Ya Ramen",
      "image": "./assets/ramen/gyukotsu.jpg",
      "rating": 8,
      "comment": "Good to the last drop."
    },
    {
      "id": 5,
      "name": "Kojiro Red Ramen",
      "restaurant": "Ramen-Ya",
      "image": "./assets/ramen/kojiro.jpg",
      "rating": 6,
      "comment": "Perfect for a cold night."
    }
  ]



//Fetches
function getAllRamens(){
    return fetch(url)
    .then(resp => resp.json())
    .then (renderAllRamens)
}

//set attributes for menu imgs

//ramenImg.scr = 
//Rendering
function renderAllRamens(ramenArr){

}





//Initializers
getAllRamens().then(renderAllRamens)





//