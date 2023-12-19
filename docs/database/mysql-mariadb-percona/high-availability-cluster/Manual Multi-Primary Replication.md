---
title: Manual multi-primary replication
slug: manual-multi-primary-replication
sidebar_position: 3
---

## Multi-Primary Replication for MySQL/MariaDB/Percona

The platform lets you easily set up two different types of database replication - **primary-secondary** and **primary-primary** - in order to solve a number of different problems with performance, to support database backups, to alleviate system failures and much more. Information on how to configure a master-slave replication for your MySQL database can be found [here](/docs/database/mysql-mariadb-percona/high-availability-cluster/manual-primary-secondary-replication#mysqlmariadbpercona-database-primary-secondary-replication).

And in this tutorial we are going to explain how to configure the master-master (multi-master) replication in MySQL, specifically to be applied on environments. The process is rather simple, but requires you to pay attention to some important details.

So let’s get started!

## Create Environments

The first thing that you need in order to configure a database replication is, at least, two db servers. Let’s create two environments with MySQL instances.

1. Log into the platform. After your dashboard is opened, click on **Create Environment** in the top panel.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/ManualMulti-PrimaryReplication/01-create-environment.png)

</div>

2. With the help of the opened topology wizard, set up the following environments:

- **the first master DB environment**
  Add **Apache** application server with **PHP** support and **MySQL** database. Set up the cloudlet limits for each container. Name your environment (e.g. mysql-master-1) and click **Create**.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/ManualMulti-PrimaryReplication/02-first-master-environment.png)

</div>

- **the second master DB environment**
  To create the second environment (**master-mysql-2**) you will be required to repeat the steps of **master-mysql-1** environment creation.

Or, you can just [clone](/docs/environment-management/cloning-environment) the first environment, specifying the proper name in the corresponding frame:

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/ManualMulti-PrimaryReplication/03-clone-environment.png)

</div>
<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/ManualMulti-PrimaryReplication/04-master-environments.png)

</div>

3. Keep in mind that versions and environments' configuration may vary according to your needs and will also depend on your hosting provider configuration. For example, instead of running PHP you may want to run a Java or Ruby application. Regardless, the references in the article should only be used for replicating MySQL servers running on this platform.

:::tip Note

If you want to replicate your environments between different hosting providers, you <u>must</u> enable **public IP** address for MySQL nodes.

:::

## Configure the First Master DB

Now that MySQL servers are installed and running, we need to set them up for replication.

1. Let’s start with **master-mysql-1**. Click on MySQL **Config** icon for your first environment.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/ManualMulti-PrimaryReplication/05-config-first-mysql.png)

</div>

2. In the opened Configuration manager, navigate to the **/etc/my.cnf** file, locate the **#skip-networking** string and insert the next parameters as shown below:

```bash
server-id    = 1
binlog-do-db = example
binlog-do-db    = teste
log-bin     = /var/log/mysql/mysql-bin.log
auto_increment_increment= 1
auto_increment_offset    = 1
```

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/ManualMulti-PrimaryReplication/06-first-skip-networking-configs.png)

</div>

Let’s consider in detail what exactly we are configuring with these options:

- **server-id** - common option which is used by replication servers for identifying themselves. Should be unique for each server.
- **bin-log-do-db = example** and **bin-log-do-db = teste** - tells the server to restrict binary logging to updates for the specified databases. Note: that these databases must not have been created yet. Once you are comfortable with the Multi-Master Replication you can include your own databases.
- **log-bin = /var/log/mysql/mysql-bin.log** - defines whether the binary log is enabled or not. The option value, if given, is the basename for the log sequence.
- **auto_increment_increment = 1** - used to control the interval between successive column values.
- **auto_increment_offset = 1** - in the context of the multi-master replication can be used to avoid replication conflicts. In this article, we set the 1 value for the master-mysql-1 server and 2 for the master-mysql-2.

Both **auto_increment_increment** and **auto_increment_offset** options are intended for use with master-to-master replication and should be set according to your application requirements. We suggest that you set **auto_increment_offset** option value to the same as the **server-id** parameter’s one, to avoid replication conflicts.

3. Once you’ve finished modifying the **/etc/my.cnf** file, just click **Save** and restart MySQL node in the **master-mysql-1** environment as shown below.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/ManualMulti-PrimaryReplication/07-restart-first-mysql.png)

</div>

4. In order to check MySQL was restarted successfully, you can navigate to the automatically opened **actions** tab.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/ManualMulti-PrimaryReplication/08-first-mysql-actions.png)

</div>

If an error occurs during this stage, repeat the procedure again or contact your Technical Support.

## Configure the Second Master DB

Now it’s time to start setting up the second DB server (the one that belongs to the **master-mysql-2** environment).

1. Open the _configuration manager_ for the MySQL node in the appropriate environment.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/ManualMulti-PrimaryReplication/09-config-second-server.png)

</div>

2. Navigate to the same **/etc/my.cnf** file, find the **#skip-networking** parameter again, and paste the following lines after it:

```bash
server-id = 2
binlog-do-db = example
binlog-do-db = teste
log-bin = /var/log/mysql/mysql-bin.log
auto_increment_increment= 1
auto_increment_offset = 2
```

:::tip Note

We’ve changed the values of **server-id** and **auto_increment_offset** options, as they should be unique for each server.

:::

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/ManualMulti-PrimaryReplication/10-second-skip-networking-configs.png)

</div>

3. Once you’ve finished modifying, just click **Save** and restart MySQL **master-mysql-2** node, exactly in the same way you did for the node in the **master-mysql-1** environment.

4. To check that MySQL has been restarted successfully, click on the appeared **actions** tab and see the results. If an error occurs during this stage, repeat the procedure again or contact your Technical Support.

## Enabling Master-Master Replication

Finally, let’s adjust the replication itself. For that, you’ll need to execute some commands with the help of **phpMyAdmin** panel.

1. Click **Open in Browser** for the MySQL server in the first environment (**master-mysql-1**).

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/ManualMulti-PrimaryReplication/11-open-first-mysql.png)

</div>

2. You’ll be redirected to the administrator panel. Log in to it with the credentials for root user you’ve received via email during environment creation and navigate to the **SQL** tab. In the window opened, execute the following commands:

```bash
create user 'replicator'@'%' identified by 'password';
grant replication slave on *.* to 'replicator'@'%';
```

:::tip Note

The password value should be substituted with your own one. DO NOT use the default value - it’s not secure.

:::

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/ManualMulti-PrimaryReplication/12-create-first-replication-user.png)

</div>

In such a way, we’ve created a new replicator user and granted him global permissions for performing the replication operations.

Remember the credentials you’ve specified and click the **Go** button below.

3. In order to check the configuration is OK so far, execute this line:

```bash
show master status;
```

You should get a result similar to the following:

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/ManualMulti-PrimaryReplication/13-master-status-first-node.png)

</div>

Remember the binlog file name and its position. We’ll use them in the further configurations.

4. Repeat the 1-3 steps for the second MySQL server, creating the same-named user and remembering the log file parameters.

:::tip Note

In case you’ve used cloning for the second environment creation, credentials for its MySQL server will remain the same as for the first one.

:::

5. Now it’s time to activate the replication. Open the **SQL** tab in phpMyAdmin panel of the second MySQL server (the one that is included to the **master-mysql-2** environment) and run the following:

```bash
STOP SLAVE;
CHANGE MASTER TO MASTER_HOST = 'first_server_IP', MASTER_USER = 'replicator', MASTER_PASSWORD = 'password', MASTER_LOG_FILE = 'binlog_file_name', MASTER_LOG_POS = binlog_file_position;
START SLAVE;
```

where:

- **first_server_IP** - internal IP address of the MySQL server in the first environment. In case you would like to configure the replication between servers of different hosting providers, you should attach the external IP addresses to both of your DB nodes and specify the first server’s one in this parameter.

:::tip Note

Internal/external IP address can be seen by pressing the **Info** button next to the appropriate server:

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/ManualMulti-PrimaryReplication/14-mysql-info.png)

</div>

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/ManualMulti-PrimaryReplication/15-mysql-ip.png)

</div>

:::

- _password_ - the one you’ve specified while creating the DB user for the first MySQL server
- _binlog_file_name_ - value in the **File** column of the first server’s status table
- _binlog_file_position_ - position of the binlog file from the same table

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/ManualMulti-PrimaryReplication/16-slave-at-second-server.png)

</div>

6. In order to check whether the commands were successfully executed or not, run the following:

```bash
show slave status;
```

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/ManualMulti-PrimaryReplication/17-slave-status-second-node.png)

</div>

7. Open the administrator panel for MySQL node of the **master-mysql-1** environment and run the same lines substituting the parameters' values with the data of the second DB server:

```bash
STOP SLAVE;
CHANGE MASTER TO MASTER_HOST = 'second_server_IP', MASTER_USER = 'replicator', MASTER_PASSWORD = 'password', MASTER_LOG_FILE = 'binlog_file_name', MASTER_LOG_POS = binlog_file_position;
START SLAVE;
```

8. Check if all was configured properly in the same way:

```bash
show slave status;
```

Congrats! Replication has been successfully enabled on both servers.

## Testing the Replication

And finally, let’s ensure everything works like a charm.

1. Log onto the first DB server and create a new example database:

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/ManualMulti-PrimaryReplication/18-create-example-database.png)

</div>

As you can see, it is already marked as a replicated within the **Master replication** column.

:::tip Note

The name of this new database corresponds to the one we’ve specified in the servers' configurations (binlog-do-db = example). For further usage, you can create your own database and substitute binlog-do-db parameter’s value with its name.

:::

2. Now, log into the second server in your MySQL cluster and check the newly created database appeared in the list.

Click on it and add a new table with at least one column:

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/ManualMulti-PrimaryReplication/19-add-table-to-database.png)

</div>

Specify any desired values and click **Save**.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/ManualMulti-PrimaryReplication/20-set-column-propeties.png)

</div>

3. Switch back to the admin panel of the first MySQL server and make sure replicated example database contains the **_jelastic_** table now.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/ManualMulti-PrimaryReplication/21-multi-master-mysql-replication.png)

</div>

You can also perform some other actions (e.g. operate with records, triggers, indexes, etc.) in order to check all the data is instantly replicated inside the MySQL cluster.

That was so easy! Enjoy complete data security with the platform hosting.
