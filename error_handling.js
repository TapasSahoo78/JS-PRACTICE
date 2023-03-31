// try {
//     console.log("Hello");
//     console.log(num);
//     console.log("Hello Again");
// } catch (error) {
//     // console.log(error.name);
//     // console.log(error.message);
//     console.log("How are you?");
// } finally {
//     console.log("Hello Again");
// }



try {
    let age = 19;
    if (age < 17) {
        throw "Hello";
    } else if (age > 18) {
        throw "How are you?";
    }
} catch (error) {
    console.log("How are you?");
} finally {
    console.log("Hello Again");
}
