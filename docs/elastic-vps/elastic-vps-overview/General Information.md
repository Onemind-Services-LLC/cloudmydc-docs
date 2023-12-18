---
title: General information
slug: general-information
sidebar_position: 1
---

## Elastic VPS

**Virtual Private Server (VPS)** hosting is popular among developers due to strong security, reliable hosting resources, and expanded flexibility. However, it requires a manual configuration of the hosted application, which could be a difficult task for an average developer. Facing the necessity of scaling (e.g. due to your application success), makes it even harder to maintain a service operable and sufficiently supplied with resources to handle the load without overpaying extra capacities.

The platform solves such elasticity problems through the implementation of the so-called **_Elastic VPS_** stacks. They are offered on top the four different OS types - _[CentOS](/docs/Elastic%20VPS/Elastic%20VPS%20Overview/CentOS%20VPS)_, _[Ubuntu](/docs/Elastic%20VPS/Elastic%20VPS%20Overview/Ubuntu%20VPS)_, _[Debian](/docs/Elastic%20VPS/Elastic%20VPS%20Overview/Debian%20VPS)_, and _[Windows](/docs/Windows&.NET/Windows%20Server%20VM)_ - allowing to choose the one, which suits your specific requirements the most.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/GeneralInformation/01-paas-elastic-vps.png)

</div>

The distinctive features of the Elastic VPS stacks are:

- **insulation** - each given VPS represents an entirely independent instance, which is accessible only via the dedicated [public IP](/docs/application-setting/external-access-to-applications/public-ip), so any other account on the hardware cannot influence it
- **full control** - it is possible to manage your virtual server in any preferred way due to the provided root permissions
- **scalability** - the server can be automatically scaled vertically and horizontally by setting the resource limits and specific triggers
- **cost-effectiveness** - VPS is a relatively cheap solution (comparing to the cost of purchase and maintenance of a real dedicated physical server) and due to the platform [usage-based pricing](/docs/account-and-pricing/pricing-model-overview) model
- **management tools** - access to the platform [inbuilt tools](/docs/Elastic%20VPS/Elastic%20VPS%20Management/VPS%20Configuration#elastic-vps-inbuilt-tools) for simplified configuration via the GUI dashboard
- **managed stack** - Elastic VPS software solution is maintained by PaaS team, ensuring regular updates and full compatibility with the platform
  In such a way, you get an instance which is advanced enough to handle big applications with high load and simultaneously ensures their simple administration.

To unveil all the performance capabilities provided by Elastic VPS, refer to the appropriate guides and use cases:

- [VPS Configuration](/docs/Elastic%20VPS/Elastic%20VPS%20Management/VPS%20Configuration)
- [Linux VPS Access via SSH Gate](/docs/Elastic%20VPS/Elastic%20VPS%20Management/Linux%20VPS%20Access%20via%20SSH%20Gate)
- [Linux VPS Access via Public IP](/docs/Elastic%20VPS/Elastic%20VPS%20Management/Linux%20VPS%20Access%20via%20Public%20IP)
- [Windows VPS Access via RDP](/docs/windows-and-.NET/windows-rd-access)
- [Run Java Console Application](/docs/Elastic%20VPS/Linux%20VPS%20Use%20Cases/Run%20Java%20Console%20Application)
- [Setting Mail Server Inside VPS](/docs/Elastic%20VPS/Linux%20VPS%20Use%20Cases/Setting%20Mail%20Server%20Inside%20VPS)
- [Managing Windows Server Roles & Features](/docs/Windows&.NET/Managing%20Server%20Roles%20&%20Features)
