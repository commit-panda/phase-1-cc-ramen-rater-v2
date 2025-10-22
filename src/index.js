// index.js

const baseUrl = 'http://localhost:3000/ramens'



// Callbacks
const handleClick = (ramen) => {
  // Add code

    const name = document.getElementById("new-name")
    const restaurant = document.getElementById("new-restaurant")
    const image = document.getElementById("new-image")
    const rating = document.getElementById("new-rating") 
    const comment = document.getElementById("new-comment")

    name.textContent = ramen.name
    restaurant.textContent = ramen.restaurant
    image.src = ramen.image
    rating.textContent = ramen.rating
    comment.textContent = ramen.comment

}

const addSubmitListener = () => {
  // Add code
  document.getElementById('new-ramen').addEventListener("submit", handleClick())

}

const displayRamens = () => {
  // Add code
  fetch(`${baseUrl}`)
  .then(res => res.json())
  .then(data => {
    data.forEach((ramen) => {
       document.getElementById('ramen-menu').innerHTML = `
    <img src=${data.image}>
    `
    })
   
  })

  

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
