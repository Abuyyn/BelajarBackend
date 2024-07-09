const { DataTypes } = require('sequelize');
const sequelize = require('./index');
const Jual = require('./jual');
const Hewan = require('./hewan');

const DataJual = sequelize.define('DataJual', {
    dataJualID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    jualID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Jual,
            key: 'jualID'
        }
    },
    hewanID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Hewan,
            key: 'hewanID'
        }
    },
    jumlah: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    harga_satuan: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    total_harga: {
        type: DataTypes.DECIMAL,
        allowNull: false
    }
}, {
    tableName: 'data_jual',
    timestamps: false
});

module.exports = DataJual;
