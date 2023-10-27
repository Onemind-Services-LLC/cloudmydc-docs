---
sidebar_position: 1
---

## Kubernetes Cluster: Vertical Scaling

Vertical scaling for the **Kubernetes Cluster** is represented via two implementations:

- _platform-managed [automatic vertical scaling](https://cloudmydc.com/)_ - allows dynamically allocating resources for the Kubernetes nodes, which are used (and charged) only when they are needed
- _Kubernetes-managed [Vertical Pod Autoscaler](https://cloudmydc.com/) (beta)_ - adjusts pod memory/CPU requests and limits on the go

The combination of PaaS vertical scaling and VPA can help minimize resource utilization and thus reduce cluster maintenance costs. In addition, it makes deployments highly available and fault-tolerant.

:::tip Tip

An extended real case example (WordPress) on the **_[Kubernetes Cluster Scaling](https://cloudmydc.com/)_** is provided within the linked article.

:::
