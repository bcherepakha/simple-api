# Несколько простых способов создания локального сервера для разработки

## JSON-SERVER. Простой файловый и api сервер для вашего локального проекта

* [JSON Server](https://github.com/typicode/json-server) [![](https://badge.fury.io/js/json-server.svg)](http://badge.fury.io/js/json-server) [![](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/typicode/json-server?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

### Install

```bash
$ npm i json-server --D
```

### Создаем конфигурационный файл в корне проекта `json-server.json`

```
Options:
  port         Set port                                    [default: 3000]
  host         Set host                               [default: "0.0.0.0"]
  watch        Watch file(s)                                     [boolean]
  static       Set static files directory
```

### Создаем простенький файлик `.api/db.json`

### Запускаем сервер

```bash
$ node_modules/.bin/json-server ./api/db.json
```

### Используем

* Для получения данных `GET`

```bash
$ GET http://localhost:3000/author
```

* Для добавления данных `POST`

```bash
$ POST http://localhost:3000/posts

{
	"title": "Post #1",
	"content": "It is a simple content"
}
```

Обязательно прописываем в залоговок `Content-Type` значение `application/json`

Переданный в `body` объект будет добавлен в массив `/posts`

* Для полной замены данных `PUT` по id

```bash
$ PUT http://localhost:3000/posts/2

{
	"title": "Post #2",
	"content": "It is a simple content"
}
```

* Для частичной замены данных `PATCH` по id

```bash
$ PUT http://localhost:3000/posts/2

{
	"title": "Post #2",
	"content": "It is a simple content"
}
```

* Для удаления данных `DELETE`

```bash
$ DELETE http://localhost:3000/posts/2
```
