---
title: Eclipse Plugin Manual
slug: eclipse-plugin-manual
sidebar_position: 1
---

<!-- ## Eclipse Plugin Overview -->

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

![Locale Dropdown](./img/EclipsePluginManual/1.png)

</div>
</div>
<div>

The most valuable about [Eclipse](https://www.eclipse.org/) is that it provides an open source platform for creating an extensible integrated development environment (IDE).

</div>
</div>

It has a well-designed and extensible architecture and allows anyone to build solutions that integrate seamlessly with the environment and other tools.

The key to the **seamless integration** of tools with Eclipse is the approach of attachable **_plugins_**. With the exception of a small run-time kernel, everything in Eclipse is a plugin. This means that you can develop such an attachable module by your own, which subsequently can be easily integrated with Eclipse in exactly the same way as the other ones.

PaaS team has also created a dedicated [plugin for Eclipse](https://marketplace.eclipse.org/content/jelastic-paas-plugin) development platform. It represents a set of software development tools, that simplifies the process of applications development at Eclipse IDE, where they are handled in the form of projects (Java EE) at the platform.

See the following video tutorial in order to quickly get insights on basics of the Eclipse Plugin usage:

<iframe width="756" height="425" src="https://www.youtube.com/embed/AzLxdadJtx4" title="Eclipse IDE plug-in for Jelastic PaaS hosting" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

And within the instructions below, you can find out how to install the plugin, manage environments and deploy your projects directly from Eclipse IDE in more details:

- [Plugin Installation](/deployment-tools/plugins/eclipse-plugin/eclipse-plugin-installation)
- [Environment Management](/deployment-tools/plugins/eclipse-plugin/environment-management)
- [application deployment](/deployment-tools/plugins/eclipse-plugin/application-deployment)
