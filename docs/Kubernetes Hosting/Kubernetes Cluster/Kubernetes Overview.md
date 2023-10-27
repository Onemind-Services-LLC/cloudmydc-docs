---
sidebar_position: 1
---

## Kubernetes Cluster Overview

**[Kubernetes (K8s)](https://cloudmydc.com/)** is an open-source system designed to automate deployment, scaling, and management of microservices and containerized applications. A [pod](https://cloudmydc.com/), which is the central piece in the K8s model, is a set of Linux containers with shared network and storage. [Network plugins](https://cloudmydc.com/) and [ingress controllers](https://cloudmydc.com/) support internal and external load balancers, while [pluggable storage backends](https://cloudmydc.com/) automate data persistence. [Kubernetes kubelet](https://cloudmydc.com/) orchestrates pods ensuring the cluster is always in a desired healthy state.

Installation of a Kubernetes Cluster, as well as network and storage configuration, is a tedious and error-prone process. The platform automates Kubernetes installation, configuration, updates, and supplies multiple additional Kubernetes services and cluster components:

- **_[Weave CNI](https://cloudmydc.com/)_** plugin to enable internal networking
- **_[CoreDNS](https://cloudmydc.com/)_** as internal DNS
- **_[Traefik](https://cloudmydc.com/)_** ingress controller with pre-configured TLS for external access to services (with the NGINX and HAProxy options available since 1.15.5)
- **_[NFS storage provisioner](https://cloudmydc.com/)_** for automatic creation of [K8s volumes](https://cloudmydc.com/) (optional)
- **_[Kubernetes Dashboard](https://cloudmydc.com/)_** to manage and control the cluster via a modern and intuitive web client
- **_[Helm and Tiller](https://cloudmydc.com/)_** for one-click deployment of hundreds of popular applications
- **_[K9s](https://cloudmydc.com/)_**, **_[kubectx](https://cloudmydc.com/)_**, **_[popeye](https://cloudmydc.com/)_**, and **_[stern](https://cloudmydc.com/)_** command-line utilities to efficiently manage your cluster
- **_[Metrics server](https://cloudmydc.com/)_**, **_[Prometheus](https://cloudmydc.com/)_**, and **_[Grafana](https://cloudmydc.com/)_** for monitoring your cluster and applications health (optional)
- **_[Jaeger](https://cloudmydc.com/)_** for monitoring and troubleshooting of the microservice-based distributed systems (optional, available since 1.15.5)
  Besides K8s specific features, traditional platform features are available too, e.g. [vertical](https://cloudmydc.com/) and [horizontal scaling](https://cloudmydc.com/).

:::tip Tip

For more information, view the **_[Kubernetes Cluster Overview](https://cloudmydc.com/)_** article on our blog.

:::
