module.exports = (sequelize, DataTypes) => {
    const SeccionDeHome = sequelize.define('SeccionDeHome', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        seccion: {
            type: DataTypes.STRING(100),
            allowNull: false
        }
    }, {
        tableName: 'secciondehome',
        timestamps: false
    });

    SeccionDeHome.associate = function (models) {
        SeccionDeHome.hasMany(models.Orquideas, {
            as: 'orquideas',
            foreignKey: 'secciondehome_id'
        });
    };

    return SeccionDeHome;
};
