---
sidebar_position: 1
---

## SSH Gate Overview

**SSH (Secure Shell)** is a protocol used to connect securely to a remote container and execute the required commands on it. SSH commands are encrypted and secure: client/server connection is authenticated using a digital certificate, and passwords are protected by being encrypted.

To make SSH access available in the platform, a new infrastructure component was added to the core - **SSH Gate**. SSH Gate accepts users' connections from the internet and then transmits these connections to the desired container, using an internal network.

The authentication procedure in SSH Gate is divided into two independent parts:

- connection from end user to Gate (external authentication)
- connection from Gate to users' container (internal authentication)

Both parts of the authentication procedure are based on a standard SSH protocol, using public/private keypairs.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/SSHOverview/01-ssh-gate-authentication.png)

</div>

With SSH Gate, you can easily access:

- **the whole account** where you can navigate across your environments and containers using an interactive menu without extra authentication

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/SSHOverview/02-ssh-gate-to-account.png)

</div>

- **separate containers directly** while working with them remotely via additional tools (e.g. [Capistrano](https://cloudmydc.com/)) or using SFTP and FISH protocols

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/SSHOverview/03-ssh-gate-to-container.png)

</div>

While accessing containers via SSH, a user receives all required permissions and additionally can manage the main services with **sudo** commands of the following kind (and others):

<div style={{
    width: '100%',
    border: '1px solid #eee',
    borderRadius: '7px',
    boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
    overflow: 'hidden',
    margin: '0 0 1rem 0',
}}>
        <div style={{
            display: "flex",
        }}>
        <div style={{ width: '5%', background: 'red',
        padding: '10px 20px 5px 20px', color: 'white' }}>
          1
2
3
4
5
6
7
        </div>
        <div style={{
            padding: '10px 20px 5px 20px',
        }}>
           
        </div>
    </div>
</div>

:::danger Note

If you deploy any application, change the configurations or add any extra functionality via SSH to your environment, this will not be displayed at the platform dashboard.

:::

In addition, we provide support of **SFTP** (Secure File Transfer Protocol) by implementing the threaded daemon for SFTP connections processing. It lets you access, manage and transfer files directly to the container via SSH gate, and in such a way, ensures data security.

An additional secure network protocol is **FISH** (Files transferred over Shell protocol). It is supported by a number of popular FTP-clients and file managers (e.g. Midnight Commander, Konqueror, lftp, Krusader, etc.) and permits a user to securely access and manage a container’s file system.

Using our documentation you’ll find out how to:

- [generate SSH key](https://cloudmydc.com/)
- [add SSH key](https://cloudmydc.com/)
- [access environments and containers](https://cloudmydc.com/)
- [work via SSH](https://cloudmydc.com/)
- [use SFTP and FISH protocols](https://cloudmydc.com/)
- [manage containers via SSH with Capistrano](https://cloudmydc.com/)

:::tip Note

SSH access is provided to the whole account but not a separate environment.

:::
