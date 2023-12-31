---
title: Horizontal Scaling
slug: horizontal-scaling
sidebar_position: 2
---

<!-- ## Horizontal Scaling inside the Cloud: Multi Node -->

With the platform, hosting of your applications becomes truly flexible. In addition to [automatic vertical scaling](/application-setting/scaling-and-clustering/automatic-vertical-scaling), the platform also lets you increase/decrease the number of servers in your environment manually or [automatically](/application-setting/scaling-and-clustering/automatic-horizontal-scaling).

The process of manual scaling is fairly simple - open the environment topology wizard and use the appropriate “**+**” and “**-**” buttons or type the required number in the central panel. Also, you can use the slider, which automatically appears upon making any adjustment.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/HorizontalScaling/01-topology-wizard-horizontal-scaling.png)

</div>

:::tip

- you can automate horizontal scaling based on incoming load with the help of [tunable triggers](/application-setting/scaling-and-clustering/automatic-horizontal-scaling)
- you can use the initial (master) node of the layer as your [storage server](/data-storage-container/use-cases/master-container) for sharing data within the whole layer
- in case of scaling in (i.e decreasing the nodes number), the last container added to the layer is the first one to be removed (unless it is [selected explicitly](/application-setting/scaling-and-clustering/horizontal-scaling#managing-nodes-within-layer))

:::

Next, you can select the required [scaling mode](/application-setting/scaling-and-clustering/horizontal-scaling) from the appropriate drop-down list. Also, for additional details refer to the [horizontal scaling specifics](/application-setting/scaling-and-clustering/automatic-horizontal-scaling) section below.

## Scaling Modes

Starting with the 5.5 platform version, the preferred scaling mode can be selected for new environments during creation, as well as adjusted for the existing ones through the topology wizard:

- **_Stateless_** - simultaneously creates all new nodes from the base image template
- **_Stateful_** - sequentially copies file system of the master container into the new nodes

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/HorizontalScaling/02-scaling-modes.png)

</div>

The first option is comparatively faster, while the second one automatically copies all custom configurations. Herewith, during the initial layer creation, all of the nodes are created simultaneously to speed up the process (even for the **_stateful_** mode, as no customization has been applied yet).

While using the **_stateless_** mode, be aware of the following features absence on the new nodes within the layer:

- **deployments** - the existing project contexts won’t be transferred
- **custom SSL** - SSL certificates and configs won’t be copied
- **mount points** - custom [mounts](/data-storage-container/data-sharing/mount-points) will be moved only if the appropriate [volume](/container/container-configuration/volumes) is configured
- **add-ons** - any [add-ons](/deployment-tools/cloud-scripting-&-jps/marketplace) installed on the layer won’t be available

:::danger tip

The transfer of custom files for the stateless mode can be done manually or configured via the [Cloud Scripting](https://docs.cloudscripting.com/) automation (e.g. using the onBefore- and onAfterScaleOut events).

:::

Based on these peculiarities, the platform recommends (and applies by default) the **_stateful_** scaling mode for the _load balancer, application server_, and _VPS_ stacks. In case of necessity, you can manually redefine the scaling mode for your nodes at any time via topology wizard.

## Horizontal Scaling Specifics

The maximum number of the same-type servers within a single environment layer depends on a particular hosting provider settings (usually this limit stands for 16 nodes). You can check the exact value within the **_Quotas & Pricing > [Account Limits](/account-and-pricing/quotas-system)_** information frame.

All newly added servers are created at different hardware nodes, providing advanced reliability and high-availability.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/HorizontalScaling/03-horizontal-scaling-high-availability.png)

</div>

Each environment node group (layer) is provided with the dedicated name, which, if needed, can be manually adjusted. In case there are several instances inside, layer name will be complemented with the **_xN_** label (where **_N_** is the actual nodes number).

Having several same-type nodes within a layer enables their synchronous management. Thus, all containers can be simultaneously [configured](/container/container-configuration/configuration-tools), inspected for logs and statistics, [restarted or redeployed](/category/container-deployment) through the corresponding icons.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/HorizontalScaling/04-scaled-nodes-management.png)

</div>

In order to operate with a particular container separately, expand the layer’s string to see the full list of its nodes. Each of these containers is an isolated instance, which has a unique **_Node ID_** and can be accessed/configured apart from others. Herewith, the layer master node can be easily located due to the dedicated icon.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/HorizontalScaling/05-nodes-in-scaled-layer.png)

</div>

To facilitate interaction with numerous servers of the same type, the platform also allows marking a particular node with the appropriate label, e.g. to define master and slave instances in a DB cluster.

Just double-click at the default **_Node ID: xxx_** value (or hover over it to reveal a special pencil icon) and specify the desired alternative name.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/HorizontalScaling/06-aliases-for-scaled-nodes.png)

</div>

More information on this labeling feature can be found in the [Environment Aliases](/environment-management/environment-aliases) document.

While scaling different types of stacks, consider the following specifics:

- upon scaling the application server instance, the load balancer node will be automatically added to the environment topology
- if enabling the [High-Availability](/application-setting/scaling-and-clustering/session-replication-for-ha) option for application server, the obligatory required NGINX load balancer cannot be scaled horizontally (if several nodes of NGINX were available before, they will be automatically downscaled to a single instance)
- upon scaling VPS nodes, each one is provided with a separate [public IP](/application-setting/external-access-to-applications/public-ip) address attached
- [Maven](/java/build-node/java-vcs-deployment-with-maven) is the only node, which cannot be scaled horizontally (as there is no point in such operation)

Now, you know how easy it is to horizontally scale instances in the platform and aware of the operation specifics. Also, feel free to configure an [automatic nodes scaling](/application-setting/scaling-and-clustering/automatic-horizontal-scaling) to smoothly overcome high load spikes without overpaying for unused resources.

## Managing Nodes within Layer

The platform provides a simple nodes management, where you just need to specify the required number of containers in a layer. Herewith, the removal process is done in the order opposite to the addition - i.e. the most recent containers are removed first. In case you need to delete some specific node, you can select the required one via:

- the **_Horizontal Scaling_** section in topology wizard - accessible using the **_Change Environment Topology_** button next to the required environment

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/HorizontalScaling/07-nodes-management-wizard.png)

</div>

- the dedicated **_Scaling Nodes_** form in the dashboard - accessible using the **_Additionally > Scaling Nodes_** option next to the layer or **_Additionally > Delete_** next to the particular node

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/HorizontalScaling/08-delete-node-dashboard.png)

</div>

In the **Scaling Nodes** window, you can perform the following actions:

1. Add new nodes to the layer, using the **+** or **Add New Node** buttons.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/HorizontalScaling/09-scaling-nodes-add.png)

</div>

:::tip

- In case a [**high availability**](/application-setting/scaling-and-clustering/session-replication-for-ha) option is enabled for the layer (available for the _Tomcat_ and _TomEE_ application servers only), the nodes are added and removed in pairs.
- The new nodes' icons represent the scaling mode of the layer - empty container for _stateless_ and filled one for _stateful_.

:::

2. Remove instances with the - and **Delete** (upon hovering over particular node) buttons.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/HorizontalScaling/10-scaling-nodes-delete.png)

</div>

:::tip

- The first node in the list is a so-called _“master”_ of the layer (highlighted with a special icon) and can only be removed alongside the whole layer.
- You can **Undo Deletion** of the existing node during configuration. However, after applying changes, the instance will be deleted permanently.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/HorizontalScaling/11-undo-node-deletion.png)

</div>

:::

3. At the bottom of the frame, a redirect to the [Automatic Horizontal Scaling](/application-setting/scaling-and-clustering/automatic-horizontal-scaling) section can be found.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/HorizontalScaling/12-auto-scaling-redirect.png)

</div>

If any adjustments are made in the form, you’ll need to confirm the redirect via pop-up (as any unsaved changes are discarded).

4. When applying changes, the platform automatically notify you about all the potentially harmful actions that will be performed with your environment (if any). The list includes:

- nodes restart notice
- layers and separate nodes removal reminder
- impact on existing NFS mounts

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/HorizontalScaling/13-confirm-changes.png)

</div>

Before proceeding, ensure that the listed points won’t affect your application, and any crucial data (from the removed nodes) is safely backed up.
