const http = require('http');
const app = require('./app');

const appointmentRoutes = require('./routes/appointment');

app.use('/appointment', appointmentRoutes);

app.get('/',(req, res) => {
    console.log('from /');
    res.sendStatus(200);



} )

const port = 3001;

const server = http.createServer(app);



server.listen(port);
