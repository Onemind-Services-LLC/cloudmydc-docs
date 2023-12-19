---
title: Horizontal scaling
slug: horizontal-scaling
sidebar_position: 2
---

## Kubernetes Cluster: Horizontal Scaling

Horizontal scaling for the **Kubernetes Cluster** is represented via two implementations:

- _platform-managed [horizontal scaling](http://localhost:3000/docs/application-setting/scaling-and-clustering/horizontal-scaling)_ - allows adding/removing Kubernetes nodes. Based on your needs, you can configure [scaling triggers](http://localhost:3000/docs/application-setting/scaling-and-clustering/automatic-horizontal-scaling#triggers-for-automatic-scaling) to automate this process based on resource utilization.
- _Kubernetes-managed [Horizontal Pod Autoscaler](https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/)_ - scales deployments up/down based on observed CPU utilization

With both of these horizontal scaling methods, Kubernetes Cluster always has nodes available (when needed) and healthy application pods.

:::tip Tip

An extended real case example (WordPress) on the **_Kubernetes Cluster Scaling_** is provided within the linked article.

:::
