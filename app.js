let express = require('express');
let app = express();
let server = require('http').Server(app);
let env = process.env;
let bodyParser = require('body-parser');

app
    .set('port', env.NODE_PORT || 3000)
    .set('ipaddress', env.NODE_IP || 'localhost')
    .use(express.static(__dirname + '/public'))
    .get('/json', (req, res) => {
        res.send({
            status: 1,
            title: "test",
            items: [1,2,3,4,5,6,7,8,9,0]
        });
    });

server.listen(
    app.get('port'),
    app.get('ipaddress'),
    () => console.log(`Node app is running on port ${app.get('port')}`)
);
