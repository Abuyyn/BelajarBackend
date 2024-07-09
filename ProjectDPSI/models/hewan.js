const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Hewan = sequelize.define('Hewan', {
    hewanID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    jenis_hewan: {
        type: DataTypes.ENUM('Sapi', 'Kambing'),
        allowNull: false
    },
    umur: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    berat: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    harga: {
        type: DataTypes.DECIMAL,
        allowNull: false
    }
}, {
    tableName: 'hewan',
    timestamps: false
});

module.exports = Hewan;
