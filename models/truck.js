module.exports = function (sequelize, DataTypes) {
    // create our Truck table
    var Truck = sequelize.define("Truck", {
        truckName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        desc: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        licensePlate: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        pictureURL: {
            type: DataTypes.STRING,
            allowNull: true
            // validate: {
            //     isUrl: true,
            //     len: [1]
            // }
        },
        menuURL: {
            type: DataTypes.STRING,
            allowNull: true
            // validate: {
            //     isUrl: true,
            //     len: [1]
            // }
        }
    });

    // associates Truck with User (foreign key)
    Truck.associate = function (models) {
        Truck.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
        Truck.hasOne(models.Location, {
            foreignKey: 'TruckId'
        });
    };

    return Truck;
};