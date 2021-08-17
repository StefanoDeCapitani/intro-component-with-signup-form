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

  static errorSuppression = function(element) {
    element.parentNode.classList.remove("invalid");
  }

  static clearEntries = function(elements) {
    for (let element of elements) {
        element.value = "";
    }
  }

}
