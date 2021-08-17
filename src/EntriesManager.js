class EntriesManager {

  constructor() {
    this.invalidEntries = [];
    this.validEntries = [];
  }

  manageFormSubmission = (e) => {
    e.preventDefault();
    var elements = Array.from(e.srcElement).splice(0, 4);
    this.manageEntries(elements);
  }

  manageEntries = (elements) => {
    this.invalidEntries = this.getInvalidEntries(elements);
    if (this.areAllEntriesValid()) {
      this.validEntries = elements.map(element => element.value);
    }
  }

  getInvalidEntries = function(formElements) {
    let elements = [];
    if (!(form === undefined)) {
      elements = formElements;
    }
    let invalidEntries = [];
    for (let element of elements) {
        if (Validator.isElementInvalid(element)) {
          invalidEntries.push(element);
        }
    }
    return invalidEntries;
  }

  areAllEntriesValid = () => {
    return this.invalidEntries.length === 0;
  }

}
