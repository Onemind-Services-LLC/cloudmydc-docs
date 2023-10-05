---
sidebar_position: 1
---

import obj from './ReleaseNotes8.3.2.json'

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

<div style={{
        width: '100%',
        margin: '0 0 5rem 0',
        borderRadius: '7px',
        overflow: 'hidden',
    }} >
    <div>
        <div style={{
            width: '100%',
            padding: '20px',
            height: '70px',
            border: '1px solid var(--ifm-toc-border-color)',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            fontWeight: '400',
            fontSize: '18px',
            color: 'var(--table-color-primary)',
            background: 'var(--table-bg-primary-t3)'
        }}>
            Virtuozzo Application Platform 8.3.2
        </div>
        <div style={{
            width: '100%',
            height: 'auto',
            border: '1px solid var(--ifm-toc-border-color)',
            display: 'grid', 
            fontWeight: '500',
            color: 'var(--table-color-primary)',
            background: 'var(--table-bg-primary-t2)', 
            gridTemplateColumns: '1fr 1.1fr 3fr',
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
                #
            </div>
            <div style={{
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                padding: '20px',
                borderRight: '1px solid var(--ifm-toc-border-color)',
            }}>
                Compatible from
            </div>
            <div style={{
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                padding: '20px',
                borderRight: '1px solid var(--ifm-toc-border-color)',
                wordBreak: 'break-all'
            }}>
                Description
            </div> 
        </div>
        <div style={{
            width: '100%',
            height: 'auto',
            border: '1px solid var(--ifm-toc-border-color)',
            display: 'grid', 
            gridTemplateColumns: '1fr 1.1fr 3fr',
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
                JE-67008
            </div>
            <div style={{
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                padding: '20px',
                wordBreak: 'break-all'
            }}>
                5.0.5
            </div>
            <div style={{
                wordBreak: 'break-all',
                 padding: '20px',
            }}>
                An error occurs when activating the Cyclos 4 Pro package from the Marketplace due to insufficient default cloudlets
            </div>
        </div>
    </div>
</div>

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
        width: '100%',
        margin: '0 0 5rem 0',
        borderRadius: '7px',
        overflow: 'hidden',
    }} >
    <div>
        <div style={{
            width: '100%',
            padding: '20px',
            height: '70px',
            border: '1px solid var(--ifm-toc-border-color)',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            fontWeight: '400',
            fontSize: '18px',
            color: 'var(--table-color-primary)',
            background: 'var(--table-bg-primary-t3)'
        }}>
            Virtuozzo Application Platform 8.3.2
        </div>
        <div style={{
            width: '100%',
            height: 'auto',
            border: '1px solid var(--ifm-toc-border-color)',
            display: 'grid', 
            fontWeight: '500',
            color: 'var(--table-color-primary)',
            background: 'var(--table-bg-primary-t2)', 
            gridTemplateColumns: '1fr 1.1fr 3fr',
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
                #
            </div>
            <div style={{
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                padding: '20px',
                borderRight: '1px solid var(--ifm-toc-border-color)',
            }}>
                Affected Versions
            </div>
            <div style={{
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                padding: '20px',
                borderRight: '1px solid var(--ifm-toc-border-color)',
                wordBreak: 'break-all'
            }}>
                Description
            </div> 
        </div>
        {obj.BugFixes.map((item, idx) => {
            return <div key={idx} style={{
            width: '100%',
            height: 'auto',
            border: '1px solid var(--ifm-toc-border-color)',
            display: 'grid', 
            gridTemplateColumns: '1fr 1.1fr 3fr',
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
                {item.JE}
            </div>
            <div style={{
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                padding: '20px',
                wordBreak: 'break-all'
            }}>
                {item.AffectedVersions}
            </div>
            <div style={{
                wordBreak: 'break-all',
                 padding: '20px',
            }}>
                {item.Desc}
            </div>
        </div>
        })}
    </div>
</div>

<div style={{
        display: 'flex',
        flexDirection: 'row-reverse',
        padding: '10px 0',
    }}>
    <a href="">
        Back to the top
    </a>
</div>
