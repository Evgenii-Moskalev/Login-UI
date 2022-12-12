let signInBtn = document.getElementById('signInBtn');
signInBtn.onclick = function () {
    let inputUsername = document.getElementById('username').value;
    let inputPassword = document.getElementById('password').value;
    if (inputUsername != '' & inputPassword != '') {
        // console.log(inputUsername.length);
        alert('Your entered Username: ' + inputUsername 
        + '\nYour entered Password: ' + inputPassword);
    }
}
