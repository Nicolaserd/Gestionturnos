export const validate = (input) => {
    const errores = {};

    if (input.username.trim().length < 3) {
        errores.username = 'El nombre de usuario debe tener al menos 3 caracteres';
    }

    if (input.password.trim().length < 4) {
        errores.password = 'La contraseña debe tener al menos 4 caracteres';
    }

    if (input.username.trim() === '') {
        errores.username = 'El nombre de usuario no puede estar vacío';
    }

    if (input.password.trim() === '') {
        errores.password = 'La contraseña no puede estar vacía';
    }

    return errores;
}
