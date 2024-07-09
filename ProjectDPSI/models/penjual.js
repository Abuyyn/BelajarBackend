const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Penjual = sequelize.define('Penjual', {
    penjualID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nama: {
        type: DataTypes.STRING,
        allowNull: false
    },
    alamat: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telepon: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'penjual',
    timestamps: false
});

module.exports = Penjual;
