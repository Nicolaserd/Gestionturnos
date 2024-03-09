export const nameEmailNdniUsernameValidation = (name, email, nDni, username) => {
    const errores = {
        namev: "",
        emailv: "",
        nDniv: "",
        usernamev: ""
    };

   
    if (name.length < 3) {
        errores.namev = "El nombre debe tener al menos 3 caracteres.";
    }

   
    if (!email.includes("@") || !isValidEmail(email)) {
        errores.emailv = "El correo electrónico no es válido.";
    }

    
    if (nDni.length < 5) {
        errores.nDniv = "El número de DNI debe tener al menos 5 caracteres.";
    }

    
    if (username.length < 3) {
        errores.usernamev = "El nombre de usuario debe tener al menos 3 caracteres.";
    }

    return errores;
}


function isValidEmail(email) {
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
