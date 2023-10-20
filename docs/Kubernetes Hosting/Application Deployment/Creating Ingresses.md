---
sidebar_position: 5
---

## Kubernetes Cluster: Creating Ingresses
**[Ingress](1)** is a Kubernetes Cluster load balancer that manages external access to the services, provides SSL termination and name-based virtual hosting. It is managed via a set of rules (spec) that are matched against all incoming requests.

:::tip Tip

Compared to the service expose via *[NodePort](1)*, ingress is a more powerful but also more complicated option. It is most useful when you need to expose multiple services under the same IP address. Additionally, ingresses are managed by a controller, which provides numerous features out-of-the-box (SSL, auth, routing, etc.).

:::

Ingresses in **Kubernetes Cluster** are managed by [Traefik](1) ingress controller by default, with the [HAProxy](1) and NGINX options available in the upcoming 1.15.5 [package version](1). It watches objects, parses specs/annotations, and translates them into redirect rules.

:::tip Note

It is not possible to change the selected ingress controller via the Kubernetes management add-on or some other automation tool after the installation. The operation can still be performed manually, feel free to contact support if you need assistance.

:::

An ingress spec is a combination of a path rule, a backend service, and a port. For example, your ingress may look as follows:

```bash
apiVersion: extensions/v1beta1
kind: Ingress
metadata:
  labels:
    app: myapp
  name: myapp
  annotations:
    kubernetes.io/ingress.class: traefik
    ingress.kubernetes.io/secure-backends: "true"
    traefik.frontend.rule.type: PathPrefixStrip
spec:
  rules:
  - http:
      paths:
      - path: /myapp
        backend:
          serviceName: myapp
          servicePort: 8080
```

This example exposes the myapp service, which is bound to the 8080 port on a path of your Kubernetes environment default domain with the /myapp suffix (i.e. *https://${envName}.${platformDomain.com}/myapp*). For additional information on the ingress rules configuration (including path- and subdomain-based routing), refer to the [official documentation](1).