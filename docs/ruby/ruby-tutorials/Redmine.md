---
title: Redmine
slug: redmine
sidebar_position: 1
---

## How to Deploy Redmine

**Redmine** is an open-source web-based system for projects managing and bugs tracking. Written using the Ruby on Rails framework, it is cross-platform and cross-database.

In this tutorial we will show you how to install and run your own Redmine application within the platform.

You can have a **Redmine** instance up and running within minutes using one-click install option.

The process is simple - just click **Get it hosted now**, type your email and install Redmine in a minute skipping the steps of manual installation.

Find the full list of applications available for one-click installation at our Marketplace page.

In case you would like to configure and run your Redmine instance manually, just follow the step-by-step instruction below.

## Environment Creation

1. Log in to the platform dashboard and click **Create environment** button.

2. Navigate to the **Ruby** tab, pick **Apache** as your application server and **MySQL** as database. Specify cloudlet limits for chosen nodes, name your environment (e.g. _redmine_) and click **Create**.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/Redmine/01-environment-topology-wizard.png)

</div>

3. Wait for creation to complete, it will take just a minute.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/Redmine/02-redmine-environment-created.png)

</div>

## Redmine Deployment

1. Open the official [Redmine web-site](https://www.redmine.org/projects/redmine/wiki/Download) and download its latest stable release as **.tar.gz** or **.zip** archive.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/Redmine/03-download-redmine-package.png)

</div>

2. Navigate back to the platform dashboard and upload this archive via Deployment Manager.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/Redmine/04-upload-redmine-archive.png)

</div>

3. Finally, deploy the Redmine package to the created before environment. For that click the **Deploy to..** button next to the uploaded archive and choose desired environment.

Then select the application deployment type (_Production_ in our case) and click **Deploy** button.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/Redmine/05-deploy-redmine-to-production.png)

</div>

In a few moments Redmine will be hosted within chosen environment.

## Database Configurations

1. Press **Open in Browser** button for MySQL node in the environment.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/Redmine/06-open-mysql-in-browser.png)

</div>

2. Log in to the admin panel using credentials the platform sent you after environment creation. Navigate to the **SQL** tab.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/Redmine/07-database-sql-tab.png)

</div>

3. You’ll see the empty form for executing SQL request. Enter the following line there and click **Go** to create a new databese.

```bash
CREATE DATABASE redmine CHARACTER SET utf8;
```

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/Redmine/08-database-execute-sql-query.png)

</div>

4. Then navigate back to the platform dashboard and click **Config** button next to the **Apache** server.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/Redmine/09-apache-config-button.png)

</div>

5. In the opened Configuration Manager navigate to the **webroot > ROOT > config** folder, find **_database.yml.example_** file and copy its content.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/Redmine/10-copy-database-yml-example.png)

</div>

6. Then create new **_database.yml_** file in the same (**config**) folder and paste the copied strings to it.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/Redmine/11-create-database-yml.png)

</div>

7. Now you need to configure the connection to DB using the data of your MYSQL database.

Section for custom configurations should be chosen depending on the deployment type you’ve selected while environment creation (_production_ in our case).

Specify MySQL **_host_** (URL to your database without _http://_) and credentials you’ve received while environment creation in **_username_** and **_password_** strings.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/Redmine/12-configure-mysql-connection.png)

</div>

:::tip Note

In case you are going to change the deployment type to another one (_development_ or _testing_) later, you should specify these connection parameters in all appropriate sections as well.

:::

8. **Save** the changes made.

## Application Server Configurations

1. Click **Config** button for **Apache** node in your environment.

2. In the **webroot > ROOT** folder create a new file and name it **_rake_deploy_**.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/Redmine/13-create-rake-deploy-file.png)

</div>

3. Paste the following strings into the newly created file:

```bash
generate_secret_token
db:migrate
redmine:load_default_data
```

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/Redmine/14-configure-rake-deploy.png)

</div>

4. **Save** the changes and **Restart** Apache node.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/Redmine/15-restart-apache-node.png)

</div>

5. Finally, press the **Open in Browser** button next to your environment.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/Redmine/16-open-redmine-in-browser.png)

</div>

Your Redmine application’s home page will be open.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/Redmine/17-redmine-home-page.png)

</div>

That’s all. Now you have your own Redmine application up and running in the platform. Enjoy!
