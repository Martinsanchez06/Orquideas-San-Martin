module.exports= (sequelize, DataTypes) => {
    let alias = 'Orquideas'
    let cols = {
        id : {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull : false
        },
        nombre : {
            type: DataTypes.STRING,
            allowNull: false
        }, 
        clima_id : {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        precio : {
            type: DataTypes.STRING,
            allowNull: false
        },
        descripcion : {
            type: DataTypes.STRING,
            allowNull: false
        },
        categoria_id : {
            type: DataTypes.STRING,
            allowNull: false
        },
        tamanio_id : {
            type: DataTypes.STRING,
            allowNull: false
        },
        disponibilidad : {
            type: DataTypes.STRING,
            allowNull: false
        },
        flor : {
            type: DataTypes.STRING,
            allowNull: false
        },
        imagen1: {
            type: DataTypes.STRING,
            notNull: true
        },
        imagen2: {
            type: DataTypes.STRING,
            notNull: true
        },
        imagen3: {
            type: DataTypes.STRING,
            notNull: true
        },
    }
    let config ={
        tableName: 'orquideas',
        timestamps: false,
        underscore: true
    }
    const Orquideas= sequelize.define(alias, cols, config)

    Orquideas.associate = function(models){
        Orquideas.belongsTo(models.climas, {
            as: 'climas', 
            foreignKey: 'clima_id'
        }),
        Orquideas.belongsTo(models.tamanios, {
            as: 'tamanios',
            foreignKey: 'tamanio_id'
        }),
        Orquideas.belongsTo(models.categorias, {
            as: 'categorias',
            foreignKey: 'categoria_id'
        }),
        Orquideas.belongsTo(models.secciones, {
            as: 'secciones',
            foreignKey: 'categoria_id'
        })
    }

    return Orquideas
}


