---
title: Access Control
slug: access-control
sidebar_position: 2
---

<!-- ## Kubernetes Cluster: Access Control -->

Kubernetes manages access to the cluster via [RBAC](https://kubernetes.io/docs/reference/access-authn-authz/rbac/) (Role-Based Access Control). By default, you have a token that belongs to a **[ServiceAccount](https://kubernetes.io/docs/reference/access-authn-authz/service-accounts-admin/)** with the cluster-admin role.

If you need to share access to the Kubernetes cluster with other users, it is recommended to create separate **ServiceAccounts** with the required [Roles and RoleBindings](https://kubernetes.io/docs/reference/access-authn-authz/rbac/#default-roles-and-role-bindings). Such a flow helps to manage allowed actions manually (e.g. to _create namespaces, deployments, services, ingresses,_ etc.).

:::danger Notes

- Kubernetes RBAC system is not aligned with PaaS accounts. Any user with SSH access to the master node can utilize the pre-configured kubectl tool with its cluster-admin role. Due to this specific, [environment sharing](/environment-management/share-environment) over the platform functionality may expose sensitive information.
- The [platform firewall](/application-setting/external-access-to-applications/container-firewall/) feature does not work with the Kubernetes Cluster, as the rules are managed dynamically by Kubernetes itself.

:::
