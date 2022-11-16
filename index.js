var express = require('express');
var app = express();

app.use(express.json());

app.post('/push-notification', (req, res)=>{
    module.exports.token = `${req.body.token}`;
    var notification = require('./src/Notification')
    
    async function pushNotif(){
        require('./src/Notification')
        return notification;
    }
    pushNotif()
    .then((result) => {
        if(result){
            res.send({
                message: "Notification was pushed!!!"
            })
        }
    }).catch((err) => {
        res.status(404).send({
            message: err.message
        })
    });
});

var port = process.env.PORT || 8080;

app.listen(port, ()=> console.log(`Server is running on port ${port}`));