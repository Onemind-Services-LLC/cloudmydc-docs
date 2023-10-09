---
sidebar_position: 5
---

import obj from './HTTPHeaders.json'

**[HTTP headers](https://cloudmydc.com/)** are the core part of the HTTP requests and responses. They pass additional information with an HTTP request or response (e.g. the client browser, requested page, server, and more).

The main headers used with environments for deploying your applications:

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
                Header
            </div>
            <div style={{
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                padding: '20px',
                borderRight: '1px solid var(--ifm-toc-border-color)',
                wordBreak: 'break-all'
            }}>
               Description
            </div>
            <div style={{
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                padding: '20px',
                borderRight: '1px solid var(--ifm-toc-border-color)',
                wordBreak: 'break-all'
            }}>
                Value
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
                {item.required ? <a href="#">
                    {item.field}
                </a> : 
                item.field
                }
            </div>
            <div style={{
                padding: '20px',
                wordBreak: 'break-all'
            }}>
                {item.description}
            </div>
            <div style={{
                wordBreak: 'break-all',
                 padding: '20px',
            }}>
                {item.value}
            </div>
        </div> 
        })}
    </div> 
</div>

:::tip Tip

Additional security headers are used for some specific stacks.

:::

The list of supported HTTP headers can vary based on the topology of the connected environment. Due to external access specifics (via [resolver/SLB](https://cloudmydc.com/) or [public IP](https://cloudmydc.com/)), there are four possible scenarios when working with the platform:

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
                Header
            </div>
            <div style={{
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                padding: '20px',
                borderRight: '1px solid var(--ifm-toc-border-color)',
                wordBreak: 'break-all'
            }}>
               Description
            </div>
            <div style={{
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                padding: '20px',
                borderRight: '1px solid var(--ifm-toc-border-color)',
                wordBreak: 'break-all'
            }}>
                Value
            </div> 
        </div>
        <div style={{
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
Single application server	
            </div>
<div style={{
    padding: '20px',
    wordBreak: 'break-all'
}}>

![Locale Dropdown](./img/HTTPHeaders/01-slb-to-app-server.png)

</div>
            <div style={{
                wordBreak: 'break-all',
                 padding: '20px',
            }}>
host x-forwarded-proto x-real-ip x-forwarded-for x-host
            </div>
        </div> 
        <div style={{
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
Load balancer with application servers
            </div>
<div style={{
    padding: '20px',
    wordBreak: 'break-all'
}}>

![Locale Dropdown](./img/HTTPHeaders/02-slb-to-load-balancer.png)

</div>
            <div style={{
                wordBreak: 'break-all',
                 padding: '20px',
            }}>
host x-real-ip x-host x-forwarded-for x-uri x-forwarded-proto
            </div>
        </div> 
        <div style={{
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
Application server with public IP	
            </div>
<div style={{
    padding: '20px',
    wordBreak: 'break-all'
}}>

![Locale Dropdown](./img/HTTPHeaders/03-public-ip-to-app-server.png)

</div>
            <div style={{
                wordBreak: 'break-all',
                 padding: '20px',
            }}>
host
            </div>
        </div> 
        <div style={{
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
Load balancer with public IP and application servers	
            </div>
<div style={{
    padding: '20px',
    wordBreak: 'break-all'
}}>

![Locale Dropdown](./img/HTTPHeaders/04-public-ip-to-load-balancer.png)

</div>
            <div style={{
                wordBreak: 'break-all',
                 padding: '20px',
            }}>
host x-real-ip x-host x-forwarded-for x-uri x-forwarded-proto
            </div>
        </div> 
    </div> 
</div>

## Security Headers

You can easily manage security headers by managing the appropriate configuration file. The path is different for different servers:

- _Apache (PHP, Ruby, Python), MySQL, MariaDB_: **_/etc/httpd/conf.d/10-shared_headers.conf_**
- _NGINX (PHP, Ruby) and LEMP_: **_/etc/nginx/conf.d/headers/10-shared_headers.conf_**
- _LiteSpeed, LLSMP_: **_/var/www/conf/vhconf.xml_** (adjust via the admin panel only)
- _Tomcat, TomEE_: **_/opt/tomcat/conf/web.xml_**

:::danger Notes

- The headers processing for the Node.js, Golang, .NET, JavaEngine, and Springboot servers must be implemented manually in the user application.
- For the Tomcat and TomEE stacks, only the following headers are enabled by default: **X-Content-Type-Options, X-Frame-Options, X-XSS-Protection**, and **Strict-Transport-Security** (for SSL). Other headers can be enabled manually, if needed.

:::

![Locale Dropdown](./img/HTTPHeaders/05-security-headers-configuration-file.png)

Don’t forget to <u>restart</u> your server to apply any changes made to the configuration file.

The following additional HTTP headers are used on the above-listed stacks by default:

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
                Header
            </div>
            <div style={{
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                padding: '20px',
                borderRight: '1px solid var(--ifm-toc-border-color)',
                wordBreak: 'break-all'
            }}>
               Description
            </div>
            <div style={{
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                padding: '20px',
                borderRight: '1px solid var(--ifm-toc-border-color)',
                wordBreak: 'break-all'
            }}>
                Value
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
                {item.Header}
            </div>
            <div style={{
                padding: '20px',
                wordBreak: 'break-all'
            }}>
                {item.Description}
            </div>
            <div style={{
                wordBreak: 'break-all',
                 padding: '20px',
            }}>
                {item.Value}
            </div>
        </div> 
        })}
    </div> 
</div>
