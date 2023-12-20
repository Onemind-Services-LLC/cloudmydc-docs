---
title: Database Connection Strings
slug: database-connection-strings
sidebar_position: 4
---

import obj from './DatabaseConnectionStrings.json'

<!-- ## Database Connection Strings -->

All instances, created inside the platform, are operated as independent containers. To establish connection to a database from the application, deployed within application server, you need to set a connection string for it, using either:

- [CNAME](/database/database-hosting/db-hosting-overview#database-admin-panel-url) of database, e.g. _node{node_id}-{environment_name}.{hoster_domain}_
- Private IP address
- [Public IP](/application-setting/external-access-to-applications/public-ip#public-ip) address (if attached)

:::danger Note

Specifying localhost within a connection string will not work for establishing connection between application and database.

:::

Depending on the engine that powers your environment, refer to one of the sections below:

- [Java](/database/database-hosting/database-connection-strings#database-connection-for-java-apps)
- [PHP](/database/database-hosting/database-connection-strings#database-connection-for-php-apps)

## Database Connection for Java Apps

Look through the table of database types to find the appropriate DB connection code for your application:

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
            gridTemplateColumns: '1fr 2fr',
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
                DB Type
            </div>
            <div style={{
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                padding: '20px',
                borderRight: '1px solid var(--ifm-toc-border-color)',
                wordBreak: 'break-all'
            }}>
               Connection code
            </div>
        </div>
        {obj.data1.map((item, idx) => {
          return <div key={idx} style={{
            width: '100%',
            height: 'auto',
            border: '1px solid var(--ifm-toc-border-color)',
            display: 'grid', 
            gridTemplateColumns: '1fr 2fr',
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
                {item.required ? <a href={item.url}>
                    {item.DBType}
                </a> : <a>
                    {item.DBType}
                </a>}
            </div>
            <div style={{
                padding: '20px',
                wordBreak: 'break-all'
            }}>
                {item.ConnectionCode}
            </div>
        </div> 
        })}
    </div> 
</div>

For the UTF-8 encoding, modify your connection string according to this:

_“jdbc:{dbtype}://{dbtype}{node_id}-{environment_name}.{hoster_domain}/{dbname}?useUnicode=yes&characterEncoding=UTF-8”_

:::tip Tip

Your hosting provider domain can be found within the last column of the appropriate table in the [Hosters Info](/quickstart/hosters-list-&-info#paas-hosting-providers) page.

In case your hosting provider platform has several [environment regions](/environment-management/environment-regions/choosing-a-region#environment-regions) to choose, the {hoster_domain} value for your environment can differ from the general platform’s one.

:::

## Database Connection for PHP Apps

Based on the used DB type, check out the connection code examples below and adjust your application appropriately:

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
            gridTemplateColumns: '1fr 2fr',
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
                DB Type
            </div>
            <div style={{
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                padding: '20px',
                borderRight: '1px solid var(--ifm-toc-border-color)',
                wordBreak: 'break-all'
            }}>
               Connection code
            </div>
        </div>
        {obj.data2.map((item, idx) => {
          return <div key={idx} style={{
            width: '100%',
            height: 'auto',
            border: '1px solid var(--ifm-toc-border-color)',
            display: 'grid', 
            gridTemplateColumns: '1fr 2fr',
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
                    {item.DBType}
                </a>
            </div>
            <div style={{
                padding: '20px',
                wordBreak: 'break-all'
            }}>
                {item.ConnectionCode}
            </div>
        </div> 
        })}
    </div> 
</div>

:::tip Note

It is required to specify the host string without http://. The appropriate address and credentials are located in the email you’ve received upon database creation.

:::
