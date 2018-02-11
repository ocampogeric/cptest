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
![import postman collection 1](https://drive.google.com/file/d/1TW0qH48h-T2tIrnssaRWRgD74Zr3DA9e/view)
![import postman collection 2](https://drive.google.com/file/d/1tlFpxE0W-Xt7IJzYX2-ceaL5FC0x_UcI/view)
![import postman collection 3](https://drive.google.com/file/d/1tgWrC7viLEBiF7wawOAjJCaOXWdoVpeF/view)
Import enviroment file from  `postman_files` folder
![import postman collection 4](https://drive.google.com/file/d/17pdhtHJbT44COBo1b_qxfYGYbawjwX7-/view)
![import postman collection 4](https://drive.google.com/file/d/1SVaCfJIVTKKUyI85zp_6GvUpYfEHiZDP/view)
![Select the imported enviroment](https://drive.google.com/file/d/10P4tNo-Kb7MLCSgam1OtmaIiArVqdC5-/view)
When you request `Authenticate` token will be automatically assigned to enviroment TOKEN variable!

Test it! :grin:
 