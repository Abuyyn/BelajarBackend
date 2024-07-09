const { DataTypes } = require('sequelize');
const sequelize = require('./index');
const Pembeli = require('./pembeli');

const Pesanan = sequelize.define('Pesanan', {
    pesanID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    pembeliID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Pembeli,
            key: 'pembeliID'
        }
    },
    tanggal_pesan: {
        type: DataTypes.DATE,
        allowNull: false
    },
    total_harga: {
        type: DataTypes.DECIMAL,
        allowNull: false
    }
}, {
    tableName: 'pesan',
    timestamps: false
});

module.exports = Pesan;
