---
sidebar_position: 1
---

This document is preliminary and subject to change.

In this document, you will find all of the new features, enhancements and visible changes included to the **Virtuozzo PaaS 8.3.2** release.

<div style={{
        display: 'flex',
        borderTop: '1px solid #ddd',
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

![Locale Dropdown](./img/RN8.3.2/download.png)

Changed

</div>
    <div>
        <div style={{
            background: '#def6ff',
            padding: '20px',
            margin: '10px 0',
        }}>
            <h3 style={{
                fontSize: '23px',
                fontWeight: '500',
        }}>SSH Gate Improvements</h3>
            <p>Provided a number of updates and improvements to enhance SSH Gate security, reliability, and usability</p>
            <div style={{
            display: 'flex',
            flexDirection: 'row-reverse',
        }}>
                <a href="/">
                    Learn More >>
                </a>
            </div>
        </div>
        <div style={{
            background: '#def6ff',
            padding: '20px',
            margin: '10px 0',
        }}>
            <h3 style={{
                fontSize: '23px',
                fontWeight: '500',
        }}>SSH Gate Improvements</h3>
            <p>Provided a number of updates and improvements to enhance SSH Gate security, reliability, and usability</p>
            <div style={{
            display: 'flex',
            flexDirection: 'row-reverse',
        }}>
                <a href="/">
                    Learn More >>
                </a>
            </div>
        </div>
    </div>

</div>

<div style={{
        display: 'flex',
        borderTop: '1px solid #ddd',
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

![Locale Dropdown](<./img/RN8.3.2/download%20(1).png>)

Fixed

</div>
    <div>
        <div style={{
            background: '#fef6e6',
            padding: '20px',
            margin: '10px 0',
        }}>
            <h3 style={{
                fontSize: '23px',
                fontWeight: '500',
        }}>SSH Gate Improvements</h3>
            <p>Provided a number of updates and improvements to enhance SSH Gate security, reliability, and usability</p>
            <div style={{
            display: 'flex',
            flexDirection: 'row-reverse',
        }}>
                <a href="/">
                    Learn More >>
                </a>
            </div>
        </div>
        <div style={{
            background: '#fef6e6',
            padding: '20px',
            margin: '10px 0',
        }}>
            <h3 style={{
                fontSize: '23px',
                fontWeight: '500',
        }}>SSH Gate Improvements</h3>
            <p>Provided a number of updates and improvements to enhance SSH Gate security, reliability, and usability</p>
            <div style={{
            display: 'flex',
            flexDirection: 'row-reverse',
        }}>
                <a href="/">
                    Learn More >>
                </a>
            </div>
        </div>
    </div>

</div>

## SSH Gate Improvements
[SSH Gate](1) component of the platform that helps connect to environments via SSH protocol. In the current 8.3.2 platform version, several improvements were applied to ensure the security and reliability of the process:

- Implemented the correct processing of the new [OpenSSH extension](1) to the SSH protocol. The OpenSSH 8.5 and newer clients no longer require the “**UpdateHostkeys=no**” directive to connect the gate.
- Removed support for the obsolete KEX (key exchange protocol) algorithms to ensure the security of the connection.
- Fixed an error with the SSH Gate crash when connecting to a broken or poorly performing backend.

<div style={{
        display: 'flex',
        flexDirection: 'row-reverse',
        padding: '10px 0',
    }}>
    <a href="">
        Back to the top
    </a>
</div>

## Fixes Compatible with Prior Versions

Below, you can find the fixes that were implemented in the Virtuozzo Application Platform 8.3.2 release and also integrated into previous platform versions by means of the appropriate patches.

Table Table 

<div style={{
        display: 'flex',
        flexDirection: 'row-reverse',
        padding: '10px 0',
    }}>
    <a href="">
        Back to the top
    </a>
</div>

## Software Stack Versions
The software stack provisioning process is independent of the platform release, which allows new software solutions to be delivered as soon as they are ready. However, due to the necessity to adapt and test new stack versions, there is a small delay between software release by its respective upstream maintainer and integration into Virtuozzo Application Platform.

The most accurate and up-to-date list of the certified [software stack versions](1) can be found on the dedicated documentation page.

[More info](1)

<div style={{
        display: 'flex',
        flexDirection: 'row-reverse',
        padding: '10px 0',
    }}>
    <a href="">
        Back to the top
    </a>
</div>

## Bug Fixes

In the table below, you can see the list of bug fixes applied to the platform starting from Virtuozzo Application Platform 8.3.2 release:


<div style={{
        display: 'flex',
        flexDirection: 'row-reverse',
        padding: '10px 0',
    }}>
    <a href="">
        Back to the top
    </a>
</div>