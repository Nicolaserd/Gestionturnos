export const confirmpasswordValidate = (Confirmpassword,password) => {
    const errors = [];

    
    if (password !== Confirmpassword) {
        errors.push("Las contraseñas no coinciden.");
    }

   
    if (password.length < 5) {
        errors.push("La contraseña debe tener al menos 5 caracteres.");
    }

    
    const specialCharactersRegex = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;
    if (!specialCharactersRegex.test(password)) {
        errors.push("La contraseña debe contener al menos un carácter especial.");
    }

    
    const lowercaseRegex = /[a-z]/;
    if (!lowercaseRegex.test(password)) {
        errors.push("La contraseña debe contener al menos una letra minúscula.");
    }

   
    const uppercaseRegex = /[A-Z]/;
    if (!uppercaseRegex.test(password)) {
        errors.push("La contraseña debe contener al menos una letra mayúscula.");
    }

  
    return errors.join("\n");
}