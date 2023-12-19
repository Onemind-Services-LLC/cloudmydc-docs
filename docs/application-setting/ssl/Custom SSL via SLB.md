---
title: Custom ssl via slb
slug: custom-ssl-via-slb
sidebar_position: 4
---

## Custom SSL via Shared Load Balancer (SLB)

The platform provides multiple possibilities to configure SSL for the environments. The available options depend on the particular topology and target domains:

- environments with public IP as an entry point can utilize the _Let’s Encrypt SSL_ and [_Custom SSL_](/docs/application-setting/ssl/custom-ssl) options to automatically secure connection to any domain attached
- the [_Built-In SSL_](http://localhost:3000/docs/application-setting/ssl/built-in-ssl) option allows to automatically configure SSL for the base domain of the environment without public IP
- in case SSL should be set up for custom domains on the environment without external IP the _Custom SSL_ via SLB feature can be used

The latter solution is mainly aimed for the platform installations on top of the _Azure_ or _Google_ hardware (i.e. without additional external IPs). Let’s overview it in more details.

## Configure Custom SSL via SLB

The feature is designed to give an ability to set up Custom SSL certificates without obligatory [external IP](/docs/application-setting/external-access-to-applications/public-ip) attached to the entry point of the environment. As the first step of this approach, a private key, the domain certificate and, optionally, intermediate certificate are uploaded to the platform database. Next, the data is synced across the cluster of [Shared Load Balancers](http://localhost:3000/docs/application-setting/external-access-to-applications/shared-load-balancer). The selection between the SSL certificates on SLB is performed over SNI.

[Server Name Indication](https://en.wikipedia.org/wiki/Server_Name_Indication) (SNI) is an extension to the TLS protocol, which ensures that clients send a name of the domain they request. SNI allows server to provide a certificate with the correct domain even in the case when a full list of hostnames cannot be known in advance.

Currently, all the configurations are performed via API (the UI support will be implemented in the future releases):

- **_[GetSSLCerts](https://docs.jelastic.com/api/#!/api/environment.Binder-method-GetSSLCerts) (session, [ids])_** - lists all certificates for the current user (or the ones specified in the ids parameter)
- **_[AddSSLCert](https://docs.jelastic.com/api/#!/api/environment.Binder-method-AddSSLCert) (session, key, cert, [interm])_** - uploads private key, domain certificate, and intermediate certificate to the platform database (can be provided via links or as a parameter body)
- **_[EditSSLCert](https://docs.jelastic.com/api/#!/api/environment.Binder-method-EditSSLCert) (session, id, [key], [cert], [interm])_** - updates the specified certificate (to delete intermediate certificate use “_”, _“null”_, or _“none”\* as a value)
- **_[RemoveSSLCerts](https://docs.jelastic.com/api/#!/api/environment.Binder-method-RemoveSSLCerts) (session, ids) _**- removes the specified certificates (use “\*” to select all); assigned certificates cannot be deleted and should be unbound first
- **_[BindSSLCert](https://docs.jelastic.com/api/#!/api/environment.Binder-method-RemoveSSLCerts) (session, envName, certId, [entryPoint], [extDomains])_** - binds specified SSL certificate to environment or, if _SLB_ is set as _entyPoint_, binds it on SLB to the listed external domain names
- **_[UnbindSSLCert](https://docs.jelastic.com/api/#!/api/environment.Binder-method-RemoveSSLCerts) (session, envName, [extDomains])_** - unbinds SSL certificate from the environment or, if the _extDomains_ parameter is provided, from the listed custom domains on SLB
- **_[BindExtDomains](https://docs.jelastic.com/api/#!/api/environment.Binder-method-RemoveSSLCerts) (session, envName, extDomains, [certId])_** - binds custom domain names to the environment and, if the _cetId_ parameter is provided, installs the appropriate certificate on SLB
- **_[GetExtDomains](https://docs.jelastic.com/api/#!/api/environment.Binder-method-RemoveSSLCerts) (session, envName)_** - lists custom domains attached to the environment

:::danger note

The maximum number of custom SSL certificates attached via SLB is limited per account with the **_slb.customssl.maxcount_** quota (50 for billing, 5 for trial users by default) to prevent the feature abuse.

:::

So, to attach custom SSL to the environment without public IP through the SLB, you need to upload your certificates to the platform database (**_AddSSLCert_**) and bind it to the new or existing custom domains (**_BindExtDomains_** or **_BindSSLCert_** respectively).
