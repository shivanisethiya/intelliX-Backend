"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Employee.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      registrationNo: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "",
      },
      role: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "",
      },
      salary: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: null,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "",
      },
      dob: {
        type: DataTypes.DATE,

        allowNull: true,
        defaultValue: null,
      },
      gender: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "",
      },
      bloodgrp: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "",
      },
      password: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "",
      },
      nationalID: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "",
      },
      cast: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "",
      },
      experience: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: null,
      },
      dateofjoining: {
        type: DataTypes.DATE,

        allowNull: true,
        defaultValue: new Date(),
      },
      email: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "",
      },
      mobile: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "",
      },
      education: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "",
      },
      religion: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "",
      },
      father: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "",
      },
      address: {
        type: DataTypes.STRING,

        allowNull: true,
        defaultValue: "",
      },
    },
    {
      sequelize,
      modelName: "Employee",
      tableName: "Employees",
      timestamps: false,
    }
  );
  return Employee;
};
