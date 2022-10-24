module.exports = (sequelize, DataTypes) => {
    let alias = 'secciones'
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        seccion: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }
    let config = {
        tablename: 'secciondehome',
        timestamps: false,
        underscore: true
    }

    const Seccion = sequelize.define(alias, cols, config)

    Seccion.associate = function (models) {
        Seccion.hasMany(models.Orquideas, {
            as: 'orquideas',
            foreignKey: 'tamanio_id'
        })
    }

    return Seccion
}