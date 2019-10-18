// JavaScript source code

var users = [
    {id:1, name:"ali", email:"ali@gmail.com", password:"123"}
]

function GetNewId()
{
    if (users!=null && users.length > 0) {
        return users[users.length - 1].id + 1;
    }
}

function Signin(email, password)
{
    for (var i = 0; i < users; i++) {
        if (users[i].email == email && users[i].password == password) {
            window.localStorage.setItem("loginhay", true);
            return users[i];
        }
    }

    return null;
}

function Signup(name, email,password)
{
    if (name== null || name == '') {
        alert('name is required.');
        return;
    }
    if (email == null || email== '') {
        alert('email is required.');
        return;
    }

    if (password == null || password == '') {
        alert('password is required.');
        return;
    }
    
    users.push({ id: GetNewId(), name: name, password: password });
}

function IsUserLoggedIn() {
    if (window.localStorage.getItem("loginhay") != null) {
        return true;
    }
}

function SignOut() {
    window.localStorage.removeItem("loginhay");
}

function GetSignInLink(cls, lnk) {
    var a = document.createElement('a');
    if (cls!=null) {
        a.classList.add(cls);
    }

    if (lnk!=null) {
        a.href = lnk;
    }
    if (IsUserLoggedIn) {
        a.innerHTML = "Sign Up";
    }
    else
    {
        a.innerHTML = "Sign in";
    }
}