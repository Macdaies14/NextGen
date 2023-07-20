//Form Switching Panel

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('formContainer');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});


//Form Validation

function onSuccess(input) {
    input.style.border = "2px solid green";
}
 
function onError(input) {
   input.style.border = "2px solid red";
}


// Sign In Validation
const signInForm = document.getElementById('signInForm');
const signInEmail = document.getElementById('signInEmail');
const signInPassword = document.getElementById('signInPassword');



signInForm.addEventListener('submit', (e) => {
    e.preventDefault();

    validateSignInInput();
})

function validateSignInInput() {
    const signInEmailValue = signInEmail.value.trim();
    const signInPasswordValue = signInPassword.value.trim();
    const checkArray1 = [];


    if (signInEmailValue == "") {
        onError(signInEmail);
        checkArray1.push("error1");
    }else{
        onSuccess(signInEmail);
    } 
    
    if(signInPasswordValue == ""){
        onError(signInPassword);
        checkArray1.push("error2");
    }else{
        onSuccess(signInPassword);
    } 

    if (checkArray1 == "") {

        let timeout;

        swal("Sign In Completed!", "Your details are correct!", "success");

        timeout = setTimeout(holdAlert, 5000);
        
        function holdAlert() {
            signInForm.submit();
        }
    }
}

// Sign Up Validation


const signUpForm = document.getElementById('signUpForm');
const signUpFullname = document.getElementById('fullName');
const signUpEmail = document.getElementById('email');
const signUpPassword1 = document.getElementById('password1');
const signUpPassword2 = document.getElementById('password2');


signUpForm.addEventListener('submit', (e) => {
    e.preventDefault();

    validateSignUpInput();
})

function validateSignUpInput(){
    const signUpEmailValue = signUpEmail.value.trim();
    const signUpPassword1Value = signUpPassword1.value.trim();
    const signUpPassword2Value = signUpPassword2.value.trim();
    const signUpFullnameValue = signUpFullname.value.trim();
    const checkArray2 = [];

    // console.log(signUpEmailValue);
    // console.log(signUpPassword1Value);
    // console.log(signUpPassword2Value);
    // console.log(signUpFullnameValue);

    if (signUpFullnameValue == "") {
        onError(signUpFullname);
        checkArray2.push("error1");
    }else{
        onSuccess(signUpFullname);
    }

    if (signUpEmailValue == "") {
        onError(signUpEmail);
        checkArray2.push("error2") ;   
    }else{
        onSuccess(signUpEmail); 
    }

   if (signUpPassword1Value == "" || signUpPassword1Value.length < 6) {
        onError(signUpPassword1);
        checkArray2.push("error3") ;   
   }else{
        onSuccess(signUpPassword1); 
   }

   if (signUpPassword2Value == "" || signUpPassword2Value.length < 6) {
        onError(signUpPassword2);
        checkArray2.push("error4") ;   
    }else{
        onSuccess(signUpPassword2); 
    }

    

    if (checkArray2 == "") {

        let timeout;

        swal("Sign Up Completed!", "Your details has been Registered!", "success");

        timeout = setTimeout(holdAlert, 5000);
        
        function holdAlert() {
            signUpForm.submit();
        }
    }
}


const swap = document.getElementById('swap');
const signInContainer = document.querySelector('.sign-in-container');
const signUpContainer = document.querySelector('.sign-up-container');


swap.addEventListener('click', (e) => {
    e.preventDefault();
    // alert("Hi");

    signInContainer.style.display = "none";
    signUpContainer.style.display = "block";
    signUpContainer.style.opacity = 1;
    signUpContainer.style.width = "100%";
})



