// The require to your local filesystem always starts with ./ or /
// If it is not present, it will look for module in the global namespace
const http = require('http');

// Option 1: legacy way of registering requestListener
//function requestListener (request, response) { }
//http.createServer(requestListener);

// Option 2: Creating a server using arrow function
const server = http.createServer((request, response) => {
    //console.log(request);
    console.log(request.url, request.method, request.headers) // outputs URL, method and headers
    response.setHeader('Content-Type', 'text/html')
    response.write('<html>')
    response.write('<head> <title> My First Page</title></head>')
    response.write('<body> <h1> Hello from Node.JS </h1> </body>')
    response.write('</html>')
    response.end()
});

server.listen(3000);

//process.exit - Hard exits the EventLoop - Similar to System.exit(0);

//response.statusCode = 302 ----------- Redirects the user to the root path
//response.setHeader('Location','/') 

//request.on('data',<function_to_be_executedon_every_request>)

