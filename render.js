const feateredProductsList = JSON.parse(productList)

const feateredBlock = document.querySelector(".featured")
for (const key in feateredProductsList) {
    const newBlock = document.createElement("div")
    newBlock.classList.add("featured-item")
    feateredBlock.appendChild(newBlock)
    
    const newPic = document.createElement("img")
    newPic.setAttribute("src", `${feateredProductsList[key].pic}`)
    newPic.setAttribute("alt", `${feateredProductsList[key].name}`)
    newBlock.appendChild(newPic)
    
    const newLink = document.createElement("a")
    newLink.setAttribute("href", "#")
    newLink.classList.add("featured-item__name")
    newLink.textContent = feateredProductsList[key].name
    newBlock.appendChild(newLink)

    const newDescription = document.createElement("p")
    newDescription.classList.add("featured-item__desc")
    newDescription.textContent = feateredProductsList[key].description
    newBlock.appendChild(newDescription)

    const newPrice = document.createElement("p")
    newPrice.classList.add("featured-item__price")
    newPrice.textContent = feateredProductsList[key].currency + feateredProductsList[key].price
    newBlock.appendChild(newPrice)
  } 