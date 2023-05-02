let age: number;
age = 50;

let personName: string;
personName = "Max";

let toggle: boolean;
toggle = true;

let empty: null;
empty = null;

let notInitialize: undefined;
notInitialize = undefined;

let callback = (a: number):number => 100 + a;

let anything: any;
anything = -20;
anything = "Text";
anything = {};

let some: unknown;
some = "Text";
let str: string;
if (typeof some === 'string') {
    str = some;
}

let person: [string, number]
person = ["Max", 21];

// Опишіть enum умову наступну: він повинен відображати статус завантаження. Завантажується (LOADING) та завантажена (READY).
enum Status { LOADING, READY };

const appStatus = {
  isLoading: Status.LOADING,
}

if (appStatus.isLoading === Status.LOADING) {
  console.log('Your app is loading. Please wait.')
}
if (appStatus.isLoading === Status.READY) {
  console.log('Your app is ready.')
}
// Зробіть змінну, яка може приймати або рядок, або число.
let variable: string | number;
// Зробіть змінну, яка може приймати лише одне значення з двох: 'enable' або 'disable'
let state: 'enable' | 'disable';
// Вкажіть типи для наступних функцій
function showMessage(message:string): void{
  console.log(message);
}

function calc(num1:number, num2:number):number {
  return num1 + num2;
}

function customError():never {
  throw new Error("Error");
}

// Створіть свій тип даних на основі наявних даних.
type NewPage = {
  title: string,
  likes: number,
  accounts: string[],
  status: 'open' | 'close',
  details?: {
    createAt: Date,
    updateAt: Date,
  }
}

const page1: NewPage = {
  title: "The awesome page",
  likes: 100,
  accounts: ["Max", "Anton", "Nikita"],
  status: "open",
  details: {
    createAt: new Date(),
    updateAt: new Date(),
  },
}

const page2: NewPage = {
  title: "Python or Js",
  likes: 5,
  accounts: ["Alex"],
  status: "close",
};