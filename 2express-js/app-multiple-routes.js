const express = require('express')
const app = express()

console.log('Starting')

/* app.use('/', (request, response, next) => {
    console.log('Always runs');
    next();
}) */

app.use('/delete-product', (request, response, next) => {
    console.log('Delete Product middleware')
    response.send('<h1> Delete-Product </h1>')
})

app.use('/add-product', (request, response, next) => {
    console.log('Add Product middleware');
    response.send('<h1> Add-Product </h1>');
})

app.use('/', (request, response, next) => {
    console.log('Root456 middleware')
    response.send('<h1> Root </h1>')
})

app.listen(4000)