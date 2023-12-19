---
title: Node.js connection to mongodb
slug: node.js-connection-to-mongodb
sidebar_position: 4
---

## Node.js Application Connection to MongoDB

**MongoDB** is a popular NoSQL database, which is natively supported by the platform and can be easily installed on the Cloud. Below, we’ll consider a simple example of how to connect this DB stack from your **Node.js** application server.

1. In order to follow this guide, you’ll need Node.js and MongoDB servers either within the platform (you can [create](/docs/environment-management/setting-up-environment) it at any time) or on any external resources.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/NodejsConnectiontoMongoDB/01-mongodb-nodejs-environment.png)

</div>

In our case, both instances are hosted within a single environment.

2. Connect to your application server via [SSH Gate](/docs/deployment-tools/ssh/ssh-overview#ssh-gate-overview).

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/NodejsConnectiontoMongoDB/02-ssh-connection-to-nodejs.png)

</div>

3. Next, download and install an official [MongoDB driver for Node.js](https://github.com/mongodb/node-mongodb-native):

```bash
npm install -s mongodb
```

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/NodejsConnectiontoMongoDB/03-install-mongodb-driver-for-nodejs.png)

</div>

In a moment the package will be successfully installed.

4. Now, create a file with a script to establish connection with your database. You can use any preferable text editor for this task, as well as any filename with the **_.js_** extension (e.g. **_vim script.js_**).

```bash
var MongoClient = require('mongodb').MongoClient;
// Connect to the db
MongoClient.connect("mongodb://{user}:{password}@{host}:{port}/{database}", { useUnifiedTopology: true, useNewUrlParser: true }, function(err, db) {
if(!err) {
   console.log("You are connected!");
   };
      db.close();
});
```

Here, you need to adjust the [connection string](https://www.mongodb.com/docs/manual/reference/connection-string/) (all the required information is provided within email for your MongoDB node):

- **{user}** - username to log into database with
- **{password}** - password for the appropriate user
- **{host}** - link to your MongoDB container
- **{port}** - port to be used for connection (use the default one - 27017)
- **{database}** - database to be accessed (e.g. the default one - admin)

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/NodejsConnectiontoMongoDB/04-mongodb-connection-script.png)

</div>

With this script you can access the specified database server and, if connection is successfully established, see the “You are connected!” phrase.

5. Let’s run the code, using the appropriate command:

```bash
node script.js
```

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/NodejsConnectiontoMongoDB/05-check-nodejs-connection-to-mongodb.png)

</div>

If everything is specified correctly, you should see the “You are connected!” string within terminal. Next, you can [extend code](http://mongodb.github.io/node-mongodb-native/2.2/api/) to execute all of the required actions.
