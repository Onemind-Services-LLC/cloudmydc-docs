---
sidebar_position: 4
---

import obj from './PHPAppServerConfiguration.json'

## PHP Application Server Configuration

To perform the necessary configurations, press the **Config** button next to your application server. In the case you have **several application servers** you can configure them together or separately. To do this follow the steps:

1. Open the drop-down menu at the top of the configuration tab. It includes the list of all of the app servers in your environment.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/PHPAppServerConfiguration/01-multiple-php-nodes.png)

</div>

2. Choose the one you need and make the configurations.

3. To apply the changes:

- only for the chosen server click **Save only for the current instance** button from drop-down menu;
- for all the servers click **Save for all instances**.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/PHPAppServerConfiguration/02-save-for-current-all-instances.png)

</div>

:::danger Note

If you create/rename a file or folder in the Configuration manager, this will be applied only in the list of the chosen node. You can’t save this change for all of the app servers available in the environment. If you want to also create/rename the file or folder in the other servers you need to do this manually.

:::

Below you can see the list of the configuration files available for editing in the PHP application servers:

## Apache

<div style={{
        width: '100%',
        margin: '0 0 2rem 0',
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
            gridTemplateColumns: '1fr 1fr 1fr',
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
               File
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
        </div>
        {obj.data1.map((item, idx) => {
          return <div key={idx} style={{
            width: '100%',
            height: 'auto',
            border: '1px solid var(--ifm-toc-border-color)',
            display: 'grid', 
            gridTemplateColumns: '1fr 1fr 1fr',
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
                {item.Folder}
            </div>
            <div style={{
                padding: '20px',
                wordBreak: 'break-all'
            }}>
                {item.File}
            </div>
            <div style={{
                wordBreak: 'break-all',
                 padding: '20px',
            }}>
                {item.Path}
            </div>
        </div> 
        })}
    </div> 
</div>

## NGINX-PHP


<div style={{
        width: '100%',
        margin: '0 0 2rem 0',
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
            gridTemplateColumns: '1fr 1fr 1fr',
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
               File
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
        </div>
        {obj.data2.map((item, idx) => {
          return <div key={idx} style={{
            width: '100%',
            height: 'auto',
            border: '1px solid var(--ifm-toc-border-color)',
            display: 'grid', 
            gridTemplateColumns: '1fr 1fr 1fr',
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
                {item.Folder}
            </div>
            <div style={{
                padding: '20px',
                wordBreak: 'break-all'
            }}>
                {item.File}
            </div>
            <div style={{
                wordBreak: 'break-all',
                 padding: '20px',
            }}>
                {item.Path}
            </div>
        </div> 
        })}
    </div> 
</div>

Clik on the links to get more information on which settings can be changed in the appropriate folders.

## ETC

The main PHP server configurations are performed in the **_php.ini_** file which is located in the **etc** folder.

For example, here you can set the required:

- [PHP Extensions](https://cloudmydc.com/)
- [PHP Accelerators](https://cloudmydc.com/)
- [Storing PHP sessions in Memcached](https://cloudmydc.com/)
- [PHP.INI Security Configurations](https://cloudmydc.com/)
- [php.ini configuration file](https://cloudmydc.com/)

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/PHPAppServerConfiguration/03-php-ini-configuration-file.png)

</div>

Back to the list

## CONF

- **Apache**

For the Apache application server the main configuration file is the **_httpd.conf_** located in the **conf** folder. For example, by using it, you can perform the following actions:

- set up [Multiple Domains](https://cloudmydc.com/)
- enable [custom Apache modules](https://cloudmydc.com/)
- use [WebDav module](https://cloudmydc.com/)
- perform necessary [security configurations](https://cloudmydc.com/)
- configure [name-based virtual host](https://cloudmydc.com/)
- enable [statistics module](https://cloudmydc.com/) to view your server’s statistics

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/PHPAppServerConfiguration/04-httpd-configuration-file.png)

</div>

:::danger Note

In order to perform any custom configurations in the **_httpd.conf_** file, you need to remove the _#Jelastic autoconfiguration mark_ string at the beginning of the file:

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/PHPAppServerConfiguration/05-autoconfiguration-mark.png)

</div>

:::

The number of workers for processing PHP requests is increased automatically in an Apache server depending on the cloudlet amount you stated for it.

To check this, find and remember the _MaxClients_ value in **_httpd.conf_** file.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/PHPAppServerConfiguration/06-maxclients-value-before.png)

</div>

After that, change the topology of your environment by increasing or decreasing the cloudlet limit for your server.

Return to the **_httpd.conf_** file - the number of _MaxClients_ has increased/decreased.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/PHPAppServerConfiguration/07-maxclients-value-after.png)

</div>

:::danger Note

This functionality will be disabled if you remove the _# Jelastic autoconfiguration mark_ string at the start of the **_httpd.conf_** file

:::

- **NGINX**

For performing necessary configurations for an NGINX-PHP server the **_nginx.conf_** file, located in **conf** folder, is used. Use it to set up the following configurations:

- set up [Multiple Domains](https://cloudmydc.com/)
- use [WebDav module](https://cloudmydc.com/)
- perform necessary [security configurations](https://cloudmydc.com/)

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/PHPAppServerConfiguration/08-nginx-configuration-file.png)

</div>

Back to the list

## CONF.D

The **conf.d** folder is used for storing and managing sub configs.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/PHPAppServerConfiguration/09-confd-folder-for-configs.png)

</div>

Back to the list

## WEBROOT

The **webroot** folder is used for storing the unpacked application deployed to the environment.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/PHPAppServerConfiguration/10-webroot-folder-for-applications.png)

</div>

Back to the list

## CRON

App servers include a **cron** folder with the config file where cronjobs can be configured.

Detailed information on Cronjob configuration can be found in the [Setting Up a Cronjob](https://cloudmydc.com/) document.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/PHPAppServerConfiguration/11-cron-folder-for-cronjobs.png)

</div>

Back to the list

## KEYS

The **keys** directory is used as a location for uploading any private key which is needed for your application.

Generate the key, save it as a simple file and upload to the **key** folder. Now, you can use it for different cases by simply stating the path to your key:

_/var/lib/jelastic/keys/{key_file_name}_

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/PHPAppServerConfiguration/12-keys-folder-for-ssh-keys.png)

</div>

Back to the list

## MODULES

The modules folder contains the php modules available in the platform by default. You can also upload your custom php modules to this folder, in order to activate them.

For more information navigate to [PHP Modules](https://cloudmydc.com/) document.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/PHPAppServerConfiguration/13-modules-folder-for-php-modules.png)

</div>

Back to the list
