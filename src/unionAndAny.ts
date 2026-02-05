// Unions

let subs = "1M";
let subs2 = 10;

let sub: number | string = 10;

// sub = true  // it will give a error, because sub could be number or string;

let status: "pending" | "success" | "error" = "pending";

// status = "akjf"

status = "success"


// any

const orders = ["1", "2", "3", "4"];

// let currentValue: string;
let currentValue: string | undefined;

for(const order of orders){
    if(order === "3"){
        currentValue = order;
        break;
    }
    currentValue = "55"
}

// currentValue = "44";
// currentValue = 44

console.log(currentValue)

