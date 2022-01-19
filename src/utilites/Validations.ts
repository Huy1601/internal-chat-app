export const isValidEmail = (stringEmail: string) => {
    return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(stringEmail))
};

export const isValidPassword = (stringPassword: string) => {
    return stringPassword.length >= 3
}
