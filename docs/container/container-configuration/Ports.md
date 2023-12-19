---
title: Ports
slug: ports
sidebar_position: 5
---

import obj from './Ports.json'

The **Ports** tab provides you with a general information on managing container ports at the platform.

![Locale Dropdown](./img/Ports/01-ports-layer-settings.png)

The following ports are opened by default:

- **80**, **8080**, **8686** - proxies HTTP traffic to HTTP (80 port)
- **4848**, **8443**, **4901-4910** - proxies **SSL** (HTTPS) traffic is proxied to **SSL**
- **443** - proxies **SSL** traffic is proxied to **HTTP** (80 port)
- **4949**, **7979** - proxies **SSL** traffic to **HTTP**

:::tip Tip

Use the table below as a reference:

<div style={{
        width: '100%',
        margin: '0 0 1rem 0',
        borderRadius: '7px',
        overflow: 'hidden',
        background: 'white',
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
            gridTemplateColumns: '1fr 1fr 1fr 1fr',
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
                Port on SLB
            </div>
            <div style={{
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                padding: '20px',
                borderRight: '1px solid var(--ifm-toc-border-color)',
                wordBreak: 'break-all'
            }}>
               Backend Port
            </div>
            <div style={{
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                padding: '20px',
                borderRight: '1px solid var(--ifm-toc-border-color)',
                wordBreak: 'break-all'
            }}>
                Frontend SSL
            </div> 
            <div style={{
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                padding: '20px',
                borderRight: '1px solid var(--ifm-toc-border-color)',
                wordBreak: 'break-all'
            }}>
                Backend SSL
            </div>
        </div>
        {obj.data1.map((item, idx) => {
          return <div key={idx} style={{
            width: '100%',
            height: 'auto',
            border: '1px solid var(--ifm-toc-border-color)',
            display: 'grid', 
           gridTemplateColumns: '1fr 1fr 1fr 1fr',
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
                {item.PortOnSLB}
            </div>
            <div style={{
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                padding: '20px',
                wordBreak: 'break-all'
            }}>
                {item.BackendPort}
            </div>
            <div style={{
                wordBreak: 'break-all',
                 padding: '20px',
            }}>
                {item.FrontendSSL}
            </div>
            <div style={{
                wordBreak: 'break-all',
                 padding: '20px',
            }}>
                {item.BackendSSL}
            </div>
        </div>
        })}
    </div>
</div>

:::

Additional ports can be opened using:

- **[endpoints](/docs/application-setting/external-access-to-applications/endpoints)** - maps the container internal port to random external via the platform [Shared LB](/docs/application-setting/external-access-to-applications/shared-load-balancer)
- **[public IP](/docs/application-setting/external-access-to-applications/public-ip)** - provides a direct access to all ports of your container

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/Ports/02-container-access-ports-scheme.png)

</div>

Depending on the way chosen, just bind your service (application listener) to the received internal or external address.

## Ports Auto-Redirect

The platform automatically redirects incoming requests to the application hosted within a container.

During a node creation, the platform detects the ports which are listened on the TCP level. The commonly used for standard services (e.g. SSH, mail, databases, etc.) are automatically filtered. The first among the remaining ports becomes the container entry point so that all incoming requests are forwarded to it.

This process is performed on each container launch, so the corresponding application becomes available over the embedded [Shared Load Balancer](/docs/application-setting/external-access-to-applications/shared-load-balancer) just after being deployed, without any manual intervention required.

However, in case you need to disable or adjust this functionality (e.g. if it exposes application admin panel), you can manually change the auto-redirect settings during the container creation. For that, switch to the [Variables](/docs/container/container-configuration/variables) section, add the dedicated **_JELASTIC_EXPOSE_** parameter and set its value based on your needs:

- 0 or DISABLED or FALSE - to disable auto-redirect
- a number within the 1-65535 range - to define a container port, which will receive the incoming traffic (i.e. where it will be redirected to)
- if any other value is stated, the auto-redirect functionality will work as usual

Alternatively, a comma-separated list of ports can be provided via the **_JELASTIC_PRIORITY_PORTS_** variable. The platform checks them one by one, configuring the entry point redirect to the first active service discovered. This option can speed up container startup time compared to the all ports analysis during the default auto-redirect flow.

:::tip Note

- if the exact port is specified via the **_JELASTIC_EXPOSE_** variable, the **_JELASTIC_PRIORITY_PORTS_** is ignored
- if no services are discovered on the **_JELASTIC_PRIORITY_PORTS_**, the default auto-redirect flow is called
- when working with the **NodeJS** application server, an additional **_REDIRECT_EXCLUDE_PORTS_** variable can be used to manually exclude ports from the auto-redirect algorithm (i.e. port 80 won’t redirect to them)

:::
To get even greater flexibility over the node accessibility, you can customize your [container firewall](/docs/application-setting/external-access-to-applications/container-firewall) settings.
