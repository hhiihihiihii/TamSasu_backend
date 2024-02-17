const Sequelize = require("sequelize");

class User extends Sequelize.Model {
  static initiate(sequelize) {
    User.init(
      {
        Id: {
          type: Sequelize.STRING(50),
          primaryKey: true,
          autoIncrement: true
        },
        name: {
          type: Sequelize.STRING(20),
          allowNull: false
        },
        time: {
          type: Sequelize.INTEGER,
          allowNull: false
        }
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: "User",
        tableName: "User",
        paranoid: false,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }

  static associate(db) {}
}

module.exports = User;