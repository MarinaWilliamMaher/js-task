var allProducts = document.querySelectorAll("img");
var div1 = document.querySelector("#div1");
var btn1 = document.querySelector("#showPrice");
var totalPrice = 0;
var pressed = 0;

allProducts.forEach(function (item) {
  item.onclick = function () {
    totalPrice += +item.getAttribute("price");
    div1.innerHTML += item.getAttribute("name") + " + ";

    if (div1.innerHTML != "") {
      btn1.style.display = "block";
      btn1.style.width = "200px";
      btn1.style.height = "45px";
      btn1.style.backgroundColor = "black";
      btn1.style.color = "white";
      btn1.style.fontSize = "23px";
      btn1.style.border = "none";
      btn1.style.borderRadius = "10px";
      btn1.style.marginTop = "10px";
    }
  };
});

btn1.onclick = function () {
  div1.innerHTML += " = " + totalPrice;
};
