---
sidebar_position: 2
---

## Windows Server VM

The platform integrates support of the virtual machines (VMs), which allows offering Windows Server hosting. In this guide, we’ll show how to create a Windows VM server and the VMs hosting specifics compared to the regular containers used on the platform.

:::danger Note

The availability and version of the Window VMs (e.g., _Windows Server 2019_ or _2022_) on the platform depends on the particular service hosting provider settings.

:::

## Creating Windows VM

1. Click the **New Environment** button at the top of the dashboard to open the topology wizard. Expand the VPS section to locate the Windows server (the VM label helps separate the option from containers).

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/WindowsServerVM/01-windows-vm-topology-wizard.png)

</div>

2. Only fixed resources are available for virtual machines, so when a VM is selected, the wizard’s central part is adjusted. Here, you can choose from several predefined plans using the slider. Hover over the price icon to view all the available tariffs for the VM.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/WindowsServerVM/02-windows-vm-resource-plans.png)

</div>

Also, note that the _[Horizontal Scaling](/docs/ApplicationSetting/Scaling%20And%20Clustering/Horizontal%20Scaling)_ and IPv6 options are not available for virtual machines.

3. If VM is added to the topology, an additional **_VM Resources_** line appears in the right part of the wizard (just below the cloudlets information for containers).

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/WindowsServerVM/03-vm-resources-and-cost.png)

</div>

The cost of the VM Resources is always fixed regardless of the actual consumption of the VMs. Click **Create** to proceed with environment creation.

## Managing Windows VM

1. VMs are highlighted with a dedicated **_VM_** label and custom icon in the **Usage** column (as the cloudlets-shaped one is not suitable).

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/WindowsServerVM/04-vm-label-and-resources-icon.png)

</div>

:::tip Tip

You can hover over the **Usage** column for a comprehensive overview of the current consumption or refer to the node **[Statistics](https://cloudmydc.com/)** for detailed analysis.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/WindowsServerVM/05-vm-current-resource-consumption.png)

</div>

:::

2. Some [node’s function icons](https://cloudmydc.com/) for VM are a bit different compared to containers. The following options are available:

- **Add-Ons** - installs available pluggable modules (e.g. _Env Start/Stop Scheduler_)
- **Restart Node(s)** - restarts a VM
- **Statistics** - shows real-time and historical VM’s resource consumption
- **Remote Desktop** - connects via RDP using the web client and resets RDP password
- **Additionally** - lists additional options, like node’s info

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/WindowsServerVM/06-vm-function-icons.png)

</div>

:::danger Note

The **[clone](https://cloudmydc.com/)** and **[migration](https://cloudmydc.com/)** options are automatically disabled for environments with VMs.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/WindowsServerVM/07-vm-clone-disabled.png)

</div>

:::

Let’s overview these options in detail.

3. **Statistics** are collected in the same way as for containers. However, CPU is measured in % for VM (instead of MHz).

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/WindowsServerVM/08-vm-statistics-monitoring.png)

</div>

4. All the actual configurations and application management are performed via RDP. Use the appropriate \*\*\*\* menu to:

- **_Open in BRemote Desktoprowser_** - connects to the Windows Server over the RDP using the Guacamole web client, which allows managing server directly in a browser
- **Reset RDP Password** - resets and resends password of the Windows Administrator user
- **Info** - displays a short instruction on the remote desktop connection via local RDP client
- **RDP link** - shows a link for connection via local RDP client

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/WindowsServerVM/09-vm-node-remote-desktop-options.png)

</div>

5. In addition to the built-in web client, you can connect using any preferred local RDP application. Connect to VM based on its entry point:

- If created <u>without external IP</u>, an [endpoint](https://cloudmydc.com/) is created automatically and can be used for RDP connectionWindows VM endpoint for RDP

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/WindowsServerVM/10-windows-vm-endpoint-for-rdp.png)

</div>

- If a <u>public IP is attached</u>, you can use it directly as VM’s host

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/WindowsServerVM/11-windows-vm-remote-desktop-connection.png)

</div>

Use administrator credentials from email to authenticate and start managing your Windows Server.

6. The vCPU and Memory for VM are billed as one tariff, while Disk, Network, and Options are billed separately, just as for containers.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/WindowsServerVM/12-windows-vm-billing-history.png)

</div>

That’s all you need to manage Windows VM in the platform. Refer to the official [Microsoft documentation](https://cloudmydc.com/) for information on the server management itself.
