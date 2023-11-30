module.exports = (sequelize, DataTypes) => {
    const Categorias = sequelize.define('Categorias', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        categoria: {
            type: DataTypes.STRING(100),
            allowNull: false
        }
    }, {
        tableName: 'categorias',
        timestamps: false
    });

    Categorias.associate = function (models) {
        Categorias.hasMany(models.Orquideas, {
            as: 'orquideas',
            foreignKey: 'categorias_id'
        });
    };

    return Categorias;
};
