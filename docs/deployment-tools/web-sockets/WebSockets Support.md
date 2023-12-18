---
title: Websockets support
slug: websockets-support
sidebar_position: 1
---

## WebSockets Support

**WebSockets** is a prominent web-technology, that ensures establishing of a continuous full-duplex connection between client and server for the bi-directional messages to be instantly transmitted with little overhead. Communication over this TCP-based protocol results in a very low connection latency and rapid interaction, thus making your applications faster and more efficient.

You can achieve the following benefits using WebSockets:

- Reduction of response delays and unnecessary network traffic consumption due to the full-duplex distribution through a single connection
- Streaming through proxies and firewalls, both upstream and downstream at once
- Backward compatibility with the pre-WebSocket world, by switching from the HTTP connection to WebSockets

The platform provides you with an advanced and complemented WebSockets support by means of integrating this technology to the [Shared Load Balancer](/docs/ApplicationSetting/External%20Access%20To%20Applications/Shared%20Load%20Balancer) and [NGINX-balancer node](/docs/Load%20Balancers/NGINX/NGINX%20Balancer), so you can use it even without external IP address attached to your app server.

The easiest way to activate the WebSockets support is to place an NGINX balancer in front of your application, making it the entry point of the environment and getting rid of any additional configurations. Over and above, this server can also be used for easily overriding the default settings with your custom ones, e.g. changing the listeners' port numbers.

Nevertheless, the WebSockets technology is also supported by the application servers provided at the platform - the appropriate configuration examples are available within our documentation:

- [WebSockets for Java](/docs/Deployment%20Tools/WebSockets/WebSockets%20Support%20for%20Java)
- [WebSockets for PHP](/docs/Deployment%20Tools/WebSockets/Websockets%20Support%20for%20PHP)

And the guide below will provide insights on how to configure WebSockets support for your application, hosted at the platform, with the help of the **NGINX-balancer** node. As an example, we’ll use a simple chat application, written in PHP. So, let’s get started and move step-by-step from the very beginning.

## Environment Creation and Application Deployment

1. Log in to the platform dashboard with your credentials and click on the **New environment** button at its top left corner.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/WebSocketsSupport/01-new-environment-button.png)

</div>

2. In the appeared **Environment Topology** frame, you need to create an appropriate environment according to your application’s requirements (e.g. we selected the **Apache** application server for our **PHP** app). The only obligatory element is the **NGINX-balancer** node.

Then set the resources usage limits for the chosen nodes by means of cloudlet sliders, type an environment name (e.g. _balancer-websockets_) and click **Create**.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/WebSocketsSupport/02-environment-wizard.png)

</div>

3. In a few minutes your new environment will appear at the dashboard.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/WebSocketsSupport/03-environment-for-websockets-created.png)

</div>

4. Upload and deploy your application to the desired context (we’ll use the default _ROOT_ one) using archive/URL or via the remote VCS repository - link to the corresponding instruction can be found in our [Deployment Guide](/docs/deployment/deployment-guide).

Once this is completed, the name of your project source will appear in the _Deployed_ panel column.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/WebSocketsSupport/04-websockets-application-deployed.png)

</div>

## NGINX Balancer Configurations

Now you need to modify the default proxy settings at your NGINX-balancer server in order to define where the incoming requests should be redirected to and enable the WebSockets streaming.

1. Access the **Configuration Manager** tab by selecting the **Config** button for your balancer node.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/WebSocketsSupport/05-nginx-config-button.png)

</div>

2. Then open the **_nginx-jelastic.conf_** file within the **_conf_** directory, find the _location_ block inside the first _server_ code section and paste the following lines just before it:

```bash
location /ws/ {
 proxy_pass http://{appserver_ip}:{port};
 proxy_http_version 1.1;
 proxy_set_header Upgrade $http_upgrade;
 proxy_set_header Connection "upgrade";
}
```

where

- **_{appserver_ip}_** - IP address of the application server node with your WebSockets application deployed. It can be found by clicking the **Additionally** button for the required instance.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/WebSocketsSupport/06-application-server-ip.png)

</div>

- **_{port}_** - number of the port, listened by your application

In our case, the required settings will look like at the image below:

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/WebSocketsSupport/07-nginx-configuration-file.png)

</div>

:::tip Note

Usually we recommend to modify the configurations in the **_nginx.conf_** file and keep the **_nginx-jelastic.conf_** one’s content as the default/backup settings. But in this case, since the required changes are rather simple and we are pretty sure that we know what we are doing, it will be easier to work directly with the **_nginx-jelastic_** file.

:::

3. That’s all for NGINX configurations, just don’t forget to **Save** the made changes and **Restart** balancer using the same-named button.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/WebSocketsSupport/08-restart-nginx-nodes.png)

</div>

## Application Configurations

Once the WebSockets support is enabled, the only thing that is left to do is to configure your application. You need to adjust its code similarly to the steps below in order to specify the correct connection string, according to a new WebSocket file’s location:

1. Click the **Config** button next to the chosen application server.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/WebSocketsSupport/09-apache-config-button.png)

</div>

2. In the opened **Configuration Manager** tab you can access your application’s files by navigating to the **webroot/ROOT** folder (or, the latter one’s name can differ if you’ve specified your custom context during application deployment).

Open the file with the WebSockets settings stated and adjust the **_ws_** path according to the next format:

ws://**_{env_domain}{path_to_ws_file}_**

Herewith, the **_{env_domain}_** value should be substituted with your environment domain (can be seen under the environment name at the dashboard) and the **_{path_to_ws_file}_** value should lead to the file, that needs to be accessed upon establishing the WebSockets connection.

For example, in our case this string looks like the following:

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/WebSocketsSupport/10-wsuri-string-for-apache.png)

</div>

Do not forget to **Save** the performed changes.

3. Finally, **Restart** your application server with the corresponding button in order to apply new configurations.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/WebSocketsSupport/11-restart-apache-nodes.png)

</div>

4. Once the service is up again, you can click **Open in Browser** next to your environment and access your application.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/WebSocketsSupport/12-open-application-in-browser.png)

</div>

5. Great, we are done!

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/WebSocketsSupport/13-websockets-based-application.png)

</div>

As you can see, our tiny chat window is running, allowing sending and receiving of messages in real time, without refreshing a browser tab.
