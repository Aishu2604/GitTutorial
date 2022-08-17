function getacall(event){
    event.preventDefault();
    const name = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    localStorage.setItem('Name',name);
    localStorage.setItem('E-mail',email);
    console.log(name)
    console.log(email);
}