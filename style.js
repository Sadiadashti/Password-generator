function generate(){
    let passLength = document.getElementById("length").value || 8;
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+" ;
    let password = "";

for(let i =0; i<passLength; i++){
   password +=chars.charAt(Math.floor(Math.random()*chars.length));
}
document.getElementById('password').value = password;
}

function copyPassword() {
    let password = document.getElementById("password");
    password.select();
    document.execCommand('copy')
    alert('Copied:' + password.value)
}