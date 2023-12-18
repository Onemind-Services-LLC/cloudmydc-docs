---
title: Custom storage
slug: custom-storage
sidebar_position: 3
---

## Kubernetes Cluster: Custom Storage

Currently, the only automated option for storage backend is the [volume provisioner](/docs/Kubernetes%20Hosting/Persistent%20Data/Volume%20Provisioner) based on the NFS storage. It can be selected via the package installation wizard. We recommend sticking to this option when working with the Kubernetes Cluster.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/CustomStorage/01-kubernetes-cluster-add-nfs-storage.png)

</div>

:::tip Tip

An additional option for the Gluster-based storage will be implemented in the future [package versions](/docs/Kubernetes%20Hosting/Kubernetes%20Cluster/Cluster%20Versions).

:::

If the default NFS storage does not suit your needs, it is possible to use any other preferred storage backend for your Kubernetes Cluster. You can contact the platform support to discuss the available options and to help you with the implementation.
