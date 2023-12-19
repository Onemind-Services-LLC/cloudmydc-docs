---
title: Ssh overview
slug: ssh-overview
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

- **separate containers directly** while working with them remotely via additional tools (e.g. [Capistrano](/docs/deployment-tools/ssh/capistrano)) or using SFTP and FISH protocols

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/SSHOverview/03-ssh-gate-to-container.png)

</div>

While accessing containers via SSH, a user receives all required permissions and additionally can manage the main services with **sudo** commands of the following kind (and others):

```bash
sudo /etc/init.d/jetty start
sudo /etc/init.d/mysql stop
sudo /etc/init.d/tomcat restart
sudo /etc/init.d/memcached status
sudo /etc/init.d/mongod reload
sudo /etc/init.d/nginx upgrade
sudo /etc/init.d/httpd help
```

:::danger Note

If you deploy any application, change the configurations or add any extra functionality via SSH to your environment, this will not be displayed at the platform dashboard.

:::

In addition, we provide support of **SFTP** (Secure File Transfer Protocol) by implementing the threaded daemon for SFTP connections processing. It lets you access, manage and transfer files directly to the container via SSH gate, and in such a way, ensures data security.

An additional secure network protocol is **FISH** (Files transferred over Shell protocol). It is supported by a number of popular FTP-clients and file managers (e.g. Midnight Commander, Konqueror, lftp, Krusader, etc.) and permits a user to securely access and manage a container’s file system.

Using our documentation you’ll find out how to:

- [generate SSH key](/docs/deployment-tools/ssh/generate-ssh-key)
- [add SSH key](/docs/deployment-tools/ssh/add-ssh-key)
- [access environments and containers](/docs/deployment-tools/ssh/ssh-access/overview)
- [work via SSH](https://cloudmydc.com/)
- [use SFTP and FISH protocols](/docs/deployment-tools/ssh/ssh-protocols)
- [manage containers via SSH with Capistrano](/docs/deployment-tools/ssh/capistrano)

:::tip Note

SSH access is provided to the whole account but not a separate environment.

:::
