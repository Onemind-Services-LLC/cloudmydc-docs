---
sidebar_position: 4
---

import obj from './JavaAppServerConfiguration.json'

## Java Application Server Configuration

To perform the necessary configurations, press the **Config** button next to your application server. In the case you have **several application servers** you can configure them together or separately. To do this follow the steps:

- Open the drop-down menu at the top of the configuration tab. It includes the list of all of the app servers in your environment.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/JavaAppServerConfiguration/list-of-app-servers.png)

</div>

- Choose the one you need and make the configurations.
- To apply the changes:

  - only for the chosen server click **Save only for current instance** button from drop-down menu;
  - for all the servers click **Save**.

  <div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
    }}>

  ![Locale Dropdown](./img/JavaAppServerConfiguration/list-of-app-servers.png)

    </div>

:::tip Note

if you create/rename a file or folder in the Configuration manager, this will be applied only in the list of the chosen node. You can’t save this change for all of the app servers available in the environment. If you want to also create/rename the file or folder in the other servers you need to do this manually.

:::

Below you will see the list of the configuration files available for editing in the Java application servers:

- [Tomcat](https://cloudmydc.com/)
- [TomEE](https://cloudmydc.com/)
- [GlassFish](https://cloudmydc.com/)
- [Jetty](https://cloudmydc.com/)

To get more information on which settings can be changed in the provided config folders, use the appropriate descriptions:

- [server](https://cloudmydc.com/)
- [home](https://cloudmydc.com/)
- [webapps/work](https://cloudmydc.com/)
- [JAVA_HOME](https://cloudmydc.com/)
- [lib](https://cloudmydc.com/)
- [cron](https://cloudmydc.com/)
- [keys](https://cloudmydc.com/)
- [contexts](https://cloudmydc.com/)
- [server_lib](https://cloudmydc.com/)
- [apps](https://cloudmydc.com/)

## SERVER

The main Java servlet container configurations are performed in the files, located in the **_server_** folder.

Using the following config files, you can perform the actions listed below (these are just some examples):

**_<u>context.xml</u>_**

- configure [session replication via Memcached](https://cloudmydc.com/)

  **_<u>web.xml</u>_**

- configure [remote access via WebDav](https://cloudmydc.com/)

  **_<u>server.xml</u>_**

- enable [Multiple Domains](https://cloudmydc.com/)

  **_<u>variables.conf</u>_**

- configure memory settings for your java containers by stating your custom [GC](https://cloudmydc.com/), [-Xmx](https://cloudmydc.com/), [-Xms](https://cloudmydc.com/) parameters (use standard parameters stating each at the new line):

  _-Xmx< size >m -Xms< size >m_

- set your custom [system properties](https://cloudmydc.com/) for your [Tomcat, TomEE, Jetty](https://cloudmydc.com/) or [GlassFish](https://cloudmydc.com/):

  _-Dvar1=value1 -Dvar2=value2 -Dmy.var3=/my/value_

- configure [JavaAgent interceptor](https://cloudmydc.com/)

- enable [remote debugging](https://cloudmydc.com/):
  _-Xdebug -Xrunjdwp:transport=dt_socket,server=y,suspend=n,address={port_number}_

**Note** that this file is available only for **Tomcat 6,7** and **TomEE** application servers. For configuring a **GlassFish** server, use the _Admin Panel_.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
    }}>

![Locale Dropdown](./img/JavaAppServerConfiguration/9.png)

</div>

[Back to the list](https://cloudmydc.com/)

## HOME

If you need to use any custom files/folders for configuring your application you can download/create them in the **home** directory which is used as a storage in your Java server.

As a result you can make configurations specifying the path to your downloaded/created files in the **_variables.conf_** file (_server_ folder).

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
    }}>

![Locale Dropdown](./img/JavaAppServerConfiguration/home.PNG)

</div>

[Back to the list](https://cloudmydc.com/)

:::tip Note

though the server’s directory, which refers to this folder, can be named temp for some servers, it is never automatically cleaned by the platform system.

:::

[Back to the list](https://cloudmydc.com/)

## WEBAPPS / WORK

The **webapps** (for Tomcat/TomEE) and **work** (for Jetty) folders are used for storing the unpacked application deployed to the environment.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
    }}>

![Locale Dropdown](./img/JavaAppServerConfiguration/1.png)

</div>

[Back to the list](https://cloudmydc.com/)

[Back to the list](#app_server)

## JAVA_HOME

The **JAVA_HOME** folder contains the java config files and libs. Here, you can edit java settings and upload additional java libraries.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
    }}>

![Locale Dropdown](./img/JavaAppServerConfiguration/java-home.png)

</div>

[Back to the list](https://cloudmydc.com/)

## LIB

The **lib** folder is used for storing default and uploading custom **jar** libraries.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
    }}>

![Locale Dropdown](./img/JavaAppServerConfiguration/lib.png)

</div>

[Back to the list](https://cloudmydc.com/)

## CRON

App servers include a cron folder with the config file, where cronjobs can be configured. Detailed information on Cronjob configuration can be found in the [Setting Up a Cronjob](https://cloudmydc.com/) document.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
    }}>

![Locale Dropdown](./img/JavaAppServerConfiguration/4.png)

</div>

[Back to the list](https://cloudmydc.com/)

## KEYS

The **keys** directory is used as a location for uploading any private key which is needed for your application. Generate the key, save it as a simple file and upload to the **key** folder. It can be used for different cases by simply stating the path to your key:

_/var/lib/jelastic/keys/{key_file_name}_

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
    }}>

![Locale Dropdown](./img/JavaAppServerConfiguration/java-key.png)

</div>

[Back to the list](https://cloudmydc.com/)

## CONTEXTS

The **contexts** folder contains XML config files for each deployed context. All of these files are open for editing.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
    }}>

![Locale Dropdown](./img/JavaAppServerConfiguration/context.png)

</div>

[Back to the list](https://cloudmydc.com/)

## SERVER_LIB

The **server_lib** folder is the GlassFish config directory with all available server libraries.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
    }}>

![Locale Dropdown](./img/JavaAppServerConfiguration/serverlib.png)

</div>

[Back to the list](https://cloudmydc.com/)

## APPS

The **apps** TomEE folder is used for storing the unpacked EE application deployed to the environment.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
    }}>

![Locale Dropdown](./img/JavaAppServerConfiguration/apps.png)

</div>

[Back to the list](https://cloudmydc.com/)

## Tomcat

<div style={{
        width: '100%',
              margin: '0 0 1rem 0',
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

[Back to the list](https://cloudmydc.com/)

## TomEE

<div style={{
        width: '100%',
               margin: '0 0 1rem 0',
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

[Back to the list](https://cloudmydc.com/)

## GlassFish

<div style={{
        width: '100%',
        margin: '0 0 1rem 0',
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
        {obj.data3.map((item, idx) => {
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

[Back to the list](https://cloudmydc.com/)

## Jetty

<div style={{
        width: '100%',
        margin: '0 0 1rem 0',
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
        {obj.data4.map((item, idx) => {
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

[Back to the list](https://cloudmydc.com/)
