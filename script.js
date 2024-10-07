const elementForCount = document.getElementById("count")
async function main (){
    for(let i = 0; i < 10; i++){
        elementForCount.innerHTML = i
        await new Promise((resolve)=> setTimeout(resolve, 2000))
    }
}
main()