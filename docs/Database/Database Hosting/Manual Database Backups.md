---
sidebar_position: 8
---

## Manual Database Backups

The platform provides all [certified database stacks](https://cloudmydc.com/) with a convenient and straightforward script for backing up the stored data. Thus, the process is as simple as providing the required parameters and can be accomplished in a matter of minutes. Herewith, no specialized knowledge is needed - just follow the [setup steps](https://cloudmydc.com/) to configure the appropriate cron expression.

Additionally, we’ll show how you can work with the created backups:

- [Check Backups](https://cloudmydc.com/)
- [Download Backup](https://cloudmydc.com/)
- [Restore Database](https://cloudmydc.com/)

For this tutorial, we’ll use a MySQL database as an example. However, the required steps are similar for all the other databases.

## Backups Scheduling

Let’s use the default backup script to automate the process of backup creation and configure it up to your specific needs (e.g. frequency, number of old backups to keep, etc.). Herewith, if you don’t have an environment with a database yet, follow the [Database Hosting](https://cloudmydc.com/) guide to create one.

1. The source code of the script can be viewed directly within the dashboard. Click the **Config** button next to your database to open the built-in file manager and locate the **_/var/lib/jelastic/bin/backup_script.sh_** file.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/ManualDatabaseBackups/01-database-backup-script.png)

</div>

:::danger Note

The backup script is not available for the **[Redis](https://cloudmydc.com/)** stack, which is key-value storage, usually used as cache.

:::

2. To automate the script execution, we’ll use the _[cron scheduler](https://cloudmydc.com/)_ available within the containers out-of-box. Open the **_/var/spool/cron/mysql_** file and provide a cron expression in the following format:

```bash
{frequency} {path-to-script} {script-parameters}
```

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/ManualDatabaseBackups/02-database-cron-config-file.png)

</div>

Here, you can use the commented examples as a template to define the required parameters:

- **_{frequency}_** - sets the time of the script execution (see the guide linked above for details), e.g. _/10 _ \* \* \* to create backup every 10 minutes
- **_{path-to-script}_** - points to the required script (default backup script is available at /var/lib/jelastic/bin/backup_script.sh)
- **_{script-parameters}_** - provides custom parameters for the defined script; the following ones are available in our case:
  - **_-m {mode}_** to backup whole or part of the database ("_-m dumpall_" or "_-m dump_" respectively)
  - **_-c {count}_** to set a number of the old backups to keep (e.g. "-c 3" to keep 3 old backups alongside the most recent one)
  - **_-u {user}_** and **_-p {password}_** to provide access credentials for your database (can be found in the after-creation email)

:::danger Note

If your **_{password}_** contains special characters, it should be included in the double quotation. Also, due to the cron specifics, you need to provide additional escaping for the % symbol by adding a backslash before it, for example -p "passw\\%rd".

:::
-d {databases} and -t {tables} to optionally specify list of databases ("-d db1[,db2,db3….]") or tables within a database ("-d db -t table1[,table2,table3….]") to backup

3. <u>For example</u>, if you want to back up a whole database every 10 minutes with the help of the default script, then the string should be as follows:

```bash
*/10 * * * * /var/lib/jelastic/bin/backup_script.sh -m dumpall -c 3 -u root -p passw0rd
```

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/ManualDatabaseBackups/03-cron-expression-for-db-backup-script.png)

</div>

**Save** the settings to apply them.

4. To store data on some other node or the remote server, you can configure the appropriate mount point for your database.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/ManualDatabaseBackups/04-store-backups-on-remote-server.png)

</div>

:::danger Note

Any existing data in the mount point folder will be replaced with the files from the remote directory.

:::

Alternatively, you can create a custom backup script, runnable from the remote server (database host, user, and password details will be required to establish a connection).

## Check Backups

Wait for the script to be executed (depends on the configured cron frequency) and navigate to the **_/var/lib/jelastic/backup_** folder.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/ManualDatabaseBackups/05-check-database-backup-files.png)

</div>

If the backup operation is successful, you’ll see the appropriate **_bz2_** archive within the directory.

## Download Backup

There are multiple options to download a file from a container:

1. The most straightforward variant is to use the [configuration file manager](/docs/ApplicationSetting/Configuration%20File%20Manager) directly in the dashboard.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/ManualDatabaseBackups/06-download-backups-with-dashboard.png)

</div>

Locate the required file, hover over it, and select **Download** from the context menu.

2. Another option is to use the [SFTP/FISH protocol](https://cloudmydc.com/) connection.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/ManualDatabaseBackups/07-download-backups-with-sftp-fish-protocols.png)

</div>

The required access details can be viewed within the dashboard.

3. Also, you can install [FTP add-on](https://cloudmydc.com/) for your database to manage files via FTP.

:::danger Note

A [public IP](/docs/ApplicationSetting/External%20Access%20To%20Applications/Public%20IP) address is required for this option. If needed, it will be automatically attached to the node during add-on installation.

:::

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/ManualDatabaseBackups/08-ftp-add-on-for-backups-download.png)

</div>

Based on your preferences, you can choose any of the proposed options.

## Restore Database

In case of necessity, you can easily restore your database from the backups. For our MySQL example, the following steps are required:

1. Access the **phpMyAdmin** panel with the credentials from the email you’ve got after the creation of a DB node.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/ManualDatabaseBackups/09-email-with-db-access-credentials.png)

</div>

2. Navigate to the **Import** tab, tick the Browse your computer option, and use the **Choose File** button to upload the required backup.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/ManualDatabaseBackups/10-import-backups-via-db-admin-panel.png)

</div>

Click **Go** at the bottom of the page.

3. When the import is successfully finished, you’ll see the appropriate notification in the admin panel.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/ManualDatabaseBackups/11-database-successfully-restored-from-backup.png)

</div>

That’s all! Now, you can be sure that all your data is periodically saved and, in case of necessity, can be restored or reused.
