# How to use

Clone the repo with

`git clone https://github.com/ocampogeric/cptest.git`

Intall dependencies

```bash
  cd cptest
  npm install
```
Change db URL to your mongo address in `db/index.js` file
Insert a default user to login (No gui admin exists) 
```bash
  // start mongo (you must have mongodb installed previously)
  mongo
  > use cptest
  // insert a default user to login (default password is 'cptest_123')
  > db.users.insertOne({ name:"<user>", username: "<usernameToLogin>", password: "$2a$10$7jPpj/w0OvTXR.buk7ObM.iUXj5RUn1i9UpZM8otWP1JOsX1ZSyZe"})
```
Now start the app with `npm start` and go to `http://localhost:3000`

## How to test API REST with postman

Download and install postman from [website](https://www.getpostman.com/)

Import collection file from `postman_files` folder

  ![postman1](https://github.com/ocampogeric/cptest/blob/master/postman_files/postman-1.png)
  ![alt=postman 2](https://github.com/ocampogeric/cptest/blob/master/postman_files/postman-2.png)
  ![alt=postman 3](https://github.com/ocampogeric/cptest/blob/master/postman_files/postman-3.png)

Import enviroment file from  `postman_files` folder

  ![alt=postman 4](https://github.com/ocampogeric/cptest/blob/master/postman_files/postman-4.png)
  ![alt=postman 5](https://github.com/ocampogeric/cptest/blob/master/postman_files/postman-5.png)

Browse envirement file and import it. Then select the imported enviroment

  ![alt=postman 6](https://github.com/ocampogeric/cptest/blob/master/postman_files/postman-6.png)

When you request `Authenticate` token will be automatically assigned to enviroment TOKEN variable!

Test it! :grin:
 
