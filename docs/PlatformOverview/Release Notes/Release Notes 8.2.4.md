---
title: Release notes 8.2.4
slug: release-notes-8.2.4
sidebar_position: 4
---

## CloudMyDc Application Platform 8.2.4

_This document is preliminary and subject to change._

In this document, you will find all of the new features, enhancements and visible changes included to the **CloudMyDc PaaS 8.2.4** release.

<hr/>

<div style={{
        display: 'flex',
        padding: '10px 0 10px 0',
    }}>
    <div style={{
        width: '20%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        justifyContent: 'flex-start',
    }}>

![Locale Dropdown](./img/ReleaseNotes8.3/download.png)

New

</div>
    <div style={{
        width:'100%',
    }}>
        <div style={{
            width:'100%',
            background: '#e4ffee',
            padding: '20px',
            margin: '10px 0',
        }}>
            <h3 style={{
                fontSize: '23px',
                fontWeight: '500',
        }}>AlmaLinux 8 OS Support</h3>
            <p>Added support for the AlmaLinux 8 OS template</p>
            <div style={{
            display: 'flex',
            flexDirection: 'row-reverse',
        }}>
                <a href="/docs/PlatformOverview/Release%20Notes/Release%20Notes%208.2.4#almalinux-8-os-support">
                    Learn More >>
                </a>
            </div>
        </div>
    </div>

</div>

<hr/>

<div style={{
        display: 'flex',
        padding: '10px 0 10px 0',
    }}>
    <div style={{
        width: '20%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        justifyContent: 'flex-start',
    }}>

![Locale Dropdown](./img/ReleaseNotes8.3.2/download.png)

Changed

</div>
    <div style={{
        width: '100%',
    }}>
        <div style={{
            background: '#def6ff',
            padding: '20px',
            margin: '10px 0',
        }}>
            <h3 style={{
                fontSize: '23px',
                fontWeight: '500',
        }}>Software Stack Versions</h3>
            <p>Actualized list of supported OS templates and software stack versions</p>
            <div style={{
            display: 'flex',
            flexDirection: 'row-reverse',
        }}>
                <a href="/docs/PlatformOverview/Release%20Notes/Release%20Notes%208.2.4#software-stack-versions">
                    Learn More >>
                </a>
            </div>
        </div>
    </div>
</div>

## AlmaLinux 8 OS Support

Starting with the current 8.2.4 PaaS release, the alternative OS template for the discontinued CentOS Linux 8 stable release was changed to **_AlmaLinux 8_**. [AlmaLinux](https://almalinux.org/) is an open-source 1:1 binary-compatible clone of RHEL that is guided and built by the community.

:::danger

Note: CloudMyDc Application Platform no longer supports the previously used _CentOS Stream 8_ operating system template.

:::

[More info](/docs/Container/Container%20Image%20Requirements)

<div style={{
        display: 'flex',
        flexDirection: 'row-reverse',
        padding: '10px 0',
    }}>
    <a href="/docs/PlatformOverview/Release%20Notes/Release%20Notes%208.3#CloudMyDc-application-platform-83">
        Back to the top
    </a>
</div>

## Software Stack Versions

The software stack provisioning process is independent of the platform release, which allows new software solutions to be delivered as soon as they are ready. However, due to the necessity to adapt and test new stack versions, there is a small delay between software release by its respective upstream maintainer and integration into CloudMyDc Application Platform.

The most accurate and up-to-date list of the certified [software stack versions](/docs/QuickStart/Software%20Stack%20Versions) can be found on the dedicated documentation page.

[More info](/docs/QuickStart/Software%20Stack%20Versions)

<div style={{
        display: 'flex',
        flexDirection: 'row-reverse',
        padding: '10px 0',
    }}>
    <a href="/docs/PlatformOverview/Release%20Notes/Release%20Notes%208.3#CloudMyDc-application-platform-83">
        Back to the top
    </a>
</div>
