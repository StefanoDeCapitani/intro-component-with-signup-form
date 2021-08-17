class DomManipulator {

  static displayErrors = function(invalidElements) {
    var elements = [];
    if (!(invalidElements === undefined)) { /*Makes shure that invalidElements is iterable*/
      elements = invalidElements;
    }
    for (let element of elements) {
      element.parentNode.classList.add("invalid");
    }
  }

  static errorSuppression = function(e) {
    var element = e.srcElement;
    element.parentNode.classList.remove("invalid");
  }

  static clearEntries = function(form) {
    var elements = Array.from(form);
    for (let element of elements) {
        element.value = "";
    }
  }

}
