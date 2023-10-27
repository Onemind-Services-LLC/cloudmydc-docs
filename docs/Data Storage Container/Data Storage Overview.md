---
sidebar_position: 1
---

## Data Storage Container Overview

Data Storage Container is the commonly used solution for simple data storing and its remote control. Within the terms of the platform, it allows to make multiple environments operating with data in a single storage as easy as if it was kept locally: e.g. share media files, common configs or just store backups, logs, etc.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/DataStorageOverview/01-data-storage-container.png)

</div>

By using data storage container, you can apply smart organization to your projects' topology and achieve number of benefits, like:

- _Data Persistence and Security_ - the data is totally safe and secure as it runs inside fully isolated containers and stored separately during the application updates
- _Simplified Management_ - one set of configurations for multiple containers, different types of data storing, integration with Docker volumes and built-in file manager
- _Funds Saving_ - shared data implies lower disk space consumption and therefore lower costs

Data storage container integration at the platform is based on network file system (**NFS**) protocol, used for client-server communication. Actually, the whole procedure is performed in two steps: at the first one, the data is exported (shared) from the storage container to some other instance, and at the second - the appropriate directory is mounted at a client container.

And in order to ensure the best experience while leveraging this feature, a dedicated [Shared Storage Container](/docs/Data%20Storage%20Container/Data%20Storage%20Overview) stack is provided. It has a number of benefits for data storing compared to the rest of container types, such as depended software being pre-installed and enlarged amount of allocated disk space. Beside that, any node at the platform can be treated as data storage server, including custom Docker containers, where such integration is implemented based on [Volumes](/docs/Container/Container%20Configuration/Volumes) functionality.

With Data Storage Container you get a variety of opportunities to improve your projects' filesystem structure, make it more reliable and configurable. To get to know more, switch to the documents linked below, where we consider in details which types of storage are available at the platform and for what kind of data they suit the most:

- [Local filesystem]( /docs/Data%20Storage%20Container/Use%20Cases/Local%20Filesystem)
- [Master container]( /docs/Data%20Storage%20Container/Use%20Cases/Master%20Container)
- [Compound container]( /docs/Data%20Storage%20Container/Use%20Cases/Compound%20Container)
- [Dedicated container]( /docs/Data%20Storage%20Container/Use%20Cases/Dedicated%20Container)
- [External server]( /docs/Data%20Storage%20Container/Use%20Cases/External%20Server)
