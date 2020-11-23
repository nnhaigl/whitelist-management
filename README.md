# Wishlist-management
## How to setup
### Setup by docker
1. Install docker `https://docs.docker.com/desktop/` and follow guide base on OS
2. Run docker compose `docker-compose up`
### Setup by manual
1. install package `npm install`
2. setup env variable
    * DATABASE_PORT: dabase port
    * DATABASE_HOST: database host
    * DATABASE_USERNAME: database username
    * DATABASE_PASSWORD: database password
    * DATABASE_NAME: database name
3. run test `npm test`
4. start application `npm start`
## How to work
* Test test coverage : `http://localhost:3000/test/`
* Api docs : `http://localhost:3000/api-docs/`
* Account for test (run by seed data):
    - email: `nnhaigl@gmail.com`. password: `123456`
    - email: `test100@gmail.com`. password: `123456`
if want to add new account for test purpose. add account in file `./src/database/seed/init.js`
