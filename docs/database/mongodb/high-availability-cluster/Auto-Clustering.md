---
title: Auto-clustering
slug: auto-clustering
sidebar_position: 1
---

## work todo

## MongoDB Replica Set Auto-Сlustering for High Availability and Performance

Jelastic PaaS provides automatic clusterization for the **MongoDB** stack, which allows you to create a reliable [replica set](https://www.mongodb.com/docs/manual/replication/) for your database with a single click. The implemented solution provides a set of benefits:

- **redundancy and data high availability** - multiple copies of data on different database servers offer a high level of fault tolerance against the data loss
- **scalability and autodiscovery** – new nodes, added during [horizontal scaling](/docs/ApplicationSetting/Scaling%20And%20Clustering/Horizontal%20Scaling#horizontal-scaling-inside-the-cloud-multi-node), are connected to the cluster with all required adjustments being applied automatically
- **automated failover** – the database nodes that are temporarily unavailable or have high latency are automatically excluded from the cluster and re-added once the connection is restored

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/Auto-Clustering/mongodb-replication.png)

</div>

All these benefits can be achieved just in a few clicks within a topology wizard. Explore the steps below to activate auto-clustering for your MongoDB database in Jelastic PaaS.

## Specifics of the MongoDB Auto-Clustering

A [replica set](https://www.mongodb.com/docs/manual/replication/) is a group of at least three MongoDB instances that maintain the same data. One node of the set is deemed primary and is responsible for all write operations. It records all changes in the **_oplog_** so that the remaining nodes (secondaries) can accurately reflect the primary’s data. If the p"chainingAllowed" : true
"heartbeatIntervalMillis" : 2000
"heartbeatTimeoutSecs" : 10
"electionTimeoutMillis" : 10000
"catchUpTimeoutMillis" : -1
"catchUpTakeoverDelayMillis" : 30000rimary becomes unavailable, a new one will be automatically elected from the active secondaries after a short delay.

The default values for the [settings](https://www.mongodb.com/docs/manual/reference/replica-configuration/#settings) of the automatically configured cluster are provided below:

- **_"chainingAllowed" : true_** - allows secondary members to replicate from other secondaries
- **_"heartbeatIntervalMillis" : 2000_** - the frequency in milliseconds for the heartbeats
- **_"heartbeatTimeoutSecs" : 10_** - timeout in seconds that the replica set members wait for a successful heartbeat before marking the appropriate node as inaccessible.
- **_"electionTimeoutMillis" : 10000_** - timeout in milliseconds for detecting if the primary member is unreachable
- **_"catchUpTimeoutMillis" : -1_** - timeout in milliseconds (-1 for infinite time) for the newly elected primary to catch up with the members that have more recent writes
- **_"catchUpTakeoverDelayMillis" : 30000_** - timeout in milliseconds a secondary node, that is ahead of the current primary, gives for the catchup before initiating election to become a new primary

:::tip Tip

If needed, these settings can be reconfigured manually after the cluster installation using the **_[rs.reconfig()](https://docs.mongodb.com/manual/reference/method/rs.reconfig/#rs.reconfig)_** command. Check the section below, to learn how you can connect to your MongoDB cluster via SSH and run the required commands.

:::

Another important point is security and protection from undesired access. Herewith, [authentication](hhttps://www.mongodb.com/docs/manual/core/security-internal-authentication/) is an important security assurance process that forces each member of the replica set to identify itself during the internal communication by means of a special unique authentication key file. The platform automatically applies required configurations (in **_/etc/mongod.conf_**) and generates a key (located at **_/home/jelastic/mongodb.key_**) during the cluster configuration. Also, to ensure consistency, the file is added to the **_[redeploy.conf](/docs/Container/Container%20Redeploy)_** file so that it remains through all the container lifecycle operations.

MongoDB utilizes the **_[WiredTiger](https://www.mongodb.com/docs/manual/core/wiredtiger/)_** storage engine by default. It ensures a high performance (due to non-locking algorithms) and effective cost/resource utilization. The default options for WiredTiger are optimized to run a single mongod instance per server, which is also suitable for Jelastic PaaS containers. MongoDB utilizes both the WiredTiger internal cache and the filesystem cache. The internal cache size is 50% of total RAM minus 1 GB (but no less than 256 MB), while filesystem cache operates free memory that is not used by WiredTiger or other processes. For more information on WiredTiger configs, refer to the official MongoDB documentation.

One more unique feature of the MongoDB auto-cluster is the automated detection of new nodes added through the [horizontal scaling](/docs/ApplicationSetting/Scaling%20And%20Clustering/Horizontal%20Scaling#horizontal-scaling-inside-the-cloud-multi-node) and their inclusion into the replica set without any manual actions. Similarly, nodes are excluded from the cluster while scaling in.

## Enable Automatic Clustering for Databases

The whole process of the MongoDB auto-cluster creation can be done in a few simple clicks.

1. Open the topology wizard with the **New Environment** button at the top-left corner of the dashboard, choose **MongoDB** database, and activate **Auto-Clustering** via the appropriate switcher.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/Auto-Clustering/enable-mongodb-auto-clustering.png)

</div>

:::tip Tip

Some of the topology specifics of the MongoDB cluster are listed below:

- auto-clustering is supported since the **_4.x.x_** version
- 4 GiB of RAM (32 cloudlets) are recommended for a proper work of the replica set nodes. By default, these number of cloudlets are added as a dynamic scaling limit, so [you won’t be charged unless resources are actually consumed](/docs/ApplicationSetting/Scaling%20And%20Clustering/Automatic%20Vertical%20Scaling#automatic-vertical-scaling).

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/Auto-Clustering/mongodb-auto-clustering-resources-1.png)

</div>

- the minimum number of nodes required for the MongoDB auto-cluster is 3

:::

Configure other parameters up to your needs ([public IPs](/docs/ApplicationSetting/External%20Access%20To%20Applications/Public%20IP#public-ip), [region](/docs/EnvironmentManagement/Environment%20Regions/Choosing%20a%20Region#environment-regions), etc.) and click **Create**.

2. Wait a minute for the platform to configure the cluster for you.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/Auto-Clustering/mongodb-cluster.png)

</div>

3. After successful installation, you’ll receive an email about successful replica set configuration:

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/Auto-Clustering/mongodb-auto-clustering-email.png)

</div>

You can use these credentials to access the admin panel or to establish connections from your applications to the primary node of the replica set.

:::tip Tip

As it is mentioned, any secondary node may become primary in case one fails. Another election will happen if cluster will be restarted and consequently it is quite possible that new primary node will arise. So, the application connection string becomes invalid. To avoid any of these issues the connection string should contain all of the replica set member hostnames, replica set name and [read preferences](https://www.mongodb.com/docs/manual/core/read-preference/) if necessary to unload the primary node to handle the reads or to ensure cluster high availability and failover.
Here is the connection string example in case of node.js application:

**_client = new MongoClient("mongodb://admin:L3tdH8bT64@node254967-mongo-cluster.jelastic.com:27017,node254968-mongo-cluster.jelastic.com:27017,node254969-mongo-cluster.jelastic.com:27017/admin", {useUnifiedTopology: true, readPreference:'primaryPreferred',replicaSet:'rs0'});_**

Where:
**_useUnifiedTopology: true_** - forces mongodb to use the new Server Discover and Monitoring engine.

**_readPreference:'primaryPreferred'_** - Mostly, operations read from the primary but if it is unavailable, operations read from secondary members.

**_replicaSet:'rs0'_** - by default the replica set name is **_rs0_** in Jelastic. You may observe the replica set name at any cluster node in mongod.conf file or in mongo shell prompt.

:::

The outlined above application connection is considered to be established within one hosting platform. But if required, you can make an external application connection to the replica set through [SLB](/docs/ApplicationSetting/External%20Access%20To%20Applications/Shared%20Load%20Balancer#shared-load-balancer). In this case you have to maintain connection to the primary node only for read/writes via [Jelastic Endpoints](/docs/ApplicationSetting/External%20Access%20To%20Applications/Endpoints#endpoints-a-direct-connection-to-the-cloud).

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/Auto-Clustering/enable-mongodb-auto-clustering.png)

</div>

If you need to read from the secondaries you have to customize your application code to perform reading from secondaries in a separate thread as you do it for primary. Anyway, for such cases, you have to remove **_replicaSet_** parameter from the connection string so it can look according to email above:
**_client = new MongoClient( "mongodb://admin:L3tdH8bT64@node254967-mongo-cluster.jelastic.com:11035/admin", { useUnifiedTopology: true });_**

4. By default, the auto-cluster utilizes the [Mongo Express](https://github.com/mongo-express/mongo-express) administration panel that provides support for the replica sets.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/Auto-Clustering/mongodb-admin-panel.png)

</div>

5. Also, you can connect to your database via the mongo shell directly in your terminal (for example, using the built-in **[Web SSH](/docs/Deployment%20Tools/SSH/SSH%20Access/Web%20SSH#ssh-access-via-web-browser)** option).

\*mongo -u **{user}** -p **{password} {DB_name}\***

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/Auto-Clustering/mongodb-cluster-ssh-access.png)

</div>

Where:

- **_{user}_** – administrator username (sent to your email, admin by default)
- **_{password}_** – password for the corresponding DB user (can be found within the same email)
- **_{DB_name}_** – name of the database you would like to access (we’ll use the default admin one)

6. You can check the replica set status with the appropriate command:

**_rs.status()_**

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/Auto-Clustering/mongodb-replica-set-status.png)

</div>

As you can see, the replica set (with the default **_rs0_** name) is up and running. Other [replica set commands](https://www.mongodb.com/docs/manual/reference/method/js-replication/) can be found at the official documentation. For example, use the **_rs.conf()_** operation if you want to see replica set configs.

Get your own highly-available MongoDB replica set with Jelastic PaaS at one of the service providers.
