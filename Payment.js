const subs = document.getElementById("Chkbox");
const Visa = document.getElementById("VisaCard");
const Master = document.getElementById("MasterCard");
const Paypal = document.getElementById("Paypal");
const Button = document.getElementById("but1");
const res = document.getElementById("result");
const pay = document.getElementById("payres");

Button.onclick = function(){
    if(subs.checked){
        res.textContent="You are Subscribed"
    }else{
        res.textContent="You are not subscribed"
    }
    if(Visa.checked){
        pay.textContent = "Your paying via visa";
    }
    else if(Master.checked){
        pay.textContent = "Your paying via MasterCard";
    }
    else if(Paypal.checked){
        pay.textContent = "Your paying via Paypal";
    }else{
        pay.textContent = "You haven't checked anything";
    }


}