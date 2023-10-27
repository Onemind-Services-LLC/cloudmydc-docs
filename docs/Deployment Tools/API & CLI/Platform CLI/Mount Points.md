---
sidebar_position: 9
---

## CLI Tutorial: Mount Points

[Mount Points](https://cloudmydc.com/) are used to manage connection between data storage server and client, allowing you can work with the shared remote files as easy as with the local ones. With platform CLI it’s possible to configure such mounts via terminal and to include them into specialized scripts for automation.

Below, we’ll observe all of the available commands for the mount points management.

1. First of all, you can get the list of existing mount points with the corresponding **_GetMountPoints_** CLI command:

```bash

~/jelastic/environment/file/getmountpoints --envName  {env_name} --nodeId  {node_ID}

```

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/MountPoints/1.png)

</div>

where

- **_{env_name}_** - domain name of environment, where you want to check for mount points
- **_{node_ID}_** - unique identifier of the node to be checked

:::tip Note

Also, it is possible to use _“nodeGroup”_ instead of “nodeId” to select the environment layer and show all mount points on it (e.g. _cp, bl, storage_, etc.).

:::

2. In a similar way, you can check exports list by using the appropriate **_GetExportedList_** method with the same parameters as for the previous command:

```bash
~/jelastic/environment/file/getexportedlist --envName  {env_name} --nodeId  {node_ID}
```

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/MountPoints/2.png)

</div>

3. In order to add mount point to a single node the following **_AddMountPointById_** CLI method is used:

```bash
~/jelastic/environment/file/addmountpointbyid --envName  {env_name} --nodeId  {node_ID} --path  {local_path} --protocol  {protocol} --sourcePath  {source_path} --sourceNodeId  {source_node_ID} --readOnly {true/false}
```

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/MountPoints/3.png)

</div>

where

- **_{env_name}_** - domain name of environment, where you want to add mount point
- **_{node_ID}_** - unique identifier of the node within the selected environment data will be mounted to
- **_{local_path}_** - path to folder on client node data will be shown at
- **_{protocol}_** - protocol to be used (the **nfs** one is required)
- **_{source_path}_** - path to the files on your data storage server
- **_{source_node_ID}_** - identifier of the source node

:::tip Note

Alternatively, a _sourceHost_ parameter can be used in order to point to the data storage server via IP or domain name.

:::

- **_{true/false}_** - _read only_ or _read & write_ rights for the mounted data on the client node correspondingly (_false_ by default)

:::tip Tip

In case you are not sure if mount points are allowed between nodes (due to the possible cross mounts issues), you can pelimitarly perform a check up:

```bash
~/jelastic/environment/file/checkcrossmount --envName {env_name} --nodeId {env_name} --sourceNodeId {source_node_ID}
```

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/MountPoints/4.png)

</div>

As you can see in the image above, there will be cross mount (i.e. **_true_** value), if we try to mount from our storage (_111109_) to _128994_ node, because data is already shared in opposite direction (from _128994_ to _111109_). But if your received value is **_false_**, mount point between nodes can be added.

:::

4. The mount points removal process (**_RemoveMountPointById_**) do not use any new parameters compared to the addition method:

```bash
~/jelastic/environment/file/removemountpointbyid --envName  {env_name} --nodeId  {node_ID} --path  {local_path}
```

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/MountPoints/5.png)

</div>

5. Also, it is possible to add mount points to the whole environment layer, without the necessity to call separate command for each node:

```bash
~/jelastic/environment/file/addmountpointbygroup --envName  {env_name} --nodeGroup  {env_layer} --path  {local_path} --protocol  {protocol} --sourcePath  {source_path} --sourceNodeId  {source_node_ID} --readOnly {true/false}
```

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/MountPoints/6.png)

</div>

where

- **_{env_name}_** - domain name of environment, where you want to add mount point
- **_{env_layer}_** - name of the environment layer, data will be mounted to -**_{local_path}_** - path to folder on a client node, where data will be displayed
- **_{protocol}_** - protocol to be used (the **nfs** one is required)
- **_{source_path}_** - path to the files on data storage server
- **_{source_node_ID}_** - identifier of the source node

:::tip Note

Alternatively, a _sourceHost_ parameter can be used in order to point to the data storage server via IP or domain name.

:::

- **_{true/false}_** - _read only_ or _read & write_ rights for the mounted data on the client node correspondingly (false by default)

6. Similarly, you can unmount data from all of the layer’s nodes with the appropriate **_RemoveMountPointByGroup_** method:

```bash
~/jelastic/environment/file/removemountpointbygroup --envName  {env_name} --nodeGroup  {env_layer} --path  {local_path}
```

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/MountPoints/7.png)

</div>

That’s all! Now, you know how to manage your mount points via platform CLI.
