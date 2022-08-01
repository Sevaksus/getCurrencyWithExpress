// Подключаем библиотеку express из папки node_modules написав команду:
const express = require("express")

// создаём переменную являющуюся веб.сервером
const app = express()

//позволяет генерировать абсолютные пути, которые необходимы для передачи статических файлов
const path = require("path")

app.use(express.static(path.join(__dirname, "public")))
// path.join получает два аргумента:

// Текущую рабочую директорию (cwd).
// Вторую директорию, которую нужно объединить с cwd.

//для примера создадим массив из данных
const artists = [
  {
    id: 1,
    name: "Grile 15",
  },
]

//описываем route нашего приложения, т.е. прописываем то, что будет происходить, когда мы заходим на опредённый url
//1. Описываем метод get на URL слэш, т.е. когда мы зайдём на определнный порт, на котором висит приложуха, отработает кусок кода ниже
//2. Мы вызываем у response функцию send(отправить ответ), т.е. вывести "Hello world!".
app.get("/Hello", function (req, res) {
  res.send("Hello world!")
})

// настроем сервер на определённом порту
app.listen(3012, function () {
  console.log("Server was started")
})

//для примера выводим массив объектов artists на экран
app.get("/artists", function (req, res) {
  res.send(artists)
})

//например мы хотим вывести кого-то конкретного из списка artists
app.get("/artists/:id", function (req, res) {
  const artist = artists.find(function (artist) {
    // приводим req.params.id к типу "число" ибо до этого оно строка
    return artist.id === Number(req.params.id)
  })
  res.send(artist)
})
