class User {
   firstName: string
   lastName: string
   fullName: string
   constructor(firstName: string, lastName: string) {
      this.firstName = firstName
      this.lastName = lastName
      this.fullName = `${firstName} ${lastName}`
   }
}

interface Person {
   firstName: string
   lastName: string
}
function Aser(p: Person) {
   return p.firstName + p.lastName + ' hello'
}
let u = new User('wng', 'zz')
console.log(ser(u))