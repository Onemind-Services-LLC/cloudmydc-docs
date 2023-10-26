---
sidebar_position: 1
---

## WildFly Application Server

<div style={{
    display: 'grid',
    gridTemplateColumns: '0.15fr 1fr',
    gap: '10px'
}}>
<div>
<div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'cetner',
}}>

![Locale Dropdown](./img/WildFlyServer/01-wildfly-logo.png)

</div>
</div>
<div>

[**WildFly**](https://cloudmydc.com/) is a modern, flexible, lightweight and managed application runtime, which is written in Java and implements the latest standards and technology of the Java Platform Enterprise Edition (Java EE) specification. WildFly is entirely free and open source, available to be run on multiple platforms.

</div>
</div>

Among the main features of this application server:

- customizable runtime based on the pluggable subsystems, which can be integrated or removed on demand
- Java EE8 support to implement the latest enterprise Java standards in easy to consume framework
- modular approach with an ability to start each service in isolation
- fast, lightweight and optimized for ultimate performance

To create a **WildFly** application server for Java project hosting within the platform, follow the simple steps below.

:::tip Note

This template utilizes a modern **systemd** initialization daemon.

:::

## Creating WildFly Server

1. Log in to your PaaS account and click the **New Environment** button in the upper left corner of the dashboard.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/WildFlyServer/02-new-environment-button.png)

</div>

2. In the opened environment topology wizard, navigate to the **Java** tab and select **WildFly** (the **_10-16_** versions are supported) from the list of available application servers. Then, specify the allocated resources limit using cloudlet sliders, choose a [region](/docs/EnvironmentManagement/Environment%20Regions/Choosing%20a%20Region) (if several ones are available) and edit the name of your environment.

:::tip Note

- WildFly is [not compatible](https://cloudmydc.com/) with Java 6 and 7; therefore these versions are not available
- due to the minimal WildFly resources requirements, it is strongly recommended to allocate **more than 1 cloudlet** for this node. Otherwise, you can experience low server performance and even its failure
- WildFly can be launched in the [_Standalone_](https://cloudmydc.com/) mode using the configuration file defined in the **_STANDALONE_MODE_CONFIG_** environment variable
- the platform provides out-of-box support of the WildFly servers **_Auto-Clustering_** in the [_Managed Domain_](https://cloudmydc.com/) mode via the appropriate switcher in topology wizard

:::

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/WildFlyServer/03-wildfly-server-topology-wizard.png)

</div>

Click the **Create** button when ready.

3. Wait for a couple of minutes for your environment to be created and click the **Open in Browser** button next to it.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/WildFlyServer/04-wildfly-open-in-browser.png)

</div>

4. The WildFly default welcome page lists some useful links to help you get started.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/WildFlyServer/05-wildfly-home-page.png)

</div>

In order to access the WildFly **_Administration Console_**, click the appropriate link (circled in the image above) or get URL from the email (received after server creation) alongside with other access credentials.

Also, you can establish an [SSH connection](/docs/Deployment%20Tools/SSH/SSH%20Access/Overview) to your [WildFly server](https://cloudmydc.com/) and use the WildFly CLI inbuilt utility for managing.

## Standalone Mode

The WildFly application server is run in the _“standalone”_ mode by default so that each instance is an independent process based on the configuration file defined via the **_STANDALONE_MODE_CONFIG_** [environment variable](https://cloudmydc.com/).

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/WildFlyServer/06-wildfly-standalone-config-variable.png)

</div>

There are four certified profiles for standalone mode:

- **_standalone.xml_** (_default_) - configurations for _Java Enterprise Edition 8 Web_ with the required technologies
- **_standalone-full.xml_** - configurations for _Java Enterprise Edition 8 Full_ with all the EE 8 technologies
- **_standalone-ha.xml_** - configurations for _Java Enterprise Edition 8 Web_ with high availability
- **_standalone-full-ha.xml_** - configurations for _Java Enterprise Edition 8 Full_ with high availability

In case of using the HA configs (the last two options), the [**_jgroups_**](https://cloudmydc.com/) protocol is used for messaging between nodes. It is configured to use the authorization with the MD5 token and asymmetrical encryption by default. Such an implementation prevents non-authorized nodes from being able to join a cluster and non-members from communicating with cluster members.

:::tip Note

It is highly recommended to change the default auth_value parameter within your standalone HA configuration file on the production environments.

:::

This concludes our tutorial on the WildFly server installation! Now, you can configure it in a way you need and proceed to the [application deployment](/docs/Deployment/Deployment%20Guide).
