---
title: Database configuration files
slug: database-configuration-files
sidebar_position: 2
---

import obj from './DatabaseConfigurationFiles.json'

## Database Configuration Files

In this guide, we’ll list all the main configuration files in the [platform-managed database](/docs/quickstart/software-stack-versions) servers. Each line of the table corresponds to the folder with configs for the databases listed in the Database Types column.

<div style={{
        width: '100%',
        margin: '0 0 5rem 0',
        borderRadius: '7px',
        overflow: 'hidden',
    }} >
    <div>
        <div style={{
            width: '100%',
            height: 'auto',
            border: '1px solid var(--ifm-toc-border-color)',
            display: 'grid', 
            fontWeight: '500',
            color: 'var(--table-color-primary)',
            background: 'var(--table-bg-primary-t2)', 
            gridTemplateColumns: '1fr 2fr 1fr',
            overflow: 'hidden',
        }}>
            <div style={{
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                padding: '20px',
                wordBreak: 'break-all',
                borderRight: '1px solid var(--ifm-toc-border-color)',
            }}>
                Folder
            </div>
            <div style={{
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                padding: '20px',
                borderRight: '1px solid var(--ifm-toc-border-color)',
                wordBreak: 'break-all'
            }}>
               Path
            </div>
            <div style={{
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                padding: '20px',
                borderRight: '1px solid var(--ifm-toc-border-color)',
                wordBreak: 'break-all'
            }}>
                Database Types
            </div> 
        </div>
        {obj.data1.map((item, idx) => {
          return <div key={idx} style={{
            width: '100%',
            height: 'auto',
            border: '1px solid var(--ifm-toc-border-color)',
            display: 'grid', 
            gridTemplateColumns: '1fr 2fr 1fr',
            fontWeight: '400',
        }}>
            <div style={{
                padding: '20px',
                borderRight: '1px solid var(--ifm-toc-border-color)',
                background: 'var(--table-bg-primary-t1)',
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'flex-start',
                wordBreak: 'break-all',
                padding: '20px',
            }}>
                <a href={item.url}>
                {item.Folder}
                </a>
            </div>
            <div style={{
                padding: '20px',
                wordBreak: 'break-all'
            }}>
                {item.Path}
            </div>
            <div style={{
                wordBreak: 'break-all',
                 padding: '20px',
            }}>
                {item.DatabaseTypes}
            </div>
        </div> 
        })}
    </div> 
</div>

## ETC

The PHP configurations are performed in the **_php.ini_** file, which is located in the **etc** folder.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/DatabaseConfigurationFiles/01-database-phpini.png)

</div>

_MySQL_, _MariaDB_ and _Percona_ include the **_my.cnf_** configuration file for database management. Note that the platform automatically manages the following settings in this file:

- _key_buffer_size_
- _table_open_cache_
- _myisam_sort_buffer_size_
- _innodb_buffer_pool_size_

If you want to manually change any of the settings from the list above, you need to remove the “_#Jelastic autoconfiguration mark._” line at the start of the file. Otherwise, your custom changes will be overwritten.

:::tip Tip

Alternatively, you can override any of the settings in the **_/etc/my.cnf_** file (including ones managed by the platform autoconfiguration mark) by stating them in the **_/etc/mysql/conf.d/custom.cnf_** file.

:::

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/DatabaseConfigurationFiles/02-mysql-mycnf.png)

</div>

## CRON

The database servers include the **/var/spool/cron** folder with a config file, where cron jobs can be configured.

For example, you can set the [scheduled backups](/docs/Database/Database%20Hosting/Manual%20Database%20Backups#manual-database-backups) of your database. The required cron expression is included in the cron config file by default. You just need to uncomment the appropriate line and, if necessary, adjust it based on your custom requirements.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/DatabaseConfigurationFiles/03-database-cron-config.png)

</div>

You can find more information in the [Setting Up Cronjob](/docs/ApplicationSetting/Scheduling%20Configuration/Setting%20Up%20Cronjob#setting-up-cronjob) documentation.

## SCRIPTS

This folder contains the default **_[backup_script.sh](/docs/Database/Database%20Hosting/Manual%20Database%20Backups#manual-database-backups)_** script. You can also use the **/var/lib/jelastic/bin** folder for uploading your custom scripts.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/DatabaseConfigurationFiles/04-database-scripts-folder.png)

</div>

## BACKUP

The **/var/lib/jelastic/backup** folder is used for storing the [database backup](/docs/Database/Database%20Hosting/Manual%20Database%20Backups#manual-database-backups) files. You can use these files for restoring your database data.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/DatabaseConfigurationFiles/05-database-backup-folder.png)

</div>

## KEYS

The **/var/lib/jelastic/keys** directory is used as a location for uploading private keys that are needed for your application.

Generate the key, save it as a simple file, and upload it to the **keys** folder. You can then use it for different cases by merely stating the path to your key, i.e. _/var/lib/jelastic/keys/{keyName}_.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/DatabaseConfigurationFiles/06-database-keys-folder.png)

</div>

## CONF.D

The **/etc/httpd/conf.d** folder is usually used to store and manage sub-configs.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/DatabaseConfigurationFiles/07-database-confd-folder.png)

</div>

For example, you can access the admin panel configuration file (depends on the database, e.g. **_phpMyAdmin-jel.conf_** for MySQL) via the **conf.d** folder. Use these files to set appropriate criteria for allowing/denying access by IP address or domain.

## CONF

The main configuration files of the PostgreSQL database server are located in the **_/var/lib/pgsql/data_** folder. For example, it includes configs such as **_postgresql.conf, pg_hba.conf, pg_ident.conf_**, etc.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/DatabaseConfigurationFiles/08-postgresqlconf-configuration-file.png)

</div>

PaaS automatically manages the following two parameters in the **_/var/lib/pgsql/data/postgresql.conf_** file for PostgreSQL databases:

- **shared_buffers** - calculates as a part of total RAM - quarter if a container has eight or more cloudlets, seventh part otherwise (but not less than 128 KB)
- **max_stack_depth** - calculates as 1024 subtraction from the maximum stack size (response of the ulimit -s command), converted to MB
  If you want to change any of these settings manually, you need to remove the “#Jelastic autoconfiguration mark.” line at the start of the file. Otherwise, your custom changes will be overwritten.
