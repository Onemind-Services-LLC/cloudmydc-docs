---
title: Overview
slug: overview
sidebar_position: 1
---

<!-- ## SSH Access -->

The platform supports access via SSH in one of the following ways:

- [**_Web SSH_**](/deployment-tools/ssh/ssh-access/web-ssh) - An access to a separate node within your environment, which is based on the _user’s session_; connection is initiated upon clicking the **Web SSH** button next to the desired environment in dashboard (which allows to connect from anywhere over Internet, using just a browser).

- [**_SSH Gate_**](/deployment-tools/ssh/ssh-access/ssh-gate) - Such connection type is based on the _SSH key pair_ usage and allows access to either [whole PaaS account](/deployment-tools/ssh/ssh-access/ssh-gate#ssh-access-to-platform-account) or just a [particular container](/deployment-tools/ssh/ssh-access/ssh-gate#direct-access-to-container); it provides the substantial level of security, connecting only instances with **private SSH key** that matches the appropriate **public key**, stored within your Platform account settings.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/Overview/01-ssh-access-options.png)

</div>

After accessing node via SSH using any of the above-described methods, you can start managing your container.
