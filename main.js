// parallex effect on 1st background
const parallex = document.getElementById("firstParallex");

window.addEventListener("scroll",function(){
    let offset = window.pageYOffset;
    parallex.style.backgroundPositionY = offset * 0.8 + "px";
});

// scrolling nav bar
var lastScrollTop = 0;
    navbar = document.getElementById("navBar");
window.addEventListener("scroll", function(){
    var scrollTop = window.pageYOffset || this.document.documentElement.scrollTop;
if (scrollTop > lastScrollTop){
    navBar.style.top = "-100%";
} else {
    navBar.style.top="0";
}
lastScrollTop = scrollTop;
})

// Email form
    var form = document.getElementById("my-form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          status.classList.add('success');
          status.innerHTML = "Thanks for your submission!";
          form.reset()
        } else {
          response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
              status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
            } else {
              status.innerHTML = "Oops! There was a problem submitting your form"
              status.classList.add('error');
            }
          })
        }
      }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form"
        status.classList.add('error');
      });
    }
form.addEventListener("submit", handleSubmit)

// button & radio button checker
function verified(){
  var inputbtn = document.getElementById("bot_test");
  var btn = document.getElementById("submitbtn");
  var male = document.getElementById("male")
  var female = document.getElementById("female")
  if (inputbtn.checked){
    if (male.checked || female.checked){
      document.getElementById("submitbtn").disabled = false;
    }
  } else{
    document.getElementById("submitbtn").disabled = true;
  }
}

//