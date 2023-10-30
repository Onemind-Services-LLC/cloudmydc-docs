---
sidebar_position: 7
---

# Import and Export Dump Files to MySQL/MariaDB/Percona
## Dump Import
1. Create a new server instance using any desktop client for **MySQL/MariaDB/Percona** (we use MySQL Workbench as an example).

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/DumpImport-Export/01-mysql-workbench.png)
</div>

2. Specify your **host machine** (just paste your public IP into the address field) and click **Next**.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/DumpImport-Export/02-remote-host-public-ip.png)

</div>

3. Set the database connection values: **IP address**, **port number**, **username** and **password** (when you created the environment, the platform sent you an email with credentials to the database).

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/DumpImport-Export/03-database-connection-credentials.png)
</div>

4. Then your database connection will be tested for a couple of minutes.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/DumpImport-Export/04-testing-database-connection.png)
</div>

5. Set the type of remote management you want to use.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/DumpImport-Export/05-do-not-use-remote-management.png)
</div>

6. Enter the name for your server instance.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/DumpImport-Export/06-server-instance-name.png)
</div>

7. You can see that your server instance is successfully created.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/DumpImport-Export/07-database-connection-established.png)
</div>

8. Open your instance and pick **Data Import/Restore** and choose the dump you want to import.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/DumpImport-Export/08-data-import-restore.png)
</div>

The import process can take several minutes.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/DumpImport-Export/09-start-import.png)
</div>

9. Go back to the platform dashboard and open **MySQL** (**MariaDB**) in a browser. Using the credentials, which the platform sent you, sign in into admin page. Select **test**, click on **example** and you’ll see your imported dump.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/DumpImport-Export/10-phpmyadmin-imported-dump.png)
</div>

## Dump Export
1. Open the server instance you have created earlier in your desktop client and pick **Data Export** and select database objects to export. Specify the path to the directory, in which you want to export the dump.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/DumpImport-Export/11-data-export.png)
</div>

2. The export process can take several minutes, depending on the size of exported data.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/DumpImport-Export/12-start-export.png)
</div>

Your dump file will be in the directory, the path to which you have specified.
