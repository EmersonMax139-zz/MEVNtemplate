
MEVN Stack (MongoDB Express VueJs Node)

First run `npm install` to install dependencies (Development dependencies won't be included in production)

Then in `app.js` add your mongoDB connection uri (a link to the uri docs is in the code)
   - If you are using local mongoDB connection, make sure you isntall mongo on your machine and run `mongod`

To start server run `npm start` or `node app.js`
    - Server runs on localhost:8081 unless otherwise specified 

Development run `npm run dev` and go to localhost:8080 (or port you specify) 

Build (to 'public' folder) run `npm run build`

** For Deployment, url must be changed in (client/src/services/api.js)
