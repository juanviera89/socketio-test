let app = require('express')();
let http = require('http').Server(app);
let io = require('socket.io')(http);
 
var casinos = [
    {
      id_ : 'abc',
      name: 'Titanium la portada',
      lastUpdate:  Date.now(),
      creationDate: Date.now(),
      address: 'Isidora Goyenechea 2800',
      schedule: [800,2100],
      description: '',
      img: null,
      position: {
        lat: -33.4146836,
        lng : -70.6016335
      },
      menu: {
        promos:{
          name: 'Ofertas del día',
          lastUpdate:  Date.now(),
          creationDate: Date.now(),
          img:'./assets/svg/descuento1.svg',
          img2:'./assets/svg/descuento1.svg',
          dishes: [
            {
              name: 'Cafe y media luna',
              description: 'Café expresso o latte con una media luna con cubierta de caramelo',
              id: '45tdf',
              price: 1500,
              options: ['Expresso','Latte'],
              multiple: false,
              enabled: true,
              schedule: [800,2100],
              lastUpdate:  Date.now(),
              creationDate: Date.now(),
              img: null
            },
            {
              name: 'Dona con té o café',
              description: 'Té o café y una dona',
              id: '67sd',
              price: 1800,
              options: ['Café','Té'],
              multiple: false,
              enabled: true,
              schedule: [800,2100],
              lastUpdate:  Date.now(),
              creationDate: Date.now(),
              img: null
            },
            {
              name: 'Brownie con jugo',
              description: 'Brownie mas jugo del sabor de su preferencia',
              id: '123fg',
              price: 1500,
              options: ['Naranja','Limon','Frutilla','Mora','Maracuya'],
              multiple: false,
              enabled: true,
              schedule: [800,1400],
              lastUpdate:  Date.now(),
              creationDate: Date.now(),
              img: null
            }
          ]
        },
        tortasYDulces:{
          name: 'Tortas y dulces',
          lastUpdate:  Date.now(),
          creationDate: Date.now(),
          img:'./assets/svg/dulce1.svg',
          img1:'./assets/svg/dulce2.svg',
          img2:'./assets/svg/dulce3.svg',
          dishes: [
            {
              name: 'Media luna',
              description: 'Media luna con cubierta de caramelo',
              id: '876dc',
              price: 1000,
              options: ['Caramelo','Sin caramelo'],
              multiple: false,
              enabled: true,
              schedule: [800,2100],
              lastUpdate:  Date.now(),
              creationDate: Date.now(),
              img: null
            },
            {
              name: 'Dona',
              description: 'Dona',
              id: '2345vh',
              price: 1200,
              options: ['Chocolate','Frutilla','Manjar'],
              multiple: true,
              enabled: true,
              schedule: [800,2100],
              lastUpdate:  Date.now(),
              creationDate: Date.now(),
              img: null
            },
            {
              name: 'Brownie',
              description: 'Brownie',
              id: 'dfs67',
              price: 1500,
              options: [],
              multiple: false,
              enabled: true,
              schedule: [800,2100],
              lastUpdate:  Date.now(),
              creationDate: Date.now(),
              img: null
            }
          ]
        },
        sandwichYHambuerguesas:{
          name: 'Sandwich y hambuerguesas',
          lastUpdate:  Date.now(),
          creationDate: Date.now(),
          img:'./assets/svg/sandwich1.svg',
          img1:'./assets/svg/sandwich2.svg',
          img2:'./assets/svg/sandwich3.svg',
          dishes: [
          ]
        },
        te:{
          name: 'Té',
          lastUpdate:  Date.now(),
          creationDate: Date.now(),
          img:'./assets/svg/te1.svg',
          img1:'./assets/svg/te2.svg',
          img2:'./assets/svg/te3.svg',
          dishes: [
          ]
        },
        cafe:{
          name: 'Café',
          lastUpdate:  Date.now(),
          creationDate: Date.now(),
          img:'./assets/svg/cafe1.svg',
          img1:'./assets/svg/cafe2.svg',
          img2:'./assets/svg/cafe3.svg',
          dishes: [
          ]
        },
        jugo:{
          name: 'Jugo',
          lastUpdate:  Date.now(),
          creationDate: Date.now(),
          img:'./assets/svg/jugo1.svg',
          img1:'./assets/svg/jugo2.svg',
          img2:'./assets/svg/jugo3.svg',
          dishes: [
          ]
        },
        Bebida:{
          name: 'Bebida',
          lastUpdate:  Date.now(),
          creationDate: Date.now(),
          img:'./assets/svg/bebida1.svg',
          img1:'./assets/svg/bebida2.svg',
          img2:'./assets/svg/bebida3.svg',
          dishes: [
          ]
        }
      },
      orders:[]
    },
    {
      id_ : 'def',
      name: 'Drugstore Boulevard',
      lastUpdate:  Date.now(),
      creationDate: Date.now(),
      address: 'Las Urbinas 2124',
      schedule: [800,2000],
      description: '',
      img: null,
      position: {
        lat: -33.4143936,
        lng : -70.6045335
      },
      menu: {
        promos:{
          name: 'Ofertas del día',
          lastUpdate:  Date.now(),
          creationDate: Date.now(),
          img:'./assets/svg/descuento1.svg',
          img2:'./assets/svg/descuento1.svg',
          dishes: [
            {
              name: 'Cafe y media luna',
              description: 'Café expresso o latte con una media luna con cubierta de caramelo',
              id: '34thfg',
              price: 1500,
              options: ['Expresso','Latte'],
              multiple: false,
              enabled: true,
              schedule: [800,2100],
              lastUpdate:  Date.now(),
              creationDate: Date.now(),
              img: null
            },
            {
              name: 'Dona con té o café',
              description: 'Té o café y una dona',
              id: '467hgj8',
              price: 1800,
              options: ['Café','Té'],
              multiple: false,
              enabled: true,
              schedule: [800,2100],
              lastUpdate:  Date.now(),
              creationDate: Date.now(),
              img: null
            },
            {
              name: 'Brownie con jugo',
              description: 'Brownie mas jugo del sabor de su preferencia',
              id: '1f567',
              price: 1500,
              options: ['Naranja','Limon','Frutilla','Mora','Maracuya'],
              multiple: false,
              enabled: true,
              schedule: [800,1400],
              lastUpdate:  Date.now(),
              creationDate: Date.now(),
              img: null
            }
          ]
        },
        tortasYDulces:{
          name: 'Tortas y dulces',
          lastUpdate:  Date.now(),
          creationDate: Date.now(),
          img:'./assets/svg/dulce1.svg',
          img1:'./assets/svg/dulce2.svg',
          img2:'./assets/svg/dulce3.svg',
          dishes: [
            {
              name: 'Media luna',
              description: 'Media luna con cubierta de caramelo',
              id: '123gvfg56',
              price: 1000,
              options: ['Caramelo','Sin caramelo'],
              multiple: false,
              enabled: true,
              schedule: [800,2100],
              lastUpdate:  Date.now(),
              creationDate: Date.now(),
              img: null
            },
            {
              name: 'Dona',
              description: 'Dona',
              id: '213g5',
              price: 1200,
              options: ['Chocolate','Frutilla','Manjar'],
              multiple: true,
              enabled: true,
              schedule: [800,2100],
              lastUpdate:  Date.now(),
              creationDate: Date.now(),
              img: null
            },
            {
              name: 'Brownie',
              description: 'Brownie',
              id: 'dsf4356g',
              price: 1500,
              options: [],
              multiple: false,
              enabled: true,
              schedule: [800,2100],
              lastUpdate:  Date.now(),
              creationDate: Date.now(),
              img: null
            }
          ]
        },
        sandwichYHambuerguesas:{
          name: 'Sandwich y hambuerguesas',
          lastUpdate:  Date.now(),
          creationDate: Date.now(),
          img:'./assets/svg/sandwich1.svg',
          img1:'./assets/svg/sandwich2.svg',
          img2:'./assets/svg/sandwich3.svg',
          dishes: [
          ]
        },
        te:{
          name: 'Té',
          lastUpdate:  Date.now(),
          creationDate: Date.now(),
          img:'./assets/svg/te1.svg',
          img1:'./assets/svg/te2.svg',
          img2:'./assets/svg/te3.svg',
          dishes: [
          ]
        },
        cafe:{
          name: 'Café',
          lastUpdate:  Date.now(),
          creationDate: Date.now(),
          img:'./assets/svg/cafe1.svg',
          img1:'./assets/svg/cafe2.svg',
          img2:'./assets/svg/cafe3.svg',
          dishes: [
          ]
        },
        jugo:{
          name: 'Jugo',
          lastUpdate:  Date.now(),
          creationDate: Date.now(),
          img:'./assets/svg/jugo1.svg',
          img1:'./assets/svg/jugo2.svg',
          img2:'./assets/svg/jugo3.svg',
          dishes: [
          ]
        },
        Bebida:{
          name: 'Bebida',
          lastUpdate:  Date.now(),
          creationDate: Date.now(),
          img:'./assets/svg/bebida1.svg',
          img1:'./assets/svg/bebida2.svg',
          img2:'./assets/svg/bebida3.svg',
          dishes: [
          ]
        }
      },
      orders:[]
    }
]


var socketsObj = {}
var socketsId = []

for (const casino of casinos) {
    let nsp = casino['id_'];
    socketsId.push(nsp)
    socketsObj['id_'] = io.of(nsp).on('connection', (socket) => {
  
        socket.on('disconnect', function(){
          io.emit('users-changed', {user: socket.nickname, event: 'left'});   
        });
       
        socket.on('set-nickname', (nickname) => {
          socket.nickname = nickname;
          io.emit('users-changed', {user: nickname, event: 'joined'});    
        });
        
        socket.on('add-message', (message) => {
            console.log('new msg');
            console.log(message);
            
            
          io.emit('message', {text: message.text, from: socket.nickname, created: new Date()});    
        });
    });
    console.log('#############################################################')
    console.log('#############################################################')
    console.log('#############################################################')
    console.log('nuevo socket creado para nsp: ' + nsp )
    
    console.log(socketsObj);
    console.log('***************************************************************')
    console.log('***************************************************************')
    
}


 
var port = process.env.PORT || 3001;
 
http.listen(port, function(){
   console.log('listening in http://localhost:' + port);
});



