

document.getElementById("calculate").addEventListener("click",function(){
    calculateTip();
})

function calculateTip(){
    let billAmt = document.querySelector(".billAmt").value;
    let service = document.querySelector(".serviceSelector").value;
    let numofPeople = document.querySelector(".peopleAmt").value;
    

    if(billAmt==="" || service=0){
        alert("Please enter some values");
    }
    
    if(numofPeople === "" || numofPeople<=1){
        numofPeople = 1;
        document.getElementById("each").style.display= "none";
    }
    else{
        document.getElementById("each").style.display = "block";
    }
}

