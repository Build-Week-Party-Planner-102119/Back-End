# Party Planner API

**The [Party Planner App](https://lambdapartyplanner.now.sh/) is a way to create party. This API provides an auth router. The auth router contains an object that has a username, password, which is hashed and includes a JWT. Check out our marketing page [here](https://build-week-party-planner-102119.github.io/UI-1/).**

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

returns: newly registered user object with a hashed password.
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

## Deployment

This API is optimized to be hosted with  [Heroku](https://devcenter.heroku.com/). 

## Built With

* [Knex](http://knexjs.org/) - SQL query builder
* [Node.js](https://nodejs.org/en/)
* [JWT](https://jwt.io/)

## Planning Dcoumentation

To see the thought process of this amazing team, please check out our [docs](https://docs.google.com/document/d/1kHqoWAwLW5u8F2TIxOgkbOIElOj_qqlOBK8IBodKSPM/edit?usp=sharing).


