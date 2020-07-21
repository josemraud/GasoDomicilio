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
//var {pub} = require('./pedido');
var pedidosRoutes = require('./pedido');
var infoRoutes = require('./info_orden');

//publicas no requieres estar autenticados para ser consumidos
router.use("/sec", secRoutes);
router.use("/pedido", pedidosRoutes );
const jwtAuthMiddleware = passport.authenticate('jwt', {session:false});

//Privadas

router.use("/pedido", jwtAuthMiddleware ,pedidosRoutes);

module.exports = router;
