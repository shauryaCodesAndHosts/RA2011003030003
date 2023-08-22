from flask_restful import Resource
from flask import request
from flask import jsonify,make_response
import requests

class User_register(Resource):
    def get(self):
        try: 
            data = {
                "companyName": "CacheVerse",
                "ownerName" : "Shaurya Yamdagni",
                "rollNo" : "RA2011003030003",
                "ownerEmail" : "sy0638@srmist.edu.in",
                "accessCode" : "TzEfMS"
            }
            response = requests.post("http://20.244.56.144/train/register",json = data)
            response_data = response.json()

            compant_name = response_data.get("companyName")
            client_id = response_data.get("clientID")
            client_secret = response_data.get("clientSecret")
            
            print(client_id, client_secret)
            with open('output.txt', 'w') as file:
                file.write(client_id+"\n")
                file.write(client_secret+"\n")
        except Exception as e:
            print(e)
            print("wronggggggggg")
            return make_response(jsonify(error=str(e)) , 500)

    def post(self):
        try: 

            data = {
                "companyName": "CacheVerse",
                "ownerName" : "Shaurya Yamdagni",
                "rollNo" : "RA2011003030003",
                "ownerEmail" : "sy0638@srmist.edu.in",
                "accessCode" : "TzEfMS"
            }
            response = requests.post("http://20.244.56.144/train/register",json = data)
            response_data = response.json()

            compant_name = response_data.get("companyName")
            client_id = response_data.get("clientID")
            client_secret = response_data.get("clientSecret")
            
            print(client_id, client_secret)
            with open('secret.txt', 'w') as file:
                file.write(client_id+"\n")
                file.write(client_secret+"\n")
        except Exception as e:
            print(e)
            print("wronggggggggg")
            return make_response(jsonify(error=str(e)) , 500)

class User_login(Resource):
    def get(self):
        try: 
            data = {
                "companyName": "CacheVerse",
                "clientID" : "0c755df1-9147-4514-8107-1321eda0def9",
                "ownerName" : "Shaurya Yamdagni",
                "ownerEmail" : "sy0638@srmist.edu.in",
                "rollNo" : "RA2011003030003",
                "clientSecret" : "sZmZTljMcXjIgZTh"
            }
            response = requests.post("http://20.244.56.144/train/auth",json = data)
            response_data = response.json()

            token_type = response_data.get("token_type")
            access_token = response_data.get("access_token")
            expires_in = response_data.get("expires_in")
            
            print(token_type, access_token, expires_in)
            with open('secret.txt', 'a') as file:
                file.write(token_type+"\n")
                file.write(access_token+"\n")
                file.write(str(expires_in)+"\n")
        except Exception as e:
            print(e)
            print("wronggggggggg")
            return make_response(jsonify(error=str(e)) , 500)




class Trains(Resource):
    def get(self):
        with open('secret.txt', 'r') as file:
            for line_number, line in enumerate(file, start=1):
                if line_number == 3:
                    third_row = line.strip()  # Remove newline characters
                if line_number == 4:
                    fourth_row = line.strip()  # Remove newline characters
                if line_number == 5:
                    fifth_row = line.strip()  # Remove newline characters
                    break
        print(fourth_row)
        # auth_header = { 
        #     'token_type' : third_row,
        #     'access_token' : fourth_row,
        #     'expires_in' : fifth_row 
        # }
        auth_header = {
        "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTI3MTc2ODgsImNvbXBhbnlOYW1lIjoiQ2FjaGVWZXJzZSIsImNsaWVudElEIjoiMGM3NTVkZjEtOTE0Ny00NTE0LTgxMDctMTMyMWVkYTBkZWY5Iiwib3duZXJOYW1lIjoiIiwib3duZXJFbWFpbCI6IiIsInJvbGxObyI6IlJBMjAxMTAwMzAzMDAwMyJ9.PqOL-ByinDca_HeDy81xsrdpgT-xWpq1O7bloVBaJuE",
        "Content-Type": third_row  # Optional, depending on API requirements
        }
        external_api_url =  "http://20.244.56.144/train/trains"
        print(auth_header)
        response = requests.get(external_api_url, headers=auth_header)
        print(response.text)
        for i in response:
            print(response)
        return make_response(response,200)
    
class Trains_sorted(Resource):
    def get (self):
        pass


