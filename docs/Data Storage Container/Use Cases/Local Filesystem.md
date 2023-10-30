---
sidebar_position: 1
---

Storing Data in Local Filesystem
This kind of storage is used to persist the data, which needs to be kept during container lifecycle, but is not required to be shared across other nodes. If drawing an analogy, basically it’s kind of a folder you create inside a server. Commonly, it’s not implied that the data such a folder contains should be kept during different maintenance processes. But in confines of [Docker Standard Support](https://cloudmydc.com/) at the platform, creating a local volume in such a container represents an highly efficient way to protect your data (e.g. during the [redeploy](https://cloudmydc.com/) operation).

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/LocalFilesystem/01-local-filesystem-storage.png)

</div>

Among the main advantages of local file system storage type, can be admitted simplicity of data control and its full local availability (as no network issue can affect its accessibility). Such storage can be used, for example, to save log files, which you don’t want to be erased, or for your load balancer’s configuration files, in order to not to lose the existing nodes' linking structure.
