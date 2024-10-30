const coding = ["js","ruby","java","python"];

// coding.forEach( function (item) {
//     console.log(item);
    

// // })

// coding.forEach( () => {
//     // callback function don't have callback


// })

// function printMe(item) {
//     console.log(item);
    
// }
// coding.forEach(printMe);

coding.forEach( (item,index,arr)=> {
    console.log(item,index,arr);
    
})

const myCoding = [
    {
        languageName: "java",
        languageFile:"java",

    },
    {
        languageName: "javascript",
        languageFile:"js",
        
    },
    {
        languageName: "python",
        languageFile:"py",
        
    },


]

myCoding.forEach((item) => {
    
    console.log(item.languageName);

    

})