// write your code here

// grab dom elements
const ramenMenu = document.querySelector("#ramen-menu");
const detailImage = document.querySelector(".detail-image");
const ramenName = document.querySelector(".name");
const restaurant = document.querySelector(".restaurant");
const ratingDisplay = document.getElementById("rating-display");
const commentDisplay = document.querySelector("#comment-display");

// form dom elements
const newName = document.getElementById("new-name");
const newRestaurant = document.getElementById("new-restaurant");
const newImage = document.getElementById("new-image");
const newRating = document.getElementById("new-rating");
const newComment = document.getElementById("new-comment");
const newForm = document.getElementById("new-ramen");

// callback functions
const onPageLoad = () => {
  fetch("http://localhost:3000/ramens")
    .then((res) => res.json())
    .then((ramens) => {
      ramens.forEach((ramen) => {
        let newImg = document.createElement("img");
        newImg.src = ramen.image;
        newImg.addEventListener("click", () => {
          detailImage.src = ramen.image;
          ramenName.innerText = ramen.name;
          restaurant.innerText = ramen.restaurant;
          ratingDisplay.innerHTML = ramen.rating;
          commentDisplay.innerText = ramen.comment;
        });
        ramenMenu.append(newImg);
      });
    });
};

const onFormSubmit = (e) => {
  e.preventDefault();

  const newRamen = {
    name: newName.value,
    restaurant: newRestaurant.value,
    image: newImage.value,
    rating: newRating.value,
    comment: newComment.value,
  };

  fetch("http://localhost:3000/ramens", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newRamen),
  })
    .then((res) => res.json())
    .then((ramen) => {
      console.log(ramen);
      let newImg = document.createElement("img");
      newImg.src = ramen.image;
      newImg.addEventListener("click", () => {
        detailImage.src = ramen.image;
        ramenName.innerText = ramen.name;
        restaurant.innerText = ramen.restaurant;
        ratingDisplay.innerHTML = ramen.rating;
        commentDisplay.innerText = ramen.comment;
      });
      ramenMenu.append(newImg);
    });
};

// event listeners
document.addEventListener("DOMContentLoaded", onPageLoad);
newForm.addEventListener("submit", onFormSubmit);


