const mongoose = require('mongoose');
const express = require('express')
const app = express()



app.use(express.json());
app.use(require('./routes/user.route'))
app.use(require('./routes/post.route'))
app.use(require('./routes/comment.route'))





mongoose.connect('mongodb+srv://admin:1998@intocode.6gsnoaz.mongodb.net/twitter')

.then(() => console.log('успешно соединились с сервером MongoDB'))
.catch(() => console.log('Oшибка при соединении с сервером MongoDB'))

app.listen(2500, () => {
    console.log('сервером запушен успешно');
})