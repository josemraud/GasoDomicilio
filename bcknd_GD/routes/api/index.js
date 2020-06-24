var express = require('express');
var router = express.Router();

var secRoutes = require('./sec');
var pedidoRoutes = require('./pedido');
var info_ordenRoutes = require('./info_orden');


router.use("/sec",secRoutes);
router.use("/pedido",pedidoRoutes);
router.use("/info_orden",info_ordenRoutes);

module.exports = router;

