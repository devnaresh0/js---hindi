const accountId = 144553
let accountEmail = "newemail.com"
var accountPass = "12345"
accountCity = "Jaipur"
// accountId = 2 // not allowed

accountEmail = "hc@hc.com"
accountPassword = "212121"
accountCity = "Banguluru"
let accountState;

console.log(accountId);
/*
Never use var because of issue in block scope and funcitonal scope
*/
console.table([accountId,accountEmail,accountPass,accountCity,accountState])
