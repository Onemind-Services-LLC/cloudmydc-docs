---
sidebar_position: 1
---

**NFS** or **[Network File System](https://cloudmydc.com/)** is a protocol designed to access files on the remote host over the computer network and operate them as if they were local files. It is a popular and widely spread standard that is available to everyone.

NFS is a client-server application, which means that the NFS server should be installed on the host that provides shared disk space and NFS clients on the servers that gain access to the shared files.

The platform provides NFS support out-of-the-box for all containers (both client and server). The platform fully supports the third version of the protocol on all certified stacks. The fourth version is supported as a client only. NFSv4 server is implemented on the dedicated **[Shared Storage Container](http://localhost:3000/docs/Data%20Storage%20Container/Data%20Storage%20Overview)**:

- **all containers** (except alpine-based nodes) - NFSv3 (client and server) and NFSv4 (client only)
- **Shared Storage** - NFSv3 (client and server) and NFSv4 (client and server)

:::tip Tip

NFS is recommended for the performance-oriented topologies, while _[Gluster Native](https://cloudmydc.com/)_ ensures data safety through backups and replication.

:::

1. The platform uses the following configurations when setting up NFS clients:

- **for NFS 3:** _nfsvers=3,nolock,udp,soft,timeo=120,retrans=20,\_netdev_
- **for NFS 4:** _nolock,soft,timeo=30,retrans=2,\_netdev_

2. Take into consideration the following peculiarities of the data sharing with NFS at the platform:

- regular files cannot be exported (only directories)
- mounted directory cannot start with **_/proc, /dev, /sys, /run_** or be equal to the following: **_/, /bin, /lib, /lib64, /lib32, /usr, /usr/bin, /usr/sbin, /usr/lib_**, or **_/usr/lib64_** (this list may vary based on your provider’s settings)
- NFS shares do not work with sleeping environments and during the [live migration](https://cloudmydc.com/)

3. When facing any issues with NFS, you can check the **[Tasks Panel](https://cloudmydc.com/)** in the dashboard. Also, the following logs can provide some additional information:

- **_/var/log/messages_** on the NFS server
- run the **_journalctl_** command on the Shared Storage, custom Docker, or VPS containers
  Follow the [mount points](https://cloudmydc.com/) or [exporting data](https://cloudmydc.com/) guides to share files over the NFS protocol.
