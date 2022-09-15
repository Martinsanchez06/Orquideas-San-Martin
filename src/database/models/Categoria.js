module.exports = (sequelize, DataTypes) => {
    let alias = 'categorias'
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        categoria: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }
    let config = {
        tablename: 'categoria',
        timestamps: false,
        underscore: true
    }

    const categoria = sequelize.define(alias, cols, config)

    categoria.associate = function (models) {
        categoria.hasMany(models.Orquideas, {
            as: 'orquideas',
            foreignKey: 'categoria_id'
        })
    }


    return categoria
}