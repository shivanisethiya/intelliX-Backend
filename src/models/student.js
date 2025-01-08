"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    static associate(models) {
    }
  }
  Student.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        
      },
      mobileno: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue:""
      },
      admissionno: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      classs: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      dateofadm: {
        type: DataTypes.DATE,
        allowNull: false,
         defaultValue:null
      },
      discount: {
        type: DataTypes.INTEGER,
        allowNull: false,
      
      },
      dob: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: new Date(),
      },
      formid: {
        type: DataTypes.STRING,

        allowNull: true,
         defaultValue:""
      },
      isorphan: {
        type: DataTypes.STRING,

        allowNull: true,
         defaultValue:""
      },
      osc: {
        type: DataTypes.STRING,
        allowNull: true,
         defaultValue:""
      },
      castt: {
        type: DataTypes.STRING,

        allowNull: true,
         defaultValue:""
      },
      gender: {
        type: DataTypes.STRING,

        allowNull: true,
         defaultValue:""
      },
      mark: {
        type: DataTypes.STRING,
        allowNull: true,
         defaultValue:""
      },
      prevschl: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue:""
      },
      religion: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue:""
      },
      bloodgrp: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue:""
      },
      boardrollno: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue:""
      },
      family: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue:""
      },
      totalsiblings: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue:0,
      },
      addnote: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue:""
      },
      disease: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue:""
      },
      address: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue:""
      },
      fathermobile: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue:""
      },
      fathername: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue:""
      },
      fatheredu: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue:""
      },
      fatherincome: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue:0
      },
      fathernationalid: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue:""
      },
      fatherocc: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue:""
      },
      fatherprofession: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue:""
      },
      mothername: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue:""
      },
      mothernationalid: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue:""
      },
      motherocc: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue:""
      },
      motherprofession: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue:""
      },
      mothermobile: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue:""
      },
      motheredu: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue:""
      },
      motherincome: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue:0,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue:""
      },
    },
    {
      sequelize,
      modelName: "Student",
      tableName: "Students",
      timestamps: false,
    }
  );
  return Student;
};
