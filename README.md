# Party Planner API

**The Party Planner App is a way to create party. This API provides an auth router. The auth router contains an object that contains a username, password which is hashed and includes a JWT.**

## Getting Started

These instructions will get you a copy of the project going on your local machine for development and testing. You will need to clone from the Heroku branch NOT master.

### Installing

A step by step series of examples that tell you how to get a development env running

Install the dependancies that comes with the repo

```
npm i
```

Start the development local server, this git will use port 8000

```
npm start server
```

## Endpoints

### Auth

**POST addUser ‘https://party-planner-lambda.herokuapp.com/api/auth/register’**

Registers the new user to the 'users' DB

```  
SAMPLE BODY: {
	"username": "newUser",
	"password": "pass"
	}
```

returns: newly registered user object
```
SAMPLE RETURN: {
    "id": 45,
    "username": "newUser",
    "password": "$2a$10$m.iLzXlV90haQuc4.GHAM.AQ2ikjKPEDVeqbNIUex1iv48TZIzcE6"
  }
```

Does not log user in, just registers.

**POST loginUser ‘https://party-planner-lambda.herokuapp.com/api/auth/login’**

Logs in user to 'users' DB
```
SAMPLE BODY: {
	"username": "newUser",
	"password": "pass"
	}
```
returns: logged in user information and token
```
SAMPLE RETURN: {
  "id": 45,
  "message": "Welcome newUser!",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo0NSwidXNlcm5hbWUiOiJuZXdVc2VyIiwiaWF0IjoxNTcxOTM2NDUwLCJleHAiOjE1NzE5Nzk2NTB9.OT1UJ5TMdss9-d9KShaSdkjPoQNsiCYNrkU_P8i4rUo"
}
```

