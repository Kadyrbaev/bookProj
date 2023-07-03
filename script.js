




// let books = [
//     {
//         title: "HEllo book",
//         rating: "TEXT"
//     }
// ]
// console.log(books);


// const ul = document.getElementsByTagName("ul")[0]
// function createBooks(movie){
//     ul.innerHTML = ""

//     books.forEach((movie)=>{
//         const li = document.createElement('li')
//         li.setAttribute("key", movie.id)
//         console.log(movie);
//         const createImg = document.createElement("img")
//         createImg.setAttribute("src", movie.img)
//         console.log(li);

//         const textDiv = document.createElement("div")
//         textDiv.className = "text-text"

//         const nameBook = document.createElement("p")
//         nameBook.innerHTML = movie.title
//         const ratingText = document.createElement("p")
//         ratingText.innerHTML = `${movie.rating}`
//         const deleteBtn = document.createElement("button")
//         deleteBtn.innerHTML= "Delete"
//         deleteBtn.addEventListener("click", deleteProducts)

//         // append
//         li.appendChild(createImg)
//         li.appendChild(textDiv)
//         li.appendChild(deleteBtn)
//         textDiv.appendChild(nameBook)
//         textDiv.appendChild(ratingText)
//         console.log(li);
//         ul.append(li)
//     })
// // return li
// }
// createBooks()



// function iterateFunc(){
//     // console.log(books);
//     // books.forEach((el)=>{
//     //     const res = createBooks(el)
//     //     console.log(res);
//     //     ul.append(res)
//     // })


// }


// const addBooks = document.getElementById("add-books")
// const modal = document.getElementById("modal")
// const backdrop = document.getElementById("backdrop")
// console.log(addBooks);

// addBooks.addEventListener("click",()=>{
//     modal.className = modal.className + " block-modal"
//     backdrop.className = backdrop.className + " backdrop"
//     console.log(modal);
// })

// const addButton = document.getElementById("unblock-modal")
// const unBlockModal = ()=>{

//     const inp1 = document.getElementsByTagName("input")[0]
//     const inp2 = document.getElementsByTagName("input")[1]
//     const inp3 = document.getElementsByTagName("input")[2]
//     console.log(inp1.value, inp2.value, inp3);
//     const infoInp = {
//         img: inp2.value,
//         title: inp1.value,
//         rating: inp3.value,
//         id: Math.random()
//     }
//     books.push(infoInp)
//     iterateFunc()
//     cancelFunc()
//     createBooks()

// }
// addButton.addEventListener("click", unBlockModal)
// console.log(addButton);

// const cancel = document.getElementById("cancel-modal")
// function cancelFunc(){
//     modal.classList.remove("block-modal")
//     backdrop.classList.remove("backdrop")
// }
// cancel.addEventListener("click", cancelFunc)



// // delete

// const youSure = document.getElementById("delete")
// function deleteProducts(e){

//     // console.dir(e.target.parentNode.getAttribute("key"));
//     // // e.target.parentElement.remove()
//     // const id = +e.target.parentNode.getAttribute("key")
    
//     // const newArr = books.filter((el)=>{
//     //     console.log(id);
//     //     console.log(el.id);
//     //     return el.id !== id
//     // })
//     // books = newArr
//     // console.log(newArr);
//     // createBooks()

//     const no = document.getElementById("no")
//     const yes = document.getElementById("yes")
//     console.log(youSure);
//     youSure.className = "delete"
//     backdrop.className = backdrop.className + " backdrop"

//     no.addEventListener("click", noDelete)
//     console.log(no);

//     yes.addEventListener("click",()=>{
//         console.log(e);
//          const id = +e.target.parentNode.getAttribute("key")
    
//     const newArr = books.filter((el)=>{
//         console.log(id);
//         console.log(el.id);
//         return el.id !== id
//     })
//     books = newArr
//     console.log(newArr);
//     createBooks()
//     cancelFunc()
//     youSure.className = "sure"

//     })
// }


// // Sure
// function noDelete(){
//     console.log("text");
//     youSure.className = "sure"
//     cancelFunc()
// }
