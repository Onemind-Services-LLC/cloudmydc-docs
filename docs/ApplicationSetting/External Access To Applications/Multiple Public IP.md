---
sidebar_position: 3
---

## Multiple Public IP Addresses for a Single Container

<div style={{
    display: 'grid',
    gridTemplateColumns: '0.15fr 1fr',
    gap: '10px'
}}>
<div>
<div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'cetner',
}}>

<!-- Image Url changes -->

![Locale Dropdown](./img/MultiplePublicIP/01-multiple-public-ip.png)

</div>
</div>
<div>

The platform supports assigning multiple [public IP](/docs/ApplicationSetting/External%20Access%20To%20Applications/Public%20IP) addresses (of both IPv4 and IPv6 revisions) to a single container. Herewith, the assigned IPs could be either of one of the versions or both of them simultaneously.

</div>
</div>

For example, if hosting several web-sites on a single node, the multi-IP option allows to handle them as separate production-ready services due to the ability to apply dedicated [custom domain name](https://cloudmydc.com/) and [SSL certificate](https://cloudmydc.com/) to each of them. Also, this option can be helpful for operating network appliances (e.g. load balancers) with multiple IP addresses for each network.

:::tip Note

Both Public IPv4 and IPv6 are paid options, charged separately (either for the same or different price) on hourly basis. The exact cost and allowed number of IPs per node/per environment can be seen within the **[Quotas & Pricing](/docs/Account&Pricing/Resource%20Charging/Pricing%20FAQ#how-much-do-resources-cost) > Account Limits** dashboard tab.

:::

You can assign multiple IP addresses through your platform dashboard by means of the appropriate spinners at topology wizard when either creating an environment or changing its topology.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/MultiplePublicIP/02-wizard-add-multiple-ip.png)

</div>

Here, you can select or enter the required number of addresses of both types through the appropriate **Public IPv4** and **_Public IPv6_** boxes. If meeting the limits, please, contact your [hosting provider](https://cloudmydc.com/) to increase the available addresses count.

## Managing Multiple Public IP Addresses

On the main dashboard screen, each node within the environment topology list is supplemented with details on all assigned IP addresses, displayed in the following order:

- **Private IP** - automatically attached internal IP address; is always displayed first just under the _Node ID_ value
- **Public IPv4**- single external IP record or expandable list of all v4 addresses, comes second
- **Public IPv6** - single external IP record or expandable list of all v6 addresses, appears last

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/MultiplePublicIP/03-dashboard-managing-multiple-ip.png)

</div>

Also, you can **Copy to clipboard** and **Detach** each particular address using the appropriate buttons. And the **Attach/Detach IP(s)** option next to the addresses list title allows to adjust the total number of assigned IPs of the corresponding type, i.e. for each block separately:

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/MultiplePublicIP/04-change-number-of-public-ip.png)

</div>

The **_Node Settings_** box displays the number of currently attached addresses with the **Apply** button dimmed until you make some changes.

:::tip Note

The very first added Public IP of each type that is added to an instance is considered a **_primary_** one (is always displayed first within the IP list). It can be deleted only if no more assigned addresses of a same version have left at a node. This address is used for both incoming and outgoing traffic, whilst the rest of IPs can only receive it.

:::

Also, all IP addresses, assigned to a container, are shown within environment topology details at terminal upon connecting to an environment via [SSH Gate](https://cloudmydc.com/).

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/MultiplePublicIP/05-multiple-public-ip-in-ssh.png)

</div>

Here, all container external addresses are displayed within the **WAN IP** column (in the same order as at the dashboard, i.e. IPv4 > IPv6), whilst the **LAN IP** one contains its internal address.

:::tip Note

In case the required type of the newly attached IP is not indicated explicitly (e.g. within [Cloud Scripting](https://cloudmydc.com/) solution or application/add-on package settings at [platform Marketplace](/docs/Deployment%20Tools/Cloud%20Scripting%20&%20JPS/Marketplace)), the IPv4 is used by default.

:::

These is a set of [API methods](https://cloudmydc.com/) that you can use to perform tasks related to Public IP. For the detailed API reference on Public IP, please proceed to the following section.

## API Reference on Multiple Public IPs

In this section, you can find information on [platform API](https://cloudmydc.com/) methods that are provided for you to work with multiple Public IP addresses.

1. To attach or detach a Public IP address via platform API, the **_SetExtIpCount_** method is provided.

_https://[hoster-api-host]/1.0/environment/control/rest/setextipcount?**envname**=[string]&**session**=[string]&**type**=[string]&**count**=[int]&**nodegroup**=[string]&**nodeid**=[int]_

This method is used with the following parameters:

- **_envname_**- name of a source environment
- **_session_**- ID of a current user session
- **_type_** - version of Public IP (_ipv4 or ipv6_)
- **_count_** - number of IP addresses to be added or removed per container
- **_nodegroup_** - group of a destination node (_e.g. bl, cp, sqldb, nosqldb, storage, vps, or build_)
- **_nodeid_** - ID of a destination node

In order to increase or reduce the number of particular IPs (IPv4 or IPv6) on a destination container, you need to specify the **_count_** according to the number of the already assigned addresses.

:::tip Note

The **_AttachExtIp_** and **_DetachExtIp_** methods, which were provided earlier to add and remove Public IP address respectively, are now deprecated but still can be used due to the backward compatibility.

:::

2. To swap Public IP addresses between two nodes within the same or separate environments, you can use the **_SwapExtIps_** method.

_https://{hoster-api-host}/1.0/environment/control/rest/swapextips?**envname**=[string]&**session**=[string]&**sourcenodeid**=[int]&**destnodeid**=[int]&**sourceip**=[string]&**destip**=[string]_

This method is used with the following parameters:

- **_envname_** - name of a source environment
- **_session_** - ID of a current user session
- **_sourcenodeid_** - ID of a source node to move a Public IP address from
  **_destnodeid_** - ID of a destination node to move a Public IP address to (can belong to another environment)
- **_sourceip_** - Public IP address on a source node to be swapped
- **_destip_** - Public IP address on a destination node to be swapped

In order to swap all the Public IP addresses between the source and destination nodes, omit the **_sourceip_** and **_destip_** parameters.

:::tip Note

he SwapExtIps method can be currently used only with Public IPv4.
