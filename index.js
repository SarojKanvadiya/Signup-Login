
function signup(userName) {
    let found = false;

   
    for (i=0; i<usernames.length; i++) {
        if(usernames[i]===userName){
        found = true;
        break;
        }
    }
    if (found) {
        console.log("User Already Regsistered, Please Login");
    }
    else {
        usernames=usernames.push(userName);
        console.log("Signup Sucessfull, Please Login");
    }
}



function login(userName,password){

    let found = false;

   
    for (i=0; i<usernames.length; i++) {
        if(usernames[i]===userName){
        found = true;
        break;
        }
       
    }
    if (found && password=="Emp@123") {
        console.log("Login Sucessfull");
    }
    else if(found && password!=="Emp@123" ){
        console.log("Wrong Password")
    }
    else {
        
        console.log("User Not Found, Please Signup");
    }

   
}

let usernames = ["Saroj", "sara"];
signup("Saroj")
signup("sara")
login("saroj","Emp@123")
login("Saroj","Emp@123")
login("saj","Emp@123")