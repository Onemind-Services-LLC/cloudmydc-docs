---
sidebar_position: 5
---

Storing Data in External Server
External server mounting is intended for establishing connection to a third party NAS storage, which shares data via NFS. With PaaS, the process of integration is fairly simple, since you don’t need to perform any additional configurations at either platform or storage side.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/ExternalServer/01-external-storage-server.png)

</div>

So, if you have your storage server with the properly structured content being already set up, with this option you get rid of the necessity to copy or transfer it anywhere - just mount and share data across the layers, environments or even multiple PaaS installations.

Otherwise, i.e. if you are just planning to create your own highly performance and reliable storage, consider to leverage the [Shared Storage Container](/docs/Data%20Storage%20Container/Data%20Storage%20Overview). It’s delivered with all of the necessary software being preinstalled, thus you can [utilize such storage]( /docs/Data%20Storage%20Container/Use%20Cases/Dedicated%20Container) just after the creation with no extra configurations required.
