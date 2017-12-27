const Utility = require('./../../services/utility');

class BaseDao {
  constructor(collection) {
    this.collection = collection;
  }

  getData(query) {
    if (!this.collection) {
        return (Utility.generateErrorMessage(
          Utility.ErrorTypes.UNKNOWN_ERROR) //TODO change error type
        );
    }
    query = query || {};
    return this.collection.find(query);
  }

  insertData(query) {
    if (!query) {
      return (Utility.generateErrorMessage(
        Utility.ErrorTypes.UNKNOWN_ERROR) //TODO change error type
      );
    }
    this.collection.create(query);
  }

  updateData(id, query) {
    if (!query) {
      return (Utility.generateErrorMessage(
        Utility.ErrorTypes.UNKNOWN_ERROR) //TODO change error type
      );
    }
    this.collection.update({_id: id}, {$set: query});
  }

  deleteData(id, query) {
    if (!query) {
      (Utility.generateErrorMessage(
        Utility.ErrorTypes.UNKNOWN_ERROR) //TODO change error type
      );
    }
    this.collection.findOneAndRemove({_id: id}, {$set: query});
  }
}

module.exports = BaseDao;
