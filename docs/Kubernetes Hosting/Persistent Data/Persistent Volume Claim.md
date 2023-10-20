---
sidebar_position: 2
---

## Kubernetes Cluster: Persistent Volume Claim
Anytime your application pod needs access to the Persistent Volume (PV), a dedicated *[PersistentVolumeClaim](1)* (PVC) with a specific amount of storage and particular access mode is requested. The platform does not restrict PVCs in any way (including [creation](1)). However, there are a few things that you should take into consideration when working with the persistent volume claims:

if you specify a StorageClass other than the default ***[jelastic-dynamic-volume](1)*** one, PV should be created in advance
when several pods should use the same PV, ensure that it supports *ROX* or *RWX* [AccessMode](1)