// index.js



// Callbacks
const handleClick = (ramen) => {
  // Add code

    const name = document.querySelector(".name")
    const restaurant = document.querySelector(".restaurant")
    const image = document.querySelector(".detail-image")
    const rating = document.getElementById("rating-display") 
    const comment = document.getElementById("comment-display")

    name.textContent = ramen.name
    restaurant.textContent = ramen.restaurant
    image.src = ramen.image
    rating.textContent = ramen.rating
    comment.textContent = ramen.comment

}

const addSubmitListener = () => {
  // Add code
  const newRamen = document.getElementById('new-ramen')
  newRamen.addEventListener("submit", (e) => {
    e.preventDefault()
    
  })

}

const displayRamens = () => {
  // Add code
  fetch('http://localhost:3000/ramens')
  .then(res => res.json())
  .then(data => {
    const ramenMenu = document.getElementById('ramen-menu')
    data.forEach((ramen) => {
      const img = document.createElement('img')
      img.src = ramen.image
      img.alt = ramen.name
      img.addEventListener("click", () => handleClick(ramen))
      ramenMenu.appendChild(img)
    })

    if(data.length > 0){
      handleClick(data[0])
    }
   
  })
  .catch((err) => console.error('Problem fetching image', err))

};

const main = () => {
  displayRamens()
  addSubmitListener()
}

main()

// Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};
