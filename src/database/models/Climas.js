module.exports = (sequelize, DataTypes) => {
    let alias = 'climas'
    let cols = {
        id : {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull : false
        },
        tipoDeClima : {
            type : DataTypes.STRING,
            allowNull: false 
        }
    }
    let config = {
        tablename: 'climas',
        timestamps: false,
        underscore: true
    }

    const Climas = sequelize.define(alias, cols, config)

    Climas.associate = function(models){
        Climas.hasMany(models.Orquideas, {
            as: 'orquideas', 
            foreignKey: 'clima_id'
        })
    }


    return Climas 
}