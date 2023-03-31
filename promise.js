const promise = new Promise((resolve, reject) => {
    let pass = true;

    if (pass) {
        resolve([
            { username: "tapas", email: "tapas@gmail.com" },
            { username: "amit", email: "amit@gmail.com" }
        ]);
    } else {
        reject("User is not valid!");
    }
});

promise.then((res) => {
    console.log(res);
});

promise.catch((err) => {
    console.log(err);
});

promise.finally(() => {
    console.log("Finally Message");
});