"use strict";
let age;
age = 50;
let personName;
personName = "Max";
let toggle;
toggle = true;
let empty;
empty = null;
let notInitialize;
notInitialize = undefined;
let callback = (a) => 100 + a;
let anything;
anything = -20;
anything = "Text";
anything = {};
let some;
some = "Text";
let str;
if (typeof some === 'string') {
    str = some;
}
let human;
human = ["Max", 21];
var Status;
(function (Status) {
    Status[Status["LOADING"] = 0] = "LOADING";
    Status[Status["READY"] = 1] = "READY";
})(Status || (Status = {}));
;
const appStatus = {
    isLoading: Status.LOADING,
};
if (appStatus.isLoading === Status.LOADING) {
    console.log('Your app is loading. Please wait.');
}
if (appStatus.isLoading === Status.READY) {
    console.log('Your app is ready.');
}
let variable;
let state;
function showMessage(message) {
    console.log(message);
}
function calc(num1, num2) {
    return num1 + num2;
}
function customError() {
    throw new Error("Error");
}
const page1 = {
    title: "The awesome page",
    likes: 100,
    accounts: ["Max", "Anton", "Nikita"],
    status: "open",
    details: {
        createAt: new Date(),
        updateAt: new Date(),
    },
};
const page2 = {
    title: "Python or Js",
    likes: 5,
    accounts: ["Alex"],
    status: "close",
};
//# sourceMappingURL=types.js.map