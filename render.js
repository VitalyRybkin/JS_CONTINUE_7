const featuredProductsList = JSON.parse(productList)

const feateredBlock = document.querySelector(".featured")
for (const key in featuredProductsList) {

    const newBlock = document.createElement("a")
    newBlock.setAttribute("href", "#")
    newBlock.classList.add("featured-item")
    feateredBlock.appendChild(newBlock)

    const newKey = document.createElement("p")
    newKey.textContent = `${key}`
    newKey.style.display = "none"
    newBlock.appendChild(newKey)

    const newPic = document.createElement("img")
    newPic.classList.add("featured-item__pic")
    newPic.setAttribute("src", `${featuredProductsList[key].pic}`)
    newPic.setAttribute("alt", `${featuredProductsList[key].name}`)
    newBlock.appendChild(newPic)

    const newTitle = document.createElement("p")
    newTitle.classList.add("featured-item__name")
    newTitle.textContent = featuredProductsList[key].name
    newBlock.appendChild(newTitle)

    const newDescription = document.createElement("p")
    newDescription.classList.add("featured-item__desc")
    newDescription.textContent = featuredProductsList[key].description
    newBlock.appendChild(newDescription)

    const newPrice = document.createElement("p")
    newPrice.classList.add("featured-item__price")
    newPrice.textContent = featuredProductsList[key].currency + featuredProductsList[key].price
    newBlock.appendChild(newPrice)

    const cartBox = document.createElement("div")
    cartBox.classList.add("featured-item__cart_box")

    const newAddToCart = document.createElement("div")
    newAddToCart.classList.add("featured-item__cart_add")
    newAddToCart.addEventListener("click", (event) => {
        event.preventDefault()
        addToCart(newKey.textContent)
    }, true)

    cartBox.appendChild(newAddToCart)

    const cartPic = document.createElement("img")
    cartPic.setAttribute("src", "./img/cart.svg")
    cartPic.setAttribute("alt", "cart")
    newAddToCart.appendChild(cartPic)

    const cartText = document.createElement("p")
    cartText.textContent = "Add to cart"
    newAddToCart.appendChild(cartText)

    newBlock.appendChild(cartBox)

  }

function addToCart(id) {

    const cartItems = document.querySelector(".cart-items")

    if (cartItems.querySelectorAll(".cart__card").length === 0 ) {
        cartItems.style.display = "block"
    }

    const newCard = document.createElement("div")
    newCard.classList.add("cart__card")
    newCard.style.width = "53%"
    newCard.style.height = "300px"

    const newPic = document.createElement("img")
    newPic.setAttribute("src", `${featuredProductsList[id].pic}`)
    newPic.setAttribute("alt", `${featuredProductsList[id].name}`)
    newCard.appendChild(newPic)

    const cardInfo = document.createElement("article")
    cardInfo.classList.add("cart__card__info")
    newCard.appendChild(cardInfo)

    const newTitle = document.createElement("h5")
    newTitle.classList.add("cart__card__header")
    newTitle.textContent = featuredProductsList[id].name
    cardInfo.appendChild(newTitle)

    const newPrice = document.createElement("p")
    newPrice.classList.add("cart__card__product_info")
    newPrice.textContent = "Price:\u00A0"
    let newSpan = document.createElement("span")
    newSpan.textContent = featuredProductsList[id].currency + featuredProductsList[id].price
    newPrice.appendChild(newSpan)
    cardInfo.appendChild(newPrice)

    const newColor = document.createElement("p")
    newColor.classList.add("cart__card__product_info")
    newColor.textContent = "Color:\u00A0" + featuredProductsList[id].color
    cardInfo.appendChild(newColor)

    const newSize = document.createElement("p")
    newSize.classList.add("cart__card__product_info")
    newSize.textContent = "Size:\u00A0" + featuredProductsList[id].size
    cardInfo.appendChild(newSize)

    const newQty = document.createElement("p")
    newQty.classList.add("cart__card__product_info")
    newQty.textContent = "Quantity:\u00A0"
    newSpan = document.createElement("span")
    newSpan.textContent = featuredProductsList[id].qty
    newQty.appendChild(newSpan)
    cardInfo.appendChild(newQty)

    const newDelBox = document.createElement("div")
    newDelBox.classList.add("cart__card__delbox")
    newCard.appendChild(newDelBox)

    newDelBox.textContent = "X"
    newDelBox.style.fontFamily = "Lato"
    newDelBox.style.cursor = "pointer"
    newDelBox.style.padding = "0.2rem"
    newDelBox.style.border = "1px solid #EEE"
    newDelBox.style.borderRadius = "3px"
    newDelBox.style.width = "25px"
    newDelBox.style.height = "25px"
    newDelBox.style.marginTop = "25px"
    newDelBox.style.marginRight = "25px"

    newDelBox.onclick = () => {
        newCard.remove()
        if (cartItems.querySelectorAll(".cart__card").length === 0 ) {
            cartItems.style.display = "none"
        }
    }

    cartItems.appendChild(newCard)
    
}