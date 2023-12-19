---
title: Container image requirements
slug: container-image-requirements
sidebar_position: 5
---

import obj from './ContainerImageRequirements.json'

Container Image Requirements
Currently, the platform containers have the following requirements for the base image:

- [Supported OS Distributions](/docs/container/container-image-requirements#supported-os-distributions)
- [Supported Architectures](/docs/container/container-image-requirements#supported-architectures)

## Supported OS Distributions

The following Linux distributions are supported as a base of containers that could be deployed at the platform and properly handled by the system (this information is subject to change):

<div style={{
        width: '100%',
        margin: '0 0 3rem 0',
        borderRadius: '7px',
        overflow: 'hidden',
    }} >
    <div>
        <div style={{
            width: '100%',
            height: 'auto',
            border: '1px solid var(--ifm-toc-border-color)',
            display: 'grid', 
            fontWeight: '500',
            color: 'var(--table-color-primary)',
            background: 'var(--table-bg-primary-t2)', 
            gridTemplateColumns: '1fr 1fr 1fr',
            overflow: 'hidden',
        }}>
            <div style={{
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                padding: '20px',
                wordBreak: 'break-all',
                borderRight: '1px solid var(--ifm-toc-border-color)',
            }}>
                Distribution
            </div>
            <div style={{
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                padding: '20px',
                borderRight: '1px solid var(--ifm-toc-border-color)',
                wordBreak: 'break-all'
            }}>
               Version
            </div>
            <div style={{
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                padding: '20px',
                borderRight: '1px solid var(--ifm-toc-border-color)',
                wordBreak: 'break-all'
            }}>
                VZ Template
            </div> 
        </div>
        {obj.data1.map((item, idx) => {
          return <div key={idx} style={{
            width: '100%',
            height: 'auto',
            border: '1px solid var(--ifm-toc-border-color)',
            display: 'grid', 
           gridTemplateColumns: '1fr 1fr 1fr',
            fontWeight: '400',
        }}>
            <div style={{
                padding: '20px',
                borderRight: '1px solid var(--ifm-toc-border-color)',
                background: 'var(--table-bg-primary-t1)',
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'flex-start',
                wordBreak: 'break-all',
                padding: '20px',
            }}>
                <a href="/">
                    {item.Distribution}
                </a>
            </div>
            <div style={{
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                padding: '20px',
                wordBreak: 'break-all'
            }}>
                {item.Version}
            </div>
            <div style={{
                wordBreak: 'break-all',
                 padding: '20px',
            }}>
                {item.VZTemplate}
            </div>
        </div>
        })}
    </div>
</div>

:::danger Notes

- Containers based on the **Debian 11** OS template are not supported on the platforms below the 6.0 version.
- The **[almalinux-8-x86_64](/docs/platform-overview/release-notes/release-notes-8.2.4)** template is supported since the 8.2.4 platform version (kernel version 3.10.0-1160.80.1.vz7.191.4).
- The **[almalinux-9-x86_64](/docs/platform-overview/release-notes/release-notes-8.3#almalinux-9-base-os-image)** template is supported since the 8.3.1 platform version (kernel version 3.10.0-1160.80.1.vz7.191.4).

:::

In order to run containers of another type, please, [contact us](https://cloudmydc.com/contact-us) to negotiate the appropriate OS support.

## Supported Architectures

Currently, only **_amd64_** image architecture is supported for [custom container deployment](/docs/container/container-deployment/custom-containers-deployment) (and [redeployment](/docs/category/container-deployment)).
