const user = {
    username : "sid",
    logincount : 50,
    signedIn: true,

    getUserDetails : function(){
        console.log(`got ${this.username}'s details`)
    }
}

console.log(user.getUserDetails())