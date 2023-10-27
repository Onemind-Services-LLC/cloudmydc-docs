---
sidebar_position: 3
---

import obj from './InternalNetworking.json'

## Kubernetes Cluster: Internal Networking

Internal networking configuration within the **Kubernetes Cluster** is an entirely automated process, which is based on the [K8s Services](https://cloudmydc.com/). The CNI plugin creates and configures an overlay network, which allows providing all pods with the IP addresses.

Also, Kubernetes supports direct access to services by their names, so there is no need for any service discovery mechanism. For example, your application server can connect to the database using its DNS name, which will be resolved as a required internal IP. Herewith, you only need to create a [service](https://cloudmydc.com/) object with the correct selector.

The **Kubernetes Cluster** is provided with the Hello World deployment, service, and [ingress](https://cloudmydc.com/) by default (unless custom deployment option was selected during the [installation](https://cloudmydc.com/)). You can examine this default application to understand the concept of the Kubernetes service better.

## Platform DNS Name Resolution inside PODs

Kubernetes cluster uses CoreDNS to resolve internal Kubernetes DNS names. It is automatically defined in the **_/etc/resolv.conf_** file of each pod. Also, CoreDNS utilizes the platform nameservers, which allows establishing direct access between the K8s Cluster and other containers inside the platform.

<u>For example</u>, if you have an environment with a database in the platform and want to connect to it from your Kubernetes pod, you need to use the <b><i>“{obj.data1}”</i></b> hostname and default port for your database (3306 for MySQL, 5432 for Postgres, etc.).

However, you need to create an [endpoint](https://cloudmydc.com/) to connect to such a database from outside of the platform.
