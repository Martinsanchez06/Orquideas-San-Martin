module.exports = (sequelize, DataTypes) => {
    let alias = 'usuarios'
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        documento: {
            type: DataTypes.STRING,
            allowNull: false
        },
        tipoDeDocumento:{
            type: DataTypes.STRING,
            allowNull: false
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        contrasenia: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
        },
        contraseniaConf: {
            type: DataTypes.STRING,
            allowNull: false
        },
        pais: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ciudad: {
            type: DataTypes.STRING,
            allowNull: false
        },
        direccion: {
            type: DataTypes.STRING,
            allowNull: false
        },
    }
    let config = {
        tablename: 'usuarios',
        timestamps: false,
        underscore: true
    }

    const usuarios = sequelize.define(alias, cols, config)

    usuarios.associate = function (models) {
        usuarios.hasMany(models.Orquideas, {
            as: 'orquideas',
            foreignKey: 'usuarios_id'
        })
    }


    return usuarios
}