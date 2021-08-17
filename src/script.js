var form = document.querySelector(".form");
let entriesManager = new EntriesManager();
var newAccount;

/*================================
      Adding Event Listeners
================================*/
/*ON SUBMIT: 1. Stores Valid and Invalid Entries in entriesManager, after Validation.*/
form.addEventListener("submit", entriesManager.manageFormSubmission);

/*ON SUBMIT: 2. Displays a message to the user if he/she provided some invalid entries.*/
form.addEventListener("submit", function(e){
  e.preventDefault();
  DomManipulator.displayErrors(entriesManager.invalidEntries);
});

/*ON SUBMIT: 3. If all entries are valid, creates a new account and clears entries.*/
form.addEventListener("submit", function(e) {
  e.preventDefault();
  if(entriesManager.areAllEntriesValid()){
    newAccount = new Account(entriesManager.validEntries);
    console.log(newAccount);  /*Logs in the console the new account that has been created.*/
    DomManipulator.clearEntries(e.srcElement);
  }
});

/*ON INTPUT: 4. Removes any error message on the input field where the user is typing.*/
form.addEventListener("input",  function(e){
  e.preventDefault();
  DomManipulator.errorSuppression(e.srcElement);
});
