var User = /** @class */ (function() {
  function User(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = firstName + " " + lastName;
  }
  return User;
})();
function ser(p) {
  return p.firstName + p.lastName + " hello";
}
var u = new User("wng", "zz");
console.log(ser(u));
