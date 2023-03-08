alert('salve! nei prossimi passaggi le verranno richiesti alcuni dati personali per il calcolo del suo biglietto')

//costanti
const priceKm = (0.21)
const minorDiscount = (0.80);
const elderDiscount = (0.60);

//INPUT ------------------->variable initializzation from user
let userName = prompt('inserisca il suo nome :');
let age;
let totalKm;
let finalPrice;

//data control 
const regex = /^[a-zA-Z]+$/;
const regexNum = /^[0-9]+$/;

if (!regex.test(userName)){
    alert ('Il nome può contenere solo lettere');
    location.reload();
}else{
     age = prompt('inserisca la sua età');
    //data control
    if(!regexNum.test(age)){
        alert('inserisca un valore numerico valido');
        console.log(age);
        location.reload();
    }else{
         totalKm = prompt('per quanti km deve viaggiare a bordo del nostro treno? (inserisca numeri interi)');
         //data control
        if(!regexNum.test(totalKm)){
            alert('inserisca un valore di Km valido');
            location.reload();
        }
    } 
}

//variables as numbers
age = parseInt(age);
totalKm = parseInt(totalKm);
finalPrice = parseInt(finalPrice);

console.log(userName);
console.log(age);
console.log(totalKm);

//discount calculations
if(age < 18){
    finalPrice = (totalKm * priceKm) * minorDiscount;
}else if(age >= 65){
    finalPrice = (totalKm * priceKm) * elderDiscount;
}else{
    finalPrice = totalKm * priceKm;
}

//final price with 2 decimals
finalPrice = finalPrice.toFixed(2)
console.log('this is the final price:' + finalPrice);

//OUTPUT
document.getElementById('user-name').innerHTML = userName;
document.getElementById('final-price').innerHTML = finalPrice;