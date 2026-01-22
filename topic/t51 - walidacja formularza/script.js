const btn = document.querySelector("button")

function passChange() {
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const pass1 = document.getElementById('pass1').value
    const pass2 = document.getElementById('pass2').value

    if (name.trim() === "") {
        alert("username canot be empty")
        return
    }

    const emailregex = /^[a-zA-Z0-9._%+-]+@zspglogow\.pl$/
    if (!email.match(emailregex)) {
    alert("email must have zspglogow.pl domain")
        return
    }

    const pass1regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    if (!pass1.match(pass1regex)) {
        alert("password must have atleast 8 letters, capitalized letters, numbers and special signs")
        return
    }

    if (pass1 !== pass2) {
        alert("passwords need to be identical")
        return
    }

    const goal = document.getElementById('goal')
    goal.innerHTML = `
    <strong>user's personal data: </strong> <br>
    username: ${name} <br>
    E-mail: ${email} <br>
    password: ${pass1} <br>
    `
}
btn.addEventListener("click", passChange)