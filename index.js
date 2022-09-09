const mongoose = require("mongoose")
const express = require("express")
const app = express()
app.use(express.json())

app.use(require("./routes/news.route.js"));
app.use(require("./routes/comments.route.js"));
app.use(require("./routes/categories.route.js"));

mongoose.connect("mongodb+srv://bersyak:web2000web@cluster0.akjwcf0.mongodb.net/news", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('Успешно соединились с сервером MongoDB'))
    .catch(() => console.log('Ошибка при соединении с сервером MongoDB'))


app.listen(4000, () => {
    console.log('Сервер успешно запущен');
});
