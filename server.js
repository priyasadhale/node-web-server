var express = require('express')

var app = express();

app.set('view engine','ejs')
app.use(express.static(__dirname + '/public'))

app.use((req, res, next) => {
    res.render('maintenance.ejs')
})

app.get('/', (req, res) => {
    console.log('Hello express!!!')
    res.send('Hello Express')
})

app.listen(3400, () => {
    console.log('server started... check your website at localhost://3400');
})