const accountId = 144335
let accountEmail = "sneha@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"

// not allowed
// accountId = 2

accountEmail = "hc@hc.com"
accountPassword = "8732568974"
accountCity="Delhi"
let accountState;


/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
