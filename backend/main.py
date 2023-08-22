import os 
from flask import Flask
#from application import config
#from application.config import LocalDevelopmentConfig 
#from application.database import db
#from flask_bcrypt import Bcrypt
from flask_restful import Resource, Api
from flask_cors import CORS

app = None
api=None

def createApp():
    app=Flask(__name__,template_folder="templates")
    #app.config.from_object(LocalDevelopmentConfig)
    #db.init_app(app)
    app.app_context().push()
    api=Api(app)
    print(app)
    return app,api

app , api =createApp()

CORS(app, resources={r"/api/*": {"origins": "http://192.168.0.102:3000"}})
#app.config['SQLALCHEMY_DATABASE_URI']= 'sqlite:///' + os.path.join(current_dir,'calibrationOfTools.sqlite3')

#bcrypt=Bcrypt(app)

#from application.controllers import *
#from application.managerControllers import * 
#from application.controllers import *
from application.api import *

#working 
#api.add_resource(ManagerProductsResource, '/api/manager/products')
#api.add_resource(ManagerProductResource, '/api/manager/products/<int:product_id>')
#
#
#
#api.add_resource(ManagerCategoriesResource, '/api/manager/categories')
#api.add_resource(ManagerCategoryResource, '/api/manager/categories/<int:category_id>')
#
#
#api.add_resource(ManagerCategoriesProductResource, '/api/manager/categoriesProduct/<int:categoryId>/<int:productId>')


api.add_resource(User_register, '/api/register')
api.add_resource(User_login, '/api/auth')
api.add_resource(Trains, '/api/trains')
api.add_resource(Trains_sorted,'/api/trains/sorted')
#api.add_resource(User_register, '/api/register')


if __name__ == "__main__":
    app.run(host='0.0.0.0', port='5004',debug=True)