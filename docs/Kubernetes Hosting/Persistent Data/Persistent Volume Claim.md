---
sidebar_position: 2
---

## Kubernetes Cluster: Persistent Volume Claim

Anytime your application pod needs access to the Persistent Volume (PV), a dedicated _[PersistentVolumeClaim](https://kubernetes.io/docs/concepts/storage/persistent-volumes/#persistentvolumeclaims)_ (PVC) with a specific amount of storage and particular access mode is requested. The platform does not restrict PVCs in any way (including [creation](https://kubernetes.io/docs/tasks/configure-pod-container/configure-persistent-volume-storage/#create-a-persistentvolumeclaim)). However, there are a few things that you should take into consideration when working with the persistent volume claims:

if you specify a StorageClass other than the default **_[jelastic-dynamic-volume](/docs/Kubernetes%20Hosting/Persistent%20Data/Volume%20Provisioner)_** one, PV should be created in advance
when several pods should use the same PV, ensure that it supports _ROX_ or _RWX_ [AccessMode](https://kubernetes.io/docs/concepts/storage/persistent-volumes/#access-modes)
