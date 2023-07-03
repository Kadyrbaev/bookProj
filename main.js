let books = []

const a = JSON.parse(localStorage.getItem("books"))
console.log(a);

// if(a !== null && a.length > 0)
books = a !== null && a.length > 0 ? a : []


const addBooks = document.getElementById("add-books")
const createBook = document.getElementById("addbook")
const modal = document.getElementById("modal")
const backdrop = document.getElementById("backdrop")
const cancel = document.getElementById("cancel-modal")
const ul = document.getElementById("ul")

ul.addEventListener("click",()=>{
    console.log();
})


addBooks.addEventListener("click",()=>{
    modal.className = modal.className + " block-modal"
    backdrop.className = backdrop.className + " backdrop"
    console.log(modal);
})


function cancelFunc(){
    modal.classList.remove("block-modal")
    backdrop.classList.remove("backdrop")
}
cancel.addEventListener("click", cancelFunc)



function createBooks(){

    ul.innerHTML =""
    books.forEach((elem,)=>{
        const {nameBook, price, imgUrl, id} = elem
        const li = document.createElement("li")
        const img = document.createElement("img")
        const div = document.createElement("div")
        const tagPi = document.createElement("p")
        const tagPi2 = document.createElement("p")
        const deleteBtn = document.createElement("button")

        li.setAttribute("key", elem.id)
        
        img.src = elem.imgUrl
        tagPi.innerHTML = nameBook 
        tagPi2.innerHTML = elem.price
        deleteBtn.innerHTML = "Delete"

        deleteBtn.addEventListener("click", deleteBooks)
    
        div.appendChild(tagPi)
        div.appendChild(tagPi2)
        li.appendChild(img)
        div.appendChild(deleteBtn)
        li.appendChild(div)
        ul.appendChild(li)
    })
}
createBooks()

function createProducts(){
    const inp1 = document.getElementsByTagName("input")[0]
    const inp2 = document.getElementsByTagName("input")[1]
    const inp3 = document.getElementsByTagName("input")[2]

    if(inp1.value !== "" && inp2.value !== ""){
    const obj = {
        nameBook: inp1.value,
        imgUrl: inp2.value,
        price: inp3.value,
        id: Math.random()
    }

    books.push(obj)
    localStorage.setItem("books",JSON.stringify( books))

    inp1.value = ""
    inp2.value = ""
    inp3.value = ""
}
    createBooks()
    cancelFunc()

}
createBook.addEventListener('click', createProducts)




// delete

const deleteModal = document.getElementById("delete-modal")
function deleteBooks(event){
    // let elem = event.target.parentElement
    // const id = +elem.parentElement.getAttribute("key")

    // const newArr = books.filter((el)=>{
    //     return el.id !== id
    // })
    // console.log(newArr);

    // books = newArr
    // createBooks()
    // localStorage.setItem("books", JSON.stringify(books))
    deleteModal.classList.add("block-delete__modal")
    backdrop.className = backdrop.className + " backdrop"

    yesDelete.addEventListener("click", ()=>{
          let elem = event.target.parentElement
            const id = +elem.parentElement.getAttribute("key")
            
            const newArr = books.filter((el)=>{
                return el.id !== id
            })
            console.log(newArr);
            

            books = newArr
            createBooks()
            localStorage.setItem("books", JSON.stringify(books))
        deleteModal.className="delete-modal"
        cancelFunc()
    })
}

const noDelete = document.getElementById("no-delete")
const yesDelete = document.getElementById("yes-delete")
noDelete.addEventListener("click", ()=>{
    deleteModal.className="delete-modal"
    cancelFunc()
})


