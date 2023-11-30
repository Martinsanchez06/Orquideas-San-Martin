module.exports = (sequelize, DataTypes) => {
    const Climas = sequelize.define('Climas', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        tipoDeClima: {
            type: DataTypes.STRING(100),
            allowNull: false
        }
    }, {
        tableName: 'climas',
        timestamps: false
    });

    Climas.associate = function (models) {
        Climas.hasMany(models.Orquideas, {
            as: 'orquideas',
            foreignKey: 'climas_id'
        });
    };

    return Climas;
};
