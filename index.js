
let button  = document.getElementById("btn");
button.addEventListener("click",()=>{
    var input = document.getElementById("inp");
    var inputValue = input.value;
    let a = async()=>{
        let b = document.getElementById("container")
        let i = 0;
        while(i !== 100){
            let ran= Math.floor(Math.random()*5)
            
            i= i+ran
            if(i>100){
              i= 100
            }
            await new Promise(r => setTimeout(r, 100));
            b.innerHTML = `Fetching Data....${i}%`
        }
    }
    let d = [
        "Initializing Hack tool...",
        "Connecting to Facebook...",
        "Connecting to server 1...",
        "Connection failed. Retrying...",
        "Connecting to server 2",
        "Connected Successfully...",
        `Username Formatting...`,
        "Trying Brute Force...",
        "passwords tried...",
        "Match not found",
        "Another passwords tried...",
        "Match not found...",
        "Another passwords tried...",
        "Match not found...",
        "Another passwords tried...",
        "Match found...",
        "Accessing Account...",
        "Hack Successful..."
]
        const sleep = async(sec) =>{
        return new Promise((res,rej)=>{
        setTimeout(()=>{res(true)},sec*1000)
        })
}
    
    const hack = async(msg) =>{
        await sleep(2);
        let text = document.getElementById("write")
        text.innerHTML = text.innerHTML + msg + "<br>"
    }

    const write = async() =>{
        await sleep(2)
        let e = document.getElementById("written")
        e.innerHTML = "<h3>Result:</h3>" + "Username: " + `${inputValue}` + "<br>" + "Phone number: " + "9827654232"
        + "<br>" + "Fb id: " + `${inputValue}_18`
    }
    (async () => {
        await a();
        for (let j = 0; j < d.length; j++) {
            await hack(d[j])
    }
       await write();
})()
})