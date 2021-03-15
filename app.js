const http = require('http');
const cors = require('cors');
const express = require('express');
const router = require('./routes');

const app = express();
const server = http.createServer(app);

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use('/api', router);

// const webpush = require('web-push');
// const publicKey = "BG2G2MPNLDaFe2T7kPJemfNbY6fvBJ7OvVFMWjM_u3BroOEzkLYuFQWGURWIP8NLURM5l5IGC7vSZq8oIPihbUI";
// const privateKey = "r1SeFh4pwsDrVQdTNv6aX55iYdwLjrhnGYq3QM8aJ3A";
// const sub = {
//     endpoint: 'https://fcm.googleapis.com/fcm/send/e8wqBnLxlJc:APA91bHgrGrG8a2X91vSpLf2bk2fgN-gAs4CkX1rW-MB6rsq0oohgPQzoHtXVG64FALRzWWoRkMkve_rPm1qbbhMWQoElBQwA0bLOwI6OVzUqVP0TzN_cCoK45qI4MaecrFh0GO2n0St',
//     expirationTime: null,
//     keys: {
//         p256dh: 'BP_ccmeErj8n2rn9ha12KsypnGpBk7fOP0KXPyEWnaxoypQQKYC9qc2_HEuzizprNeeVofroIjuvfzoQXplLQyg',
//         auth: 'vLbzWLo3y3oUSdfspPYopw'
//     }
// };

// webpush.setVapidDetails('mailto:marioalzamorabenavides@gmail.com', publicKey, privateKey);

// const payload = {
//     notification: {
//         title: "¡Nuevo Mensaje!",
//         body: "Tienes mensajes sin leer",
//         image:"https://malcoded.com/static/4d42cb688f095e26623990fdbbf88700/ba299/angular-push-notification.png",
//         // "icon": "assets/icons/icon-512x512.png",
//         vibrate: [100, 50, 100],
//         data: { url: '/#/product' },
//         actions: [{
//             action: 'goToProduct',
//             title: 'Ver Mensaje',
//         }]
//     }
// };

// webpush.sendNotification(sub, JSON.stringify(payload));

server.listen(3000, () => {

    console.log('started on port 3000');
  });