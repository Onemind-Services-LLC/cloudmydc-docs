---
sidebar_position: 5
---

## How to Install Diaspora\*

**Diaspora\*** is an open-source user-owned distributed social network with more than 1 million accounts all over the world. It consists of separate nodes named podes. Each pode operates a copy of the Diaspora software and represents a personal web-server.

So, let’s find out how to create your own Diaspora\* pode with the help of PaaS.

## Create an Environment

1. Log in to the platform dashboard using your credentials.
2. Press **Create environment** button. In the opened environment topology wizard navigate to the **Ruby** programming language tab. Pick the following nodes:

- **Apache** application server
- **MySQL** database
- **Redis** data structure server

Then state the resources limits for the chosen nodes. Finally, enter name for your environment (e.g. diaspora-network), and click **Create** button.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/DiasporaTutorial/01-environment-wizard.png)

</div>

3. After about a minute your new environment will appear at the dashboard.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/DiasporaTutorial/02-environment-for-diaspora-created.png)

</div>

## Diaspora\* Deployment

1. Navigate to the [Diaspora GitHub repository](https://github.com/diaspora/diaspora). There change the branch to **_master_** and click **_Download ZIP_** button.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/DiasporaTutorial/03-download-diaspora-zip.png)

</div>

You will be offered to save **.zip** archive with the latest Diaspora\* stable version.

2. Then navigate back to the platform dashboard and upload this archive with the help of **Deployment manager**.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/DiasporaTutorial/04-upload-diaspora-archive.png)

</div>

3. Then press **Deploy to.**. button next to the diaspora-master.zip package. In the opened window choose test deployment type and click **Deploy**.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/DiasporaTutorial/05-deploy-diaspora-application.png)

</div>

:::tip Note

In order to run Diaspora\* in production mode you need to have certificate authorities (CA) certificates installed at your server.

:::

4. The process of deployment can take some time, so be patient, please. Finally, you’ll see a new test context listed for Apache.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/DiasporaTutorial/06-diaspora-application-deployed.png)

</div>

## Database Configurations

1. Press **Open in Browser** button next to the **MySQL** node in your environment.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/DiasporaTutorial/07-open-mysql-in-browser.png)

</div>

2. In the opened browser tab log in using the MySQL credentials you’ve received while environment creation and navigate to the **SQL** section.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/DiasporaTutorial/08-database-admin-sql-tab.png)

</div>

3. You’ll see an empty form for SQL request executing. Enter the following line there and click **Go** in order to create a new database named diaspora_test.

```bash
CREATE DATABASE diaspora_test CHARACTER SET utf8;
```

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/DiasporaTutorial/09-create-diaspora-database.png)

</div>

4. After that open the platform dashboard again and press **Config** button for **Apache** application server.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/DiasporaTutorial/10-apache-config-button.png)

</div>

5. In the opened configuration manager navigate to the **webroot > config** folder, find **_database.yml.example_** file and copy its content.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/DiasporaTutorial/11-database-yml-example.png)

</div>

6. Then create new **_database.yml_** file in the same (**config**) folder and paste the copied strings to it.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/DiasporaTutorial/12-crerate-database-yml.png)

</div>

7. Now it’s necessary to set up the connection between your application and MySQL database.

Find the section for MySQL configurations. Specify your MySQL **_host_** (URL to your database without http://) and credentials you’ve received while environment creation in **_username_** and **_password_** strings.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/DiasporaTutorial/13-configure-database-connection.png)

</div>

Don’t forget to **Save** the changes made.

## Application Server and Redis Configurations

1. Press **Config** button for **Apache** application server again.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/DiasporaTutorial/10-apache-config-button.png)

</div>

2. Navigate to the **webroot > config** folder and create a new **_diaspora.yml_** file there. Then find **_diaspora.yml.example_** configuration file in the same folder, copy its content, and paste it into the newly created file.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/DiasporaTutorial/14-create-diaspora-yml.png)

</div>

3. After that navigate to the **_configuration_** section in this file and change the following values:

- find the **_#url: “https://example.org/"_** string and paste your environment’s URL instead of https://example.org/ value (you can find it by pressing **Open in Browser** button for your environment and copying URL in the address bar).

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/DiasporaTutorial/15-configure-environment-url.png)

</div>

- scroll a bit lower and find the settings for remote Redis connection in the same file:

```bash
## URL for a remote redis.
## Don't forget to restrict the IP access!
## Leave it commented out for the default (localhost)
#redis: 'redis://exmaple_host'
#redis: 'redis://username:password@host:6379/0'
#redis: 'unix:///tmp/redis.sock'
```

Delete the **#** symbol from the **_#redis: ‘redis://username:password@host:6379/0’_** line. Then substitute the values in this parameter with your own data, received via email after the environment creation.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/DiasporaTutorial/16-redis-credentials-email.png)

</div>

Change **_username_** and **_password_** values to the credentials for admin access to your Redis node. The same story with the **_host_** word: substitute it with the **DNS address** you can find in this letter.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/DiasporaTutorial/17-configure-redis-connection.png)

</div>

- finally, locate the **_#require_ssl: true_** line and change the true value to false

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/DiasporaTutorial/18-set-ssl-config-false.png)

</div>

It’s time to **Save** the changes.

4. Then navigate to the **_application.rb_** file, located in the same **config** folder. Find **_#config.i18n.default_locale = :de_** string and change its value to **_:en_**.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/DiasporaTutorial/19-set-default-locale-english.png)

</div>

Don’t forget to press the **Save** button in the panel above.

5. After that find the **_defaults.yml_** file (still in the **config** folder). At the #142-144 lines (or about it) you can see the following lines:

```bash
 i_am_a_dummy: # Remove if you add an actual override
test:
 environment:
   url: 'http://localhost:9887/'
```

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/DiasporaTutorial/20-dummy-url-override.png)

</div>

Please, delete the line started with i_am_a_dummy string, and change an **url** parameter’s value to the host url of your environment (it can be seen in the e-mail you’ve got earlier or by pressing the **Open in Browser** button next to your environment and copying URL in the address bar).

You should get something like following:

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/DiasporaTutorial/21-url-override-to-environment.png)

</div>

**Save** the changes.

6. Finally, create new **_rake_deploy_** file in the **webroot** folder. Enter the following strings there:

```bash
db:create
db:schema:load
assets:precompile
```

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/DiasporaTutorial/22-configure-rake-deploy.png)

</div>

7. Press **Save** button one more time and **Restart** the Apache node in order to apply all the configurations you’ve made.

:::tip Note

The first restart of the server after applying new settings can take some time, please, be patient.

:::

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/DiasporaTutorial/23-apache-restart-button.png)

</div>

8. Now you can press **Open in Browser** button for your environment and start working with your own Diaspora\* application hosted.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/DiasporaTutorial/24-diaspora-start-page.png)

</div>

Enjoy!
