let fun1 = () => {
    console.log("fun1");
}

let fun2 = () => {
    console.log("fun2");
}

let loadingTime = () => {
    console.log("Loading Time");
}

let fun3 = () => {
    setTimeout(() => {
        loadingTime()
    }, 5000);
}



fun1();
fun2();
fun3();