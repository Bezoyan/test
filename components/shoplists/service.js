const ShopListsDao = require('./private/mongoDao');
const Utility = require('./../../services/utility');
const AppConstants = require('./../../settings/constants');

class ShopListsService {

  getShopLists(query) {
    query = query || {};
    return new Promise ((resolve, reject) => {
      ShopListsDao.getData(query)
      .skip(AppConstants.offset)
      .limit(AppConstants.limit)
      .then (data => {
        resolve(data);
      }).catch(err => {
        reject(Utility.GenerateErrorMessage(
          Utility.ErrorTypes.NO_SHOP_LIST));
      });
    });
  }

  insertShopLists(ShopList) {
    let list_name = req.body.list_name;
    if (list_name.length < AppConstants.LIST_NAME_MIN_LENGTH || list_name.length > AppConstants.LIST_NAME_MAX_LENGTH) {
      return res.send(Utility.GenerateErrorMessage(Utility.ErrorTypes.INVALID_LIST_NAME_LENGTH));
  }
   return new Promise ((resolve, reject) => {
     return ShopListsDao.insertData(ShopList)
     .then(data => {
       return resolve(data)
     }).catch (err => {
       reject(Utility.GenerateErrorMessage(
       Utility.ErrorTypes.ERROR_CREATION_SHOPLIST));
     });
   });
}


//  updateShoplists()
}

module.exports = new ShopListsService();
