---
sidebar_position: 4
---

Within this page, you can find a list of the latest software stacks and engines provided by the platform:

- [Load Balancers](1)
- [Application Servers](1)
- [Databases](1)
- [Additional Stacks](1)
- [Engines](1)

Each software stack remains supported by the platform up to the end-of-life (EOL) date notified by the respective upstream maintainer. After the EOL, stacks are no longer available for the new environment creation, but the already existing ones remain fully operable (including redeploy, cloning, horizontal scaling).

:::tip Note

Software stacks are based on the CentOS 7 base image by default, which will reach EOL on 30th June 2024. The platform starts transitioning to the software stacks based on the new [AlmaLinux 9](1) images to ensure support of all the up-to-date functionality, modern security standards, and compatibility with all the latest software solutions.

Platform cartridges have officially reached EOL and will not receive updates anymore, including security patches and new platform functionality support (e.g. firewall UI).

:::

We highly recommend re-creating or [redeploying](1) EOL containers with the up-to-date release of the software to ensure the availability of all the latest functionality and security fixes. Similarly, it is advisable to periodically (at least once per year) update all of your environments.

<div styles={{
        width: '100%',
        background: 'red',
    }}>
    <div styles={{
        width: '100%',
        padding: '20px',
        height: '70px',
        background: 'red',
    }}>
        LOAD BALANCERS
    </div>
    <tbody>
    <tr>
        <th>Name & Link to Tags</th>
        <th>Latest Supported Version</th>
    </tr>
    <tr>
        <td>Apache Balancer</td>
        <td>2.4.57</td>
    </tr>
    <tr>
        <td>HAProxy</td>
        <td>2.2.31; 2.3.10; 2.4.24; 2.5.14; 2.6.15; 2.7.10; 2.8.3</td>
    </tr>
    <tr>
        <td>EOL</td>
        <td>1.8.14; 1.9.7; 2.0.10; 2.1.7</td>
    </tr>
    <tr>
        <td>LiteSpeed Web ADC (HTTP/3 ready)</td>
        <td>2.4; 2.5.1; 2.6.1; 2.7; 3.0.3; 3.1.7</td>
    </tr>
    <tr>
        <td>NGINX Balancer (HTTP/3 ready)</td>
        <td>1.16.1; 1.18.0; 1.20.2; 1.22.1; 1.24.0</td>
    </tr>
    <tr>
        <td>EOL</td>
        <td>1.10.3; 1.12.2; 1.14.2</td>
    </tr>
    <tr>
        <td>Varnish (HTTP/3 ready)</td>
        <td>6.0.11; 7.0.3; 7.1.2; 7.2.1; 7.3.0; 7.4.1</td>
    </tr>
    <tr>
        <td>EOL</td>
        <td>4.1.8; 5.2.1; 6.1.1; 6.2.1; 6.3.2; 6.4.0; 6.5.1; 6.6.1</td>
    </tr>
    </tbody>
</div>

<table>
      <thead>
    APPLICATION SERVERS
    </thead>    
    <tbody>
        <tr>
            <td>
                .NET Core
            </td>
            <td>3.1.426; 5.0.408; 6.0.414; 7.0.401</td>
        </tr>
        <tr>
            <td>Apache PHP</td>
            <td>2.4.57</td>
        </tr>
        <tr>
            <td>EOL</td>
            <td>2.4.45</td>
        </tr>
        <tr>
            <td>Apache Python</td>
            <td>2.4.57</td>
        </tr>
        <tr>
            <td>Apache Ruby</td>
            <td>2.4.57</td>
        </tr>
        <tr>
            <td>GlassFish</td>
            <td>5.0.0; 5.1.0; 6.1; 6.2.5; 7.0.8</td>
        </tr>
        <tr>
            <td>EOL</td>
            <td>3.1.2.2; 4.1.2</td>
        </tr>
        <tr>
            <td>Golang</td>
            <td>1.17.12; 1.18.10; 1.19.12; 1.20.8; 1.21.1</td>
        </tr>
        <tr>
            <td>EOL</td>
            <td>1.9.4; 1.10.3; 1.11.13; 1.12.17; 1.13.15; 1.14.15; 1.15.15; 1.16.15</td>
        </tr>
        <tr>
            <td>Jetty</td>
            <td>9.4.52; 10.0.16; 11.0.16; 12.0.1</td>
        </tr>
        <tr>
            <td>LEMP (HTTP/3 ready)</td>
            <td>1.14.2; 1.16.1; 1.22.1</td>
        </tr>
        <tr>
            <td>LiteSpeed Web Server (HTTP/3 ready)</td>
            <td>5.3.8; 5.4.12; 6.0.12; 6.1.2</td>
        </tr>
        <tr>
            <td>AlmaLinux</td>
            <td>5.4.12; 6.1.2</td>
        </tr>
        <tr>
            <td>LLSMP (HTTP/3 ready)</td>
            <td>5.3.8; 5.4.12; 6.0.12; 6.1.2</td>
        </tr>
        <tr>
            <td>NGINX PHP (HTTP/3 ready)</td>
            <td>1.16.1; 1.18.0; 1.20.2; 1.22.1; 1.24.0</td>
        </tr>
        <tr>
            <td>AlmaLinux</td>
            <td>1.24.0</td>
        </tr>
        <tr>
            <td>EOL</td>
            <td>1.12.2; 1.14.2</td>
        </tr>
        <tr>
            <td>NGINX Ruby (HTTP/3 ready)</td>
            <td>1.16.1; 1.20.2; 1.22.1; 1.24.0</td>
        </tr>
        <tr>
            <td>AlmaLinux</td>
            <td>1.24.0</td>
        </tr>
        <tr>
            <td>EOL</td>
            <td>1.14.2</td>
        </tr>
        <tr>
            <td>NodeJS</td>
            <td>14.21.3; 16.20.0; 20.5.0</td>
        </tr>
        <tr>
            <td>AlmaLinux</td>
            <td>18.18.0; 20.7.0</td>
        </tr>
        <tr>
            <td>EOL</td>
            <td>6.17.1; 7.10.0; 8.17.0; 9.11.2; 10.24.1; 11.15.0; 12.22.9; 13.14.0; 15.14.0; 17.9.1</td>
        </tr>
        <tr>
            <td>Payara</td>
            <td>4.1.2.181; 5.2020.5; 5.2021.10; 5.2022.2; 6.2023.9</td>
        </tr>
        <tr>
            <td>Spring Boot</td>
            <td>2</td>
        </tr>
        <tr>
            <td>Tomcat</td>
            <td>8.5.93; 9.0.80; 10.0.23; 10.1.13; 11.0.0-M11</td>
        </tr>
        <tr>
            <td>EOL</td>
            <td>7.0.109</td>
        </tr>
        <tr>
            <td>TomEE</td>
            <td>7.0.5; 7.1.0; 8.0.14; 9.0.0</td>
        </tr>
        <tr>
            <td>WildFly</td>
            <td>25.0.1; 26.1.3; 27.0.1; 28.0.1; 29.0.1</td>
        </tr>
        <tr>
            <td>EOL</td>
            <td>10.1.0; 11.0.0; 12.0.0; 13.0.0; 14.0.1; 15.0.1; 16.0.0; 17.0.1; 18.0.1; 19.1.0; 20.0.1; 21.0.2; 22.0.1; 23.0.1; 24.0.1</td>
        </tr>
    </tbody>
</table>
