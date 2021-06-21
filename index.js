const express = require('express');
const app = express()
const router = express.Router()
const nodemailer = require('nodemailer');

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use('/', router)

app.post('/sendEmail', (req, res) => {
    const {receiver} = req.body
    const {subject} = req.body
    const {message} = req.body

    var messageToSend = {
        from: "devusman2000@gmail.com",
        to: receiver, 
        subject:  subject,
        text: message,
        html: ""
    }

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth:{
            user: 'devusman2000@gmail.com',
            pass: 'Nova2668*'
        }
    })

    transporter.sendMail(messageToSend, (err, info) => {
        if(err) 
            res.status(421).send({message: 'Something went wrong check out data and send again'})
        else
            res.status(200).send({message: 'Email sent successfully'})
    })
})

app.listen(3000)
