---
title: Nginx php
slug: nginx-php
sidebar_position: 1
---

## NGINX PHP

:::tip

The _NGINX PHP_ stack is [HTTP/3](https://cloudmydc.com/) ready with the feature support enabled by default since the _1.16.1_ release for PHP _7.2.26, 7.3.13_, _7.4.1_ versions and above. However, a [public IP address](https://cloudmydc.com/) is required to bypass the Shared Load Balancer and work directly with the server over HTTP/3.

:::

[**NGINX**](https://cloudmydc.com/) is a fast and lightweight HTTP server, which is widely used by developers across the world. It is highly customizable due to the modular structure, which simultaneously allows utilizing just the required functionality, ensuring efficient resource usage.

The platform customizes and optimizes NGINX to provide it as a PHP application server fully compatible with the platform functionality. Compared to the [Apache PHP](https://cloudmydc.com/), it is more suitable for handling websites with static content, but due to the FastCGI support can process complex scripts as well.

:::tip Note

This template utilizes a modern **_systemd_** initialization daemon.

:::

To create NGINX server for PHP application hosting, follow the steps in the detailed instruction below.

1. Log into the platform dashboard and click the **New Environment** button to access the topology wizard.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/NGINXPHP/01-create-new-environment-button.png)

</div>

2. On the **PHP** engine tab, choose **_NGINX_** as your application server and configure other parameters (like [cloudlets](http://localhost:3000/docs/platform-overview/cloudlet) or [environment region](/docs/environment-management/environment-regions/choosing-a-region) up to your needs.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/NGINXPHP/02-nginx-php-topology-wizard.png)

</div>

Click **Create** to proceed.

3. After creation, click **Open in Browser** next to the NGINX server:

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/NGINXPHP/03-nginx-php-open-in-browser.png)

</div>

4. You will see the server’s **_phpinfo_** data by default.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/NGINXPHP/04--nginx-phpinfo-start-page.png)

</div>

The next step will be to [deploy](https://cloudmydc.com/) your PHP application.

## NGINX Configuration

While using NGINX as an application server, there are some restrictions on the size of uploaded files to the application. You can make the next configurations to adjust it:

1. Hover over the NGINX application server and click the appeared **Config** button.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/NGINXPHP/05-nginx-php-config-button.png)

</div>

2. Within the opened [configuration file manager](/docs/application-setting/configuration-file-manager), locate and adjust the **_/etc/nginx/nginx.conf_** file by adding the following string to the http section:

_client_max_body_size 50m;_

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/NGINXPHP/06-adjust-nginx-conf-file.png)

</div>

You can set any required value instead of the _50MB_ used in the example above.

:::danger Note

Regardless of the setting above, if working via the platform inbuilt file manager, you are limited to the upload size of 150MB (may vary based on the hosting provider settings). To operate larger files, you need to attach [public IP](/docs/application-setting/external-access-to-applications/public-ip) and use own manager (for example, you can utilize the [FTP add-on](https://cloudmydc.com/)).

:::

3. **Save** the made changes and apply them by clicking the **Restart Nodes** button.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/NGINXPHP/07-nginx-php-restart-nodes.png)

</div>

Learn more about the PHP servers configuration via the appropriate guides:

- [PHP Dev Center](https://cloudmydc.com/)
- [PHP Extensions](https://cloudmydc.com/)
- [PHP Accelerators](https://cloudmydc.com/)
- [PHP Auto Configurations](https://cloudmydc.com/)
