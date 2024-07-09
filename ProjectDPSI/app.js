var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var sequelize = require('./models/index'); // Tambahkan ini untuk memuat koneksi database


//Data model
var sequelize = require('./models/index'); // Tambahkan ini untuk memuat koneksi database
var DataJual = require('./models/dataJual');
var Jual = require('./models/jual');
var Penjual = require('./models/penjual');
var Pembeli = require('./models/pembeli');
var Hewan = require('./models/hewan');
var Pesanan = require('./models/pesanan');
var Beli = require('./models/beli');
var DataPesanan = require('./models/dataPesanan');


//relasi antar tabel
Jual.belongsTo(Penjual, { foreignKey: 'penjualID' });
DataJual.belongsTo(Jual, { foreignKey: 'jualID' });
DataJual.belongsTo(Hewan, { foreignKey: 'hewanID' });
Pesanan.belongsTo(Pembeli, { foreignKey: 'pembeliID' });
Beli.belongsTo(Pesanan, { foreignKey: 'pesanID' });
Beli.belongsTo(Hewan, { foreignKey: 'hewanID' });
DataPesanan.belongsTo(Pesanan, { foreignKey: 'pesanID' });
DataPesanan.belongsTo(Hewan, { foreignKey: 'hewanID' });





var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
