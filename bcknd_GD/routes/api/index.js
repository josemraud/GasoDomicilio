var express= require('express');
var router = express.Router();
var passport = require('passport');
var passportJWT = require('passport-jwt');

var extractJWT = passportJWT.ExtractJwt;
var strategyJWT = passportJWT.Strategy;

passport.use( 
  new strategyJWT(
    {
        jwtFromRequest: extractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.JWT_SECRET
    },
    (payload, next)=>{
      var user = payload;
      console.log(user);
      return next(null, user);
    }
  )
)

var secRoutes = require('./sec');
var pedidosRoutes = require('./pedido');
var infoRoutes = require('./info_orden');
var {priv, pub} = require('./conductor')

//publicas no requieres estar autenticados para ser consumidos
router.use("/sec", secRoutes);
router.use("/pedido", pedidosRoutes );
router.use("/conductor", pub)
router.use("/info_orden", infoRoutes)
const jwtAuthMiddleware = passport.authenticate('jwt', {session:false});

//Privadas
router.use("/conductor", jwtAuthMiddleware ,priv)

module.exports = router;
