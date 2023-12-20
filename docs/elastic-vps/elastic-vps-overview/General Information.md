---
title: General Information
slug: general-information
sidebar_position: 1
---

<!-- ## Elastic VPS -->

**Virtual Private Server (VPS)** hosting is popular among developers due to strong security, reliable hosting resources, and expanded flexibility. However, it requires a manual configuration of the hosted application, which could be a difficult task for an average developer. Facing the necessity of scaling (e.g. due to your application success), makes it even harder to maintain a service operable and sufficiently supplied with resources to handle the load without overpaying extra capacities.

The platform solves such elasticity problems through the implementation of the so-called **_Elastic VPS_** stacks. They are offered on top the four different OS types - _[CentOS](/elastic-vps/elastic-vps-overview/centos-vps)_, _[Ubuntu](/elastic-vps/elastic-vps-overview/ubuntu-vps)_, _[Debian](/elastic-vps/elastic-vps-overview/debian-vps)_, and _[Windows](/windows-and-.NET/windows-server-vm)_ - allowing to choose the one, which suits your specific requirements the most.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/GeneralInformation/01-paas-elastic-vps.png)

</div>

The distinctive features of the Elastic VPS stacks are:

- **insulation** - each given VPS represents an entirely independent instance, which is accessible only via the dedicated [public IP](/application-setting/external-access-to-applications/public-ip), so any other account on the hardware cannot influence it
- **full control** - it is possible to manage your virtual server in any preferred way due to the provided root permissions
- **scalability** - the server can be automatically scaled vertically and horizontally by setting the resource limits and specific triggers
- **cost-effectiveness** - VPS is a relatively cheap solution (comparing to the cost of purchase and maintenance of a real dedicated physical server) and due to the platform [usage-based pricing](/account-and-pricing/pricing-model-overview) model
- **management tools** - access to the platform [inbuilt tools](/elastic-vps/elastic-vps-management/vps-configuration#elastic-vps-inbuilt-tools) for simplified configuration via the GUI dashboard
- **managed stack** - Elastic VPS software solution is maintained by PaaS team, ensuring regular updates and full compatibility with the platform
  In such a way, you get an instance which is advanced enough to handle big applications with high load and simultaneously ensures their simple administration.

To unveil all the performance capabilities provided by Elastic VPS, refer to the appropriate guides and use cases:

- [VPS Configuration](/elastic-vps/elastic-vps-management/vps-configuration)
- [Linux VPS Access via SSH Gate](/elastic-vps/elastic-vps-management/linux-vps-access-via-ssh-gate)
- [Linux VPS Access via Public IP](/elastic-vps/elastic-vps-management/linux-vps-access-via-public-ip)
- [Windows VPS Access via RDP](/windows-and-.NET/windows-rd-access)
- [Run Java Console Application](/elastic-vps/linux-vps-use-cases/run-java-console-application)
- [Setting Mail Server Inside VPS](/elastic-vps/linux-vps-use-cases/setting-mail-server-inside-vps)
- [Managing Windows Server Roles & Features](/windows-and-.NET/managing-server-roles-&-features)
