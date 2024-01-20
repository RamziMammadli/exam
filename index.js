const div = document.getElementById('proList')

function getData () {
    axios.get('https://63b29e7e5901da0ab368fe8b.mockapi.io/eproducts/users')
    .then(res => {
        db = res.data
        db.map(item => {
            const box = document.createElement('div')
            box.innerHTML = `<p>${item.title}</p>
            <button onclick="addToCart(${item.id})">addtocart</button>
            <button onclick="addToWishlist(${item.id})">addtowishlist</button>

            `

            div.appendChild(box)
        })
    })
}
getData()
function addToCart (id) {
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    let product = cart.find(item => item.id == id)

    if(product) {
        product.count = (product.count || 1) + 1
    }
    else {
        cart.push({...db.find(item => item.id == id), count : 1})
    }
    localStorage.setItem('cart', JSON.stringify(cart))
}

function addToWishlist (id) {
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || []
    let product = wishlist.find(item => item.id == id)

    if(product) {
        alert('elave edilib')
    }
    else {
        wishlist.push(db.find(item => item.id == id))
    }
    localStorage.setItem('wishlist', JSON.stringify(wishlist))
}