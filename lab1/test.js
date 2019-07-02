const getone = async ()=>{
    console.log('getone here')
}

const gettwo = async () =>{
    console.log('get two here')
}

const getthree = async ()=>{
    console.log('get three here')
}

getone().then(data=>{
    return gettwo()
}).then(data=>{
    return getthree()
}).then(data=>{

}).catch(err=>{
    console.log(`Error ${err}`)
})