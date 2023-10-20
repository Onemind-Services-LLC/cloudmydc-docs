---
sidebar_position: 1
---

## SSH Access

The platform supports access via SSH in one of the following ways:

- [**_Web SSH_**](https://cloudmydc.com/) - An access to a separate node within your environment, which is based on the _user’s session_; connection is initiated upon clicking the **Web SSH** button next to the desired environment in dashboard (which allows to connect from anywhere over Internet, using just a browser).

- [**_SSH Gate_**](https://cloudmydc.com/) - Such connection type is based on the _SSH key pair_ usage and allows access to either [whole PaaS account](https://cloudmydc.com/) or just a [particular container](https://cloudmydc.com/); it provides the substantial level of security, connecting only instances with **private SSH key** that matches the appropriate **public key**, stored within your Platform account settings.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/Overview/01-ssh-access-options.png)

</div>

After accessing node via SSH using any of the above-described methods, you can start managing your container.
