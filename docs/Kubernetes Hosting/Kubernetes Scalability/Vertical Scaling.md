---
sidebar_position: 1
---

## Kubernetes Cluster: Vertical Scaling
Vertical scaling for the **Kubernetes Cluster** is represented via two implementations:

- *platform-managed [automatic vertical scaling](1)* - allows dynamically allocating resources for the Kubernetes nodes, which are used (and charged) only when they are needed
- *Kubernetes-managed [Vertical Pod Autoscaler](1) (beta)* - adjusts pod memory/CPU requests and limits on the go

The combination of PaaS vertical scaling and VPA can help minimize resource utilization and thus reduce cluster maintenance costs. In addition, it makes deployments highly available and fault-tolerant.

:::tip Tip

An extended real case example (WordPress) on the ***[Kubernetes Cluster Scaling](1)*** is provided within the linked article.

:::
