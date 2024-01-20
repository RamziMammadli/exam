const proList = document.getElementById('proList')

function getBasket () {
    proList.innerHTML = ``
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || []
    wishlist.map((item, index) => {
        const box = document.createElement('div')
            box.innerHTML = `<p>${item.title}</p>
            <button onclick="removeItem(${index})">Remove</button>
            `
            proList.appendChild(box)
    })
}

getBasket()
function removeItem (index) {
    let wishlist = JSON.parse(localStorage.getItem('wishlist'))
    wishlist.splice(index, 1) 
    localStorage.setItem('wishlist', JSON.stringify(wishlist))
    getBasket()
}