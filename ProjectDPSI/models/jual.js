const { DataTypes } = require('sequelize');
const sequelize = require('./index');
const Penjual = require('./penjual');

const Jual = sequelize.define('Jual', {
    jualID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    penjualID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Penjual,
            key: 'penjualID'
        }
    },
    tanggal_jual: {
        type: DataTypes.DATE,
        allowNull: false
    },
    total_harga: {
        type: DataTypes.DECIMAL,
        allowNull: false
    }
}, {
    tableName: 'jual',
    timestamps: false
});

module.exports = Jual;
