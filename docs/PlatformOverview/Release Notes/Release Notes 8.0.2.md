---
sidebar_position: 8
---

import obj from './ReleaseNotes8.0.2.json'

## Virtuozzo Application Platform 8.0.2

_This document is preliminary and subject to change._

In this document, you will find all of the new features, enhancements and visible changes included to the **Virtuozzo PaaS 8.0.2** release.

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
        }}>SSH Key Types Support</h3>
            <p>Added ECDSA key type support and restricted the addition of the DSA keys</p>
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
    <div>
        <div style={{
            background: '#def6ff',
            padding: '20px',
            margin: '10px 0',
        }}>
            <h3 style={{
                fontSize: '23px',
                fontWeight: '500',
        }}>Extended Environment Metadata</h3>
            <p>Provided a new metadata field for additional environment information</p>
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
        }}>Custom Data in Cloud Scripting Response</h3>
            <p>Implemented an additional field to return custom data when executing API commands via Cloud Scripting</p>
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
        }}>SSL Installation Error Description</h3>
            <p>Extended the error description for the SSL installation failure operation</p>
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
        }}>API Changes</h3>
            <p>Listed all the changes to the public platform API in the current release</p>
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
        }}>Software Stack Versions</h3>
            <p>Actualized list of supported OS templates and software stack versions</p>
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

![Locale Dropdown](<./img/ReleaseNotes8.3.2/download%20(1).png>)

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
        }}>Fixes Compatible with Prior Versions</h3>
            <p>Bug fixes implemented in the current release and integrated into the previous platform versions through the appropriate patches</p>
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

## SSH Key Types Support
The ***ECDSA*** key type is rapidly gaining popularity as an alternative to the standard RSA keys. As a result of such a growing demand, the platform implements support of this new SSH key type in the current 8.0.2 PaaS version. Additionally, the deprecated ***ssh-dss*** (DSA) public key algorithm is now explicitly forbidden instead of just being recommended against. The platform will show a warning about insufficient security level when trying to add a DSA key. However, the already existing keys will not be affected in any way.

Currently, the platform supports the following SSH key types:

- ECDSA
- EdDSA
- RSA

[More info](1)

<div style={{
        display: 'flex',
        flexDirection: 'row-reverse',
        padding: '10px 0',
    }}>
    <a href="/docs/PlatformOverview/Release%20Notes/Release%20Notes%208.3#virtuozzo-application-platform-83">
        Back to the top
    </a>
</div>

## Extended Environment Metadata
Each environment on the platform has its common information stored via the dedicated JSON file. Such implementation simplifies various internal processes by allowing PaaS to get the required data quickly. Additionally, this data is utilized during the [environment export](1) operation. In the current platform upgrade, environments’ metadata was extended with a JSON field for various additional information (e.g. *ProjectName* or *ProjectScope*).

<div style={{
        display: 'flex',
        flexDirection: 'row-reverse',
        padding: '10px 0',
    }}>
    <a href="/docs/PlatformOverview/Release%20Notes/Release%20Notes%208.3#virtuozzo-application-platform-83">
        Back to the top
    </a>
</div>

## Custom Data in Cloud Scripting Response
[Cloud Scripting](1) is a platform-dedicated programming language developed for application packaging, operation automation, and complex CI/CD flows integration. This powerful automation tool implements popular solutions such as the Let’s Encrypt add-on or various [auto-clusters](1). It can also be utilized by platform end-users to automate their own operations.

In the current 8.0.2 PaaS release, the ability to return custom data with the API request response was implemented. For example, it is used to add information on the skipped domains to the Let’s Encrypt add-on installation response.

[More info](1)

<div style={{
        display: 'flex',
        flexDirection: 'row-reverse',
        padding: '10px 0',
    }}>
    <a href="/docs/PlatformOverview/Release%20Notes/Release%20Notes%208.3#virtuozzo-application-platform-83">
        Back to the top
    </a>
</div>

## SSL Installation Error Description
The platform offers multiple ways of working with the [SSL](1) security protocol for establishing an encrypted connection between environments and the web. However, sometimes the certificate installation fails without providing a user with a clear description of the issue. In order to help our customers, the non-descriptive “SSL installed with Error!” message was replaced with a more detailed response that is based on the actually occurred problem.

<div style={{
        display: 'flex',
        flexDirection: 'row-reverse',
        padding: '10px 0',
    }}>
    <a href="/docs/PlatformOverview/Release%20Notes/Release%20Notes%208.3#virtuozzo-application-platform-83">
        Back to the top
    </a>
</div>

## API Changes
Below, you can find a list of all changes to the public API in the 8.0.2 platform version (compared to the preceding [7.3](1) ones):

added new methods to the **[environment > control](1)** service that allow adding and managing custom data in the environment – ***AddEnvProperty***, ***RemoveEnvProperty***, ***ApplyEnvProperty***, ***GetEnvProperty***

[More info](1)

<div style={{
        display: 'flex',
        flexDirection: 'row-reverse',
        padding: '10px 0',
    }}>
    <a href="/docs/PlatformOverview/Release%20Notes/Release%20Notes%208.3#virtuozzo-application-platform-83">
        Back to the top
    </a>
</div>

## Fixes Compatible with Prior Versions

Below, you can find the fixes that were implemented in the Virtuozzo Application Platform 8.0.2 release and also integrated into previous platform versions by means of the appropriate patches.

<div style={{
        width: '100%',
        margin: '0 0 5rem 0',
        borderRadius: '7px',
        overflow: 'hidden',
    }} >
    <div style={{
        width: '100%',
        padding: '20px',
        height: '70px',
        border: '1px solid var(--ifm-toc-border-color)',
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        fontWeight: '400',
        fontSize: '25px',
        color: 'var(--table-color-primary)',
        background: 'var(--table-bg-primary-t3)'
    }}>
        Virtuozzo Application Platform 8.0.2
    </div>
    <div>
        <div style={{
            width: '100%',
            height: 'auto',
            border: '1px solid var(--ifm-toc-border-color)',
            display: 'grid', 
            fontWeight: '500',
            color: 'var(--table-color-primary)',
            background: 'var(--table-bg-primary-t2)', 
            gridTemplateColumns: '0.8fr 1fr 2fr',
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
                wordBreak: 'break-all'
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
        {obj.data1.map((item, idx) => {
            return <div style={{
            width: '100%',
            height: 'auto',
            border: '1px solid var(--ifm-toc-border-color)',
            display: 'grid', 
            gridTemplateColumns: '0.8fr 1fr 2fr',
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
                    {item.CompatibleFrom}
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
    <a href="/docs/PlatformOverview/Release%20Notes/Release%20Notes%208.3#virtuozzo-application-platform-83">
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
    <a href="/docs/PlatformOverview/Release%20Notes/Release%20Notes%208.3#virtuozzo-application-platform-83">
        Back to the top
    </a>
</div>