


document.getElementById('calculate2').addEventListener("click", function (){
    
    
   
    let length  = Number(document.getElementById("length").value);
    let width  = Number(document.getElementById("width").value);
    let result2 =  document.getElementById("result2");
    let weight  = Number(document.getElementById("weight").value);
    let finalGsm = (weight/((length*width)/10000)).toFixed(1);
    result2.innerHTML= "Item GSM IS " +finalGsm +" gsm.";
    
});




