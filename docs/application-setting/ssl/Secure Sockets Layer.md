---
title: Secure sockets layer
slug: secure-sockets-layer
sidebar_position: 1
---

## Secure Sockets Layer (SSL)

**SSL (Secure Sockets Layer)** is the standard security protocol for establishing an encrypted connection between a web server and a browser. This technology ensures that data exchange remains private, i.e. cannot be intercepted by a third-party. Such protection is essential when transferring confidential information like credit card transactions, login credentials, etc.

SSL encrypts the data with the help of two keys - public (can be known to everyone) and private (known to the recipient of the transmissible message only) ones. When configured on a web server, SSL allows using HTTPS protocol (over the _443_ port) instead of the default HTTP one to access its content.

To establish an SSL connection, a web server requires an **SSL Certificate** to be installed, which digitally binds a cryptographic key to a holder’s details and site hostname. Usually, such a certificate needs to be verified by a trusted authority (or check out the [Self-Signed SSL](/docs/application-setting/ssl/self-signed-custom-ssl)), which makes it reliable and ensures that any connection to your site or application is performed without issues.

The platform gives you an opportunity to choose between three available SSL solutions:

- [Built-In SSL Certificates](/docs/ApplicationSetting/SSL/Built-In%20SSL) - enables an already trusted platform Built-In SSL certificate, avoiding any additional checks and save your time on the certificate validation

:::danger note

This solution is not compatible with [public IP](/docs/application-setting/external-access-to-applications/public-ip) address attached to your servers and is applied to the default environment domain name only (i.e. with the hoster’s domain at the end).

:::

- Let’s Encrypt SSL Certificates - installs a pre-configured add-on managed by the platform to greatly simplify and automate the process of issuing (from the free and open Let’s Encrypt certificate authority) and integration of trusted SSL certificates
- [Custom SSL Certificates](/docs/application-setting/ssl/custom-ssl) - allows to manually configure everything for your certificate (e.g. generate it, providing your custom domain name, select preferred Certificate Authority for validation, etc.)
