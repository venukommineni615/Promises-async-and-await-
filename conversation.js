
async function conversationAtTheater(){
    let getButter=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("got some butter")
        })
    })
    let getColdDrinks=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("got some cool drinks")
        },1000)
    })
    let result=await Promise.all([getButter,getColdDrinks])
     console.log(result)
}
conversationAtTheater()