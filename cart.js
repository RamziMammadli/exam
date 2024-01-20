const proList = document.getElementById('proList')

function getBasket () {
    proList.innerHTML = ``
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.map((item, index) => {
        const box = document.createElement('div')
            box.innerHTML = `<p>${item.title}</p>
             <p>${item.count}</p>
            <button onclick="removeItem(${index})">Remove</button>
            `
            proList.appendChild(box)
    })
}
getBasket()
function removeItem (index) {
    let cart = JSON.parse(localStorage.getItem('cart'))
    cart.splice(index, 1) 
    localStorage.setItem('cart', JSON.stringify(cart))
    getBasket()
}