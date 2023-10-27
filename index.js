// Http Module

const http = require('http')

const fs = require('fs')
const path = require('path')
const { type } = require('os')

const app = http.createServer((req, res) => {

    res.writeHead(200, {
        'Content-Type': 'text/html'
    })

    console.log(req.url)
    // if(req.url==='/'){
    //     fs.readFile(path.join(__dirname , 'Public','index.html'),(err, content)=>{

    //         if (err){
    //             throw err
    //         }
    //         else{

    //             res.end(content)
    //         }
    //     })
    // }else if(req.url==='/about'){
    //     fs.readFile(path.join(__dirname , 'Public','about.html'),(err, content)=>{

    //         if (err){
    //             throw err
    //         }
    //         else{

    //             res.end(content)
    //         }
    //     })   
    // }

    let filePath = path.join(__dirname, 'Public', req.url === '/' ? 'index.html' : req.url)


    let ContentType = 'text/html'
    let ext = path.extname(filePath)

    if (!ext) {
        filePath += '.html'
    }

    switch (ext) {
        case '.Css':
            ContentType = 'text/Css'
            break

        case '.js':
            ContentType = 'text/javascript'

            break
        default:
            ContentType = 'text/html'

    }
    // fs.readFile('/search', (req, res) => {
    //     const query = req.query.query; // Get the search query from the URL parameter
    //     // You can use the 'query' to perform your search logic here
    //     // For this example, we'll just send a response back with the query
    //     res.send(`You searched for: ${query}`);
    // });

    fs.readFile(filePath, (err, content) => {
        if (err) {
            fs.readFile(path.join(__dirname, 'Public', 'error.html'), (err, data) => {
                if (err) {
                    res.writeHead(500)
                    res.end('Error!!!')
                } else {
                    res.writeHead(404, {
                        'Content-Type': ContentType
                    })
                    res.end(data)
                }
            })
        } else {
            res.writeHead(200, {
                'Content-Type': ContentType

            })
            res.end(content)
        }
    })


})
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Listen to the Port ${PORT}`)
})
// https://download.logo.wine/logo/National_Car_Rental/National_Car_Rental-Logo.wine.png