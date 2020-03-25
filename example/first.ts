interface Person {
   firstName: string
   lastName: string
}

class Pa {
   public age: number;
   public firstName: string;
   public lastName: string;
   public fullName: string;
   public name: string;
   public list: number[];
   public address: string;
   public constructor(firstName: string, lastName: string) {
      this.firstName = firstName; this.lastName = lastName;
      this.fullName = `${firstName} ${lastName}`;
      this.address = "34567";
      this.age = 18;
      this.name = firstName;
   }
   public getAge(age: number): number {
      return 18 + age
   }
   protected sexs() {
      return 1
   };
   private say() {
      console.log('hello world')

   };

}

function sr(p: Person): string {
   return p.firstName + p.lastName + ' hello'
}

let sy: (x: number) => number = function (x: number) {
   return x
}
let ua = new Pa('wng', 'zz')
console.log(sr(ua))