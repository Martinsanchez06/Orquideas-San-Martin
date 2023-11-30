module.exports = (sequelize, DataTypes) => {
    const Tamanios = sequelize.define('Tamanios', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        tamanio: {
            type: DataTypes.STRING(100),
            allowNull: false
        }
    }, {
        tableName: 'tamanios',
        timestamps: false
    });

    Tamanios.associate = function (models) {
        Tamanios.hasMany(models.Orquideas, {
            as: 'orquideas',
            foreignKey: 'tamanios_id'
        });
    };

    return Tamanios;
};
