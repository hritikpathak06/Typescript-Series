// interface Obj {
//   height: number;
//   weight: number;
//   gender?: boolean;
// }

// interface NewObj extends Obj {
//   scholar: boolean;
//   func:(n:number,m:number) => void ;
// }

// const gg: NewObj = {
//   height: 20,
//   weight: 50,
//   scholar: true,
//   func:(n,m) => {
//     console.log(n*m)
// }
// };

// const gg2: NewObj = {
//     height: 20,
//     weight: 50,
//     scholar: true,
//     func:(n,m) => {
//         console.log(n*m)
//     }
//   };

//   gg2.func(20,40);

// const obj: Obj = {
//   height: 40,
//   weight: 80,
//   gender: true,
// };

// const obj2: Obj = {
//   height: 60,
//   weight: 100,
//   gender: false,
// };

// const obj3: Obj = {
//   height: 60,
//   weight: 100,
// };

// console.log(obj);
// console.log(obj2);
// console.log(obj3);
// console.log(gg);
// console.log(gg2)

// FUNCTIONS
// type funcType = (n: number, m: number, l?: number) => number;
// const func: funcType = (n, m, l) => {
//   if (typeof l === "undefined") {
//     console.log(n * m);
//     return n * m;
//   }
//   console.log(n * m * l);
//   return n * m * l;
// };

// func(10, 12);

// REST OPERATOR
// type funcType = (n: number, m: number, l?: number) => number;
// const func = (...m: number[]) => {
//   console.log(m);
//   return m;
// };
// func(10, 12, 3548, 36393);

// function lol(n: number): number {
//   return 45;
// }

// **************************************************************

// Interface
// interface ProductInterface {
//   name: string;
//   price: number;
//   stock: number;
//   photo: string;
//   readonly id: string;
// }

// // Type Aliasis
// type GetDataType = (product: {
//   name: string;
//   price: number;
//   stock: number;
//   photo: string;
// }) => void;

// // FUNCTION WITH OBJECT
// const getData: GetDataType = (product) => {
//   console.log(product);
// };

// const productOne: ProductInterface = {
//   name: "Apple",
//   price: 99999,
//   stock: 145,
//   photo: "Sample url",
//   id: "sklswjdjd",
// };

// getData(productOne);

// // NEVER TYPE
// type themeMode = "light" | "dark";
// const errorHandler = (): never => {
//   throw new Error();
// };

// const mode:themeMode = "dark";
// *************************************************************

// CLASSES IN TYPESCRIPT
// class Player {
//   readonly id: string;
//   constructor(
//     private height: number,
//     public weight: number,
//     protected power?: number
//   ) {
//     this.id = String(Math.floor(Math.random() * 1000));
//   }
//   get getMyHeight(): number {
//     return this.height;
//   }

//   set changeMyHeight(height: number) {
//     this.height = height;
//   }
// }

// const abhi = new Player(100, 150, 23);
// console.log("Height", abhi.getMyHeight);
// abhi.changeMyHeight = 50;
// console.log("Changed Height", abhi.getMyHeight);

// class Player2 extends Player {
//   special: boolean;
//   constructor(height: number, weight: number, power: number, special: boolean) {
//     super(height, weight, power);
//     this.special = special;
//   }
// }

// const abhi = new Player2(100, 150, 23, true);
// console.log("Weight", abhi.weight);
// console.log("Heght", abhi.getMyHeight());
// console.log("ID", abhi.id);

// interface ProductType {
//   name: string;
//   price: number;
//   stock: number;
//   id: string;
//   offer?: boolean;
// };

// class Product implements ProductType {
//   public name: string;
//   public price: number;
//   public stock: number;
//   public id: string = String(Math.floor(Math.random() * 1000));
//   public offer: boolean;
//   constructor(
//     name: string,
//     price: number,
//     stock: number,
//     offer: boolean,
//     id: string
//   ) {
//     this.name = name;
//     this.price = price;
//     this.stock = stock;
//     this.id = id;
//     this.offer = offer;
//   }
// };

// const pizza = new Product("I Phone", 49999, 120, true, "jjsjsj");
// console.log("ID", pizza.id);
// console.log("Name", pizza.name);
// console.log("Price", pizza.price);
// console.log("Stock", pizza.stock);
// **************************************************************

// TYPE ASSERTION
// const btn = <HTMLElement>document.getElementById("btn");
// const img = <HTMLImageElement>document.getElementById("img");
// const form = <HTMLFormElement>document.getElementById("form");
// const input = <HTMLInputElement>document.querySelector("form > input");

// form.onsubmit = (e: SubmitEvent) => {
//   e.preventDefault();
//   const value = Number(input.value);
//   const h2 = document.createElement("h2");
//   h2.textContent = (value + 20).toString();
//   const body = document.querySelector("body")!;
//   body.append(h2);
// };

// *********************************************************

// interface Person {
//   // [key:string]:string,
//   name: string;
//   email: string;
// }

// const myObj: Person = {
//   name: "Ritik",
//   email: "ritik@gmail.com",
// };

// let key = "name";
// myObj[key as keyof typeof myObj];

// const getName = (): string => {
//   return myObj["name"];
// };

// const getEmail = (): string => {
//   return myObj["email"];
// };

// const getData = (key: keyof Person): string => {
//   return myObj[key];
// };

// getData("name");
// *************************************************************************************************

// UTILITY CLASSES

1- Partial type
type User = {
  name:string,
  email:string
}
type User2 = Partial<User>

// 2- Required Type(Opposite Of Partial)
type User = {
  name?:string,
  email?:string,
  password:string
}

const User2 : Required<User> = {
  name : "Riitk",
  email:"ritik@gmail.com",
  password :"hdfhfhfh"
}

console.log(User2)

// 3 - Readonly Type(Makes Every Property Read Only)
type User = {
  name?:string,
  email?:string,
}

const user:Readonly<User> = {
  name:"Ritik",
  email:"phritik06@gmail.com"
}
console.log(user)

// 4 - Record Type
type User = {
  name:string,
  email:string,
}

type User2 = Record<"name"|"email"|"gender",string>

// example
interface UserInfo {
  age: number;
}

type UserName = "john" | "andrew" | "elon" | "jack";

const users: Record<UserName, UserInfo> = {
  john: {
    age: 34,
  },
  andrew: {
    age: 34,
  },
  elon: {
    age: 34,
  },
  jack: {
    age: 34,
  },
};
console.log(users)

//5- Pick Type
interface OrderInfo {
  readonly id:string,
  user:string,
  city:string,
  state:string,
  country:string,
  status:string
}

// type ShippingInfo = Pick<OrderInfo,"city"|"state"|"country">

// // 6 - Omit Type
type ShippingNot = Omit<OrderInfo,"city" >

// 7 - Exclude
type Random = Exclude<string | number | boolean,string>

// 8 - Extract
type MyUnion = string | number | boolean
type Random = Extract<MyUnion,string>

// 9 - Not Nullable
type MyUnion =  string | number | boolean | undefined | null
type Random = NonNullable<MyUnion>

//  10 - Parameters
const myFunc = (a:number,b:string) => {
  console.log(a+b);
}
type Random =Parameters<typeof myFunc>

// 11 - ContructorParameters
class SampleClass {
  constructor(public s:string,public t:string){
  }
}
type Random = ConstructorParameters<typeof SampleClass>

// 12 - Return Type
const myFunc = (a:number,b:string) => {
  return(a+b);
}
type Random = ReturnType<typeof myFunc>

// 13 - Instance Type
class SampleClass {
  constructor(public s: string, public t: string) {}
}
type Random = InstanceType<typeof SampleClass>;

const user: Random = {
  s: "44",
  t: "25",
};

// **********************************************************************************************

// GENERIC --------------->>>>>>>>> IMPORTANT
const func = <CustomType>(n: CustomType): CustomType => {
  let text: CustomType;
  return n;
};

const ans = func(20);
const ans2 = func(true);
const ans3 = func("Ritik");

type Person = {
  name:string,
  age:number
}

const func = <CustomType>(n: CustomType): CustomType => {
  let text: CustomType;
  return n;
};

const person1:Person={
  name:"Riitik",
  age:67
}

const ans = func<Person>(person1)

// Advance Generic
const func = <T,U>(n:T,o:U) => {
  return {n,o}
}
const ans = func<number,string>(20,"lol");
console.log(ans)

// Extends Keyword
type Person = {
  name: string;
  age: number;
  email: string;
};

type Person2 = {
  name: string;
  age: number;
  email: string;
};

const func = <T, U extends T>(n: T, o: U): { n: T; o: U } => {
  return { n, o };
};

const user: Person = {
  name: "Ritik",
  age: 20,
  email: "ritik@gmail.com",
};
const user2: Person2 = {
  name: "Ritik",
  age: 20,
  email: "ritik@gmail.com",
};

const ans = func<Person, Person2>(user, user2);

type Person = {
  name: string;
  age: number;
};

const users: Person[] = [
  {
    name: "Ritik",
    age: 45,
  },
  {
    name: "Rovky",
    age: 45,
  },
  {
    name: "Levi",
    age: 34,
  },
  {
    name: "Rahul",
    age: 14,
  },
];

const filterByPeoples = <T, Key extends keyof T>(
  arr: T[],
  property: Key,
  value: T[Key]
) => {
  return arr.filter((item) => item[property] === value);
};

const filteredPeopleByName = filterByPeoples(users, "name", "Rahul");
console.log(filteredPeopleByName);
