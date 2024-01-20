const proList = document.getElementById('products')
const titleInp = document.getElementById('titleInp')
const priceInp = document.getElementById('priceInp')
const myForm = document.getElementById('myForm')
const axtarInp = document.getElementById('axtar')
const axtarBtn = document.getElementById('axtarBtn')
const az = document.getElementById('az')
const za = document.getElementById('za')
const defa = document.getElementById('defa')


function postProduct (e) {
    e.preventDefault()
    axios.post('https://63b29e7e5901da0ab368fe8b.mockapi.io/eproducts/users', {
        title: titleInp.value,
        price: priceInp.value
    })
    .then( res => {
        getData()
        myForm.reset()
    })
}

myForm.addEventListener('submit', postProduct)

function getData () {
    proList.innerHTML = ``
    axios.get('https://63b29e7e5901da0ab368fe8b.mockapi.io/eproducts/users')
    .then( res => {
        db = res.data
        db.map(item => {
            const box = document.createElement('tr')
            box.innerHTML = ` <td>${item.title}</td> 
             <td>${item.price}</td> 
             <button onclick="deleteItem(${item.id})">Delete</button>
             `
             proList.appendChild(box)
        })
    })
}
getData()

function deleteItem (id) {
    axios.delete(`https://63b29e7e5901da0ab368fe8b.mockapi.io/eproducts/users/${id}`)
    .then(res => {
        getData()
    })
}

function getByName () {
    proList.innerHTML = ``
    axios.get('https://63b29e7e5901da0ab368fe8b.mockapi.io/eproducts/users')
    .then(res => {
        db = res.data
        let filteredData = db.filter(item => item.title.toLowerCase().startsWith(axtarInp.value.toLowerCase()))
        filteredData.map(item => {
            const box = document.createElement('tr')
            box.innerHTML = ` <td>${item.title}</td> 
             <td>${item.price}</td> 
             <button onclick="deleteItem(${item.id})">Delete</button>
             `
             proList.appendChild(box)
        })
    })
}

axtarBtn.addEventListener('click', getByName)

function sortAz () {
    proList.innerHTML = ``
    axios.get('https://63b29e7e5901da0ab368fe8b.mockapi.io/eproducts/users')
    .then(res => {
        db = res.data
        let filteredData = db.sort((a, b) => a.title.localeCompare(b.title))
        filteredData.map(item => {
            const box = document.createElement('tr')
            box.innerHTML = ` <td>${item.title}</td> 
             <td>${item.price}</td> 
             <button onclick="deleteItem(${item.id})">Delete</button>
             `
             proList.appendChild(box)
        })
    })
}
function sortZa () {
    proList.innerHTML = ``
    axios.get('https://63b29e7e5901da0ab368fe8b.mockapi.io/eproducts/users')
    .then(res => {
        db = res.data
        let filteredData = db.sort((a, b) => b.title.localeCompare(a.title))
        filteredData.map(item => {
            const box = document.createElement('tr')
            box.innerHTML = ` <td>${item.title}</td> 
             <td>${item.price}</td> 
             <button onclick="deleteItem(${item.id})">Delete</button>
             `
             proList.appendChild(box)
        })
    })
}

az.addEventListener('click', sortAz)
za.addEventListener('click', sortZa)
defa.addEventListener('click', getData)