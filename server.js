const express = require('express')
const nunjucks = require('nunjucks')
const server = express()

server.set('view engine', 'njk')

server.use(express.static('public'))


nunjucks.configure("views", {
    express: server,
    noCache: true

})

server
    .get("/", function(req, res) {
        return res.render("about")
    })

.get("/courses", function(req, res) {
    return res.render('courses')
})

.listen(5000, function() {
    console.log("server is running!!!")
})