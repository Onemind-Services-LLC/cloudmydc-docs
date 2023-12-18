---
title: Linux vps access via ssh gate
slug: linux-vps-access-via-ssh-gate
sidebar_position: 2
---

In order to manage the required software inside your Elastic VPS container, you need to connect to it via SSH protocol. A connection can be performed through the dedicated [SSH Gate](/docs/Deployment%20Tools/SSH/SSH%20Overview), which provides a single access point to configure all environments and servers within your account remotely.

:::tip Note

For the Windows VPS management, utilize the [remote desktop protocol](/docs/Windows&.NET/Windows%20RD%20Access) (RDP) support.

:::

The process of [SSH access](/docs/Deployment%20Tools/SSH/SSH%20Access/Overview) to the Elastic VPS nodes is the same as for any other container on the platform but provides full root access.

- [Web SSH](/docs/Deployment%20Tools/SSH/SSH%20Access/Web%20SSH)

A one-click connection to your VPS container from the platform dashboard without any configuration required.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/LinuxVPSAccessviaSSHGate/01-elastic-vps-web-ssh-access.png)

</div>

- **_[SSH Gate](/docs/Deployment%20Tools/SSH/SSH%20Access/SSH%20Gate)_**

An SSH connection to VPS from the console on your local machine. Access is based on your custom SSH key pair.

:::tip Note

If you haven’t established a connection via SSH Gate before, you’ll need to perform the following steps beforehand:

- [generate](/docs/Deployment%20Tools/SSH/Generate%20SSH%20Key) an SSH key pair
- [add your public SSH key](/docs/Deployment%20Tools/SSH/Add%20SSH%20Key) to the dashboard

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/LinuxVPSAccessviaSSHGate/02-elastic-vps-access-via-ssh-gate.png)

</div>

In case you prefer to operate your VPS container with the help of external SSH tools, consider establishing [access via Public IP](/docs/Elastic%20VPS/Elastic%20VPS%20Management/Linux%20VPS%20Access%20via%20Public%20IP) address. Regardless of the chosen approach, the provided functionality and management capabilities are the same.
