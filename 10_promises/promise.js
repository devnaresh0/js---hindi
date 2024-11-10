const promiseOne = new Promise(
    function(resolve,reject){
        //Do an async task
        //DB calls,cryptography
        setTimeout(function(){
            console.log('Async task is complete');
            resolve()

            
        },1000)
    }
)
// promises for asynchronous
promiseOne.then(function(){
    console.log('Promise Consumed');
    
});

new Promise(function(resolve,reject){
   setTimeout(function(){
    console.log("Async task 2");
    resolve();
   },1000);
}).then(function (){
console.log("Async to resolved");

});

const promiseThree = new Promise(function(resolve,reject){
setTimeout(function(){
resolve({username:"Chai",email: "Chai@chai@.com"})
},1000)
});
promiseThree.then(function(user){
console.log(user);

});

const promisefour = new Promise(function(resolve,reject){
    setTimeout(function(){
let error = true;
if(!error){
    resolve({username:"hitesh",password: "123"})
   
} else{
    reject('ERROR: Something went wrong')
        
}
    },2000)
})

const username = promisefour.then(
    (user)=>{
        console.log(user);
        return user.username;
        
    }
).then((username)=>{
    console.log(username);
    
}).catch(function(error){
    console.log(error);
    
}).finally(()=> console.log("finally"));

const promiseFive = new Promise(function(resolve,reject)
{
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"javascript",password: "123"})
           
        } else{
            reject('ERROR: JS went wrong')
                
        }
            },2000)
        });


async function consumePromsiseFive(){
    try{
        const response =  await promiseFive
        console.log(response);
    } catch(error){
        console.log(error);
        
    }
    
    
} 
// consumePromsiseFive()
// async function getAllUsers(params) {
//   const response = await  fetch('https://jsonplaceholder.typicode.com/posts');
//   const data = response.json();
//   console.log(data);

  
// }
// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/posts').then({response}{
}).then((response)=>{})
.catch((error)=> console.log(error)
).then((data)=>{
console.log(data);

}).catch(
    (error)=>console.log(error)
    
);


// ****** Backstory ******** //

