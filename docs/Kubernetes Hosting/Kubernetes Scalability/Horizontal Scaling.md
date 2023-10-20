---
sidebar_position: 2
---

## Kubernetes Cluster: Horizontal Scaling
Horizontal scaling for the **Kubernetes Cluster** is represented via two implementations:

- *platform-managed [horizontal scaling](1)* - allows adding/removing Kubernetes nodes. Based on your needs, you can configure [scaling triggers](1) to automate this process based on resource utilization.
- *Kubernetes-managed [Horizontal Pod Autoscaler](1)* - scales deployments up/down based on observed CPU utilization

With both of these horizontal scaling methods, Kubernetes Cluster always has nodes available (when needed) and healthy application pods.

:::tip Tip

An extended real case example (WordPress) on the ***[Kubernetes Cluster Scaling](1)*** is provided within the linked article.

:::