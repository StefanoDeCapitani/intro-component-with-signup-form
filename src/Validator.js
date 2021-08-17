class Validator {

  static EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  static isElementInvalid = function(element) {
    let isInvalid = false;
    if (element.name === "email") {
      if (Validator.isEmailInvalid(element.value)) {
        isInvalid = true;
      }
    } else {
      if (Validator.isEmpty(element.value)) {
        isInvalid = true;
      }
    }
    return isInvalid;
  }

  static isEmailInvalid = function(email) {
    return !Validator.EMAIL_REGEX.test(email);
  }

  static isEmpty = function(string) {
    return string === "" || string === " ";
  }

}
