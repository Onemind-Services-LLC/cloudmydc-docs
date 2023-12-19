---
title: Vps configuration
slug: vps-configuration
sidebar_position: 1
---

## Elastic VPS Configuration

All of the supported virtual private server types at the platform (i.e. based on CentOS, Ubuntu, and Windows) share the similar installation flow and the main management options. So, to get your Elastic VPS hosted and configured inside the platform, follow the next instructions on how to:

- [create VPS](/docs/elastic-vps/elastic-vps-management/vps-configuration#elastic-vps-installation)
- [scale server](/docs/elastic-vps/elastic-vps-management/vps-configuration#elastic-vps-scaling)
- [manage instance](/docs/elastic-vps/elastic-vps-management/vps-configuration#elastic-vps-inbuilt-tools)

## Elastic VPS Installation

To set up your VPS inside the platform, follow the next steps.

1. Click the **New Environment** button at the top pane to access environment topology wizard.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/VPSConfiguration/01-create-new-environment-button.png)

</div>

2. Herein, click on the **VPS** section at the bottom left corner and choose the needed VPS (CentOS 7.2 in our example) from the expandable options list.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/VPSConfiguration/02-elastic-vps-topology-wizard.png)

</div>

:::tip Note

When enabling **VPS** of any type, you’ll automatically get the **[Public IP](/docs/application-setting/external-access-to-applications/public-ip)** address(es) attached to the corresponding node (one per instance).
Nevertheless, in case of strict necessity, you can contact your hosting provider and request the option of running VPS with the internal IP only (e.g. when a special application infrastructure, which is partially inaccessible from outside, is required).

:::

Specify cloudlet limits for this node, [scale](/docs/elastic-vps/elastic-vps-management/vps-configuration#elastic-vps-scaling) it out (if required), select the preferred [region](/docs/environment-management/environment-regions/choosing-a-region) (if several of them are available), type the name of the environment and click on **Create**.

3. In a couple of minutes, your new environment with the chosen virtual server will appear at the dashboard. You’ll also receive an email notification with its administration data (i.e. login/password credentials, attached Public IP and access URL).

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/VPSConfiguration/03-elastic-vps-reset-password-button.png)

</div>

Also, you can view the Public IP address directly in the dashboard. If you’ve lost access to your VPS server or want to change the admin credentials for it, click the **Reset Password** button as it is shown in the image above.

## Elastic VPS Scaling

The flexibility of VPS hosting in the platform is achieved due to automatic scaling, both vertical and horizontal, that is easily tuned during environment topology creation and configuration.

**[Automatic vertical scaling](/docs/application-setting/scaling-and-clustering/automatic-vertical-scaling)** is ensured by systems ability to provide the required resources due to load. Herewith, you can choose the scalability limits for your server, which prevents outages during unexpected load spikes and at the optimize hosting costs.

To scale your environment, you need to increase/decrease the maximum number of available resources (cloudlets) by adjusting the cloudlet sliders in the Vertical Scaling per Node section.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/VPSConfiguration/04-elastic-vps-vertical-scaling.png)

</div>

The platform **[horizontal scaling](/docs/application-setting/scaling-and-clustering/horizontal-scaling)** functionality allows to easily adjust the number of servers in your environment using the appropriate “**-**” and “**+**” buttons. Herewith, you can select the preferred scaling mode:

- **_Stateless_** - simultaneously creates all new nodes from the base image template
- **_Stateful_** - sequentially copies file system of the master container into the new nodes

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/VPSConfiguration/05-elastic-vps-horizontal-scaling.png)

</div>

Make sure to **Apply** changes you’ve made.

## Elastic VPS Inbuilt Tools

Most of the basic configurations on your VPS instance can be performed directly via dashboard UI with a set of inbuilt tools, provided by the platform.

:::tip Note

The configurations on the Windows VPS can be applied via the [RDP](/docs/windows-and-.NET/windows-rd-access) connection only.

:::

## File Manager

The in-built **[configuration file manager](/docs/application-setting/configuration-file-manager)** is designed to manage (create/delete, upload/download, edit) files inside your container, as well as setup [mount points](/docs/data-storage-container/data-sharing/mount-points) and manage [exported data](/docs/data-storage-container/data-sharing/exporting-data-for-sharing).

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/VPSConfiguration/06-elastic-vps-file-manager.png)

</div>

The appropriate tab can be opened by clicking on the **Config** button next to the necessary VPS node (or the whole layer).

## Log Files

**[Logs](/docs/application-setting/built-in-monitoring/log-files)** tracking is a useful option for the efficient management of your VPS. Here, data on all aspects of your container(s) lifecycle is gathered, which may come in handy while troubleshooting and debugging your applications and services.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/VPSConfiguration/07-elastic-vps-log-files.png)

</div>

The appropriate section can be accessed by clicking on the **Log** button next to the necessary VPS node (or the whole layer).

For the complex configurations, you should connect to VPS server over [SSH Gate](/docs/elastic-vps/elastic-vps-management/linux-vps-access-via-ssh-gate) (including an option to continue working via the dashboard using **Web SSH**) or establish a direct [SSH connection using Public IP](/docs/elastic-vps/elastic-vps-management/linux-vps-access-via-public-ip).
