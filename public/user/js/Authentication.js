let container = document.getElementById("container");
let signin_cont = document.getElementById("signin_cont");
let newhere_cont = document.getElementById("newhere_cont");
let forgot_pass_wrap = document.getElementById("forgot_pass_wrap");
var auth_error = document.getElementById("auth_error");
var reg_error=document.getElementById("reg_error");


forgot_pass_wrap.style.display = "none";

let signinDisplay = () => {
  container.innerHTML = signin_cont.innerHTML;
};

let newhereDisplay = () => {
  container.innerHTML = newhere_cont.innerHTML;
};

let forgotPass = () => {
  container.innerHTML = forgot_pass_wrap.innerHTML;
};

//style updates on clicking the input element

let inputClick = (e) => {
  e.target.style.border = "1px solid dodgerblue";
  e.target.style["box-shadow"] = "rgba(3, 200, 214, 0.1) 0px 0px 5px 5px";
  e.target.addEventListener("blur", () => {
    if (e.target.value == "") {
      e.target.style.border = "1px solid red";
    } else {
      e.target.style.border = "1px solid #623380";
      e.target.style["box-shadow"] = "none";
    }
  });
};

//Forgot Password Section

let forgotEmailsend = () => {
  let forgot_pass_email = document.getElementById("forgot_pass_email");
  let forgot_email_link = document.getElementById("forgot_email_link");

  forgot_email_link.innerHTML = "";

  if (forgot_pass_email.value != false) {
    forgot_email_link.style["display"] = "block";
    forgot_email_link.textContent = `An email containing a link has been sent to: ${forgot_pass_email.value}`;
  } else {
    forgot_pass_email.style["border"] = "1px solid red";
  }
};

//SIGN UP section

setInterval(() => {
  let password_val = document.getElementById("password").value;
  let repassword_val = document.getElementById("repassword").value;
  let repass_error = document.getElementById("repass_error");

  if (password_val != repassword_val && repassword_val != "") {
    let repassword = document.getElementById("repassword");
    repass_error.style.display = "block";
    repassword.style.border = "1px solid red";
  } else {
    repass_error.style.display = "none";
  }
}, 3000);



async function signinUser(){
let res = await fetch("/login", {
  method: "POST",
  body: JSON.stringify({
    email: document.getElementById("auth_email").value,
    password: document.getElementById("auth_pass").value,
  }),
  headers: {
     'Accept': 'application/json',
    "content-type": "application/json",
  },
}).then(async function(res){
        if(res.status==200)
        {
          let data=await res.json();
          localStorage.setItem("token",data.token);
          window.location.href="/home";
          // console.log(data)          
        }
        else if(res.status==500)
        {
          alert("Some error occurred");
        }
        else
        {
          let data=await res.json();
          console.log(data.message);
          auth_error.style["display"] = "block";
          auth_error.innerHTML=data.message;
        }
});


 

}

async function registerUser()
{
  let res = await fetch("/register", {
  method: "POST",
  body: JSON.stringify({
  first_name:document.getElementById("name").value,
  last_name:document.getElementById("lastname").value,
  email:document.getElementById("email").value,
  password:document.getElementById("password").value,
  }),
  headers: {
    Accept: "application/json",
    "content-type": "application/json",
  },
}).then(async function(res){
      if(res.status==201)
      {
          let data = await res.json();
          // console.log(data);
          alert("User registered successfully. Please proceed to Sign-in");
          window.location.href="/auth";
      }
      else
      {
        let data = await res.json();
        var reg_error=document.getElementById("reg_error");
        reg_error.innerHTML=data.message;
        reg_error.style.display="block"
      }
});





}