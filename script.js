let registrations = [];

function register(){
  let n = uname.value;

  if(n==""){
    alert("Enter your name");
    return;
  }

  registrations.push(n);

  let li = document.createElement("li");
  li.innerText = n;
  document.getElementById("list").appendChild(li);

  uname.value = "";
}

