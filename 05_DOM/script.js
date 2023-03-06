const submitBtn = document.querySelector('.inputBox')
const itemList = document.querySelector('.itemList')
const textField = document.querySelector('.searchInput')

submitBtn.addEventListener('submit',  e => {
    e.preventDefault()
    const formInput = document.querySelector('.inputText').value
        if(formInput == ""){
            alert("Empty String!!")
        }
        else{
            const li = document.createElement('li')
            li.className = 'item-list'
            li.appendChild( document.createTextNode(formInput))
            const deleteBtn = document.createElement('button')
            deleteBtn.className = 'btn btn-dark btn-block'
            deleteBtn.id = 'btnDelete'
            deleteBtn.appendChild(document.createTextNode('X'))
            li.appendChild(deleteBtn)
            itemList.appendChild(li)
        }
})

itemList.addEventListener('click', e => {
    if(e.target.classList.contains('btnDelete')){
        if(confirm("Delete item?")){
            const li = e.target.parentElement
            itemList.removeChild(li)
        }
    }
})

textField.addEventListener('keyup', e =>{
    const text = e.target.value.toLowerCase()
    const unorderedList = itemList.getElementsByTagName('li')

    Array.from(unorderedList).forEach(item => {
        const itemName = item.firstChild.textContent
            if(itemName.toLowerCase().indexOf(text) != -1){
                item.style.display = 'flex'
            }
            else{
                item.style.display = 'none'
            }
    });
})