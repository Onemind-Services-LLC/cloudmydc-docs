---
sidebar_position: 2
---

## Kubernetes Cluster: Access Control
Kubernetes manages access to the cluster via [RBAC](1) (Role-Based Access Control). By default, you have a token that belongs to a **[ServiceAccount](1)** with the cluster-admin role.

If you need to share access to the Kubernetes cluster with other users, it is recommended to create separate **ServiceAccounts** with the required [Roles and RoleBindings](1). Such a flow helps to manage allowed actions manually (e.g. to *create namespaces, deployments, services, ingresses,* etc.).

:::danger Notes

- Kubernetes RBAC system is not aligned with PaaS accounts. Any user with SSH access to the master node can utilize the pre-configured kubectl tool with its cluster-admin role. Due to this specific, [environment sharing](1) over the platform functionality may expose sensitive information.
- The [platform firewall](1) feature does not work with the Kubernetes Cluster, as the rules are managed dynamically by Kubernetes itself.

:::