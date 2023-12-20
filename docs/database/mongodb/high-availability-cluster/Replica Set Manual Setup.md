---
title: Replica Set Manual Setup
slug: replica-set-manual-setup
sidebar_position: 2
---

<!-- ## MongoDB Replication and Automated Failover. Configuration Guide -->

Replica set is a term used for defining a database cluster of multiple nodes with the replication and an automated failover configured between them. Such a structure usually requires an odd number of members, either with [Arbiter](https://www.mongodb.com/docs/manual/tutorial/add-replica-set-arbiter/) node or not, to ensure the correct PRIMARY database election. This selected DB will process all the incoming write operations, storing the information about them within its oplog, where they can be accessed and replicated by every SECONDARY replica member for being applied to their data sets. In such a way, all servers will represent the same content and ensure its availability.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/ReplicaSetManualSetup/mongodb-replica-set.png)

</div>

In case some unexpected issue occurs, causing the primary database downtime (e.g. due to hardware failure or connection interruption), a new election process will be initiated automatically, helping to restore the normal application functioning, no manual intervention required. In such a way, replica set inherits the benefits of [usual replication](/database/mongodb/high-availability-cluster/auto-clustering#mongodb-replica-set-auto-%D1%81lustering-for-high-availability-and-performance) (like failover redundancy, increased data availability and read capacity, disaster recovery, etc.) and simultaneously eliminates the complexity of managing numerous databases separately.

Thus, here is a simple instruction, that will show you how to create and configure a MongoDB replica set with three members – such a complexion is considered to ensure enough margin of information safety and sufficient out-turn to handle the required amount of I/O operations, for most of the commonly used applications. Below we’ll discover how to prepare the appropriate environment, set an authentication between DB nodes, configure the replication itself and make sure everything is tuned properly.

## Create an Environment

To start with, you’ll need at least three MongoDB nodes in order to configure a replica set, so let’s [create such an environment](/environment-management/setting-up-environment). In this example, we’ll allocate MongoDB instances of the 4.0.10 version within a single environment.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/ReplicaSetManualSetup/mongodb-replica-set-environment.png)

</div>

If required, change the **Environment Name** and destination [Region](/environment-management/environment-regions/choosing-a-region#environment-regions). Once installation is completed you have to take care about security of nodes communication with the help of authentication key file.

## Add Authentication Key File

Authentication is an important security assurance process that forces each member of the replica set to identify itself during the inner communication by means of a special unique authentication key file. So let’s generate your own in order to protect the data inside your DBs from illegal access:

1. Log into one of database nodes via [Web SSH](/deployment-tools/ssh/ssh-access/web-ssh#ssh-access-via-web-browser).

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/ReplicaSetManualSetup/mongodb-replica-set-ssh.png)

</div>

2. Use your own key file or generate one with [openssl](https://en.wikipedia.org/wiki/OpenSSL) (key size in bytes, e.g. 741, and name for instance my.key) with a command:

**_openssl rand -base64 741 > my.key_**

3. Now you have to distribute just created key file across all MongoDB instances:

- Click on the **Config** button next to your database nodes in order to access [File Manager](/application-setting/configuration-file-manager#configuration-file-manager).

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/ReplicaSetManualSetup/mongodb-replica-set-config.png)

</div>

In the opened configuration tab, find the **_my.key_** file under the path: **_/home/jelastic/my.key_** and open it. Then copy its content into the clipboard.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/ReplicaSetManualSetup/mongodb-replica-set-key.png)

</div>

In the **keys** directory (the full path is **_/var/lib/jelastic/keys_**), create the file the MongoDB instances will be using to authenticate each other e.g. **mongo-set.key**.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/ReplicaSetManualSetup/mongodb-replica-set-file.png)

</div>

Paste the clipboard content into it and apply changes by Save for all instances. Thus the **mongo-set.key** file was distributed to all of MongoDB nodes.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/ReplicaSetManualSetup/mongodb-replica-set-save.png)

</div>

## Configure the MongoDB Replication

Since the security, as one of the main data management principles, is ensured, you can finally proceed to the replica set configuration itself.

1. Switch to the **mongod.conf** file inside the **etc** folder within the same configuration tab for MongoDB nodes. Scroll down to the **replication** section, then uncomment it and add the following string specifying the unique name for your replica set (db-replication, as an example):

**_replSetName: db-replication_**

2. Add parameter **keyFile** in **security** section which should specify the path to your key file (which in our case is **_/var/lib/jelastic/keys/mongo-set.key_**).

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/ReplicaSetManualSetup/mongodb-replica-set-security.png)

</div>

3. Instantly **Save** the changes **for all instances** using the appropriate button in the editor window.

4. **Restart** your DB **nodes** for the new configuration parameters to be applied.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/ReplicaSetManualSetup/mongodb-replica-set-restart-container.png)

</div>

:::tip Note

Keep in mind that once you have finished replica set configuration the new PRIMARY database election process will be invoked during all nodes restart or PRIMARY node restart (i.e. PRIMARY database downtime).

:::

5. Next, access the MongoDB server, you consider to use as PRIMARY, via the SSH protocol.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/ReplicaSetManualSetup/mongodb-replica-set-restart-node.png)

</div>

:::tip Note

After the PRIMARY database is elected, other replica set members will become inaccessible for the direct write operations, which means that any changes, configurations, etc. (including access to the web admin panel) can be performed for the current PRIMARY node only. So, you’ll have to change a connection string in your application to the new PRIMARY node, unless you have arranged [priorities](https://www.mongodb.com/docs/manual/tutorial/force-member-to-be-primary/) for all replica set members specifying one node as preferred PRIMARY.

:::

6. Access the database, which should be replicated, with the appropriate admin user credentials:

\*mongo -u **{user}** -p **{password} {DB_name}\***

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/ReplicaSetManualSetup/mongodb-replica-set-access.png)

</div>

Where:

- **{user}** – administrator username (sent to your email, usually admin by default)
- **{password}** – password for the corresponding DB user password (can be found within the same email)
- **{DB_name}** – name of the database you would like to replicate within this replica set (we’ll use the default admin one)

:::tip Note

In case the new election has occurred the admin user credentials to log into a new PRIMARY database will be the same as you have used for the old one.

:::

7. Once the connection is established, execute the next lines in order to define parameters for the current MongoDB node and initiate your replica set:

_config = {\_id : "**{replica_set}**", members : [{_id : 0, host:"**{current_db_ip}**:27017"},]}_

rs.initiate()

Obviously, the values in brackets should be substituted with the appropriate data, namely:

- **_{replica_set}_** – name of your replicating database group, specified at the beginning of this section (db-replication in our case)
- **_{current_db_ip}_** – IP address of the chosen database container

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/ReplicaSetManualSetup/mongodb-replica-set-parameters.png)

</div>

In our example:

**_config = {\_id : "db-replication", members : [{_id : 0, host:"172.25.2.119:27017"},]}_**

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/ReplicaSetManualSetup/mongodb-replica-set-configuration.png)

</div>

**_rs.initiate()_**

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/ReplicaSetManualSetup/mongodb-replica-set-setup.png)

</div>

8. Execute the following command for the remaining databases where **_{db_ip}_** is IP address of each database:

_rs.add("**{db_ip}**:27017")_

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/ReplicaSetManualSetup/mongodb-replica-set-execute.png)

</div>

9. After you’ve added all replication members, you’ll get a fully functional replica set. In case you’d like to ensure everything is configured properly, execute the **rs.status()** command to get the full information regarding your replica set.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/ReplicaSetManualSetup/mongodb-replica-set-status.png)

</div>

## ReplicaSet Arbiter

Replication is more reliable if it has an odd number of members in replica set. In case, you have created an even number of members (nodes), it would be better to add an **Arbiter** node which maintains a quorum by responding to heartbeat and election requests from other replica set participants:

- Arbiter doesn’t not store data in it, and it just have to vote in elections when any node fails
- Arbiter is a lightweight process, so it does not consume a lot of resources
- Arbiter simply exchanges user credentials between a set of replicas that are encrypted
- It is recommended to run the Arbiter on a separate node to achieve high availability
  Let’s add an extra Arbiter node to our replica set:

1. Scale out database cluster horizontally with one node:

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/ReplicaSetManualSetup/mongodb-replica-set-add-arbiter.png)

</div>

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/ReplicaSetManualSetup/mongodb-replica-set-arbiter-node.png)

</div>

2. In the **keys** directory create a key file **mongo-set.key** and paste the content of the similar file from any other previously configured database node.

3. Change **mongod.conf**:

- uncomment the **replication** section and add **replSetName** (e.g. replSetName: db-replication)
- add **keyFile** parameter to **security** section (**_/var/lib/jelastic/keys/mongo-set.key_**, in our case)

4. Restart newly added node to apply configuration parameters.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/ReplicaSetManualSetup/mongodb-replica-set-restart-arbiter.png)

</div>

:::tip Note

Do not restart all the nodes since it will cause a new PRIMARY election unless you have specified priorities to force a specific node to be elected as PRIMARY database node.

:::

5. Now Arbiter is ready to be added to the replica set. At the PRIMARY node issue command to add arbiter to the cluster:

<!-- *rs.addArb("**{db_ip}**:27017")* -->

Where **_{db_ip}_** is IP address of a newly added node.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/ReplicaSetManualSetup/mongodb-replica-set-arbiter-added.png)

</div>

6. Finally let’s check whether new added node became an Arbiter or not. To do this log into the new node via SSH and connect MongoDB instance with credentials from respective email you have received upon node creation.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/ReplicaSetManualSetup/mongodb-replica-set-checkup.png)

</div>

As you can see the newly added node acts as Arbiter of **db-replication** ensuring a quorum in any situation.

## Database Cluster Availability Testing

Our configured advanced MongoDB cluster allows you to connect and perform different operations with it remotely. As an example, let’s get its actual state by connecting and executing a few check up commands by means of a simple PHP applet.

Obviously, you’ll need an application server for that (e.g. Apache), so either add one to your environment (as we did) or just create it within a separate environment.

1. Press **Change Environment Topology** button and add the server.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/ReplicaSetManualSetup/mongodb-replica-set-change-topology.png)

</div>

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/ReplicaSetManualSetup/mongodb-replica-set-add-server.png)

</div>

2. Open the Configuration Manager tab for the added **Apache** server by selecting the **Config** icon next to it.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/ReplicaSetManualSetup/mongodb-replica-set-configure-replication.png)

</div>

3. Navigate to the **_/var/www/webroot/ROOT_** directory, open the **index.php** file and paste the following code instead of its default content:

```bash
<?php
    try{
	$mongodbConnectionURI= "mongodb://{db_username}:{db_password}@node{NodeID}-{environment_domain}:27017,node{NodeID}-{environment_domain}:27017,node{NodeID}-{environment_domain}:27017,node{NodeID}-{environment_domain}:27017/?replicaSet={replica_set_name}&readPreference=primary";
    $manager = new MongoDB\Driver\Manager($mongodbConnectionURI);
    $command = new MongoDB\Driver\Command(['ping' => 1]);
    $cursor = $manager->executeCommand('db', $command);
    $response = $cursor->toArray()[0];
    var_dump($response);
    echo'<br><br>';
    var_dump($manager->getServers());
    } catch (Exception $e){
        echo $e->getMessage();
        }
?>
```

where the following values should be substituted with the corresponding data:

- **_{replica_set_name}_** – your replica set name
- **_{db_username}_** – admin user of the chosen primary database (admin, by default)
- **_{db_password}_** – the above-specified user’s password
- **_{NodeID}_** – identification number of the corresponding node, that can be found at the Jelastic dashboard
- **_{environment_domain}_** - environment domain that can be found at the Jelastic dashboard

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/ReplicaSetManualSetup/mongodb-replica-set-domain.png)

</div>

:::tip Note

You need to specify the ID of every node included to your replica set, within the appropriate mongodbConnectionURI section.

:::

As a result, you’ll get a similar set of strings:

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/ReplicaSetManualSetup/mongodb-replica-set-strings.png)

</div>

Don’t forget to Save this file.

4. Apache requires a special module for being able to [interact with the MongoDB server](/database/mongodb/connection-to-applications/php-connection-to-mongodb#php-connection-to-mongodb), so you need to add it within configs.

For that, go to the **etc** folder and open the **php.ini** file. Find the **[mongodb]** section and remove the semicolon before the **extension=mongodb.so** line to enable this extension.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/ReplicaSetManualSetup/mongodb-replica-set-extension.png)

</div>

5. In order to apply new configurations, click **Save** within editor window and hit the **Restart Nodes** button next to your application server.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/ReplicaSetManualSetup/mongodb-replica-set-extension.png)

</div>

6. Finally, click the **Open in Browser** icon nearby.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/ReplicaSetManualSetup/mongodb-replica-set-open.png)

</div>

As a result, within a new browser tab, you’ll see information about your replica set members and their accessibility.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/ReplicaSetManualSetup/mongodb-replica-set-information.png)

</div>

The first line displays result of checking availability of the replica set, which is performed by the command "ping" (line 6 of the **index.php**):

<!-- ***object(stdClass)#11 (3) { ["ok"]=> float(1) }*** -->

Which means that the replica set was successfully tested.

In the next block of the output, a full information about the replica set hosts is displayed, which is obtained by means of **getServers** function (line 11 of the **index.php**). For example, you can check some values assigned during the process of creating this replica set:

- **host** – a particular database’ IP address
- **port** – current replication member port
- **["is_primary"]** and **["is_secondary"]** - the parameters indicating the status of the server (correspondent values for the chosen primary MongoDB server are true, false and for two other MongoDB servers - false, true respectively)
  In addition, you can start and stop any of your database nodes and refresh this page to track the changes. In such a way, you can make sure that your MongoDB cluster is available and works as intended, and thus can be applied for any real case right now!

Get your own highly-available MongoDB replica set with Jelastic PaaS, simply sign up for a free trial at one of the service providers and follow the instructions.
