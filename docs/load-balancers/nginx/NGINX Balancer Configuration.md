---
title: Nginx Balancer Configuration
slug: nginx-balancer-configuration
sidebar_position: 3
---

<!-- ## NGINX Balancer Configuration     -->

The following NGINX configuration files are available:

Folder File Path
conf nginx.conf /etc/nginx
conf.d /etc/nginx/conf.d
tcpmaps mappings.xmlf /etc/nginx/tcpmaps

NGINX balancer is automatically added if you choose several app servers.

##CONF
For performing necessary configurations for NGINX balancer the **_nginx.conf_** file, located in **conf** folder, is used.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/NGINXBalancerConfiguration/01-nginx-balancer-configuration-file.png)

</div>

<div style={{
        display: 'flex',
        flexDirection: 'row-reverse',
        padding: '10px 0',
    }}>
    <a href="/platform-overview/release-notes/release-notes-8.3">
Back to the list
    </a>
</div>

## CONF.D

With access to NGINX configs you can not only edit the existing files but also upload your own config files with custom settings to the **conf.d** folder.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/NGINXBalancerConfiguration/02-nginx-balancer-custom-confd-settings.png)

</div>
<div style={{
        display: 'flex',
        flexDirection: 'row-reverse',
        padding: '10px 0',
    }}>
    <a href="/platform-overview/release-notes/release-notes-8.3">
Back to the list
    </a>
</div>

## TCPMAPS

The **tcpmaps** folder contains the **_mappings.xml_** file where you can set the redirection of the TCP balancing ports. There you need to specify the pair of ports: one to listen to and the other to redirect to.

You can find more information in the [NGINX Load Balancing](/load-balancers/nginx/nginx-balancer/) and [TCP Load Balancing](/load-balancers/nginx/tcp-load-balancing) documents.

To set [caching in NGINX](/load-balancers/nginx/caching-in-nginx-balancer) click on the link and follow the instruction.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/NGINXBalancerConfiguration/03-nginx-balancer-tcp-mappings.png)

</div>

<div style={{
        display: 'flex',
        flexDirection: 'row-reverse',
        padding: '10px 0',
    }}>
    <a href="/platform-overview/release-notes/release-notes-8.3">
Back to the list
    </a>
</div>
