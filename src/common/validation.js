export const validateEmail = function(email) {
    let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    console.log(re.test(email))
    return re.test(email)
};

export const validateMobile = function(mobile){
    let re = /\d{10}/
    return re.test(mobile);
}