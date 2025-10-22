// index.js

// Callbacks
const handleClick = (ramen) => {
  // Add code
  

};

const addSubmitListener = () => {
  // Add code
  document.getElementById('new-ramen').addEventListener("submit", (e) => {
    e.preventDefault
    const name = document.getElementById("new-name")
    const restaurant = document.getElementById("new-restaurant")
    const image = document.getElementById("new-image")
    const rating = document.getElementById("new-rating") 
    const comment = document.getElementById("new-comment")

  })
}

const displayRamens = () => {
  // Add code
  document.getElementById("ra")

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
