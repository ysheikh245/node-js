exports.post = (request, response, next) => {
    console.log('Inside the controller')
    response.status(201).json({
        message: 'First REST modularized service'
    });
};