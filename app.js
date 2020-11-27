/* Small JavaScipt code that takes care of the functionality of the 
    web application, by taking the user input and converting it to 
    the right amount of tip and outputing it back to user.
*/

function calculateTip(){
    let billAmt = document.querySelector(".billAmt").value;
    let service = document.querySelector("#serviceSelector").value;
    let numofPeople = document.querySelector(".peopleAmt").value;
    

    if(billAmt === "" || service == 0){
        alert("Please enter some values");
    }
    
    if(numofPeople === "" || numofPeople<=1){
        numofPeople = 1;
        document.getElementById("each").style.display= "none";
    }
    else{
        document.getElementById("each").style.display = "block";
    }

    let total = (billAmt * service)/ numofPeople;
    total = Math.round(total * 100)/ 100;
    total = total.toFixed(2);

    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML= total;


}

document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";


document.getElementById("calculate").addEventListener("click",function(){
    calculateTip();
})

