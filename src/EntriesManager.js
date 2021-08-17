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

  manageEntries = (entries) => {
    this.invalidEntries = Validator.getInvalidEntries(entries);
    if (this.areAllEntriesValid()) {
      this.validEntries = entries.map(element => element.value);
    }
  }

  areAllEntriesValid = () => {
    return this.invalidEntries.length === 0;
  }

}
