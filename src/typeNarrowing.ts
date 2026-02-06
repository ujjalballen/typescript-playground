function getSuff(kind: string | number) {
  if (typeof kind === "string") {
    return `Making ${kind} stuff...`;
  }

  return `Ordered: ${kind}..`;
}

function serveMsg(message?: string) {
  if (message) {
    return `Server ${message}`;
  }

  return "Serve the default one";
}

function orderProduct(size: "small" | "medium" | number) {
  if (size === "small") {
    return `order ${size} size`;
  }

  if (size === "medium") {
    return `order ${size} size`;
  }

  return `Order the number size`;
}

class orderSmall {
  serve() {
    return `Order Sm one`;
  }
}

class orderMedium {
  serve() {
    return `Order MD one`;
  }
}

function serve(value: orderSmall | orderMedium) {
  if (value instanceof orderSmall) {
    return value.serve();
  }
}

type ProductObject ={
    type: string,
    count: number
}


function isProductOrder(obj: any): obj is ProductObject{
return (
    typeof obj === "object" && 
    obj !== null && 
    typeof obj.type === "string" &&
    typeof obj.count === "number"
)
}

function serverOrder(iteam: ProductObject | string){
    if(isProductOrder(iteam)){
        return `Serving ${iteam.type} with ${iteam.count}`
    };

    return `Serving custom: ${iteam}`
}


type MasalaTea = {type: "masala"; spiceLevel: number};
type GingerTea = {type: "ginger"; amount: number};


type Tea = MasalaTea | GingerTea


function MakeTea(order: Tea){
    switch (order.type){
        case "ginger":
            return "Ginger Tea"
            break;
        
        case "masala":
            return "Masala Tea"
        
            default:
                break;
    }
}


function brew(order: MasalaTea | GingerTea){
    if("spiceLevel" in order){

    }
}

function isStringArray(arr: unknown): arr is string[]{
    //
}