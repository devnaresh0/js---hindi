const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    sw: 'swift'

}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
    
   
}

const programming = ["js","rb","py","java","cpp"];

for (const key in programming) {
    console.log(programming[key]);
    
   
}

// const map = new Map();

// map.set('IN',"India");
// map.set('USA',"United States")
// map.set('IN',"India")

// for (const key in map) {
//    console.log(key);
//    // maps are not itratable
   
// }

