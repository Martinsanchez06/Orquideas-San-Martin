module.expotrts = (sequelize, DataTypes) => {
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
        categoria : {
            type: DataTypes.STRING,
            allowNull: false
        },
        tamaño : {
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
        }
    }
    let config ={
        tableName: 'orquideas',
        timestamps: false,
        underscore: true
    }
    const Orquideas= sequelize.define(alias, cols, config)

    return Orquideas
}

