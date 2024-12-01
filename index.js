function signup(userName) {
    let found = false;

    let usernames = ["Saroj", "sara"];
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


signup("Saroj")
signup("sara")
