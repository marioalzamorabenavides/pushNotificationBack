const webpush = require('web-push');
const publicKey = "BG2G2MPNLDaFe2T7kPJemfNbY6fvBJ7OvVFMWjM_u3BroOEzkLYuFQWGURWIP8NLURM5l5IGC7vSZq8oIPihbUI";
const privateKey = "r1SeFh4pwsDrVQdTNv6aX55iYdwLjrhnGYq3QM8aJ3A";
const arrSubscription = [];
const arrProducts = [
    {
        imgUrl: 'https://cloudfront-us-east-1.images.arcpublishing.com/semana/KTLYNTY5INH2DL4OMJREV2SXRM.jpg',
        categoria: 'Cama UCI',
        cantidad: 3,
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quibusdam aperiam maxime cupiditate ab modi odit vero repellendus doloremque quisquam, quia nisi accusantium reprehenderit facilis. Et ipsa asperiores repellendus sint.',
        registro: '15/03/2021 02:38 am',
        numero: '51924810571',
        distrito: 'Los olivos'
    },
    {
        imgUrl: 'https://www.infradehonduras.com.hn/wp-content/uploads/2020/02/CILINDRO-DE-OXIGENO-DE-30-PC-3AL-ME.jpg',
        categoria: 'Galón de Oxígeno',
        cantidad: 3,
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quibusdam aperiam maxime cupiditate ab modi odit vero repellendus doloremque quisquam, quia nisi accusantium reprehenderit facilis. Et ipsa asperiores repellendus sint.',
        registro: '15/03/2021 02:38 am',
        numero: '51924810571',
        distrito: 'Los olivos'
    },
    {
        imgUrl: 'https://www.infradehonduras.com.hn/wp-content/uploads/2020/02/CILINDRO-DE-OXIGENO-DE-30-PC-3AL-ME.jpg',
        categoria: 'Galón de Oxígeno',
        cantidad: 3,
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quibusdam aperiam maxime cupiditate ab modi odit vero repellendus doloremque quisquam, quia nisi accusantium reprehenderit facilis. Et ipsa asperiores repellendus sint.',
        registro: '15/03/2021 02:38 am',
        numero: '51924810571',
        distrito: 'Los olivos'
    },
    {
        imgUrl: 'https://tec.mx/sites/default/files/inline-images/respirador-mecanico.jpg',
        categoria: 'Respirador',
        cantidad: 3,
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quibusdam aperiam maxime cupiditate ab modi odit vero repellendus doloremque quisquam, quia nisi accusantium reprehenderit facilis. Et ipsa asperiores repellendus sint.',
        registro: '15/03/2021 02:38 am',
        numero: '51924810571',
        distrito: 'Los olivos'
    },
    {
        imgUrl: 'https://tec.mx/sites/default/files/inline-images/respirador-mecanico.jpg',
        categoria: 'Respirador',
        cantidad: 3,
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quibusdam aperiam maxime cupiditate ab modi odit vero repellendus doloremque quisquam, quia nisi accusantium reprehenderit facilis. Et ipsa asperiores repellendus sint.',
        registro: '15/03/2021 02:38 am',
        numero: '51924810571',
        distrito: 'Los olivos'
    },
    {
        imgUrl: 'https://cloudfront-us-east-1.images.arcpublishing.com/semana/KTLYNTY5INH2DL4OMJREV2SXRM.jpg',
        categoria: 'Cama UCI',
        cantidad: 3,
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quibusdam aperiam maxime cupiditate ab modi odit vero repellendus doloremque quisquam, quia nisi accusantium reprehenderit facilis. Et ipsa asperiores repellendus sint.',
        registro: '15/03/2021 02:38 am',
        numero: '51924810571',
        distrito: 'Los olivos'
    }
];

webpush.setVapidDetails('mailto:marioalzamorabenavides@gmail.com', publicKey, privateKey);

const loadResource = async (req, res, next) => {

    res.status(200).json(arrProducts);
}

const saveResource = async (req, res, next) => {

    let register = req.body;

    register.registro = new Date();

    arrProducts.unshift(register);

    const payload = {
        notification: {
            title: "¡Nuevo Mensaje!",
            body: "Tienes mensajes sin leer",
            image: register.imgUrl,
            // "icon": "assets/icons/icon-512x512.png",
            vibrate: [100, 50, 100],
            data: { url: '/#/resources' },
            actions: [{
                action: 'goToProduct',
                title: 'Ver recurso',
            }]
        }
    };

    arrSubscription.map(r => {
        webpush.sendNotification(
            JSON.parse(r), JSON.stringify(payload)
        );
    });

    res.status(200).json({ msg: 'Se realizaron tus cambios correctamente.' });
}

const pushRegister = async (req, res, next) => {

    arrSubscription.unshift(JSON.stringify(req.body));

    res.status(200).json({ msg: 'Se' });
}

const pushUnRegister = async (req, res, next) => {

    delete arrSubscription[JSON.stringify(req.body)];

    res.status(200).json({ msg: 'Se' });
}

module.exports = {
    loadResource,
    saveResource,
    pushRegister,
    pushUnRegister
}