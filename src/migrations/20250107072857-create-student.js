"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Students", {
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      mobileno: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      admissionno: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      classs: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      dateofadm: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      discount: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      dob: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      formid: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      isorphan: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      osc: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      castt: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      gender: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      mark: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      prevschl: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      religion: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      bloodgrp: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      boardrollno: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      family: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      totalsiblings: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      addnote: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      disease: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      address: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      fathermobile: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      fathername: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      fatheredu: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      fatherincome: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      fathernationalid: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      fatherocc: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      fatherprofession: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      mothername: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      mothernationalid: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      motherocc: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      motherprofession: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      mothermobile: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      motheredu: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      motherincome: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      image: {
        allowNull: true,
        type: Sequelize.STRING,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Students");
  },
};
