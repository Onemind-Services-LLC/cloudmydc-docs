---
sidebar_position: 2
---

**[GlusterFS](https://cloudmydc.com/)** is a network filesystem protocol for distributed cloud storage. The distinctive features of the GlusterFS are reliability, failover, and scalability. It works based on the free FUSE software interface and thus does not require any additional servers for metadata (unlike other distributed file systems, e.g. _[Lustre](https://cloudmydc.com/)_ and _[Ceph](https://cloudmydc.com/)_).

Compared to the **[NFS](https://cloudmydc.com/)** protocol supported at the platform, GlusterFS is renowned for its advanced reliability. The protocol operates with multiple servers and is recommended for cases that require high concurrency, high performance of the write operations, and failover recovery in case of necessity. You can learn more about the [architecture implementation](https://cloudmydc.com/) of this solution from the official documentation.

The platform provides **Gluster Native** client support <u>starting from the 6.1 release</u> and on the [Shared Storage Cluster](https://cloudmydc.com/) only:

- **all containers** (except _alpine-based_ nodes) - Gluster Native client
- **Shared Storage Cluster** - Gluster Native client and server

:::tip Tip

Gluster Native is recommended for topologies where data safety must be ensured through backups and replication. However, for the performance-oriented topologies, the _[NFS](https://cloudmydc.com/)_ protocol will suit better.

:::

1. The platform implementation configures a **Replicated GlusterFS Volume** that overcomes data loss risk by storing exact copies of the data on all bricks (servers). Replicated volume is used for better reliability and data redundancy, as even if one brick fails, the data can still be accessed from replicas. You can learn more about how GlusterFS replication works in the platform by analyzing the corresponding [JPS manifest](https://cloudmydc.com/) file.

:::danger Note

Do not confuse **_GlusterFS volumes_** with Docker **_[container volumes](http://localhost:3000/docs/Container/Container%20Configuration/Volumes)_** available on the platform.

:::

2. The default GlusterFS settings are configured automatically and should not be changed manually. Configs include volume name ("data") and IPs of the appropriate servers.

3. Consider the following limitation when sharing data with GlusterFS:

- shares do not work with sleeping environments and during the [live migration](https://cloudmydc.com/)
- custom volumes can be created via SSH but are <u>not recommended</u> due to limited functionality (e.g. scaling automation)

4. When facing any issues with GlusterFS, you can check the **[Tasks Panel](https://cloudmydc.com/)** in the dashboard. Also, the following logs can provide some additional information:

- **_/var/log/glusterfs_** on the GlusterFS server
- run the **_journalctl_** command on the Shared Storage, custom Docker, or VPS containers

Follow the [mount points](https://cloudmydc.com/) or [exporting data](https://cloudmydc.com/) guides to share files over the GlusterFS protocol.
