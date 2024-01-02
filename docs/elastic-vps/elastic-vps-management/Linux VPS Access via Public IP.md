---
title: Linux Vps Access Via Public Ip
slug: linux-vps-access-via-public-ip
sidebar_position: 3
---

It is possible to access your VPS container using any preferred third-party SSH software via the attached external IP address. Such connection provides the same full root access level as while working over [SSH Gate](/elastic-vps/elastic-vps-management/linux-vps-access-via-ssh-gate).

:::tip Tip

You can locate your Public IP by expanding the appropriate node in the platform dashboard or within the appropriate Elastic VPS creation email.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/LinuxVPSAccessviaPublicIP/01-elastic-vps-public-ip-address.png)

</div>

:::

Below, we’ve prepared examples of connection to Elastic VPS container over public IP from under different operating systems:

- [MacOS/Linux/BSD](/elastic-vps/elastic-vps-management/linux-vps-access-via-public-ip#public-ip-access-for-macoslinuxbsd)
- [Windows](/elastic-vps/elastic-vps-management/linux-vps-access-via-public-ip#public-ip-access-for-windows)

:::tip Tip

In confines of the [Windows-based](/windows-and-.NET/windows-server-vm) VPS containers, the [remote desktop protocol](/windows-and-.NET/windows-rd-access) (RDP) is used to perform any required server configurations.

:::

## Public IP Access for MacOS/Linux/BSD

Run your preferred SSH tool and connect to your VPS server with the steps similar to the ones provided below.

As an example, we’ll use the [OpenSSH](https://www.openssh.com/) software, open your terminal and run the following command:

```bash
ssh {userName}@{hostname}
```

where

- `{userName}` - login received via email upon environment setup (root by default)
- `{hostname}` - attached Public IP addres

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/LinuxVPSAccessviaPublicIP/02-elastic-vps-ssh-connection-via-public-ip-.png)

</div>

If connecting for the first time, you may be asked to confirm access by adding your VPS address to the list of known hosts (type “yes” to proceed). Next, authenticate on the server by providing a password (the one sent via email after node creation).

That’s it! Start managing your VPS container and apply any required configurations. You can adapt the current procedure to establish a connection by means of any preferred third-party SSH tool.

## Public IP Access for Windows

In confines of Windows OS, choose a compatible tool to establish SSH connection via Public IP to your VPS container. For example, we’ll use the [PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/) SSH client.

1. Navigate to the **Configuration** tab and establish **Session** by specifying your Public IP address into the appropriate **Host Name** field.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/LinuxVPSAccessviaPublicIP/03--elastic-vps-putty-shh-connection.png)

</div>

Once the required data is specified, click the **Open** button.

2. Within the appeared **Console** window, you need to provide your access credentials, i.e **Login** and **Password** from the VPS node after-creation email.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/LinuxVPSAccessviaPublicIP/04--elastic-vps-putty-shh-connection-authentication.png)

</div>

That’s it! Now, as SSH connection via Public IP to remote VPS is established, you can start its management with full root permissions granted.
