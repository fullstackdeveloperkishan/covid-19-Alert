const express = require('express');
const app = express();
const http = require('http')
const request = require('request');
const hbs = require('hbs');

//use express application



//set view point of handlebars (hbs)
app.set('view engine', 'hbs')

app.use(express.static(__dirname + '/'));

//API call 
//const (url) ="https://api.covid19api.com/summary";
const url = "https://api.covid19india.org/data.json";
const mapUrl = "https://disease.sh/v3/covid-19/countries";

app.get('/teams',(req,res)=>{
  res.render('teams');
});

app.get('/index',(req,res)=>{
  res.render('index');
});

app.get('/awareness',(req,res)=>{
  res.render('awareness');
});
app.get('/covid',(req,res)=>{
  res.render('covid');
});

//API request
request({url: url}, (error , response) => {
    const coronadata = JSON.parse(response.body)
   //top data total
     const Confirmed = coronadata['statewise'][0].confirmed.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
     const Active =coronadata['statewise'][0].active.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
     const Deaths =coronadata['statewise'][0].deaths.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
     const Recovered =coronadata['statewise'][0].recovered.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
     const LastUpdated = coronadata['statewise'][0].lastupdatedtime.toString()

    //daily increase
     const dailyConfirmed =coronadata['statewise'][0].deltaconfirmed.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
     const dailyRecovered =coronadata['statewise'][0].deltarecovered.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
     const dailyDeaths =coronadata['statewise'][0].deltadeaths.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    
     //list of covid data code
     
     var cdata = coronadata['statewise'];

     for(var i = 0; i < cdata.length; i++) {
       cdata[i].active = cdata[i].active.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
       cdata[i].deaths = cdata[i].deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
       cdata[i].recovered = cdata[i].recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
       cdata[i].confirmed = cdata[i].confirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
     }

    //removing the total data from index[0] and deleting the state unassigned data
      delete cdata['36'];
      cdata.shift()



      //chart
      

  //getting data from server
  app.get('/', (req,res) => {
     res.render('index', {
       totalconfirmed: Confirmed,
       totalactive: Active,
       totaldeaths: Deaths,
       totalrecovered: Recovered,
       lastUpdated: LastUpdated,
      
       //daily increase
      increaseConfirmed: dailyConfirmed,
      increaseRecovered:  dailyRecovered,
      increaseDeaths: dailyDeaths,
      //loopdata
      cdata
    })
  })
})

      
        
  
//loacal host

const port = process.env.PORT || 3008
const hostname = "0.0.0.0"

const server = http.createServer((req, res) => {
	res.statusCode = 200;
  	res.setHeader('Content-Type', 'text/plain');
  	res.end('This is the Admin Side!\n');
});

app.listen(port, hostname,() => {
  console.log(`Server running at http://${hostname}:${port}/`);
})