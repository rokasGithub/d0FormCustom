const fotterSubmissionButton = document.getElementById('footerSubmissionButton');
const footerFirstName = document.getElementById('footer-form-footerFirstName')
const footerLastName = document.getElementById('footer-form-footerLastName')
const footerEmail = document.getElementById('footer-form-footerEmail')
// const modal = document.getElementById("myModal");
// const close = document.querySelector(".close-icon");
const footerEmailError = document.querySelector(".footer-form-error-email");
const footerFirstNameError = document.querySelector(".footer-form-error-firstname");
const footerLastNameError = document.querySelector(".footer-form-error-lastname");


let userFooterFeedback = {
  validInformation: false,
  errorMessages: []
};


document.querySelectorAll('.footer-input-style').forEach(item => {
  item.addEventListener('keyup', event => {
  
    const userData = validateUserFooterInformation()

    // console.log("true value is" +userData.validInformation)

    if(userData.validInformation){
      fotterSubmissionButton.classList.remove('btn-submit-form')
      fotterSubmissionButton.classList.add('enabled-background')
      fotterSubmissionButton.disabled = false
      
    }else{
      fotterSubmissionButton.classList.remove('enabled-background')
      fotterSubmissionButton.classList.add('btn-submit-form')
      fotterSubmissionButton.disabled = true
    }
  })
})



fotterSubmissionButton.addEventListener('click', event => {
  event.preventDefault();
//   const validateUserData = validateUserFooterInformation()
  modal.style.display = "block";
});

footerEmail.addEventListener('keyup', event => {
  event.preventDefault();
  let fullfooterEmail = event.target.value;
  const validfooterEmail = ValidatefooterEmail(fullfooterEmail)
  
  validfooterEmail ? footerEmailError.innerHTML = "" : footerEmailError.innerHTML = "Please enter a valid email"

});

footerFirstName.addEventListener('keyup', event => {
  event.preventDefault();
  let fullfooterFirstName = event.target.value;

  fullfooterFirstName === "" ? footerFirstNameError.innerHTML = "Please enter a first name" : footerFirstNameError.innerHTML = "" 
 
});

footerLastName.addEventListener('keyup', event => {
  event.preventDefault();
  let fulfooterLastName = event.target.value;
  fulfooterLastName === "" ? footerLastNameError.innerHTML = "Please enter last name" : footerLastNameError.innerHTML = "" 
});


function validateUserFooterInformation(){

  const currentfooterEmail = document.getElementById('footer-form-footerEmail').value;
  userFooterFeedback.errorMessages = []

  if(ValidatefooterEmail(currentfooterEmail) && footerFirstName.value !== "" && footerLastName.value !== ""){
    userFooterFeedback.validInformation = true;
    return userFooterFeedback
  }else{
    userFooterFeedback.validInformation = false;
    currentfooterEmail  === "" || !ValidatefooterEmail(currentfooterEmail) ? userFooterFeedback.errorMessages.push("Please enter a valid footerEmail.") : ""
    footerFirstName.value === "" ? userFooterFeedback.errorMessages.push("Empty first name provided.") : ""
    footerLastName.value === "" ? userFooterFeedback.errorMessages.push("Empty last name provided.") : ""
    return userFooterFeedback
  }
}

function ValidatefooterEmail(inputText){

  let mailformat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const validatedfooterEmail = inputText.match(mailformat) ? true : false;
  return validatedfooterEmail
}

function clearUserFooterData(){
  footerFirstName.value = ""
  footerLastName.value = ""
  document.getElementById('footer-form-footerEmail').value = ""
  fotterSubmissionButton.disabled = true
  fotterSubmissionButton.classList.remove('enabled-background')
  fotterSubmissionButton.classList.add('btn-submit-form')

}

close.addEventListener('click', event => {
    clearUserFooterData()
  modal.style.display = "none";
  
});

// In case needed later
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }