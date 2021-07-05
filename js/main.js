form.onsubmit = (event) => {
    event.preventDefault()
    if (!firstName.value || !surname.value || !email.value || !password.value || !conPas.value)
        errorMessage.textContent = 'Fill the information'
    else errorMessage.textContent = ''
    if (firstName.value.length > 15) firstError.textContent = 'Invalid first name!'
    else firstError.textContent = ''
    if (surname.value.length > 15)
        secondError.textContent = 'Invalid last name!'
    else secondError.textContent = ''
    if (!email.value.match('@') || email.value.indexOf('.') == -1)
        emailError.textContent = "Please include an '@' and '.' in the email address"
    else emailError.textContent = ''
    if (!password.value.match(/[0-9]/)) passError.textContent = 'Password must include numbers 0-9'
    else if (!password.value.match(/[a-z]/)) passError.textContent = 'Password must include lowercase letters!'
    else if (!password.value.match(/[A-Z]/)) passError.textContent = 'Password must include uppercase letters!'
    else if (!password.value.length > 8) passError.textContent = 'Write 8 character'
    else passError.textContent = ''
    if (!password.value == conPas.value)
        passError2.textContent = "Password didn't match!"
    else passError2.textContent = ''
    if (!firstError.textContent && !secondError.textContent && !emailError.textContent && !passError.textContent && !passError2.textContent && !errorMessage.textContent) {
        errorMessage.textContent = 'You are registred secsessfuly'
        errorMessage.style.color = 'green'
    }
}


