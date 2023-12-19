---
title: Public ip
slug: public-ip
sidebar_position: 2
---

## Public IP

The platform provides users with [Shared Load Balancer](http://localhost:3000/docs/application-setting/external-access-to-applications/shared-load-balancer) (SLB) as a default single entry point for all of the hosted applications, located on the hardware nodes. However, for the production environments, it is recommended receiving and processing the requests via **Public IP** address(es) that form a direct connection between the Internet and a specific container. Compared to the access over SLB, such approach ensures more secure and effective interaction.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/PublicIP/01-public-ip-vs-shared-lb.png)

</div>

Public IP can be attached to any software stack in your environment (except, [Memcached](/docs/Memcached/Memcached%20System) node), representing a more stable solution with less risk to be affected by other applications. Also, it opens access to such features as [FTP add-on](/docs/Deployment%20Tools/FTP-FTPS%20Support), [Custom SSL](/docs/application-setting/ssl/custom-ssl), [remote debugging](http://localhost:3000/docs/application-setting/remote-debugging) from IDE, [WebSockets](/docs/Deployment%20Tools/WebSockets/WebSockets%20Support), etc.

The platform supports two versions of the [Internet Protocol](https://en.wikipedia.org/wiki/Internet_Protocol):

- **_Internet Protocol version 4 (IPv4)_** is the fourth revision in the development of the IP and the first version of the protocol to be widely deployed
- **_Internet Protocol version 6 (IPv6)_** is the most recent IP version, which is an evolutionary upgrade of IPv4 and is designed to fulfill the need of more addresses, provide better multicast routing and simplify processing by routers

In order to bind an external IP address to the required node, you need to enable (or [set the required number](http://localhost:3000/docs/application-setting/external-access-to-applications/multiple-public-ip) of) _Public IPv4 / Public IPv6_ within the central part of the **topology wizard** window.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/PublicIP/02-wizard-add-public-ip.png)

</div>

:::danger notes

- Enabling Public IPv4 turns off the [Access via SLB](http://localhost:3000/docs/application-setting/external-access-to-applications/shared-load-balancer) option by default. It may cause a temporary (a few minutes) disruption in environment access due to the DNS cache.
- In case of attaching external IPs for the [horizontally scaled](http://localhost:3000/docs/application-setting/scaling-and-clustering/horizontal-scaling) nodes, each container within the layer will be supplied with its own set of addresses.

:::

To find and manage the allocated IPs in the existing environment, expand the appropriate **_node_** string in the environment topology list.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/PublicIP/03-dashboard-manage-external-ip-addresses.png)

</div>

Here, upon hovering over IPs, you can get access to the following functionality:

- **Copy to Clipboard** - copies the appropriate address in one click
- **Attach/Detach IP(s)** - allows adjusting a number of public IPs (both IPv4 and IPv6)
- **Detach IP** - removes a particular address

:::tip Note

- The public IP is a paid option, which is charged for every hour of its usage. The exact price is defined by your particular hosting service provider and can be found at the **[Quotas & Pricing](/docs/account-and-pricing/resource-charging/pricing-faq#how-much-do-resources-cost) > Pricing > Options** frame of the dashboard.
- If you have public IP enabled for any node in your environment, you can’t use the [swap domains](/docs/application-setting/domain-name-management/swap-domains) functionality for it. Consider utilizing the [swap Public IPs](http://localhost:3000/docs/deployment-tools/api-&-cli/platform-cli/swap-public-ips) API instead.
- If working with [multiple public IPs](http://localhost:3000/docs/application-setting/external-access-to-applications/multiple-public-ip), the very first external address attached (of each IPv4 and IPv6 types) is considered a **_primary_** one and can only be deleted last. It is used for both incoming and outgoing traffic, while the rest of IPs can only receive it.

:::
