class Account {

  constructor(args) {
    this.firstName = Account.capitalizeNames(args[0]);
    this.lastName = Account.capitalizeNames(args[1]);
    this.email = args[2];
    this.password = args[3];
  }

  static capitalizeNames = function(string) {
    return string.toLowerCase().split(" ").map(word => word.charAt(0).toUpperCase() + word.substring(1)).join(" ");
  }
  
}
