module.exports = (sequelize, DataTypes) => {
    const Orquideas = sequelize.define('Orquideas', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nombre: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        precio: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        descripcion: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        disponibilidad: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        flor: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        imagen1: {
            type: DataTypes.STRING(500),
            allowNull: false
        },
        imagen2: {
            type: DataTypes.STRING(500),
            allowNull: false
        },
        imagen3: {
            type: DataTypes.STRING(500),
            allowNull: false
        },
        categorias_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        climas_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        secciondehome_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        tamanios_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        tableName: 'orquideas',
        timestamps: false,
        underscored: true
    });

    Orquideas.associate = function (models) {
        Orquideas.belongsTo(models.Categorias, {
            as: 'categoria',
            foreignKey: 'categorias_id'
        });
        Orquideas.belongsTo(models.Climas, {
            as: 'clima',
            foreignKey: 'climas_id'
        });
        Orquideas.belongsTo(models.SeccionDeHome, {
            as: 'secciondehome',
            foreignKey: 'secciondehome_id'
        });
        Orquideas.belongsTo(models.Tamanios, {
            as: 'tamanio',
            foreignKey: 'tamanios_id'
        });
    };

    return Orquideas;
};
