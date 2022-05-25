const http = require('http');

const server = http.createServer((request, response) => {
    const url = request.url
    const method = request.method

    if (url === '/') {
        console.log(request.url, request.method, request.headers) // outputs URL, method and headers
        response.setHeader('Content-Type', 'text/html')
        response.write('<html>')
        response.write('<head> <title> My First Page</title></head>')
        response.write('<body> <h1> Hello from Node.JS </h1> </body>')
        response.write('</html>')
        return response.end()
    }
});

server.listen(3000);



