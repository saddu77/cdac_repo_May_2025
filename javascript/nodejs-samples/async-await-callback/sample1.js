const helperPromise = function(){
    const promise = new Promise(function (resolve,reject){
        const x = "hello";
        const y = "hello0";
        if ( x === y){
            resolve("Strings are same")
        } else {
            reject("strings are not same")
        }
    });
    return promise;
}

async function demoPromise(){
    try {
        let msg = await helperPromise();
        console.log(msg);
        
    } catch (error) {
        console.log("Error: " + error );
        
    }
}

demoPromise();