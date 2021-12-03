// RESTful-сервіс
// В базі даних зберігаються деякі інформаційні одиниці (книжки, статті тощо). Написати сервіс, який забезпечує стандартні CRUD-операції (отримання всіх записів, отримання запису за ID, додавання, оновлення та видалення записів).
// Сервіс організувати на основі принципів REST. Передбачити можливість тестування сервісу за допомогою Postman.
// База даних - MongoDB або MySQL (на вибір).
// Сервіс реалізувати на основі Node.js та Express.

const express = require('express')
const mongoose = require('mongoose')
const app = express()

mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.Promise = global.Promise;
const db = require('./config/keys').MongoURI;

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB successfully!"))
    .catch(err => console.log(err));

app.use(express.json())

const booksRouter = require('./routes/books-api')
app.use('/books',booksRouter)

app.listen(8000, () => {
    console.log('Server started on port 8000')
})