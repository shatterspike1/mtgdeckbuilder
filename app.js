var express = require('express')
var app = express()
var $ = require('jquery');
var http = require('http');

/* 
var dburl = ''
var db = require('monk')(dburl)
app.db = db
*/
app.set('view engine', 'jade')
app.use(express.static(__dirname + '/public'))
app.get('/', function(req, res){
    res.render('index.jade')
})

//app.use('jquery', express.static(__dirname + '/node_modules/jquery/dist/'));

//require('./routes/cardFilter')(app)

app.get('/cards/cardSearch', function(req, res){
        
        // https://api.mtgdb.info/content/hi_res_card_images/{multiverseid}.jpg
        // env(html, function (errors, window){
        // 	var $ = require('jquery')(window)
	       //  $.get("data/data.json", function(data) {
	       //      console.log("Random Card:", data);
	       //  });

        // })

		http.get("http://api.mtgdb.info/cards/random", function(res){
			res.on('data', function(data){
				console.log('BODY: ' + data)
			})
		})


        res.render('cards/cardSearch.jade', {
        })
    })


app.set('port', (process.env.PORT || 3000))

var server = app.listen(app.get('port'), function() {

    var host = server.address().address
    var port = server.address().port

    console.log('HERE http://%s:%s', host, port)
})
