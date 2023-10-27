---
sidebar_position: 2
---

**[GlusterFS](https://docs.gluster.org/en/latest/)** is a network filesystem protocol for distributed cloud storage. The distinctive features of the GlusterFS are reliability, failover, and scalability. It works based on the free FUSE software interface and thus does not require any additional servers for metadata (unlike other distributed file systems, e.g. _[Lustre](https://www.lustre.org/)_ and _[Ceph](https://ceph.io/en/)_).

Compared to the **[NFS]( /docs/Data%20Storage%20Container/Data%20Sharing/Mount%20Protocols/NFS)** protocol supported at the platform, GlusterFS is renowned for its advanced reliability. The protocol operates with multiple servers and is recommended for cases that require high concurrency, high performance of the write operations, and failover recovery in case of necessity. You can learn more about the [architecture implementation](https://docs.gluster.org/en/latest/Quick-Start-Guide/Architecture/) of this solution from the official documentation.

The platform provides **Gluster Native** client support <u>starting from the 6.1 release</u> and on the [Shared Storage Cluster]( /docs/Data%20Storage%20Container/Shared%20Storage%20Container#shared-storage-auto-cluster) only:

- **all containers** (except _alpine-based_ nodes) - Gluster Native client
- **Shared Storage Cluster** - Gluster Native client and server

:::tip Tip

Gluster Native is recommended for topologies where data safety must be ensured through backups and replication. However, for the performance-oriented topologies, the _[NFS]( /docs/Data%20Storage%20Container/Data%20Sharing/Mount%20Protocols/NFS)_ protocol will suit better.

:::

1. The platform implementation configures a **Replicated GlusterFS Volume** that overcomes data loss risk by storing exact copies of the data on all bricks (servers). Replicated volume is used for better reliability and data redundancy, as even if one brick fails, the data can still be accessed from replicas. You can learn more about how GlusterFS replication works in the platform by analyzing the corresponding [JPS manifest](https://github.com/jelastic-jps/glusterfs/blob/master/replication-logic.jps) file.

:::danger Note

Do not confuse **_GlusterFS volumes_** with Docker **_[container volumes](/docs/Container/Container%20Configuration/Volumes)_** available on the platform.

:::

2. The default GlusterFS settings are configured automatically and should not be changed manually. Configs include volume name ("data") and IPs of the appropriate servers.

3. Consider the following limitation when sharing data with GlusterFS:

- shares do not work with sleeping environments and during the [live migration]( /docs/EnvironmentManagement/Environment%20Regions/Migration%20between%20Regions#live-migration)
- custom volumes can be created via SSH but are <u>not recommended</u> due to limited functionality (e.g. scaling automation)

4. When facing any issues with GlusterFS, you can check the **[Tasks Panel]( /docs/QuickStart/Dashboard%20Guide)** in the dashboard. Also, the following logs can provide some additional information:

- **_/var/log/glusterfs_** on the GlusterFS server
- run the **_journalctl_** command on the Shared Storage, custom Docker, or VPS containers

Follow the [mount points]( /docs/Data%20Storage%20Container/Data%20Sharing/Mount%20Points) or [exporting data]( /docs/Data%20Storage%20Container/Data%20Sharing/Exporting%20Data%20for%20Sharing) guides to share files over the GlusterFS protocol.
