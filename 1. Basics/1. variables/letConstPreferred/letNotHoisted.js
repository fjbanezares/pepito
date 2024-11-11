function showName() {
    console.log(name); // ReferenceError: name is not defined Uncaught ReferenceError ReferenceError: Cannot access 'name' before initialization

    let name = "Alice";
    console.log(name);
}
showName();
