
signup = () => {
    var divChange1 = document.querySelector(".div_h");
    divChange1.innerHTML = `
    <div id="signup_form">
        <form>
            <input id="firstname" type="text" onchange="handleChange()" placeholder="Your First Name"><br />
            <input id="lastname" type="text" onchange="handleChange()" placeholder="Your Last Name"><br />
            <input id="username" type="text" onchange="handleChange()" placeholder="Your User Name"><br />
            <input id="email" type="email" onchange="handleChange()" placeholder="Your Email"><br />
            <input id="password" type="password" onchange="handleChange()" placeholder="Your Password"><br />
            <input id="password1" type="password" onchange="handleChange()" placeholder="Repeat your Password"><br />
        </form>
    </div>
    `;
    
}

function handleChange() {
    var firstName = document.querySelector("#firstname").value;
    var lastName = document.querySelector("#lastname").value;
    var userName = document.querySelector("#username").value;
    var eMail = document.querySelector("#email").value;
    var passWord = document.querySelector("#password").value;
    var passWord1 = document.querySelector("#password1").value;

    console.log(firstName, lastName, userName, eMail, passWord, passWord1);
}


