const { DataTypes } = require('sequelize');
const sequelize = require('./index');
const Pesan = require('./pesanan');
const Hewan = require('./hewan');

const DataPesanan = sequelize.define('DataPesanan', {
    dataPesananID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    pesanID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Pesan,
            key: 'pesanID'
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
    tableName: 'data_pesanan',
    timestamps: false
});

module.exports = DataPesanan;
