const express = require("express");
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const morgan = require('morgan');
// const { DB, PORT } = require("./config");

app.use(helmet())
app.use(morgan())
// app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: false
}))
const DB = 'mongodb://localhost:27017/Employee-Management-System';
mongoose.connect(DB, { useNewUrlParser: true }).then(() => {
    console.log(`Database connected successfully ${DB}`)
}).catch(err => { 
    console.log(`Unable to connect with the database ${err}`)
});


// Json Body Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(cors());

// Setting up static directories
app.use(express.static('public'));

// Bring in the Users route
app.use(require('./routes'));

// Swagger Open Api Options Definition 
const swaggerOptions = {
    swaggerDefinition: {
      info: {
        version: "1.0.0",
        title: "API",
        description: "This is the swagger documentation for the Project API",
        contact: {
          name: "Nwigwe Uzochukwu"
        },
        servers: [ 
            {
                url:"http://localhost:4000", 
                description: "Development server"
            } 
        ]
      }
    },
    
    apis: ['./routes/*.js']
  };
  
  const swaggerDocs = swaggerJsDoc(swaggerOptions);
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
  

// app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));
module.exports = app;

