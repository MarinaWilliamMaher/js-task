
    var allProducts = document.querySelectorAll("img")
    var div1 = document.querySelector("#div1")
    var btn1 = document.querySelector("#showPrice")
    var totalPrice = 0

    allProducts.forEach(function (item) {
        item.onclick = function (){
            totalPrice +=  +(item.getAttribute("price"))
            console.log =item.getAttribute("src") 
            div1.innerHTML +=`<img src="${item.getAttribute("src") }" height="400px" width="49%" style="margin-right: 1%">`

            if (div1.innerHTML != ""){
                btn1.style.display = "block"
                btn1.style.width = "200px"
                btn1.style.height = "45px"
                btn1.style.backgroundColor = "black"
                btn1.style.color = "white"
                btn1.style.fontSize = "23px"
                btn1.style.border="none"
                btn1.style.borderRadius="10px"
            }
   
        }
    })

    btn1.onclick = function (){
        alert(`Your Total Price Is : ${totalPrice}`)
    }




 