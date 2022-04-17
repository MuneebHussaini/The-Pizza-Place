function display()
{
    document.write('aaaa');
}
function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
}
function order(){
    var i;
    var flag = 1;
    for(i = 1; i < 12; i++)
    {
        var id = "qt" + i;
        var ele = document.getElementById(id).value;
        if(ele > 0)
        {
            flag = 0;
        }
        localStorage.setItem(id, ele);
    }
    if(flag)
    {
        alert("You need to order something to checkout!");
        return;
    }
    window.open("Address.html", "_self");
}
function details(){
    var mail = document.getElementById("mail").value;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    if(!mail.match(mailformat)){
        alert("Please enter a valid email ID!");
        return;
    }
    localStorage.setItem("mail", mail);
    var phoneformat = /^\d{10}$/;
    var phone = document.getElementById("phone").value;
    if(!phone.match(phoneformat)){
        alert("Please enter a valid phone number!");
        return;
    }
    localStorage.setItem("phone", phone);
    var flat = document.getElementById("flat").value;
    if(flat.length == 0){
        alert("Please enter a Flat/House No.!");
        return;
    }
    localStorage.setItem("flat", flat);
    var area = document.getElementById("area").value;
    if(area.length == 0){
        alert("Please enter your Locality/Area!");
        return;
    }
    localStorage.setItem("area", area);
    var city = document.getElementById("city").value;
    if(city.length == 0){
        alert("Please enter your City!");
        return;
    }
    localStorage.setItem("city", city);
    window.open("Checkout.html", "_self");
}
class Item{
    constructor(name, qty, price)
    {
        this.name = name;
        this.qty = qty;
        this.price = price;
    }
}