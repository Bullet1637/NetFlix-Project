export const checkValidateData = (email,password,name)=>{
    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
    const isPasswordValid = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)
    const isNameValid = /^[A-Za-z\- ']+$/.test(name)

    if(!isEmailValid) return "email is not Valid"
    if(!isPasswordValid) return "password is not valid"
    if(!isNameValid) return "name is not valid"
    return null

}