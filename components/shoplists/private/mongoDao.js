const mongoose = require('mongoose');
const require('./model');
const BaseDao = require('./../../core/BaseDao');
const connect = require('./../../core/DbConnection');
const Utility = require('./../../../services/utility');



class UsersDao extends BaseDao {
  constructor() {
      super(connect.model('users'));
  }

  module.exports = new ShplistsDao();
