---
title: Http3 support
slug: http3-support
sidebar_position: 6
---

## HTTP/3 (QUIC) Support

**_HTTP/3_** (formerly known as _“HTTP over QUIC"_) is the to-become third major version of the Hypertext Transfer Protocol family. Featurewise, it is very similar to HTTP/2 but offers some significant advantages due to changes to the underlying method of utilization. Namely, the HTTP/3 is built on **_QUIC_** transport protocol, which works over UDP instead of TCP.

Currently, HTTP/3 is already provided by some solutions (e.g. *LiteSpeed and *NGINX\*) and is [adopted by the platform](/docs/ApplicationSetting/External%20Access%20To%20Applications/HTTP3%20Support) through the latest releases of the following stacks:

- **_load balancers:_** [LiteSpeed Web ADC](/docs/Load%20Balancers/LiteSpeed%20Web%20ADC), [Varnish](/docs/Load%20Balancers/Varnish), [NGINX](/docs/Load%20Balancers/NGINX/NGINX%20Balancer)
- **_application servers:_** [LiteSpeed WS](/docs/PHP/PHP%20App%20Servers/LiteSpeed%20Web%20Server), [LLSMP & LEMP](/docs/PHP/PHP%20App%20Servers/LEMP%20&%20LLSMP), [NGINX PHP](/docs/PHP/PHP%20App%20Servers/NGINX%20PHP/), [NGINX Ruby](/docs/Ruby/NGINX%20Ruby)

Below, you can check the:

- [technical preconditions of the HTTP/3 implementation](/docs/ApplicationSetting/External%20Access%20To%20Applications/HTTP3%20Support#technical-implementation-specificspreconditions)
- [benefits of the HTTP/3 (QUIC)](/docs/ApplicationSetting/External%20Access%20To%20Applications/HTTP3%20Support#http3-quic-key-features)
- [integration in the platform](/docs/ApplicationSetting/External%20Access%20To%20Applications/HTTP3%20Support#http3-support-implementation)

## Technical Implementation Specifics/Preconditions

The main reason behind HTTP/3 implementation is that HTTP/2 reached its limit in the speed improvements due to the bottleneck of the TCP protocol. Despite being reliable, all the round-trips required by handshakes, delivery feedbacks, ordering guarantees, and checksums of the TCP can be considered weak and redundant. Herewith, as a part of the TCP/IP stack, TCP is implemented in operating system kernels, and devices firmware, making significant changes to TCP is next to impossible.

:::tip

Below, we’ve provided some examples of the limitations provided by TCP:

- a single TCP connection can transfer data over multiple streams; however, packet loss holds the whole connection (and all its streams) until TCP retransmits the packet
- TCP does not provide built-in TLS, so secure connections require an additional round-trip, creating a delay

:::

UDP suffers no such limitations and is just as widespread as TCP, which allows achieving improvements without significant changes to the existing operating systems and devices firmware. Thus, HTTP/3 has adopted the QUIC transport protocol (initially developed by Google), which is based on UDP, provides [significant benefits](/docs/ApplicationSetting/External%20Access%20To%20Applications/HTTP3%20Support#http3-quic-key-features). Also, being already in use by prominent internet companies such as Google and Facebook, the efficiency and reliability of the QUIC solution cannot be denied.

## HTTP/3 (QUIC) Key Features

By using QUIC instead of TCP as its base, HTTP/3 can take advantage of the numerous benefits it provides. Herewith, QUIC implementation on top of UDP allows offering features similar to TCP but without some of the choke points. So, let’s sum up the main distinguishing features of the HTTP/3 when compared to its predecessor HTTP/2:

- _enhanced multiplexing_ - packet loss affects only the appropriate single stream (not all of them within the same connection)
- _faster connection setup_ - protocol handles security features by itself, decreasing the number of round-trips for establishing a connection (especially noticeable on high-latency networks, e.g. for mobile users)
- _connection migration_ - the use of connection ID instead of destination IP allows ensuring packet delivery even in case of a network switch (e.g. download over HTTP/3 will proceed when wifi connection is changed to the mobile network)

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/HTTP3Support/01-http2-vs-http3.gif)

</div>

Generally, HTTP/3 aims to provide faster and more reliable connections, which will be especially noticeable by those with higher latency networks. So, from a performance standpoint, mobile users will reap the most benefits, but these are the improvements that everyone can appreciate.

## HTTP/3 Support Implementation

The support for the HTTP/3 (QUIC) protocol is still in its earliest implementation stages. However, it is already provided by some solutions (e.g. [LiteSpeed](https://www.litespeedtech.com/latest-techs/litespeed-is-first)) and is in development by others.

Below, you can view the most accurate list of the software stacks at the platform that provide HTTP/3 support by default:

- **_load balancers_**
  - [_LiteSpeed Web ADC_](/docs/Load%20Balancers/LiteSpeed%20Web%20ADC): all versions
  - [_Varnish_](/docs/Load%20Balancers/Varnish): _5.2.x, 6.x.x_ versions and above
  - [_NGINX_](/docs/Load%20Balancers/NGINX/NGINX%20Balancer): since the _1.16.1_ release
- **_application servers_**
  - [_LiteSpeed WS_](/docs/PHP/PHP%20App%20Servers/LiteSpeed%20Web%20Server): all versions
  - [LLSMP](/docs/PHP/PHP%20App%20Servers/LEMP%20&%20LLSMP): all versions
  - [_LEMP_](/docs/PHP/PHP%20App%20Servers/LEMP%20&%20LLSMP): since the _1.16.1_ release
  - [_NGINX PHP_](/docs/PHP/PHP%20App%20Servers/NGINX%20PHP/): since the _1.16.1_ release for PHP _7.2.26, 7.3.13, 7.4.1_ versions and above
  - [_NGINX Ruby_](/docs/Ruby/NGINX%20Ruby): since the _1.16.1_ release for Ruby _2.4.9, 2.5.7, 2.6.5, 2.7.0_ versions and above

Just [create an environment](/docs/environment-management/setting-up-environment) topology that includes any of the application servers or load balancers mentioned above.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/HTTP3Support/02-http3-ready-servers.png)

</div>

Herewith, you’ll need to additionally attach a [public IP](/docs/application-setting/external-access-to-applications/public-ip) address to bypass the Shared Load Balancer and allow working directly with the server over HTTP/3.

:::danger note

As of the client-side, the HTTP/3 (QUIC) support is currently enabled by default in _Chromium_, can be configured in _Chrome_ (chrome://flags), and is not [yet implemented](https://bugzilla.mozilla.org/show_bug.cgi?id=1158011) by the Firefox browser.

:::
