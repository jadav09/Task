

let obj = [
    {
        img: "https://www.shutterstock.com/shutterstock/photos/2311090637/display_1500/stock-vector-vector-illustration-of-india-independence-day-august-2311090637.jpg",
        price: "123",
        title: "xyz",
        id: "1"
    },
    {
        img: "https://cdn.pixabay.com/photo/2015/03/30/20/33/heart-700141_1280.jpg",
        price: "235",
        title: "abc",
        id: "2",


    },
    {
        img: "https://st4.depositphotos.com/4137917/27863/i/450/depositphotos_278630380-stock-photo-photograph-colourful-peafowl-tail.jpg",
        price: "235",
        title: "abc",
        id: "3"

    },
    {
        img: "https://cdn.pixabay.com/photo/2015/03/30/20/33/heart-700141_1280.jpg",
        price: "235",
        title: "abc",
        id: "4"

    }
]


function Addtocart() {

    let cart = document.getElementById("cart")

    console.log(obj)

    var h = ""
    obj.map((v) => {


        h += `
<div class="jadav">

 <div>
     <img src=${v.img} alt=""  />
 <div>

 <h2> Title :-${v.title}</h2>
 <p>Price:-${v.price}</p>
 <p>loreme forem is outpute in same contidin base </p>

 </div>
 <button onClick="hendlecart(${v.id})">ADDtoCart</button>
</div> 

 </div>

`
        console.log(v.title)

    })

    cart.innerHTML = h

}

Addtocart()

var ary = []



// *******add to cart *************


function hendlecart(x) {

    let finddata = obj.find((v) => {
        return v.id == x

    })

    // console.log(finddata)

    ary.push(finddata)

    // console.log(ary)
    var h = `
    <h1>Cart Added</h1>`
    ary.map((v) => (



        h += `
        <div class="content">

        
        
         <div>
             <img src=${v.img} alt=""  />
         <div>
        
         <h2> Title :-${v.title}</h2>
         <p>Price:-${v.price}</p>
         <p>loreme forem is outpute in same contidin base </p>
         
         </div>
         <button onClick="hendlecart(${v.id})">ADDtoCart</button>
        </div> 
        
         </div>
        
        `

  
    ))


    let dia = document.getElementById("dialog").showModal()

    document.getElementById("content").innerHTML = h

}


let closebox = () => {
    let dia = document.getElementById("dialog").close()

}
