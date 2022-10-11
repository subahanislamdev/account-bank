// diposit and balance 
document.getElementById('deposit-btn').addEventListener('click',function(){
    var depositfield = document.getElementById('deposit-field')
    var Newdipositamount = parseFloat(depositfield.value)
    var depositamount = document.getElementById('deposit-dolar')
    var previousdiposit = parseFloat(depositamount.innerText)
    var currentdipsit = previousdiposit + Newdipositamount;
    depositamount.innerText = currentdipsit;
    depositfield.value = ''
    var balanceamount = document.getElementById('balance-dolar')
    var previousbalance = parseFloat(balanceamount.innerText)
    var currentbalance = previousbalance + Newdipositamount;
    balanceamount.innerText = currentbalance;
  
})
// withdraw and balance 
document.getElementById('withdraw-btn').addEventListener('click',function(){
    var withdrawfield = document.getElementById('withdraw-field')
    var Newwithdrawamount = parseFloat(withdrawfield.value)
    var withdrawamount =document.getElementById('withdraw-dolar')
    var previouswithdraw = parseFloat(withdrawamount.innerText)
    var currentwithdraw = previouswithdraw + Newwithdrawamount ;
    withdrawamount.innerText = currentwithdraw;

    var balanceamount = document.getElementById('balance-dolar')
    var previousbalance = parseFloat(balanceamount.innerText)
    var currentbalance = previousbalance - Newwithdrawamount;
    balanceamount.innerText = currentbalance;
    withdrawfield.value = ''
})

// sound and animation 
function chap(){
    var a = new Audio('sound/kochu.mp3')
    a.play();

}
var video = document.getElementById("myvideo");

function toggleControls() {
  if (video.hasAttribute("controls")) {
     video.removeAttribute("controls")   
  } else {
     video.setAttribute("controls","controls")   
  }
}