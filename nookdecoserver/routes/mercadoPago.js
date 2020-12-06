const mercadopago = require('mercadopago');
const axios       = require("axios"); 
var nodemailer    = require('nodemailer')

const transporter = nodemailer.createTransport({
    // Cambiar los datos según mail que se utilizará para el manejo de emails.
    // Yo utilicé este que es para hacer pruebas, generé ese usuario en https://ethereal.email/ y llegan las pruebas allí.

    host: 'smtp.gmail.com',
    secure: true,
    port: 465,
    auth: {
        // Se setean en archivo .env
        user: process.env.USER,
        pass: process.env.PASSWORD
    }
});

 
const sendEmail = (data) => {
    console.log(data)
  var productos   = "";
  var totalAmount = 0;
  for(var i=0;i<data.items.length;i++){
    if (data.items[i].title) {
      productos += '<p>x'+data.items[i].quantity+' '+data.items[i].title+' ($'+data.items[i].unit_price+' por unidad)</p><br>';
      totalAmount += data.items[i].unit_price;
    }
  }
  productos   += '<p>Envío: $'+(data.shipments.cost > 0 ? data.shipments.cost : 0);
  totalAmount += data.shipments.cost;
  const mailOption = {
      // En from poner mail propio de Nook.
      from: 'marianalacroze61@gmail.com',
      to: data.payer.email,
      subject: 'Gracias por comprar en Nook Deco!',
      text: 'Gracias por comprar en Nook Deco!',
      html: '<h1 style="text-align: center"><b><i>Nook</i></b></h1><br><h3 style="text-align:center;margin-top:-20px"><b>MARIANA LACROZE</b></h3><br><p>Hola '+data.payer.name+',</p><br><p>¡Muchas gracias por tu compra!</p><br><p><b>Detalle de compra:</b></p><br>'+data.items[0].title+'<p><b>Monto Total</b> = $'+totalAmount+'</p><br><p>Pronto nos estaremos comunicando con vos al '+data.payer.phone.number+'.</p><br><p>Saludos,</p><p>Equipo Nook</p>',
  };
  transporter.sendMail(mailOption, (error, info) => {
      if (error) return console.log(error)
      else console.log('Email Sent! ' + info.response);
  });
}

exports.finish =  async function (req, res, next) {
    var p;
    var email;
    var phone;
    // Recordar setear ACCESS_TOKEN en .env con la credencial de Access Token de MercadoPago.
    const token =process.env.ACCESS_TOKEN;
    try {
        p = await axios.get("https://api.mercadopago.com/checkout/preferences/"+req.query.preference_id, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
      email = p.data.payer.email;
      phone = p.data.payer.phone.number;
    } catch (error) {
      console.log(error);
      return next(error)
    }
    if (req.query.status[0] == 'pending') res.redirect('https://nookdeco.com.ar/pagos?email='+email+'&phone='+phone);
    else res.redirect('https://nookdeco.com.ar/pagos?email='+email+'&phone='+phone);
    // Cambiar http://localhost:3000/ por dominio real en producción.
    // Deberías cambiar el path de la url pending de /pagos al path que elijas para RapiPago y PagoFacil.
    sendEmail(p.data);
}; 

exports.create = async function (req, res, next) {
    // Recordar setear ACCESS_TOKEN en .env con la credencial de Access Token de MercadoPago.
    mercadopago.configure({
        access_token:process.env.ACCESS_TOKEN
    });
    try {
        let preference = {
            items: req.body.data.items[0],
            payer: {
                name: req.body.data.name,
                email: req.body.data.email,
                phone: {
                area_code: "11",
                number: parseInt(req.body.data.number)
                },
                address: {
                zip_code: "",
                street_name: "",
                street_number: 0,
                }
            }, 
            // URLs de redirección final, success es por Tarjeta, pending por Rapipago, etc.
            // Cambiar https://excited-excited-stealer.glitch.me/ por dominio real en producción.
            back_urls: {
                success: "https://nookdeco.com.ar/pagos/mercadopago/finish?status=success", 
                pending: "https://nookdeco.com.ar/pagodiferido/mercadopago/finish?status=pending",
                failure: "https://nookdeco.com.ar/pagofallido",
            },
            auto_return: "approved",
            // Se declara método de pago y sus restricciones de pago.
            payment_methods: { 
                excluded_payment_methods: [{id: "mercadopago_cc"},{id: "naranja"},{id: "tarshop"},{id: "cabal"},{id: "cencosud"},{id: "diners"},{id: "argencard"},{id: "bapropagos"},{id: "cargavirtual"},{id: "cordobesa"},{id: "cmr"},{id: "consumer_credits"}],
                excluded_payment_types: [{ id: "atm" }], 
                // Max de cuotas permitidas
                installments: 6
            }, 
            shipments:{
                cost: req.body.data.shipments.cost,
                mode: "not_specified",
            }
        };
        const mp = await mercadopago.preferences.create(preference);
        var initUrl  = mp.body.init_point;
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.send(initUrl);
        return res;
    } catch(e) {
        res.end(e.message || e.toString());
<<<<<<< HEAD
        return next(error)
=======
        return next(e)
>>>>>>> 8778b44246125d36c538255b975d526b436d01e6
    }
};
