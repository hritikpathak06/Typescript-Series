interface Obj {
  height: number;
  weight: number;
  gender?: boolean;
}

interface NewObj extends Obj {
  scholar: boolean;
  func:(n:number,m:number) => void ;
}

const gg: NewObj = {
  height: 20,
  weight: 50,
  scholar: true,
  func:(n,m) => {
    console.log(n*m)
}
};

const gg2: NewObj = {
    height: 20,
    weight: 50,
    scholar: true,
    func:(n,m) => {
        console.log(n*m)
    }
  };

  gg2.func(20,40);

const obj: Obj = {
  height: 40,
  weight: 80,
  gender: true,
};

const obj2: Obj = {
  height: 60,
  weight: 100,
  gender: false,
};

const obj3: Obj = {
  height: 60,
  weight: 100,
};

console.log(obj);
console.log(obj2);
console.log(obj3);
console.log(gg);
console.log(gg2)

FUNCTIONS
type funcType = (n: number, m: number, l?: number) => number;
const func: funcType = (n, m, l) => {
  if (typeof l === "undefined") {
    console.log(n * m);
    return n * m;
  }
  console.log(n * m * l);
  return n * m * l;
};

func(10, 12);

REST OPERATOR
type funcType = (n: number, m: number, l?: number) => number;
const func = (...m: number[]) => {
  console.log(m);
  return m;
};
func(10, 12, 3548, 36393);
