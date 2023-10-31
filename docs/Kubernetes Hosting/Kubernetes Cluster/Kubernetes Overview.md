---
sidebar_position: 1
---

## Kubernetes Cluster Overview

**[Kubernetes (K8s)](https://kubernetes.io/)** is an open-source system designed to automate deployment, scaling, and management of microservices and containerized applications. A [pod](https://kubernetes.io/docs/concepts/workloads/pods/), which is the central piece in the K8s model, is a set of Linux containers with shared network and storage. [Network plugins](https://kubernetes.io/docs/concepts/extend-kubernetes/compute-storage-net/network-plugins/) and [ingress controllers](https://kubernetes.io/docs/concepts/services-networking/ingress-controllers/) support internal and external load balancers, while [pluggable storage backends](https://kubernetes.io/docs/concepts/storage/storage-classes/#provisioner) automate data persistence. [Kubernetes kubelet](https://kubernetes.io/docs/reference/command-line-tools-reference/kubelet/) orchestrates pods ensuring the cluster is always in a desired healthy state.

Installation of a Kubernetes Cluster, as well as network and storage configuration, is a tedious and error-prone process. The platform automates Kubernetes installation, configuration, updates, and supplies multiple additional Kubernetes services and cluster components:

- **_[Weave CNI](https://kubernetes.io/docs/concepts/cluster-administration/networking/#weave-net-from-weaveworks)_** plugin to enable internal networking
- **_[CoreDNS](https://coredns.io/)_** as internal DNS
- **_[Traefik](https://doc.traefik.io/traefik/user-guides/crd-acme/)_** ingress controller with pre-configured TLS for external access to services (with the NGINX and HAProxy options available since 1.15.5)
- **_[NFS storage provisioner](https://docs.docker.com/)_** for automatic creation of [K8s volumes](https://kubernetes.io/docs/concepts/storage/volumes/) (optional)
- **_[Kubernetes Dashboard](https://kubernetes.io/docs/tasks/access-application-cluster/web-ui-dashboard/)_** to manage and control the cluster via a modern and intuitive web client
- **_[Helm and Tiller](https://helm.sh/)_** for one-click deployment of hundreds of popular applications
- **_[K9s](https://github.com/derailed/k9s)_**, **_[kubectx](https://github.com/ahmetb/kubectx)_**, **_[popeye](https://github.com/derailed/popeye)_**, and **_[stern](https://github.com/wercker/stern)_** command-line utilities to efficiently manage your cluster
- **_[Metrics server](https://github.com/kubernetes-sigs/metrics-server)_**, **_[Prometheus](https://prometheus.io/)_**, and **_[Grafana](https://grafana.com/)_** for monitoring your cluster and applications health (optional)
- **_[Jaeger](https://www.jaegertracing.io/)_** for monitoring and troubleshooting of the microservice-based distributed systems (optional, available since 1.15.5)
  Besides K8s specific features, traditional platform features are available too, e.g. [vertical](/docs/Kubernetes%20Hosting/Kubernetes%20Scalability/Vertical%20Scaling) and [horizontal scaling](/docs/Kubernetes%20Hosting/Kubernetes%20Scalability/Horizontal%20Scaling).

:::tip Tip

For more information, view the **_Kubernetes Cluster Overview_** article on our blog.

:::
