//NPM Modules
// const color=require('cli-color')

// console.log(color.blue('Hello Devil Abhi'))

//Local Modules

// const auth = require('./auth.js')

// // auth.register('Abhisek_Dhalod')
// auth.login('Abhisek_Dhalod','234536')

// Core Modules
//Path Module\
// const path=require('path')

//dirname

// console.log('Folder name:',path.dirname(__filename))

//filename

// console.log('File name:',path.basename(__filename))

//Extension
// console.log('ext name:',path.extname(__filename))

//Parse

// console.log('Parse',path.parse(__filename))

//Join Method

// console.log('Join',path.join(__dirname,'order','app.js'))

//File System Module (2nd)

const path=require('path')

const fs = require('fs')

//Make a directory 

// fs.mkdir(path.join(__dirname, '/test'),(err)=>{
//     if(err){
//         console.log('Something Went Wrong.......')
//         return
//     }
//     else{
//         console.log('Folder has been created..........')
//     }
// })

// Create a File 

// fs.writeFile(path.join(__dirname , 'test', 'test.txt'), 'Hello Abhisek Kumar\n',(err)=>{
//     if(err){
//         throw err
//     }
//     else{
//         console.log('File has been Created.....')
//     }

//     fs.appendFile(path.join(__dirname , 'test','test.txt'),'How are you',(err)=>{
//         if(err){
//             throw err
//         }
//         else{
//             console.log('data is added.....')
//         }  
//     })
// })

//Read a File

//during buffer method

//  fs.readFile(path.join(__dirname , 'test','test.txt'),(err,data)=>{
// if(err){
//     throw err
// }
// else{

//     const content = Buffer.from(data)
    

//     // console.log(content.toJSON())
//     console.log(content.toString())
// }
//  }
//  )

//during utf-8 method 


// fs.readFile(path.join(__dirname , 'test','test.txt'), 'utf-8',(err,data)=>{
//     if(err){
//         throw err
//     }
//     else{
//         console.log(data)
//     }
// })


// OS Module

const os = require('os')

//Type Os Module

// console.log('os type:',os.type())

//Plateform Os Module

// console.log('os plateform:',os.platform())

//CPU Architecture Method

// console.log('Cpu Architecture:',os.arch())

// console.log('Cpu Details:',os.cpus())

//Os Memory Method 

// console.log('Free Memory:',os.freemem())

// console.log('Total Memory:',os.totalmem())

// console.log('Uptime:',os.uptime())


//Events Module

const Emitter = require('events')

// const myEmitter = new Emitter()

// myEmitter.on('Someone',(data)=>{
//     console.log(data)
// })

// myEmitter.emit('Someone',{
//     name:'Abhisek',
//     Job_Title:'Senior_Database_Engineer,Software_Engineer'
// })

//code send and registered method in Emitter

// class Auth extends Emitter{
//     register(username){
//         console.log('You have been sucessfully registered.......')
//         this.emit('registered',username)
//     }
// }

// const auth =new Auth()

//Listener
//For Verify Email

// auth.on('registered',(data)=>{
//     console.log(`Sending email to ${data}`)

// })
// auth.register('Abhisek Dhalod......')

//Welcome Email 

// auth.on('registered',(data)=>{
//     console.log(`Welcome ${data}`)

// })
// auth.register('Abhisek Dhalod......')