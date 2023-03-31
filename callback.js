//Callback Function
let display = (something) => {
    console.log(something);
}

//Higher Order Function(Store other function)
let higherOrderFunction = (Name, Class, CallbackFunc) => {
    const details = `My name is ${Name} & I Read in class ${Class}`;
    CallbackFunc(details);
}

higherOrderFunction("Tapas", "MCA", display);