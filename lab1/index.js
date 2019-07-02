console.log('Started Program')

// callback function 

const callback_1 = (err,data)=>{
    if(err)console.log(`There is an error!! here : ${err}`)
    else console.log(`The result is ${data}`)
}

const addNumber = (first,second,callback) =>{
    if(typeof first === typeof second) callback(null,first+second)
    else callback('Type of variable is mismatch')
}

// success
addNumber(10,20,callback_1)
// error
addNumber('10',20,callback_1)

// example of the arrow function
const arrow_function = ()=>{

}
 
//promise

const getData = () =>{
    return new Promise((resolve,rejected)=>{
        // do something like fetch data from url
        //if success 
        //return resolve(`This is success and it resolve`)
        //if wrong 
        return rejected(`This is rejected`)
    });
}

// show how to call promise function
getData().then(data=>console.log(data)).then(err=>console.log(err)).catch(err=>console.error(err));

//async await
const getTodo = async ()=>{
    // do something with await word
    return `async task`
}








