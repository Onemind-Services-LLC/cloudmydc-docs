---
sidebar_position: 2
---

## Kubernetes Cluster: Persistent Volume Claim

Anytime your application pod needs access to the Persistent Volume (PV), a dedicated _[PersistentVolumeClaim](https://cloudmydc.com/)_ (PVC) with a specific amount of storage and particular access mode is requested. The platform does not restrict PVCs in any way (including [creation](https://cloudmydc.com/)). However, there are a few things that you should take into consideration when working with the persistent volume claims:

if you specify a StorageClass other than the default **_[jelastic-dynamic-volume](https://cloudmydc.com/)_** one, PV should be created in advance
when several pods should use the same PV, ensure that it supports _ROX_ or _RWX_ [AccessMode](https://cloudmydc.com/)
