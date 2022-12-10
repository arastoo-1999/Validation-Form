const Validate = data => {

    const errors = {};

    if(!data.Name) {
        errors.Name = "username required!";
    } else {
       delete errors.Name;
    }

    if(!data.Email) {
        errors.Email = "email required!";
    } else if(!/\S+@\S+\.\S+/.test(data.Email)) {
        errors.Email = "Invalid email!"
    } else {
        delete errors.Email;
    }

    if(!data.Password) {
        errors.Password = "password reqiured!";
    } else if(data.Password.length < 6) {
        errors.Password = "password is too short!"
    } else {
        delete errors.Password;
    }

    if(!data.ConfirmPassword) {
        errors.ConfirmPassword = "confirm the password";
    } else if(data.ConfirmPassword !== data.Password) {
        errors.ConfirmPassword = "do not match!";
    } else {
        delete errors.ConfirmPassword;
    }

    if(data.IsAccepted) {
        delete errors.IsAccepted;
    } else {
        errors.IsAccepted = "Accept our regulations";
    }

    return errors;
}

export { Validate };