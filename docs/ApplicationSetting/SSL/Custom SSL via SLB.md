---
sidebar_position: 3
---

## Custom SSL via Shared Load Balancer (SLB)

The platform provides multiple possibilities to configure SSL for the environments. The available options depend on the particular topology and target domains:

- environments with public IP as an entry point can utilize the [_Let’s Encrypt SSL_](https://cloudmydc.com/) and [_Custom SSL_](https://cloudmydc.com/) options to automatically secure connection to any domain attached
- the [_Built-In SSL_](https://cloudmydc.com/) option allows to automatically configure SSL for the base domain of the environment without public IP
- in case SSL should be set up for custom domains on the environment without external IP the _Custom SSL_ via SLB feature can be used

The latter solution is mainly aimed for the platform installations on top of the [_Azure_](https://cloudmydc.com/) or [_Google_](https://cloudmydc.com/) hardware (i.e. without additional external IPs). Let’s overview it in more details.

## Configure Custom SSL via SLB

The feature is designed to give an ability to set up Custom SSL certificates without obligatory [external IP](https://cloudmydc.com/) attached to the entry point of the environment. As the first step of this approach, a private key, the domain certificate and, optionally, intermediate certificate are uploaded to the platform database. Next, the data is synced across the cluster of [Shared Load Balancers](https://cloudmydc.com/). The selection between the SSL certificates on SLB is performed over SNI.

[Server Name Indication](https://cloudmydc.com/) (SNI) is an extension to the TLS protocol, which ensures that clients send a name of the domain they request. SNI allows server to provide a certificate with the correct domain even in the case when a full list of hostnames cannot be known in advance.

Currently, all the configurations are performed via API (the UI support will be implemented in the future releases):

- **_[GetSSLCerts](https://cloudmydc.com/) (session, [ids])_** - lists all certificates for the current user (or the ones specified in the ids parameter)
- **_[AddSSLCert](https://cloudmydc.com/) (session, key, cert, [interm])_** - uploads private key, domain certificate, and intermediate certificate to the platform database (can be provided via links or as a parameter body)
- **_[EditSSLCert](https://cloudmydc.com/) (session, id, [key], [cert], [interm])_** - updates the specified certificate (to delete intermediate certificate use “_”, _“null”_, or _“none”\* as a value)
- **_[RemoveSSLCerts](https://cloudmydc.com/) (session, ids) _**- removes the specified certificates (use “\*” to select all); assigned certificates cannot be deleted and should be unbound first
- **_[BindSSLCert](https://cloudmydc.com/) (session, envName, certId, [entryPoint], [extDomains])_** - binds specified SSL certificate to environment or, if _SLB_ is set as _entyPoint_, binds it on SLB to the listed external domain names
- **_[UnbindSSLCert](https://cloudmydc.com/) (session, envName, [extDomains])_** - unbinds SSL certificate from the environment or, if the _extDomains_ parameter is provided, from the listed custom domains on SLB
- **_[BindExtDomains](https://cloudmydc.com/) (session, envName, extDomains, [certId])_** - binds custom domain names to the environment and, if the _cetId_ parameter is provided, installs the appropriate certificate on SLB
- **_[GetExtDomains](https://cloudmydc.com/) (session, envName)_** - lists custom domains attached to the environment

:::danger note

The maximum number of custom SSL certificates attached via SLB is limited per account with the **_slb.customssl.maxcount_** [quota](https://cloudmydc.com/) (50 for billing, 5 for trial users by default) to prevent the feature abuse.

:::

So, to attach custom SSL to the environment without public IP through the SLB, you need to upload your certificates to the platform database (**_AddSSLCert_**) and bind it to the new or existing custom domains (**_BindExtDomains_** or **_BindSSLCert_** respectively).
