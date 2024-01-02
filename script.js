
let inputfields = document.getElementsByName("field");
let error1 = document.querySelector(".error1");
let error2 = document.querySelector(".error2");
let error3 = document.querySelector(".error3");
let output1 = document.querySelector(".outputMonth");
let output2 = document.querySelector(".outputYear");
let output3 = document.querySelector(".outputDays");

//function to calculate the age
//NB: this function will only be called when all validations are passed

let displayErrors =()=>{
    if (inputfields[0].value === "" || null) {
        error1.textContent = "This field is required";
    } else {
        error1.textContent = " ";
    }
    if (inputfields[1].value === "" || null) {
        error2.textContent = "This field is required";
    } else {
        error2.textContent = " ";
    }

    if (inputfields[2].value === "" || null) {
        error3.textContent = "This field is required";
    } else {
        error3.textContent = " ";
    }
}


let calculate =()=> {
    const currentDate = new Date();

    let day = inputfields[0].value;
    let month = inputfields[1].value;
    let year = inputfields[2].value;

    const userBirthDate = new Date(`${month}/${day}/${year}`);
    const timeDiff = Math.abs(currentDate - userBirthDate);

    const day_output = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const month_output = Math.floor(day_output / 30.44);
    const year_output = Math.floor(day_output / 365.25);

    output1.innerHTML = `${month_output}`;
    output2.innerHTML = `${year_output}`;
    output3.innerHTML = `${day_output}`;
}



//input validation
//to check if the input fields are empty
let checkAge =()=> {
   for (let i = 0; i < inputfields.length; i++) {
    if (inputfields[i].value ===""|| null) {
        displayErrors();
    }
    if (inputfields[0,1,2].value !="") {
        calculate();
    }
   }
}