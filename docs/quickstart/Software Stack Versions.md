---
title: Software stack versions
slug: software-stack-versions
sidebar_position: 4
---

import obj from './SoftwareStackVersions.json'

Within this page, you can find a list of the latest software stacks and engines provided by the platform:

- [Load Balancers](/docs/QuickStart/Software%20Stack%20Versions#load-balancers)
- [Application Servers](/docs/QuickStart/Software%20Stack%20Versions#application-servers)
- [Databases](/docs/QuickStart/Software%20Stack%20Versions#databases)
- [Additional Stacks](/docs/QuickStart/Software%20Stack%20Versions#additional-stacks)
- [Engines](/docs/QuickStart/Software%20Stack%20Versions#engines)

Each software stack remains supported by the platform up to the end-of-life (EOL) date notified by the respective upsdiveam maintainer. After the EOL, stacks are no longer available for the new environment creation, but the already existing ones remain fully operable (including redeploy, cloning, horizontal scaling).

:::tip Note

Software stacks are based on the CentOS 7 base image by default, which will reach EOL on 30th June 2024. The platform starts divansitioning to the software stacks based on the new [AlmaLinux 9](/docs/PlatformOverview/Release%20Notes/Release%20Notes%208.3#almalinux-9-base-os-image) images to ensure support of all the up-to-date functionality, modern security standards, and compatibility with all the latest software solutions.

Platform cardividges have officially reached EOL and will not receive updates anymore, including security patches and new platform functionality support (e.g. firewall UI).

:::

We highly recommend re-creating or [redeploying](/docs/category/container-deployment) EOL containers with the up-to-date release of the software to ensure the availability of all the latest functionality and security fixes. Similarly, it is advisable to periodically (at least once per year) update all of your environments.

## Load Balancers

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
        LOAD BALANCERS
    </div>
    <div>
        <div style={{
            width: '100%',
            height: 'auto',
            border: '1px solid var(--ifm-toc-border-color)',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'flex-start',
            fontWeight: '500',
            gap: '10px',
            color: 'var(--table-color-primary)',
            background: 'var(--table-bg-primary-t2)', 
        }}>
            <div style={{
                minWidth: '40%',
                maxWidth: '40%',
                padding: '20px',
                borderRight: '1px solid var(--ifm-toc-border-color)',
                 display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
            }}>
                Name & Link to Tags
            </div>
              <div style={{
                width: '100%',
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
            }}>
                Latest Supported Version
            </div>
        </div>
        {obj.LoadBalancers.map((item, idx) => {
            return <div key={idx} style={{
            width: '100%',
            height: 'auto',
            border: '1px solid var(--ifm-toc-border-color)',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'flex-start',
            fontWeight: '400',
            gap: '10px', 
        }}>
            <div style={{
                minWidth: '40%',
                maxWidth: '40%',             
                padding: '20px',
                borderRight: '1px solid var(--ifm-toc-border-color)',
                background: 'var(--table-bg-primary-t1)',
            }}>
                <a href="/">
                    {item.NameLinkToTags}
                </a>
            </div>
            <div>
                {item.LatestSupportedVersion}
            </div>
        </div>
        })}
    </div>
</div>

## Application Servers

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
        APPLICATION SERVERS
    </div>
    <div>
        <div style={{
            width: '100%',
            height: 'auto',
            border: '1px solid var(--ifm-toc-border-color)',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'flex-start',
            fontWeight: '500',
            gap: '10px',
            color: 'var(--table-color-primary)',
            background: 'var(--table-bg-primary-t2)', 
        }}>
            <div style={{
                minWidth: '40%',
                maxWidth: '40%',
                padding: '20px',
                borderRight: '1px solid var(--ifm-toc-border-color)',
                 display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
            }}>
                Name & Link to Tags
            </div>
            <div style={{
                width: '100%',
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
            }}>
                Latest Supported Version
            </div>
        </div>
        <div style={{
            width: '100%',
            height: 'auto',
            border: '1px solid var(--ifm-toc-border-color)',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'flex-start',
            fontWeight: '400',
            gap: '10px', 
        }}>
            <div style={{
                minWidth: '40%',
                maxWidth: '40%',             
                padding: '20px',
                borderRight: '1px solid var(--ifm-toc-border-color)',
                background: 'var(--table-bg-primary-t1)',
            }}>
                <a href="/">
                    .NET Core
                </a>
            </div>
            <div>3.1.426; 5.0.408; 6.0.414; 7.0.401</div>
        </div>
        <div style={{
            width: '100%',
            height: 'auto',
            border: '1px solid var(--ifm-toc-border-color)',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'flex-start',
            fontWeight: '400',
            gap: '10px', 
        }}>
            <div style={{
                minWidth: '40%',
                maxWidth: '40%',             
                padding: '20px',
                borderRight: '1px solid var(--ifm-toc-border-color)',
                background: 'var(--table-bg-primary-t1)',
            }}>
                <a href="/">
                    Apache PHP
                </a>
            </div>
            <div>2.4.57</div>
        </div>
        <div style={{
            width: '100%',
            height: 'auto',
            border: '1px solid var(--ifm-toc-border-color)',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'flex-start',
            fontWeight: '400',
            gap: '10px', 
        }}>
            <div style={{
                minWidth: '40%',
                maxWidth: '40%',             
                padding: '20px',
                borderRight: '1px solid var(--ifm-toc-border-color)',
                background: 'var(--table-bg-primary-t1)',
            }}>
                <a href="/">
                EOL
                </a></div>
            <div>2.4.45</div>
        </div>
        <div style={{
            width: '100%',
            height: 'auto',
            border: '1px solid var(--ifm-toc-border-color)',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'flex-start',
            fontWeight: '400',
            gap: '10px', 
        }}>
            <div style={{
                minWidth: '40%',
                maxWidth: '40%',             
                padding: '20px',
                borderRight: '1px solid var(--ifm-toc-border-color)',
                background: 'var(--table-bg-primary-t1)',
            }}>
                <a href="/">
                Apache Python
                </a></div>
            <div>2.4.57</div>
        </div>
        <div style={{
            width: '100%',
            height: 'auto',
            border: '1px solid var(--ifm-toc-border-color)',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'flex-start',
            fontWeight: '400',
            gap: '10px', 
        }}>
            <div style={{
                minWidth: '40%',
                maxWidth: '40%',             
                padding: '20px',
                borderRight: '1px solid var(--ifm-toc-border-color)',
                background: 'var(--table-bg-primary-t1)',
            }}>
                <a href="/">
                Apache Ruby
                </a></div>
            <div>2.4.57</div>
        </div>
        <div style={{
            width: '100%',
            height: 'auto',
            border: '1px solid var(--ifm-toc-border-color)',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'flex-start',
            fontWeight: '400',
            gap: '10px', 
        }}>
            <div style={{
                minWidth: '40%',
                maxWidth: '40%',             
                padding: '20px',
                borderRight: '1px solid var(--ifm-toc-border-color)',
                background: 'var(--table-bg-primary-t1)',
            }}>
                <a href="/">
                GlassFish
                </a></div>
            <div>5.0.0; 5.1.0; 6.1; 6.2.5; 7.0.8</div>
        </div>
        <div style={{
            width: '100%',
            height: 'auto',
            border: '1px solid var(--ifm-toc-border-color)',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'flex-start',
            fontWeight: '400',
            gap: '10px', 
        }}>
            <div style={{
                minWidth: '40%',
                maxWidth: '40%',             
                padding: '20px',
                borderRight: '1px solid var(--ifm-toc-border-color)',
                background: 'var(--table-bg-primary-t1)',
            }}>
                <a href="/">
                EOL
                </a></div>
            <div>3.1.2.2; 4.1.2</div>
        </div>
        <div style={{
            width: '100%',
            height: 'auto',
            border: '1px solid var(--ifm-toc-border-color)',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'flex-start',
            fontWeight: '400',
            gap: '10px', 
        }}>
            <div style={{
                minWidth: '40%',
                maxWidth: '40%',             
                padding: '20px',
                borderRight: '1px solid var(--ifm-toc-border-color)',
                background: 'var(--table-bg-primary-t1)',
            }}>
                <a href="/">
                Golang
                </a></div>
            <div>1.17.12; 1.18.10; 1.19.12; 1.20.8; 1.21.1</div>
        </div>
        <div style={{
            width: '100%',
            height: 'auto',
            border: '1px solid var(--ifm-toc-border-color)',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'flex-start',
            fontWeight: '400',
            gap: '10px', 
        }}>
            <div style={{
                minWidth: '40%',
                maxWidth: '40%',             
                padding: '20px',
                borderRight: '1px solid var(--ifm-toc-border-color)',
                background: 'var(--table-bg-primary-t1)',
            }}>
                <a href="/">
                EOL
                </a></div>
            <div>1.9.4; 1.10.3; 1.11.13; 1.12.17; 1.13.15; 1.14.15; 1.15.15; 1.16.15</div>
        </div>
        <div style={{
            width: '100%',
            height: 'auto',
            border: '1px solid var(--ifm-toc-border-color)',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'flex-start',
            fontWeight: '400',
            gap: '10px', 
        }}>
            <div style={{
                minWidth: '40%',
                maxWidth: '40%',             
                padding: '20px',
                borderRight: '1px solid var(--ifm-toc-border-color)',
                background: 'var(--table-bg-primary-t1)',
            }}>
                <a href="/">
                Jetty
                </a></div>
            <div>9.4.52; 10.0.16; 11.0.16; 12.0.1</div>
        </div>
        <div style={{
            width: '100%',
            height: 'auto',
            border: '1px solid var(--ifm-toc-border-color)',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'flex-start',
            fontWeight: '400',
            gap: '10px', 
        }}>
            <div style={{
                minWidth: '40%',
                maxWidth: '40%',             
                padding: '20px',
                borderRight: '1px solid var(--ifm-toc-border-color)',
                background: 'var(--table-bg-primary-t1)',
            }}>
                <a href="/">
                LEMP (HTTP/3 ready)
                </a></div>
            <div>1.14.2; 1.16.1; 1.22.1</div>
        </div>
        <div style={{
            width: '100%',
            height: 'auto',
            border: '1px solid var(--ifm-toc-border-color)',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'flex-start',
            fontWeight: '400',
            gap: '10px', 
        }}>
            <div style={{
                minWidth: '40%',
                maxWidth: '40%',             
                padding: '20px',
                borderRight: '1px solid var(--ifm-toc-border-color)',
                background: 'var(--table-bg-primary-t1)',
            }}>
                <a href="/">
                LiteSpeed Web Server (HTTP/3 ready)
                </a></div>
            <div>5.3.8; 5.4.12; 6.0.12; 6.1.2</div>
        </div>
        <div style={{
            width: '100%',
            height: 'auto',
            border: '1px solid var(--ifm-toc-border-color)',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'flex-start',
            fontWeight: '400',
            gap: '10px', 
        }}>
            <div style={{
                minWidth: '40%',
                maxWidth: '40%',             
                padding: '20px',
                borderRight: '1px solid var(--ifm-toc-border-color)',
                background: 'var(--table-bg-primary-t1)',
            }}>
                <a href="/">
                AlmaLinux
                </a></div>
            <div>5.4.12; 6.1.2</div>
        </div>
        <div style={{
            width: '100%',
            height: 'auto',
            border: '1px solid var(--ifm-toc-border-color)',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'flex-start',
            fontWeight: '400',
            gap: '10px', 
        }}>
            <div style={{
                minWidth: '40%',
                maxWidth: '40%',             
                padding: '20px',
                borderRight: '1px solid var(--ifm-toc-border-color)',
                background: 'var(--table-bg-primary-t1)',
            }}>
                <a href="/">
                LLSMP (HTTP/3 ready)
                </a>
                </div>
            <div>5.3.8; 5.4.12; 6.0.12; 6.1.2</div>
        </div>
        <div style={{
            width: '100%',
            height: 'auto',
            border: '1px solid var(--ifm-toc-border-color)',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'flex-start',
            fontWeight: '400',
            gap: '10px', 
        }}>
            <div style={{
                minWidth: '40%',
                maxWidth: '40%',             
                padding: '20px',
                borderRight: '1px solid var(--ifm-toc-border-color)',
                background: 'var(--table-bg-primary-t1)',
            }}>
                <a href="/">
                NGINX PHP (HTTP/3 ready)
                </a></div>
            <div>1.16.1; 1.18.0; 1.20.2; 1.22.1; 1.24.0</div>
        </div>
        <div style={{
            width: '100%',
            height: 'auto',
            border: '1px solid var(--ifm-toc-border-color)',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'flex-start',
            fontWeight: '400',
            gap: '10px', 
        }}>
            <div style={{
                minWidth: '40%',
                maxWidth: '40%',             
                padding: '20px',
                borderRight: '1px solid var(--ifm-toc-border-color)',
                background: 'var(--table-bg-primary-t1)',
            }}>
                <a href="/">AlmaLinux
                </a></div>
            <div>1.24.0</div>
        </div>
        <div style={{
            width: '100%',
            height: 'auto',
            border: '1px solid var(--ifm-toc-border-color)',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'flex-start',
            fontWeight: '400',
            gap: '10px', 
        }}>
            <div style={{
                minWidth: '40%',
                maxWidth: '40%',             
                padding: '20px',
                borderRight: '1px solid var(--ifm-toc-border-color)',
                background: 'var(--table-bg-primary-t1)',
            }}>
                <a href="/">
                EOL
                </a></div>
            <div>1.12.2; 1.14.2</div>
        </div>
        <div style={{
            width: '100%',
            height: 'auto',
            border: '1px solid var(--ifm-toc-border-color)',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'flex-start',
            fontWeight: '400',
            gap: '10px', 
        }}>
            <div style={{
                minWidth: '40%',
                maxWidth: '40%',             
                padding: '20px',
                borderRight: '1px solid var(--ifm-toc-border-color)',
                background: 'var(--table-bg-primary-t1)',
            }}>
                <a href="/">
                NGINX Ruby (HTTP/3 ready)
                </a></div>
            <div>1.16.1; 1.20.2; 1.22.1; 1.24.0</div>
        </div>
        <div style={{
            width: '100%',
            height: 'auto',
            border: '1px solid var(--ifm-toc-border-color)',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'flex-start',
            fontWeight: '400',
            gap: '10px', 
        }}>
            <div style={{
                minWidth: '40%',
                maxWidth: '40%',             
                padding: '20px',
                borderRight: '1px solid var(--ifm-toc-border-color)',
                background: 'var(--table-bg-primary-t1)',
            }}>
                <a href="/">
                AlmaLinux
                </a></div>
            <div>1.24.0</div>
        </div>
        <div style={{
            width: '100%',
            height: 'auto',
            border: '1px solid var(--ifm-toc-border-color)',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'flex-start',
            fontWeight: '400',
            gap: '10px', 
        }}>
            <div style={{
                minWidth: '40%',
                maxWidth: '40%',             
                padding: '20px',
                borderRight: '1px solid var(--ifm-toc-border-color)',
                background: 'var(--table-bg-primary-t1)',
            }}>
                <a href="/">
                EOL
                </a></div>
            <div>1.14.2</div>
        </div>
        <div style={{
            width: '100%',
            height: 'auto',
            border: '1px solid var(--ifm-toc-border-color)',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'flex-start',
            fontWeight: '400',
            gap: '10px', 
        }}>
            <div style={{
                minWidth: '40%',
                maxWidth: '40%',             
                padding: '20px',
                borderRight: '1px solid var(--ifm-toc-border-color)',
                background: 'var(--table-bg-primary-t1)',
            }}>
                <a href="/">
                NodeJS
                </a></div>
            <div>14.21.3; 16.20.0; 20.5.0</div>
        </div>
        <div style={{
            width: '100%',
            height: 'auto',
            border: '1px solid var(--ifm-toc-border-color)',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'flex-start',
            fontWeight: '400',
            gap: '10px', 
        }}>
            <div style={{
                minWidth: '40%',
                maxWidth: '40%',             
                padding: '20px',
                borderRight: '1px solid var(--ifm-toc-border-color)',
                background: 'var(--table-bg-primary-t1)',
            }}>
                <a href="/">
                AlmaLinux
                </a></div>
            <div>18.18.0; 20.7.0</div>
        </div>
        <div style={{
            width: '100%',
            height: 'auto',
            border: '1px solid var(--ifm-toc-border-color)',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'flex-start',
            fontWeight: '400',
            gap: '10px', 
        }}>
            <div style={{
                minWidth: '40%',
                maxWidth: '40%',             
                padding: '20px',
                borderRight: '1px solid var(--ifm-toc-border-color)',
                background: 'var(--table-bg-primary-t1)',
            }}>
                <a href="/">
                EOL
                </a></div>
            <div>6.17.1; 7.10.0; 8.17.0; 9.11.2; 10.24.1; 11.15.0; 12.22.9; 13.14.0; 15.14.0; 17.9.1</div>
        </div>
        <div style={{
            width: '100%',
            height: 'auto',
            border: '1px solid var(--ifm-toc-border-color)',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'flex-start',
            fontWeight: '400',
            gap: '10px', 
        }}>
            <div style={{
                minWidth: '40%',
                maxWidth: '40%',             
                padding: '20px',
                borderRight: '1px solid var(--ifm-toc-border-color)',
                background: 'var(--table-bg-primary-t1)',
            }}>
                <a href="/">
                Payara
                </a></div>
            <div>4.1.2.181; 5.2020.5; 5.2021.10; 5.2022.2; 6.2023.9</div>
        </div>
        <div style={{
            width: '100%',
            height: 'auto',
            border: '1px solid var(--ifm-toc-border-color)',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'flex-start',
            fontWeight: '400',
            gap: '10px', 
        }}>
            <div style={{
                minWidth: '40%',
                maxWidth: '40%',             
                padding: '20px',
                borderRight: '1px solid var(--ifm-toc-border-color)',
                background: 'var(--table-bg-primary-t1)',
            }}>
                <a href="/">
                Spring Boot
                </a></div>
            <div>2</div>
        </div>
        <div style={{
            width: '100%',
            height: 'auto',
            border: '1px solid var(--ifm-toc-border-color)',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'flex-start',
            fontWeight: '400',
            gap: '10px', 
        }}>
            <div style={{
                minWidth: '40%',
                maxWidth: '40%',             
                padding: '20px',
                borderRight: '1px solid var(--ifm-toc-border-color)',
                background: 'var(--table-bg-primary-t1)',
            }}>
                <a href="/">
                Tomcat
                </a>
                </div>
            <div>8.5.93; 9.0.80; 10.0.23; 10.1.13; 11.0.0-M11</div>
        </div>
        <div style={{
            width: '100%',
            height: 'auto',
            border: '1px solid var(--ifm-toc-border-color)',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'flex-start',
            fontWeight: '400',
            gap: '10px', 
        }}>
            <div style={{
                minWidth: '40%',
                maxWidth: '40%',             
                padding: '20px',
                borderRight: '1px solid var(--ifm-toc-border-color)',
                background: 'var(--table-bg-primary-t1)',
            }}>
                <a href="">
                EOL
                </a>
                </div>
            <div>7.0.109</div>
        </div>
        <div style={{
            width: '100%',
            height: 'auto',
            border: '1px solid var(--ifm-toc-border-color)',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'flex-start',
            fontWeight: '400',
            gap: '10px', 
        }}>
            <div style={{
                minWidth: '40%',
                maxWidth: '40%',             
                padding: '20px',
                borderRight: '1px solid var(--ifm-toc-border-color)',
                background: 'var(--table-bg-primary-t1)',
            }}>
                <a href="/">
                TomEE
                </a>
                </div>
            <div>7.0.5; 7.1.0; 8.0.14; 9.0.0</div>
        </div>
        <div style={{
            width: '100%',
            height: 'auto',
            border: '1px solid var(--ifm-toc-border-color)',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'flex-start',
            fontWeight: '400',
            gap: '10px', 
        }}>
            <div style={{
                minWidth: '40%',
                maxWidth: '40%',             
                padding: '20px',
                borderRight: '1px solid var(--ifm-toc-border-color)',
                background: 'var(--table-bg-primary-t1)',
            }}>
                <a href="/">
                WildFly
                </a></div>
            <div>25.0.1; 26.1.3; 27.0.1; 28.0.1; 29.0.1</div>
        </div>
        <div style={{
            width: '100%',
            height: 'auto',
            border: '1px solid var(--ifm-toc-border-color)',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'flex-start',
            fontWeight: '400',
            gap: '10px', 
        }}>
            <div style={{
                minWidth: '40%',
                maxWidth: '40%',             
                padding: '20px',
                borderRight: '1px solid var(--ifm-toc-border-color)',
                background: 'var(--table-bg-primary-t1)',
            }}>
                <a href="/">
                EOL
                </a></div>
            <div>10.1.0; 11.0.0; 12.0.0; 13.0.0; 14.0.1; 15.0.1; 16.0.0; 17.0.1; 18.0.1; 19.1.0; 20.0.1; 21.0.2; 22.0.1; 23.0.1; 24.0.1</div>
        </div>
    </div>
</div>

## Databases

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
        DATABASES
    </div>
    <div>
        <div style={{
            width: '100%',
            height: 'auto',
            border: '1px solid var(--ifm-toc-border-color)',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'flex-start',
            fontWeight: '500',
            gap: '10px',
            color: 'var(--table-color-primary)',
            background: 'var(--table-bg-primary-t2)', 
        }}>
            <div style={{
                minWidth: '40%',
                maxWidth: '40%',
                padding: '20px',
                borderRight: '1px solid var(--ifm-toc-border-color)',
                 display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
            }}>
                Name & Link to Tags
            </div>
            <div style={{
                width: '100%',
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
            }}>
                Latest Supported Version
            </div>
        </div>
        <div style={{
            width: '100%',
            height: 'auto',
            border: '1px solid var(--ifm-toc-border-color)',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'flex-start',
            fontWeight: '400',
            gap: '10px', 
        }}>
            <div style={{
                minWidth: '40%',
                maxWidth: '40%',             
                padding: '20px',
                borderRight: '1px solid var(--ifm-toc-border-color)',
                background: 'var(--table-bg-primary-t1)',
            }}>
                <a href="/">
                    Couchbase CE
                </a>
            </div>
            <div>
                5.0.1; 5.1.1; 6.0.0; 6.5.1; 6.6.0; 7.0.2; 7.1.1
            </div>
        </div>
        <div style={{
            width: '100%',
            height: 'auto',
            border: '1px solid var(--ifm-toc-border-color)',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'flex-start',
            fontWeight: '400',
            gap: '10px', 
        }}>
            <div style={{
                minWidth: '40%',
                maxWidth: '40%',             
                padding: '20px',
                borderRight: '1px solid var(--ifm-toc-border-color)',
                background: 'var(--table-bg-primary-t1)',
            }}>
                <a href="/">
                    MariaDB
                </a>
            </div>
            <div>
                10.3.39; 10.4.29; 10.5.20; 10.6.13; 10.7.8; 10.8.8; 10.9.6; 10.10.4; 10.11.3
                <div style={{ fontWeight: '500'}}>
                    EOL: 5.5.68; 10.1.24; 10.2.15
                </div>
            </div>
        </div>
        <div style={{
            width: '100%',
            height: 'auto',
            border: '1px solid var(--ifm-toc-border-color)',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'flex-start',
            fontWeight: '400',
            gap: '10px', 
        }}>
            <div style={{
                minWidth: '40%',
                maxWidth: '40%',             
                padding: '20px',
                borderRight: '1px solid var(--ifm-toc-border-color)',
                background: 'var(--table-bg-primary-t1)',
            }}>
                <a href="/">
                    MongoDB
                </a>
            </div>
            <div>
                10.3.39; 10.4.29; 10.5.20; 10.6.13; 10.7.8; 10.8.8; 10.9.6; 10.10.4; 10.11.3
                <div style={{ fontWeight: '500'}}>
                    EOL: 5.5.68; 10.1.24; 10.2.15
                </div>
            </div>
        </div>
        <div style={{
            width: '100%',
            height: 'auto',
            border: '1px solid var(--ifm-toc-border-color)',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'flex-start',
            fontWeight: '400',
            gap: '10px', 
        }}>
            <div style={{
                minWidth: '40%',
                maxWidth: '40%',             
                padding: '20px',
                borderRight: '1px solid var(--ifm-toc-border-color)',
                background: 'var(--table-bg-primary-t1)',
            }}>
                <a href="/">
                    MySQL CE
                </a>
            </div>
            <div>
                5.7.42; 8.0.33
                <div style={{ fontWeight: '500'}}>
                    EOL: 5.6.50
                </div>
            </div>
        </div>
        <div style={{
            width: '100%',
            height: 'auto',
            border: '1px solid var(--ifm-toc-border-color)',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'flex-start',
            fontWeight: '400',
            gap: '10px', 
        }}>
            <div style={{
                minWidth: '40%',
                maxWidth: '40%',             
                padding: '20px',
                borderRight: '1px solid var(--ifm-toc-border-color)',
                background: 'var(--table-bg-primary-t1)',
            }}>
                <a href="/">
                    OpenSearch
                </a>
            </div>
            <div>
                1.2.4; 1.3.1; 2.0.1; 2.1.1; 2.4.1; 2.5.0; 2.7.0; 2.9.0
            </div>
        </div>
        <div style={{
            width: '100%',
            height: 'auto',
            border: '1px solid var(--ifm-toc-border-color)',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'flex-start',
            fontWeight: '400',
            gap: '10px', 
        }}>
            <div style={{
                minWidth: '40%',
                maxWidth: '40%',             
                padding: '20px',
                borderRight: '1px solid var(--ifm-toc-border-color)',
                background: 'var(--table-bg-primary-t1)',
            }}>
                <a href="/">
                    Percona
                </a>
            </div>
            <div>
                5.7.41, 8.0.32
                <div style={{ fontWeight: '500'}}>
                    EOL: 5.5.41; 5.6.50
                </div>
            </div>
        </div>
        <div style={{
            width: '100%',
            height: 'auto',
            border: '1px solid var(--ifm-toc-border-color)',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'flex-start',
            fontWeight: '400',
            gap: '10px', 
        }}>
            <div style={{
                minWidth: '40%',
                maxWidth: '40%',             
                padding: '20px',
                borderRight: '1px solid var(--ifm-toc-border-color)',
                background: 'var(--table-bg-primary-t1)',
            }}>
                <a href="/">
                    PostgreSQL
                </a>
            </div>
            <div>
                11.19; 12.14; 13.10; 14.7; 15.2
                <div style={{ fontWeight: '500'}}>
                    EOL: 9.6.24; 10.22
                </div>
            </div>
        </div>
        <div style={{
            width: '100%',
            height: 'auto',
            border: '1px solid var(--ifm-toc-border-color)',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'flex-start',
            fontWeight: '400',
            gap: '10px', 
        }}>
            <div style={{
                minWidth: '40%',
                maxWidth: '40%',             
                padding: '20px',
                borderRight: '1px solid var(--ifm-toc-border-color)',
                background: 'var(--table-bg-primary-t1)',
            }}>
                <a href="/">
                    Redis
                </a>
            </div>
            <div>
                6.0.10; 6.2.12; 7.0.11; 7.2.1
                <div style={{ fontWeight: '500'}}>
                    EOL: 4.0.11; 5.0.8
                </div>
            </div>
        </div>
    </div>
</div>

## Additional Stacks

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
        ADDITIONAL STACKS
    </div>
    <div>
        <div style={{
            width: '100%',
            height: 'auto',
            border: '1px solid var(--ifm-toc-border-color)',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'flex-start',
            fontWeight: '500',
            gap: '10px',
            color: 'var(--table-color-primary)',
            background: 'var(--table-bg-primary-t2)', 
        }}>
            <div style={{
                minWidth: '40%',
                maxWidth: '40%',
                padding: '20px',
                borderRight: '1px solid var(--ifm-toc-border-color)',
                 display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
            }}>
                Name & Link to Tags
            </div>
            <div style={{
                width: '100%',
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
            }}>
                Latest Supported Version
            </div>
        </div>
        <div style={{
            width: '100%',
            height: 'auto',
            border: '1px solid var(--ifm-toc-border-color)',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'flex-start',
            fontWeight: '400',
            gap: '10px', 
        }}>
            <div style={{
                minWidth: '40%',
                maxWidth: '40%',             
                padding: '20px',
                borderRight: '1px solid var(--ifm-toc-border-color)',
                background: 'var(--table-bg-primary-t1)',
            }}>
                <a href="/">
                    CentOS (VPS)
                </a>
            </div>
            <div>
               7.6; 7.7; 7.8; 7.9
            </div>
        </div>
        <div style={{
            width: '100%',
            height: 'auto',
            border: '1px solid var(--ifm-toc-border-color)',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'flex-start',
            fontWeight: '400',
            gap: '10px', 
        }}>
            <div style={{
                minWidth: '40%',
                maxWidth: '40%',             
                padding: '20px',
                borderRight: '1px solid var(--ifm-toc-border-color)',
                background: 'var(--table-bg-primary-t1)',
            }}>
                <a href="/">
                    Debian (VPS)
                </a>
            </div>
            <div>
                10.13; 11.6
                <div style={{ fontWeight: '500'}}>
                    EOL: 9.13
                </div>
            </div>
        </div>
        <div style={{
            width: '100%',
            height: 'auto',
            border: '1px solid var(--ifm-toc-border-color)',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'flex-start',
            fontWeight: '400',
            gap: '10px', 
        }}>
            <div style={{
                minWidth: '40%',
                maxWidth: '40%',             
                padding: '20px',
                borderRight: '1px solid var(--ifm-toc-border-color)',
                background: 'var(--table-bg-primary-t1)',
            }}>
                <a href="/">
                    Docker Engine CE
                </a>
            </div>
            <div>
                19.03.14; 20.10.23; 23.0.6; 24.0.6
                <div style={{ fontWeight: '500'}}>
                    EOL: 17.12; 18.09.7
                </div>
            </div>
        </div>
        <div style={{
            width: '100%',
            height: 'auto',
            border: '1px solid var(--ifm-toc-border-color)',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'flex-start',
            fontWeight: '400',
            gap: '10px', 
        }}>
            <div style={{
                minWidth: '40%',
                maxWidth: '40%',             
                padding: '20px',
                borderRight: '1px solid var(--ifm-toc-border-color)',
                background: 'var(--table-bg-primary-t1)',
            }}>
                <a href="/">
                    Jenkins
                </a>
            </div>
            <div>
             2.332.3; 2.346.3; 2.361.4; 2.375.2; 2.387.1; 2.401.3
                <div style={{ fontWeight: '500'}}>
                   EOL: 2.263.4; 2.289.3; 2.303.3; 2.319.3
                </div>
            </div>
        </div>
        <div style={{
            width: '100%',
            height: 'auto',
            border: '1px solid var(--ifm-toc-border-color)',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'flex-start',
            fontWeight: '400',
            gap: '10px', 
        }}>
            <div style={{
                minWidth: '40%',
                maxWidth: '40%',             
                padding: '20px',
                borderRight: '1px solid var(--ifm-toc-border-color)',
                background: 'var(--table-bg-primary-t1)',
            }}>
                <a href="/">
                  Kubernetes
                </a>
            </div>
            <div>
              1.16.6; 1.17.12; 1.18.10
            </div>
        </div>
        <div style={{
            width: '100%',
            height: 'auto',
            border: '1px solid var(--ifm-toc-border-color)',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'flex-start',
            fontWeight: '400',
            gap: '10px', 
        }}>
            <div style={{
                minWidth: '40%',
                maxWidth: '40%',             
                padding: '20px',
                borderRight: '1px solid var(--ifm-toc-border-color)',
                background: 'var(--table-bg-primary-t1)',
            }}>
                <a href="/">
                  Logstash
                </a>
            </div>
            <div>
                7.17.0; 8.2.3; 8.3.3; 8.4.2; 8.5.3; 8.6.2; 8.7.1; 8.8.0; 8.9.2; 8.10.2
            </div>
        </div>
        <div style={{
            width: '100%',
            height: 'auto',
            border: '1px solid var(--ifm-toc-border-color)',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'flex-start',
            fontWeight: '400',
            gap: '10px', 
        }}>
            <div style={{
                minWidth: '40%',
                maxWidth: '40%',             
                padding: '20px',
                borderRight: '1px solid var(--ifm-toc-border-color)',
                background: 'var(--table-bg-primary-t1)',
            }}>
                <a href="/">
                   Maven
                </a>
            </div>
            <div>
              3.5.4; 3.6.3; 3.8.6; 3.9.2
            </div>
        </div>
        <div style={{
            width: '100%',
            height: 'auto',
            border: '1px solid var(--ifm-toc-border-color)',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'flex-start',
            fontWeight: '400',
            gap: '10px', 
        }}>
            <div style={{
                minWidth: '40%',
                maxWidth: '40%',             
                padding: '20px',
                borderRight: '1px solid var(--ifm-toc-border-color)',
                background: 'var(--table-bg-primary-t1)',
            }}>
                <a href="/">
                   Memcached
                </a>
            </div>
            <div>
              1.4.24; 1.5.22; 1.6.15
                <div style={{ fontWeight: '500'}}>
                    AlmaLinux:
                    <span style={{ fontWeight: '400'}}>
                        1.6.21
                    </span>
                </div>
            </div>
        </div>
        <div style={{
            width: '100%',
            height: 'auto',
            border: '1px solid var(--ifm-toc-border-color)',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'flex-start',
            fontWeight: '400',
            gap: '10px', 
        }}>
            <div style={{
                minWidth: '40%',
                maxWidth: '40%',             
                padding: '20px',
                borderRight: '1px solid var(--ifm-toc-border-color)',
                background: 'var(--table-bg-primary-t1)',
            }}>
                <a href="/">
                    OpenSearch Dashboards
                </a>
            </div>
            <div>
               1.2.0; 1.3.2; 2.0.1; 2.1.0; 2.2.0; 2.3.0; 2.4.1; 2.5.0; 2.6.0; 2.7.0; 2.9.0
            </div>
        </div>
        <div style={{
            width: '100%',
            height: 'auto',
            border: '1px solid var(--ifm-toc-border-color)',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'flex-start',
            fontWeight: '400',
            gap: '10px', 
        }}>
            <div style={{
                minWidth: '40%',
                maxWidth: '40%',             
                padding: '20px',
                borderRight: '1px solid var(--ifm-toc-border-color)',
                background: 'var(--table-bg-primary-t1)',
            }}>
                <a href="/">
                    Pgpool-II
                </a>
            </div>
            <div>
               4.3.3; 4.4.4
            </div>
        </div>
        <div style={{
            width: '100%',
            height: 'auto',
            border: '1px solid var(--ifm-toc-border-color)',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'flex-start',
            fontWeight: '400',
            gap: '10px', 
        }}>
            <div style={{
                minWidth: '40%',
                maxWidth: '40%',             
                padding: '20px',
                borderRight: '1px solid var(--ifm-toc-border-color)',
                background: 'var(--table-bg-primary-t1)',
            }}>
                <a href="/">
                   ProxySQL
                </a>
            </div>
            <div>
                2.0.17; 2.3.2
                <div style={{ fontWeight: '500'}}>
                    EOL: 1.4.13
                </div>
            </div>
        </div>
        <div style={{
            width: '100%',
            height: 'auto',
            border: '1px solid var(--ifm-toc-border-color)',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'flex-start',
            fontWeight: '400',
            gap: '10px', 
        }}>
            <div style={{
                minWidth: '40%',
                maxWidth: '40%',             
                padding: '20px',
                borderRight: '1px solid var(--ifm-toc-border-color)',
                background: 'var(--table-bg-primary-t1)',
            }}>
                <a href="/">
                  Shared Storage
                </a>
            </div>
            <div>
                2.0-9.6
            </div>
        </div>
        <div style={{
            width: '100%',
            height: 'auto',
            border: '1px solid var(--ifm-toc-border-color)',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'flex-start',
            fontWeight: '400',
            gap: '10px', 
        }}>
            <div style={{
                minWidth: '40%',
                maxWidth: '40%',             
                padding: '20px',
                borderRight: '1px solid var(--ifm-toc-border-color)',
                background: 'var(--table-bg-primary-t1)',
            }}>
                <a href="/">
                   Ubuntu (VPS)
                </a>
            </div>
            <div>
                16.04; 18.04; 20.04; 22.04
            </div>
        </div>
        <div style={{
            width: '100%',
            height: 'auto',
            border: '1px solid var(--ifm-toc-border-color)',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'flex-start',
            fontWeight: '400',
            gap: '10px', 
        }}>
            <div style={{
                minWidth: '40%',
                maxWidth: '40%',             
                padding: '20px',
                borderRight: '1px solid var(--ifm-toc-border-color)',
                background: 'var(--table-bg-primary-t1)',
            }}>
                Windows (VPS)
            </div>
            <div>
               2012
            </div>
        </div>
    </div>
</div>

## Engines

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
        ENGINES
    </div>
    <div>
        <div style={{
            width: '100%',
            height: 'auto',
            border: '1px solid var(--ifm-toc-border-color)',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'flex-start',
            fontWeight: '500',
            gap: '10px',
            color: 'var(--table-color-primary)',
            background: 'var(--table-bg-primary-t2)', 
        }}>
            <div style={{
                minWidth: '20%',
                maxWidth: '20%',
                padding: '20px',
                borderRight: '1px solid var(--ifm-toc-border-color)',
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
            }}>
                Name
            </div>
            <div style={{
                width: '100%',
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
            }}>
                Latest Supported Version
            </div>
        </div>
        <div style={{
            width: '100%',
            height: 'auto',
            border: '1px solid var(--ifm-toc-border-color)',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'flex-start',
            fontWeight: '400',
            gap: '10px', 
        }}>
            <div style={{
                minWidth: '20%',
                maxWidth: '20%',             
                padding: '20px',
                borderRight: '1px solid var(--ifm-toc-border-color)',
                background: 'var(--table-bg-primary-t1)',
            }}>
                AdoptOpenJDK
            </div>
            <div>
                8.0.312; 11.0.13; 13.0.2; 14.0.2; 15.0.2; 16.0.2
                <div style={{ fontWeight: '500'}}>
                    EOL: 9.0.4; 10.0.2; 12.0.2
                </div>
            </div>
        </div>
        <div style={{
            width: '100%',
            height: 'auto',
            border: '1px solid var(--ifm-toc-border-color)',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'flex-start',
            fontWeight: '400',
            gap: '10px', 
        }}>
            <div style={{
                minWidth: '20%',
                maxWidth: '20%',             
                padding: '20px',
                borderRight: '1px solid var(--ifm-toc-border-color)',
                background: 'var(--table-bg-primary-t1)',
            }}>
                Alibaba Dragonwell
            </div>
            <div>
               8.11.12
            </div>
        </div>
        <div style={{
            width: '100%',
            height: 'auto',
            border: '1px solid var(--ifm-toc-border-color)',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'flex-start',
            fontWeight: '400',
            gap: '10px', 
        }}>
            <div style={{
                minWidth: '20%',
                maxWidth: '20%',             
                padding: '20px',
                borderRight: '1px solid var(--ifm-toc-border-color)',
                background: 'var(--table-bg-primary-t1)',
            }}>
                Amazon Corretto
            </div>
            <div>
              8.382.05.1; 11.0.20.9.1; 15.0.2.7.1; 16.0.2.7.1; 17.0.8.8.1; 18.0.2.9.1; 19.0.2.7.1; 20.0.2.10.1
            </div>
        </div>
        <div style={{
            width: '100%',
            height: 'auto',
            border: '1px solid var(--ifm-toc-border-color)',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'flex-start',
            fontWeight: '400',
            gap: '10px', 
            background: 'var(--table-bg-primary-t1)',
        }}>
            <div style={{
                minWidth: '20%',
                maxWidth: '20%',             
                padding: '20px',
                background: 'var(--table-bg-primary-t1)',
            }}>
               Eclipse OpenJ9
            </div>
            <div style={{
                padding: '20px',
                background: '#ffffff',
                borderLeft: '1px solid var(--ifm-toc-border-color)',
            }}>
               0.11.0 (8u192-b12; 11.0.1); 0.15.1 (8u222-b10; 11.0.4); 0.17.0 (8u232-b09; 11.0.5; 13.0.1); 0.18.1(8u242-b08; 11.0.6; 13.0.2) 0.20.0 (8u252-b09; 11.0.7); 0.21.0 (8u262-b10; 8u265-b01; 11.0.8; 14.0.2); 0.22.0 (15.0.0); 0.23.0 (8u272-b10; 11.0.9); 0.24.0 (8u282-b08; 11.0.10); 0.25.0-16; 0.26.0 (8u292-b10; 11.0.11); 0.27.0 (8u302-b08; 11.0.12); 0.29.0 (8u312-b07; 11.0.13); 0.30.0 (8u322-b06; 11.0.14); 0.32.0 (8u332-b09; 11.0.15); 0.33.1 (8u345-b01; 11.0.16); 0.35.0 (8u352-b08; 11.0.17); 0.36.1 (8u362-b09; 11.0.18); 0.38.0 (8u372-b07; 11.0.19)
                <div style={{ fontWeight: '500'}}>
                  EOL: 0.9.0 (9.0.4.12; 10.0.2); 0.15.1-12.0.2
                </div>
            </div>
        </div>
        <div style={{
            width: '100%',
            height: 'auto',
            border: '1px solid var(--ifm-toc-border-color)',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'flex-start',
            fontWeight: '400',
            gap: '10px', 
        }}>
            <div style={{
                minWidth: '20%',
                maxWidth: '20%',             
                padding: '20px',
                borderRight: '1px solid var(--ifm-toc-border-color)',
                background: 'var(--table-bg-primary-t1)',
            }}>
             Eclipse Temurin
            </div>
            <div>
                8.0.382; 11.0.20; 17.0.8; 18.0.2.1; 19.0.2; 20.0.2
            </div>
        </div>
        <div style={{
            width: '100%',
            height: 'auto',
            border: '1px solid var(--ifm-toc-border-color)',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'flex-start',
            fontWeight: '400',
            gap: '10px', 
        }}>
            <div style={{
                minWidth: '20%',
                maxWidth: '20%',             
                padding: '20px',
                borderRight: '1px solid var(--ifm-toc-border-color)',
                background: 'var(--table-bg-primary-t1)',
            }}>
              GraalVM CE
            </div>
            <div>
              19.3.1; 20.2.0; 21.3.0; 22.3.3
            </div>
        </div>
        <div style={{
            width: '100%',
            height: 'auto',
            border: '1px solid var(--ifm-toc-border-color)',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'flex-start',
            fontWeight: '400',
            gap: '10px', 
        }}>
            <div style={{
                minWidth: '20%',
                maxWidth: '20%',             
                padding: '20px',
                borderRight: '1px solid var(--ifm-toc-border-color)',
                background: 'var(--table-bg-primary-t1)',
            }}>
           Liberica JDK
            </div>
            <div>
               8.0.322; 11.0.14; 13.0.2; 14.0.2; 15.0.0; 16.0.0; 17.0.2
                <div style={{ fontWeight: '500'}}>
                  EOL: 12.0.2
                </div>
            </div>
        </div>
        <div style={{
            width: '100%',
            height: 'auto',
            border: '1px solid var(--ifm-toc-border-color)',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'flex-start',
            fontWeight: '400',
            gap: '10px', 
        }}>
            <div style={{
                minWidth: '20%',
                maxWidth: '20%',             
                padding: '20px',
                borderRight: '1px solid var(--ifm-toc-border-color)',
                background: 'var(--table-bg-primary-t1)',
            }}>
               Oracle JDK Dev
            </div>
            <div>
                7.0_79; 8.0_202; 11.0.2
                <div style={{ fontWeight: '500'}}>
                    EOL: 9.0.4; 10.0.2
                </div>
            </div>
        </div>
        <div style={{
            width: '100%',
            height: 'auto',
            border: '1px solid var(--ifm-toc-border-color)',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'flex-start',
            fontWeight: '400',
            gap: '10px', 
        }}>
            <div style={{
                minWidth: '20%',
                maxWidth: '20%',             
                padding: '20px',
                borderRight: '1px solid var(--ifm-toc-border-color)',
                background: 'var(--table-bg-primary-t1)',
            }}>
             Oracle OpenJDK
            </div>
            <div>
                7.0.261; 8.0.382; 11.0.20; 13.0.2; 14.0.2; 15.0.2; 16.0.2; 17.0.2; 18.0.2.1; 19.0.2; 20.0.2; 21; 22.ea-b16
                <div style={{ fontWeight: '500'}}>
                   EOL: 10.0.2; 12.0.2
                </div>
            </div>
        </div>
        <div style={{
            width: '100%',
            height: 'auto',
            border: '1px solid var(--ifm-toc-border-color)',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'flex-start',
            fontWeight: '400',
            gap: '10px', 
        }}>
            <div style={{
                minWidth: '20%',
                maxWidth: '20%',             
                padding: '20px',
                borderRight: '1px solid var(--ifm-toc-border-color)',
                background: 'var(--table-bg-primary-t1)',
            }}>
              Zulu Community
            </div>
            <div>
               7.0.352; 8.0.382; 11.0.20.1; 13.0.9; 14.0.2; 15.0.10; 16.0.2; 17.0.8.1; 18.0.2.1; 19.0.2; 20.0.2
                <div style={{ fontWeight: '500'}}>
                    EOL: 12.0.2
                </div>
            </div>
        </div>
        <div style={{
            width: '100%',
            height: 'auto',
            border: '1px solid var(--ifm-toc-border-color)',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'flex-start',
            fontWeight: '400',
            gap: '10px', 
        }}>
            <div style={{
                minWidth: '20%',
                maxWidth: '20%',             
                padding: '20px',
                borderRight: '1px solid var(--ifm-toc-border-color)',
                background: 'var(--table-bg-primary-t1)',
            }}>
                PHP
            </div>
            <div>
               8.0.30; 8.1.22; 8.2.8
                  <div style={{ fontWeight: '500'}}>
                    AlmaLinux:
                    <span style={{ fontWeight: '400'}}>
                      8.0.30; 8.1.22; 8.2.8
                    </span>
                </div>
                <div style={{ fontWeight: '500'}}>
                    EOL: 7.1.33; 7.2.34; 7.3.33; 7.4.33
                </div>
            </div>
        </div>
        <div style={{
            width: '100%',
            height: 'auto',
            border: '1px solid var(--ifm-toc-border-color)',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'flex-start',
            fontWeight: '400',
            gap: '10px', 
        }}>
            <div style={{
                minWidth: '20%',
                maxWidth: '20%',             
                padding: '20px',
                borderRight: '1px solid var(--ifm-toc-border-color)',
                background: 'var(--table-bg-primary-t1)',
            }}>
              Ruby
            </div>
            <div>
            3.0.6; 3.1.4; 3.2.2
                <div style={{ fontWeight: '500'}}>
           EOL: 2.2.10; 2.3.8; 2.4.10; 2.5.9; 2.6.10; 2.7.8
                </div>
            </div>
        </div>
        <div style={{
            width: '100%',
            height: 'auto',
            border: '1px solid var(--ifm-toc-border-color)',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'flex-start',
            fontWeight: '400',
            gap: '10px', 
        }}>
            <div style={{
                minWidth: '20%',
                maxWidth: '20%',             
                padding: '20px',
                borderRight: '1px solid var(--ifm-toc-border-color)',
                background: 'var(--table-bg-primary-t1)',
            }}>
                Python
            </div>
            <div>
             3.8.18; 3.9.18; 3.10.13; 3.11.5
                <div style={{ fontWeight: '500'}}>
                 EOL: 2.7.18; 3.4.10; 3.5.10; 3.6.15; 3.7.16
                </div>
            </div>
        </div>
         <div style={{
            width: '100%',
            height: 'auto',
            border: '1px solid var(--ifm-toc-border-color)',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'flex-start',
            fontWeight: '400',
            gap: '10px', 
        }}>
            <div style={{
                minWidth: '20%',
                maxWidth: '20%',             
                padding: '20px',
                borderRight: '1px solid var(--ifm-toc-border-color)',
                background: 'var(--table-bg-primary-t1)',
            }}>
                Node.js
            </div>
            <div>
             14.21.3; 16.20.0; 20.5.0
                  <div style={{ fontWeight: '500'}}>
                    AlmaLinux:
                    <span style={{ fontWeight: '400'}}>
                    18.18.0; 20.7.0
                    </span>
                </div>
                <div style={{ fontWeight: '500'}}>
           EOL: 6.17.1; 7.10.0; 8.17.0; 9.11.2; 10.24.1; 11.15.0; 12.22.9; 13.14.0; 15.14.0; 17.9.1
                </div>
            </div>
        </div>
         <div style={{
            width: '100%',
            height: 'auto',
            border: '1px solid var(--ifm-toc-border-color)',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'flex-start',
            fontWeight: '400',
            gap: '10px', 
        }}>
            <div style={{
                minWidth: '20%',
                maxWidth: '20%',             
                padding: '20px',
                borderRight: '1px solid var(--ifm-toc-border-color)',
                background: 'var(--table-bg-primary-t1)',
            }}>
              .NET
            </div>
            <div>
               .1.426; 5.0.408; 6.0.405; 7.0.102
            </div>
        </div>
         <div style={{
            width: '100%',
            height: 'auto',
            border: '1px solid var(--ifm-toc-border-color)',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'flex-start',
            fontWeight: '400',
            gap: '10px', 
        }}>
            <div style={{
                minWidth: '20%',
                maxWidth: '20%',             
                padding: '20px',
                borderRight: '1px solid var(--ifm-toc-border-color)',
                background: 'var(--table-bg-primary-t1)',
            }}>
                Go
            </div>
            <div>
               1.17.12; 1.18.10; 1.19.12; 1.20.8; 1.21.1
                <div style={{ fontWeight: '500'}}>
                   EOL: 1.9.4; 1.10.3; 1.11.13; 1.12.17; 1.13.15; 1.14.15; 1.15.15; 1.16.15
                </div>
            </div>
        </div>
    </div>
</div>
