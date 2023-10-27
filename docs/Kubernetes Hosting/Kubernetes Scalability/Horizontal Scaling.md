---
sidebar_position: 2
---

## Kubernetes Cluster: Horizontal Scaling

Horizontal scaling for the **Kubernetes Cluster** is represented via two implementations:

- _platform-managed [horizontal scaling](https://cloudmydc.com/)_ - allows adding/removing Kubernetes nodes. Based on your needs, you can configure [scaling triggers](https://cloudmydc.com/) to automate this process based on resource utilization.
- _Kubernetes-managed [Horizontal Pod Autoscaler](https://cloudmydc.com/)_ - scales deployments up/down based on observed CPU utilization

With both of these horizontal scaling methods, Kubernetes Cluster always has nodes available (when needed) and healthy application pods.

:::tip Tip

An extended real case example (WordPress) on the **_[Kubernetes Cluster Scaling](https://cloudmydc.com/)_** is provided within the linked article.

:::
