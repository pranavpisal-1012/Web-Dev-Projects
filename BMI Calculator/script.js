const form = document.querySelector("form");
form.addEventListener("submit",function(e){
    e.preventDefault();

   const height = parseInt(document.querySelector("#height").value) 
   const weight = parseInt(document.querySelector("#weight").value) 
   const results = document.querySelector("#results")

     if(height ==="" || height < 0 || isNaN(height)){
        results.textContent = `Please enter a valid height ${height}`;
     }else if(weight ==="" || weight < 0 || isNaN(weight)){
        results.textContent = `Please enter a valid weight ${weight}`;
     }else{
        const bmi = weight / Math.pow(height, 2)
        results.textContent = `Your BMI is ${bmi.toFixed(2)}`
        }


   
      
});
