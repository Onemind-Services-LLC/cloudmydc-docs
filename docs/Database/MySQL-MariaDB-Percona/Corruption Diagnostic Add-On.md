---
sidebar_position: 4
---

## MySQL/MariaDB/Percona Corruption Diagnostic Add-On

The **[Database Corruption Diagnostic](https://github.com/jelastic-jps/mysql-cluster/tree/master/addons/check-corrupts)** add-on is available for all the MySQL/MariaDB/Percona databases (including cluster topologies) and can perform diagnostics to detect file corruption. It checks the integrity of the cluster’s indexes, tables, and databases.

The list of supported stacks for corruption diagnostic:

- Standalone MariaDB/MySQL/Percona stacks
- Primary-Secondary Cluster based on MariaDB/MySQL/Percona stacks
- Primary-Primary Cluster based on MariaDB/MySQL/Percona stacks
- Galera Cluster based on MariaDB stack
- XtraDB Cluster based on Percona stack

## Add-On Installtion

The add-on can be installed either automatically along with database cluster installation or manually from [Marketplace](/docs/Deployment%20Tools/Cloud%20Scripting%20&%20JPS/Marketplace#marketplace).

1. Go to the **Add-Ons** section in the Marketplace and pick the **Database Corruption Diagnostic** add-on.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/CorruptionDiagnosticAdd-On/01-marketplace-corruption-diagnostic-addon.png)

</div>

2. In the opened installation window, provide the required data:

- **User** and **Password** - the database admin user credentials
- **Environment name** - select an environment with the required database cluster from the list
- **Nodes** - choose a layer with the database cluster

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/CorruptionDiagnosticAdd-On/02-install-corruption-diagnostic-addon.png)

</div>

Click **Install** and wait a minute for the add-on to be installed.

## Add-On Usage

1. You can find the **_Database Corruption Diagnostic_** add-on under the **Add-On** tab for the database layer.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/CorruptionDiagnosticAdd-On/03-installed-addons.png)

</div>

2. Click the **Corruption Diagnostic** button to run the diagnostic for your database.

:::danger Note

The operation will temporarily stop the database services, so be aware of the downtime before confirming.

:::

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/CorruptionDiagnosticAdd-On/04-confirm-corruption-diagnostic.png)

</div>

3. In a few minutes, you’ll see the diagnostic result in the pop-up notification with a link to the **_/var/log/db_recovery.log_** file with more details.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/CorruptionDiagnosticAdd-On/05-diagnostic-result.png)

</div>

In case of detecting corrupted data, it is recommended to restore your database from a backup. You can use the **[Backup/Restore](/docs/Database/MySQL-MariaDB-Percona/Backup-Restore%20Add-On#database-backuprestore-add-on)** add-on to schedule regular backup creation, ensuring you always have a backup to restore your database in case of an emergency.
