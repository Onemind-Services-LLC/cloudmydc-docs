---
sidebar_position: 2
---

## Storing Data in Master Container
The master container type of data storing becomes the most efficient, when you don’t need to export files on different environments but face the necessity to share your data in the confines of a single node layer.

In such a case, you do not require a separate storage container and can use the initial (master) node of the layer as your storage server. E.g. if your application uses some pool of images on compute nodes, you can just share the folder for the whole layer. This ensures availability of the same content at all containers and, simultaneously, eliminates the necessity to synchronize and keep this data copy at each node.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/MasterContainer/01-master-container-storage.png)

</div>

So, this way, you get rid from data duplications, lowering disk space consumption, which also reduces overall environment cost. Moreover, as a separate Storage node is not used here (since everything is kept within layer’s master container), no additional environment elements (and thus funds) are required to implement this structure.