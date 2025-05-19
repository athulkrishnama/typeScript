interface user  {
    name:string,
    age:number,
    places?:number[]
}

const athul:user = {
    name:"Athul",
    age:23,
}

function showUser(user:user){
    console.log(user.name);
    if(user.places){
        user.places.includes(5);
    }
}

enum statusCode  {
    notfound = 404,
    error
}