---
title: Cluster Recovery Add-On
slug: cluster-recovery-add-on
sidebar_position: 5
---

<!-- ## Database Cluster Recovery Add-On -->

The platform has several popular out-of-box clustering options for the MariaDB/MySQL databases, which can be automatically implemented via the [auto-clustering](/application-setting/scaling-and-clustering/auto-clustering-of-instances) feature. Such database clusters offer an advanced high availability and auto-scalability while remaining accessible to any user through automation.

In order to make the solution even more alluring, the platform offers a free diagnostic and recovery add-on to help with database maintenance. Currently, the **Database Cluster Recovery** add-on supports the following database clusters:

- **Primary-Secondary Cluster** based on the MySQL/MariaDB/Percona stacks
- **Primary-Primary Cluster** based on the MySQL/MariaDB/Percona stacks
- **Galera Cluster** based on the MariaDB stack
- **XtraDB Cluster** based on the Percona stack

## Add-On Specifics

The **Database Cluster Recovery** add-on can operate in the diagnostic and recovery modes. The first one scans the database to identify if there are any problems, and the second tries to resolve the issue based on the obtained information.

During diagnostic, the add-on checks the following:

- replication for the Primary-Secondary and Primary-Primary topologies
- the cluster size for Galera/XtraDB clusters
- Galera/XtraDB clusters status
- cluster services status

In order to perform the required recovery operations, the add-on applies the following adjustments to the database cluster during the installation:

A replica user is added to perform the validation of the clusters. Also, this user is used in the ProxySQL configuration. The credentials can be viewed via the dedicated [environment variables](/environment-management/environment-variables/environment-variables):

- **REPLICA_USER**: repl-xxxxxx
- **REPLICA_PSWD**: xxxxxxxxxxxx

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/ClusterRecoveryAdd-On/01-replica-user-credentials.png)

</div>

Also, SSH access is configured between the database nodes (with the dedicated set of SSH keys) to allow data coping with rsync during the restoration procedure.

## Add-On Installation

The add-on is available via the platform Marketplace. Alternatively, you can import the appropriate **_[Database Cluster Recovery](https://github.com/jelastic-jps/mysql-cluster/tree/master/addons/recovery)_** package from GitHub.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/ClusterRecoveryAdd-On/02-database-recovery-addon.png)

</div>

In the opened confirmation window, provide the required data:

- **User** and **Password** - the database admin user credentials
- **Environment name** - select an environment with the required database cluster from the list
- **Nodes** - choose a layer with the database cluster

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/ClusterRecoveryAdd-On/03-recovery-addon-installation.png)

</div>

Click **Install** and wait a few minutes for the add-on to be installed. It will appear in the list of add-ons of the appropriate layer.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/ClusterRecoveryAdd-On/04-recovery-addon-actions.png)

</div>

## Add-On Usage

The add-on can perform two actions that can be executed by clicking the appropriate buttons:

- **_Cluster Diagnostic_** - detects problems with the database cluster (scans if nodes are accessible and databases are consistent)
- **_Cluster Recovery_** - tries resolving common problems to restore cluster operability
  The result of the **_Cluster Diagnostic_** action can be either “Cluster is OK” or “Errors discovered” dashboard notification.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/ClusterRecoveryAdd-On/05-recovery-addon-diagnostic-errors.png)

</div>

For extended details, you can click the **Show Logs** button to open the **_/var/log/db_recovery.log_** file:

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/ClusterRecoveryAdd-On/06-recovery-addon-logs.png)

</div>

In case some problems are discovered, you can try to resolve them automatically with the **_Cluster Recovery_** action. It should handle most of the issues and fully restore cluster operability:

:::danger Note

We recommend [making a backup](/database/database-hosting/manual-database-backups) of the database before the recovery.

:::

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/ClusterRecoveryAdd-On/07-successful-recovery.png)

</div>

For additional details or in case of recovery failure, you can check the **_db_recovery_** [log](/application-setting/built-in-monitoring/log-files) mentioned above. Also, check the **[Manual Recovery](https://github.com/jelastic-jps/mysql-cluster/blob/master/addons/recovery/docs/ManualRecoveryGuide.md#configuration-file-restoration)** guide if the problem is not resolved.
