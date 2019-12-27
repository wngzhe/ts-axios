class User {
   firstName: string
   lastName: string
   fullName: string
   constructor(firstName: string, lastName: string) {
      this.firstName = firstName; this.lastName = lastName
      this.fullName = `${firstName} ${lastName}`
   }
}

interface Person {
   firstName: string;
   lastName: string;


}
function ser(p: Person) {
   return p.firstName + p.lastName + ' hello'
}
const u = new User('wng', 'zz')
console.log(ser(u))