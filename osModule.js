const os = require('os')

// info about current user
const user = os.userInfo()
console.log(user);
// console.log(user)

// method returns the system uptime in seconds
const upTime = os.uptime()
// console.log(upTime);
// console.log(`They system uptime is ${os.uptime} seconds`);

const currentOs = {
    name:os.type(),
    release:os.release(),
    totalMen:os.totalmem(),
    freeMem:os.freemem()
}

console.log(currentOs);