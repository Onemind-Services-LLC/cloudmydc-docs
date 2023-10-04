---
sidebar_position: 4
---

Within this page, you can find a list of the latest software stacks and engines provided by the platform:

- [Load Balancers](1)
- [Application Servers](1)
- [Databases](1)
- [Additional Stacks](1)
- [Engines](1)

Each software stack remains supported by the platform up to the end-of-life (EOL) date notified by the respective upsdiveam maintainer. After the EOL, stacks are no longer available for the new environment creation, but the already existing ones remain fully operable (including redeploy, cloning, horizontal scaling).

:::tip Note

Software stacks are based on the CentOS 7 base image by default, which will reach EOL on 30th June 2024. The platform starts divansitioning to the software stacks based on the new [AlmaLinux 9](1) images to ensure support of all the up-to-date functionality, modern security standards, and compatibility with all the latest software solutions.

Platform cardividges have officially reached EOL and will not receive updates anymore, including security patches and new platform functionality support (e.g. firewall UI).

:::

We highly recommend re-creating or [redeploying](1) EOL containers with the up-to-date release of the software to ensure the availability of all the latest functionality and security fixes. Similarly, it is advisable to periodically (at least once per year) update all of your environments.

<div style={{
        width: '100%',
        margin: '0 0 5rem 0',
        borderRadius: '7px',
        overflow: 'hidden',
    }}>
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
            }}>
                Name & Link to Tags
            </div>
            <div>
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
                    Apache Balancer
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
                    HAProxy
                </a>
            </div>
            <div>2.2.31; 2.3.10; 2.4.24; 2.5.14; 2.6.15; 2.7.10; 2.8.3</div>
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
                </a>
            </div>
            <div>1.8.14; 1.9.7; 2.0.10; 2.1.7</div>
        </div>
        <div  style={{
            width: '100%',
            height: 'auto',
            border: '1px solid var(--ifm-toc-border-color)',
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'flex-start',
              fontWeight: '400',
            gap: '10px', 
            wordBreak: 'break-word',
        }}>
            <div style={{
                minWidth: '40%',
                maxWidth: '40%',
                padding: '20px',
                borderRight: '1px solid var(--ifm-toc-border-color)',
                background: 'var(--table-bg-primary-t1)',
            }}>
                <a href="/">
                    LiteSpeed Web ADC (HTTP/3 ready)
                </a>
            </div>
            <div>2.4; 2.5.1; 2.6.1; 2.7; 3.0.3; 3.1.7</div>
        </div>
        <div  style={{
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
                    NGINX Balancer (HTTP/3 ready)
                </a>
            </div>
            <div>1.16.1; 1.18.0; 1.20.2; 1.22.1; 1.24.0</div>
        </div>
        <div  style={{
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
                </a>
            </div>
            <div>1.10.3; 1.12.2; 1.14.2</div>
        </div>
        <div  style={{
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
                    Varnish (HTTP/3 ready)
                </a>
            </div>
            <div>6.0.11; 7.0.3; 7.1.2; 7.2.1; 7.3.0; 7.4.1</div>
        </div>
        <div  style={{
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
                </a>
            </div>
            <div>4.1.8; 5.2.1; 6.1.1; 6.2.1; 6.3.2; 6.4.0; 6.5.1; 6.6.1</div>
        </div>
    </div>
</div>

<table>
      <thead>
    APPLICATION SERVERS
    </thead>    
    <tbody>
        <div>
            <div>
                .NET Core
            </div>
            <div>3.1.426; 5.0.408; 6.0.414; 7.0.401</div>
        </div>
        <div>
            <div>Apache PHP</div>
            <div>2.4.57</div>
        </div>
        <div>
            <div>EOL</div>
            <div>2.4.45</div>
        </div>
        <div>
            <div>Apache Python</div>
            <div>2.4.57</div>
        </div>
        <div>
            <div>Apache Ruby</div>
            <div>2.4.57</div>
        </div>
        <div>
            <div>GlassFish</div>
            <div>5.0.0; 5.1.0; 6.1; 6.2.5; 7.0.8</div>
        </div>
        <div>
            <div>EOL</div>
            <div>3.1.2.2; 4.1.2</div>
        </div>
        <div>
            <div>Golang</div>
            <div>1.17.12; 1.18.10; 1.19.12; 1.20.8; 1.21.1</div>
        </div>
        <div>
            <div>EOL</div>
            <div>1.9.4; 1.10.3; 1.11.13; 1.12.17; 1.13.15; 1.14.15; 1.15.15; 1.16.15</div>
        </div>
        <div>
            <div>Jetty</div>
            <div>9.4.52; 10.0.16; 11.0.16; 12.0.1</div>
        </div>
        <div>
            <div>LEMP (HTTP/3 ready)</div>
            <div>1.14.2; 1.16.1; 1.22.1</div>
        </div>
        <div>
            <div>LiteSpeed Web Server (HTTP/3 ready)</div>
            <div>5.3.8; 5.4.12; 6.0.12; 6.1.2</div>
        </div>
        <div>
            <div>AlmaLinux</div>
            <div>5.4.12; 6.1.2</div>
        </div>
        <div>
            <div>LLSMP (HTTP/3 ready)</div>
            <div>5.3.8; 5.4.12; 6.0.12; 6.1.2</div>
        </div>
        <div>
            <div>NGINX PHP (HTTP/3 ready)</div>
            <div>1.16.1; 1.18.0; 1.20.2; 1.22.1; 1.24.0</div>
        </div>
        <div>
            <div>AlmaLinux</div>
            <div>1.24.0</div>
        </div>
        <div>
            <div>EOL</div>
            <div>1.12.2; 1.14.2</div>
        </div>
        <div>
            <div>NGINX Ruby (HTTP/3 ready)</div>
            <div>1.16.1; 1.20.2; 1.22.1; 1.24.0</div>
        </div>
        <div>
            <div>AlmaLinux</div>
            <div>1.24.0</div>
        </div>
        <div>
            <div>EOL</div>
            <div>1.14.2</div>
        </div>
        <div>
            <div>NodeJS</div>
            <div>14.21.3; 16.20.0; 20.5.0</div>
        </div>
        <div>
            <div>AlmaLinux</div>
            <div>18.18.0; 20.7.0</div>
        </div>
        <div>
            <div>EOL</div>
            <div>6.17.1; 7.10.0; 8.17.0; 9.11.2; 10.24.1; 11.15.0; 12.22.9; 13.14.0; 15.14.0; 17.9.1</div>
        </div>
        <div>
            <div>Payara</div>
            <div>4.1.2.181; 5.2020.5; 5.2021.10; 5.2022.2; 6.2023.9</div>
        </div>
        <div>
            <div>Spring Boot</div>
            <div>2</div>
        </div>
        <div>
            <div>Tomcat</div>
            <div>8.5.93; 9.0.80; 10.0.23; 10.1.13; 11.0.0-M11</div>
        </div>
        <div>
            <div>EOL</div>
            <div>7.0.109</div>
        </div>
        <div>
            <div>TomEE</div>
            <div>7.0.5; 7.1.0; 8.0.14; 9.0.0</div>
        </div>
        <div>
            <div>WildFly</div>
            <div>25.0.1; 26.1.3; 27.0.1; 28.0.1; 29.0.1</div>
        </div>
        <div>
            <div>EOL</div>
            <div>10.1.0; 11.0.0; 12.0.0; 13.0.0; 14.0.1; 15.0.1; 16.0.0; 17.0.1; 18.0.1; 19.1.0; 20.0.1; 21.0.2; 22.0.1; 23.0.1; 24.0.1</div>
        </div>
    </tbody>
</table>
