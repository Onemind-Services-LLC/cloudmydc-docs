---
title: Compound Container
slug: compound-container
sidebar_position: 3
---

<!-- ## Storing Data in Compound Container -->
The platform provides a possibility to treat any node at account as a data storage server, i.e. assign it an additional storage role beside the main native one. Using such a kind of compound containers suits best for handling simple projects.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/CompoundContainer/01-storage-in-existing-node.png)

</div>

In this way, you can leverage the shared storage functionality without the redundant complication of your environment topology due to a separate node inclusion. And complementary utilization of a server, which presence is necessary due to its role but which is not very loaded, generally, helps to save money compared to the dedicated Shared Storage Container use.

Also keep in mind, that local files can be retrieved by an application much more faster in contrast to when they are accessed via network. So, for example, if you have two nodes with one of them distributing some static content and another one - just pushing it out upon the request, the best solution will be to set up a storage on the first container to ensure faster distribution and prevention the network from being bottleneck.