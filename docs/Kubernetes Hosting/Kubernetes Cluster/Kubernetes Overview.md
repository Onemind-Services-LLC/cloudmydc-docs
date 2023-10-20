---
sidebar_position: 1
---

## Kubernetes Cluster Overview
**[Kubernetes (K8s)](1)** is an open-source system designed to automate deployment, scaling, and management of microservices and containerized applications. A [pod](1), which is the central piece in the K8s model, is a set of Linux containers with shared network and storage. [Network plugins](1) and [ingress controllers](1) support internal and external load balancers, while [pluggable storage backends](1) automate data persistence. [Kubernetes kubelet](1) orchestrates pods ensuring the cluster is always in a desired healthy state.

Installation of a Kubernetes Cluster, as well as network and storage configuration, is a tedious and error-prone process. The platform automates Kubernetes installation, configuration, updates, and supplies multiple additional Kubernetes services and cluster components:

- ***[Weave CNI](1)*** plugin to enable internal networking
- ***[CoreDNS](1)*** as internal DNS
- ***[Traefik](1)*** ingress controller with pre-configured TLS for external access to services (with the NGINX and HAProxy options available since 1.15.5)
- ***[NFS storage provisioner](1)*** for automatic creation of [K8s volumes](1) (optional)
- ***[Kubernetes Dashboard](1)*** to manage and control the cluster via a modern and intuitive web client
- ***[Helm and Tiller](1)*** for one-click deployment of hundreds of popular applications
- ***[K9s](1)***, ***[kubectx](1)***, ***[popeye](1)***, and ***[stern](1)*** command-line utilities to efficiently manage your cluster
- ***[Metrics server](1)***, ***[Prometheus](1)***, and ***[Grafana](1)*** for monitoring your cluster and applications health (optional)
- ***[Jaeger](1)*** for monitoring and troubleshooting of the microservice-based distributed systems (optional, available since 1.15.5)
Besides K8s specific features, traditional platform features are available too, e.g. [vertical](1) and [horizontal scaling](1).

:::tip Tip

For more information, view the ***[Kubernetes Cluster Overview](1)*** article on our blog.

:::