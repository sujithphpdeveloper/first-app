const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if(url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Home Page</title><head>');
        res.write('<body><form method="POST" action="create-user"><input name="username" placeholder="User name"><input type="submit" value="Submit"></form>');
        res.write('</html>');
        return res.end();
    }
    if(url === '/users') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Home Page</title><head>');
        res.write('<body><ul><li>user 1</li></ul></body>');
        res.write('</html>');
        return res.end();
    }
    if(url === '/create-user' && method === 'POST') {
        const body = [];
        req.on('data', chunk => {
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody.split('=')[1])
        });
        console.log(method);
        res.statusCode = 302;
        res.setHeader('Location', '/users');
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Home Page</title><head>');
    res.write('<body><h1>Title of the Home Page</h1></body>');
    res.write('</html>');
    res.end();
};

module.exports = requestHandler;