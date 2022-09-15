module.exports = (sequelize, DataTypes) => {
    let alias = 'tamanios'
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        tamanio: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }
    let config = {
        tablename: 'tamanio',
        timestamps: false,
        underscore: true
    }

    const Tamanio = sequelize.define(alias, cols, config)

    Tamanio.associate = function (models) {
        Tamanio.hasMany(models.Orquideas, {
            as: 'orquideas',
            foreignKey: 'tamanio_id'
        })
    }


    return Tamanio
}