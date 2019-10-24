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

Does not log user in, just registers

