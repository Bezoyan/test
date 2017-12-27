const express = require('express');
const ShopListsRouter = express.Router();
const ShopListsService = require('./service')

ShopListsRouter.get('/', Utility.parseQuery, (req, res) => {
    if (!req.query.key) {
        return res.send(Utility.GenerateErrorMessage(
          Utility.ErrorTypes.PERMISSION_DENIED)
        );
    }
    ShopListsService.getShopLists().then(data => {
        return res.send(data);
    });
});

ShopListsRouter.post('/', (req, res) => {
  let shoplist = {
      list_name: data.list_name,
      isActive: data.isActive,
      _id: data._id,
      products: data.products
    };

    ShopListsService.insertShopLists(shoplist)
      .then(data => {
        return res.send(data);
    }).catch(err => {
        return res.send(err);
    });
});

/*ShopListsRouter.put('/:id' (req, res) => {

    if(req.body.password){
        res.send("If you want to change password make a put request '/api/users/password' ");
    }
    let id = req.params.id;
    let user = {};
    if (req.body.fullname) {
        user.fullname = req.body.fullname;
    }
    if (req.body.username) {
        user.username = req.body.username;
    }
    if (isFinite(parseInt(req.body.age))) {
        user.age = parseInt(req.body.age);
    }
    if (req.body.email) {
        user.email = req.body.email;
    }
    UsersService.updateUsers(id, user).then(data => {
         return res.send(data);
     }).catch(err => {
         res.send(err)
     });

});

UsersRouter.delete('/:id', auth._auth('admin'), (req, res) => {
    let id = req.params.id;
    UsersService.deleteUsers(id).then(data => {
        if(!data) {
            return res.send(Utility.generateErrorMessage(
              Utility.ErrorTypes.INVALID_DATA));
        }
        return res.send(data);
    }).catch(err =>{
        res.send(err);
    });
})
*/
module.exports = ShopListsRouter;
