---
title: Let’s encrypt ssl with nodejs
slug: let’s-encrypt-ssl-with-nodejs
sidebar_position: 5
---

## Let’s Encrypt SSL Add-On with NodeJS

The platform automates SSL certificate binding for most software stacks when working with the **Let’s Encrypt** add-on. However, the out-of-box automation is difficult for the Node.js nodes due to the stack specifics. In the Node.js application, Let’s Encrypt certificates are issued but are not bound - just stored at the **/var/lib/jelastic/keys** directory. You can manually use them in your application by creating a Web server and reading the certificates directly from the code.

:::tip

As an alternative, you can place a [load balancer](/docs/Load%20Balancers/Load%20Balancing) node in front of your Node.js server to act as a reverse proxy. The _Let’s Encrypt_ SSL add-on can be installed on such a balancer, benefiting from out-of-box automation.

Such an approach is preferable for larger projects that want to utilize the [Horizontal Scaling](/docs/ApplicationSetting/Scaling%20And%20Clustering/Horizontal%20Scaling) feature as it will require a load balancer node anyway.

:::

This guide will provide a basic example of how you can implement the Let’s Encrypt SSL add-on for the Node.js application.

## Using SSL with NodeJS

1. [Create an environment](/docs/environment-management/setting-up-environment) with the **Node.js** application server.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/LetsEncryptSSLwithNodeJS/01-create-nodejs-environment.png)

</div>

2. Install the Let’s Encrypt add-on to generate free SSL certificates for your application.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/LetsEncryptSSLwithNodeJS/02-install-lets-encrypt-addon.png)

</div>

Due to the Node.js engine specifics, the Let’s Encrypt add-on just generates SSL certificates. You must manually adjust your application code to read certificates from:

- _/var/lib/jelastic/keys/privkey.pem_
- _/var/lib/jelastic/keys/fullchain.pem_
- _/var/lib/jelastic/keys/ca.cer_

3. Create a new app or integrate [HTTPS configs](https://nodejs.org/api/https.html#https_https_createserver_options_requestlistener) into the existing application. Check the examples below:

- **new application** – replace the content of the default **_server.js_** file in the **/home/jelastic/ROOT** directory

```bash
const https = require('node:https');
const fs = require('node:fs');

const options = {
key: fs.readFileSync('/var/lib/jelastic/keys/privkey.pem'),
cert: fs.readFileSync('/var/lib/jelastic/keys/fullchain.pem')
};

https.createServer(options, (req, res) => {
res.writeHead(200);
res.end('hello world\n');
}).listen(443);

console.log("The HTTPS server has started at: https://localhost:443/");
```

- **existing application** – for example, deploy the default _“Hello World”_ package and edit the _/home/jelastic/ROOT/server.js_ file to work over HTTPS

```bash
#!/usr/bin/env node

var https = require("https"),
url = require("url"),
ejs = require("ejs"),
fs = require("fs"),
os = require("os"),
staticResource = require("static-resource"),
port = 443,
serverUrl,
handler,
favicon;

const options = {
key: fs.readFileSync('/var/lib/jelastic/keys/privkey.pem'),
cert: fs.readFileSync('/var/lib/jelastic/keys/fullchain.pem')
};

serverUrl = "https://localhost:" + port + "/";
handler = staticResource.createHandler(fs.realpathSync("./public"));

favicon = fs.realpathSync('./public/favicon.png');

https.createServer(options, function (req, res) {
var path = url.parse(req.url).pathname;

    if (path === "/") {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write(ejs.render(fs.readFileSync("./index.ejs", "utf8"), {
            hostname: os.hostname()
        }));
        res.end();
    } else if (req.method === 'GET' && path === '/favicon.png') {
        res.setHeader('Content-Type', 'image/png');
        fs.createReadStream(favicon).pipe(res);
    } else {
        if (!handler.handle(path, req, res)) {
            res.writeHead(404);
            res.write("404");
            res.end();
        }
    }

}).listen(port);

console.log("The HTTPS server has started at: " + serverUrl);
```

4. Run your application via [Web SSH](/docs/deployment-tools/ssh/ssh-access/web-ssh). In our example, we use the **_forever_** [process manager](/docs/Nodejs/Nodejs%20Apps%20Specifications/Process%20Managers) (sudo is needed to listen on the privileged port 443).

```bash
cd /home/jelastic/ROOT
sudo forever start server.js
```

:::danger note

The command should be adjusted for different process managers. Or you can start your application without it:

```bash
sudo node server.js
```

:::

That’s all! Go to your Node.js application over **https://** to verify access and certificate validity.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/LetsEncryptSSLwithNodeJS/03-nodejs-application-ssl-access.png)

</div>

## Certificate Update

Let’s Encrypt SSL certificates remain valid for 90 days. After that, they should be updated for the encryption to remain valid. The add-on provides automated renewal 30 days before the expiration. However, after the certificate update, you need to restart (reload is preferred, if possible) the server to apply new certificates.

The operation can be automated alongside the certificate update by means of the **_webhooks_** – a custom script executed after the default add-on operations.

Go to the **_/var/lib/jelastic/keys/letsencrypt_** folder (create if missing) and add the **_settings-custom_** file. Based on the [Node.js process manager](/docs/Nodejs/Nodejs%20Apps%20Specifications/Process%20Managers), your restart/reload script may vary. For example:

```bash
deployHook=sudo forever restart /home/jelastic/ROOT/server.js
```

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/LetsEncryptSSLwithNodeJS/04-lets-encrypt-update-webhook.png)

</div>

:::tip

Alternatively, you can provide the **_.sh_** script with the required commands:

```bash
deployHook: /path/to/your/file.sh
```

Ensure that your script file is executable (**chmod +x {fileName}**). For example, the script content can be the following:

```bash
#!/bin/bash
 echo "This is example of deployHook script" >> /tmp/testFile
```

Also, you can configure the update hook via API using the **_deployHook_** parameter. See Let’s Encrypt SSL article for more details.

:::

You can manually trigger certificate updates from the **Add-Ons** menu for your Node.js server.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/LetsEncryptSSLwithNodeJS/05-lets-encrypt-manual-update.png)

</div>

## Additional Recommendations

- Create environment variables with paths to the Let’s Encrypt certificates to avoid “hardcoding” and simplify edits in case of certificate location changes.
  - **Let’s Encrypt certificate**- _/var/lib/jelastic/keys/fullchain.pem_
  - **Let’s Encrypt private key** - _/var/lib/jelastic/keys/privkey.pem_

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/LetsEncryptSSLwithNodeJS/06-lets-encrypt-certificates-variables.png)

</div>

- When working with the Let’s Encrypt add-on via API, you can use the **_deployHook_** parameter to handle custom logic once certificates got issued/updated.
