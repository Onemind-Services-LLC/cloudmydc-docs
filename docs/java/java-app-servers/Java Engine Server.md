---
title: Java engine server
slug: java-engine-server
sidebar_position: 7
---

## Java Engine Server

**Java Engine** software stack is an image of a base CentOS template with the preinstalled JDK. It provides a bare minimum required for Java application hosting, while ensuring compatibility with all of the [platform features](https://cloudmydc.com/) (e.g. automated vertical and horizontal scaling, public IP, isolation groups, firewall rules, API and SSH access, etc.).

Java Engine is designed for the deployment and hosting of Java applications based on the fat _JAR / uber JAR_ (i.e. executable JAR with all the classes, resources, and dependencies). It utilized the [Java Memory Agent](/docs/EnvironmentManagement/EnvironmentVariables/Custom%20Environment%20Variables) to automatically optimize your application by tuning configs according to the load and available resources.

:::tip Note

This template utilizes a modern **_systemd_** initialization daemon.

:::

## Create Java Engine

Follow the next simple steps to create a new environment with Java Engine server.

1. Log into the platform dashboard and click the **New Environment** button at the top-left corner.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/JavaEngineServer/01-new-environment-button.png)

</div>

2. Within the opened topology wizard, switch to the **_Java_** tab, select the **Java Engine** server and the required JDK version (circled in the image below).

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/JavaEngineServer/02-java-engine-in-topology-wizard.png)

</div>

Customize any other parameter up to your needs, e.g. resources limits, disk space, external IPs, [region](/docs/EnvironmentManagement/Environment%20Regions/Choosing%20a%20Region) (if available), etc. Click **Create** to proceed.

3. Your environment should be ready in a minute.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/JavaEngineServer/03-java-engine-environment-created.png)

</div>

Now, you can start managing your environment:

- [Deploy Application](https://cloudmydc.com/)
- [Bind Custom Domain](https://cloudmydc.com/)
- [Monitor the Statistics & View Log Files](https://cloudmydc.com/)
- [Tune the Server Configurations](https://cloudmydc.com/)
- [Access Environment via SSH](https://cloudmydc.com/)

Refer to the [Java Developers Center](https://cloudmydc.com/) for a complete overview of the Java hosting within the platform.
