const accountId = 123123
let accountEmail= "andydispatch36@gmail.com"
var accountPassword ="345345"
accountCity = "Bahawalpur"

// accountId = 2   not allowed 

accountEmail= "salman@gmail.com"
accountPassword="212121"
accountCity="Multan"

console.log(accountId);


// prefer not to use var
// because of issue in block scope and functional scope


console.table([accountId, accountEmail, accountPassword, accountCity])
