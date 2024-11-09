function reg() {
  let name = document.querySelector("#name").value;
  let email = document.querySelector("#email").value;
  let image = document.querySelector("#image").value;
  let mob = document.querySelector("#mob").value;
  let password = document.querySelector("#password").value;
  let cpassword = document.querySelector("#cpassword").value;

  let userinfo = {
    name: name,
    email: email,
    image: image,
    mob: mob,
    password: password,
    cpassword: cpassword,
  };

  fetch("http://localhost:4000/user", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(userinfo),
  });
  window.open("./adminloginafterreg.html");
}

// ======================login code ======================

async function login() {
  let data = await fetch("http://localhost:4000/user");
  let response = await data.json();

  console.log(response);

  let name = document.querySelector("#name").value;
  // let email = document.querySelector("#email").value;
  // let image = document.querySelector("#image").value;
  // let mob = document.querySelector("#mob").value;
  let password = document.querySelector("#password").value;
  // let cpassword = document.querySelector("#cpassword").value;

  let out = response.find((A) => A.name === name && A.password === password);

  console.log(out);

  if (out) {
    window.localStorage.setItem("logininfo", JSON.stringify(out));
    // window.open("dashboard.html");
    window.location.href = "dashboard.html";
  } else {
    window.alert("register first");
  }
}
