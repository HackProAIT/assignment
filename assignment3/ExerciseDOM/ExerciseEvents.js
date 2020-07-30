
/*
  Exercises 01
  ------------
  Add a label to each of the input fields: username, password, confirm password
*/
(function() {
  for(let i=0;i<3;i++) {
    let id = document.getElementsByClassName("col")[i].childNodes[1].id;
    document.getElementsByClassName("col")[i].insertAdjacentHTML("afterbegin",`<label for="${id}">${id}</label>`);
  }
})();

/*
  Exercise 02
  -----------
  Add a required validation to each input that shows an error message next to the entry if it does not have any text entered.
*/
function validate() {
  if(document.getElementsByClassName('isempty').length !== 0)
      {
        console.log("working");
        let a = document.getElementsByClassName('isempty');
        while(a.length > 0) {
          document.getElementsByClassName('isempty')[0].parentNode.removeChild(document.getElementsByClassName('isempty')[0]);
        }
      }
  for(let i=0;i<3;i++) {
    let id = document.getElementsByClassName("col")[i].childNodes[2].id;
    if(document.getElementById(id).value.length === 0)
    {
      document.getElementsByClassName("col")[i].insertAdjacentHTML("beforeend",`<p class="isempty" style="color:red">*${id} cannot be empty</p>`);
    }
  }
};



/*
  Exercise 03
  -----------
  Add a further validation to check if the user input in the password and confirm password inputs match.  Show an error message if they do not.
*/
  
   
function inputMatch() { 
  if(document.querySelector('.match')) {
    document.querySelector('.match').parentNode.removeChild(document.querySelector('.match'));
  }
  let x = document.querySelector("#password").value;
  let y = document.querySelector("#confirmPassword").value;
  
  if(x !== y) {
    document.querySelector(".btn").addEventListener("click", function(event){
      event.preventDefault(); 
    })
    document.querySelector("#confirmPassword").insertAdjacentHTML("afterend", "<p class='match'>* password does not match!</p>");
  }
  else {
    alert("seccessfully registered!");
    document.querySelector(".btn").addEventListener("click", function(event){
      return true; 
    })
  }  
}

/*
  Exercise 04
  -----------
Ensure the ‘Register’ button is disabled until the user has entered valid data into all the input fields.  Once they have, the registration button should then be enabled.
*/

//ANS: implemented on question 3


/*
  Exercise 05
  -----------
When the user clicks the ‘Register’ button, a message should be displayed informing them of a successful user registration.
*/

//ANs: implemented on question 3
