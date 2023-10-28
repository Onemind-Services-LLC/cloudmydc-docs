---
sidebar_position: 4
---

## anchor 13

import obj from './CreateEnvParams.json'

## Parameters for CreateEnvironment API

Creation of a new environment at the platform can be automated in a variety of different ways, e.g. with the help of [platform CLI](/docs/Deployment%20Tools/API%20&%20CLI/Platform%20CLI/Platform%20CLI%20Overview), through the direct [API](https://cloudmydc.com/) request or by declaring the appropriate parameters via [JPS](/docs/Deployment%20Tools/Cloud%20Scripting%20&%20JPS/JPS%20Overview) manifest. Herewith, though representing a rather simple operation, it can include a bunch of different parameters for the precise topology definition.

Thus, below we provide the description for all of such settings with the examples on their usage via CLI. They are divided into 3 major sections as arrays of the _~/jelastic/environment/control/createenvironment_ method, being named according to the appropriate arrays' denominations - two common ones and listing of the specialized parameters for the Docker containers' creation:

- [env](https://cloudmydc.com/)
- [nodes](/docs/Deployment%20Tools/API%20&%20CLI/CreateEnv%20Params#nodes-configurations)
- [docker](/docs/Deployment%20Tools/API%20&%20CLI/CreateEnv%20Params#docker-based-environment-configurations)

# Common Environment Configurations

The parameters below are to be specified within the **_env_** array (of either CLI command or JSON file) and define the most common environment configurations, like _programming language, name, region_ and others:

<div style={{
        width: '100%',
        margin: '0 0 1rem 0',
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
            gridTemplateColumns: '0.7fr 1fr 0.5fr 1fr 1fr',
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
                Name
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
            <div style={{
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                padding: '20px',
                borderRight: '1px solid var(--ifm-toc-border-color)',
                wordBreak: 'break-all'
            }}>
                Type Example
            </div> 
            <div style={{
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                padding: '20px',
                borderRight: '1px solid var(--ifm-toc-border-color)',
                wordBreak: 'break-all'
            }}>
               Value
            </div> 
            <div style={{
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                padding: '20px',
                borderRight: '1px solid var(--ifm-toc-border-color)',
                wordBreak: 'break-all'
            }}>
               Mandatory
            </div> 
        </div>
        {obj.data1.map((item, idx) => {
          return <div key={idx} style={{
            width: '100%',
            height: 'auto',
            border: '1px solid var(--ifm-toc-border-color)',
            display: 'grid', 
            gridTemplateColumns: '0.7fr 1fr 0.5fr 1fr 1fr',
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
                {item.Name}
            </div>
            <div style={{
                padding: '20px',
                wordBreak: 'break-all'
            }}>
                {item.Description}
            </div>
            <div style={{
                wordBreak: 'break-all',
                 padding: '20px',
            }}>
                {item.TypeExample}
            </div>
            <div style={{
                wordBreak: 'break-all',
                 padding: '20px',
            }}>
                {item.Value}
            </div>
            <div style={{
                wordBreak: 'break-all',
                 padding: '20px',
            }}>
                {item.Mandatory}
            </div>
        </div> 
        })}
    </div> 
</div>

Example:

```bash
env '{"region": "default_hn_group", "ishaenabled": "false", "engine": "java7", "displayName": "my-env-alias", "sslstate": "true", "shortdomain": "my-cli-env"}'
```

## Nodes Configurations

Within the **_nodes_** section, more subtle adjustment can be set to define the comprised servers' parameters, like their _type, amount_, number of allocated _reserved/dynamic cloudlets_ and more:

<div style={{
        width: '100%',
        margin: '0 0 1rem 0',
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
            gridTemplateColumns: '0.7fr 1fr 0.5fr 1fr 1fr',
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
                Name
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
            <div style={{
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                padding: '20px',
                borderRight: '1px solid var(--ifm-toc-border-color)',
                wordBreak: 'break-all'
            }}>
                Type Example
            </div> 
            <div style={{
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                padding: '20px',
                borderRight: '1px solid var(--ifm-toc-border-color)',
                wordBreak: 'break-all'
            }}>
               Value
            </div> 
            <div style={{
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                padding: '20px',
                borderRight: '1px solid var(--ifm-toc-border-color)',
                wordBreak: 'break-all'
            }}>
               Mandatory
            </div> 
        </div>
        {obj.data2.map((item, idx) => {
          return <div key={idx} style={{
            width: '100%',
            height: 'auto',
            border: '1px solid var(--ifm-toc-border-color)',
            display: 'grid', 
            gridTemplateColumns: '0.7fr 1fr 0.5fr 1fr 1fr',
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
                {item.Name}
            </div>
            <div style={{
                padding: '20px',
                wordBreak: 'break-all'
            }}>
                {item.Description}
            </div>
            <div style={{
                wordBreak: 'break-all',
                 padding: '20px',
            }}>
                {item.TypeExample}
            </div>
            <div style={{
                wordBreak: 'break-all',
                 padding: '20px',
            }}>
                {item.Value}
            </div>
            <div style={{
                wordBreak: 'break-all',
                 padding: '20px',
            }}>
                {item.Mandatory}
            </div>
        </div> 
        })}
    </div> 
</div>

Example:

```bash
nodes '[{"extip": "true", "count": "2", "fixedCloudlets": "16", "flexibleCloudlets": "32", "displayName": "my-node-alias", "nodeType": "docker", "docker": {...}}]'
```

## Docker-Based Environment Configurations

The **_docker_** subsection is intended to state the specialized Docker container parameters, required for its deployment.

<div style={{
        width: '100%',
        margin: '0 0 1rem 0',
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
            gridTemplateColumns: '0.7fr 1fr 0.5fr 1fr 1fr',
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
                Name
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
            <div style={{
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                padding: '20px',
                borderRight: '1px solid var(--ifm-toc-border-color)',
                wordBreak: 'break-all'
            }}>
                Type Example
            </div> 
            <div style={{
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                padding: '20px',
                borderRight: '1px solid var(--ifm-toc-border-color)',
                wordBreak: 'break-all'
            }}>
               Value
            </div> 
            <div style={{
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                padding: '20px',
                borderRight: '1px solid var(--ifm-toc-border-color)',
                wordBreak: 'break-all'
            }}>
               Mandatory
            </div> 
        </div>
        {obj.data3.map((item, idx) => {
          return <div key={idx} style={{
            width: '100%',
            height: 'auto',
            border: '1px solid var(--ifm-toc-border-color)',
            display: 'grid', 
            gridTemplateColumns: '0.7fr 1fr 0.5fr 1fr 1fr',
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
                {item.Name}
            </div>
            <div style={{
                padding: '20px',
                wordBreak: 'break-all'
            }}>
                {item.Description}
            </div>
            <div style={{
                wordBreak: 'break-all',
                 padding: '20px',
            }}>
                {item.TypeExample}
            </div>
            <div style={{
                wordBreak: 'break-all',
                 padding: '20px',
            }}>
                {item.Value}
            </div>
            <div style={{
                wordBreak: 'break-all',
                 padding: '20px',
            }}>
                {item.Mandatory}
            </div>
        </div> 
        })}
    </div> 
</div>

Example:

```bash
"docker": {"cmd": "run.sh", "image": "jelastic/tomcat8:latest", "nodeGroup": "cp", "links": [...], "env": {...}, "registry": {...}, "volumes": [...], "volumeMounts": {...}, "volumesFrom": [{...}]}
```

- <u>linking configuration - for establishing connection between Docker containers in confines of a single environment</u>
- <u>environment variables configuration - for stating environment variables in Docker containers</u>
- <u>registry configuration - for connection to private registry</u>
- <u>local volumes - list of volumes to be created within local file system of Docker container</u>
- <u>mount points - set of parameters that define folder(s) with required data to be attached from other servers</u>
- <u>account volumes - list of nodes at the current account for the volumes to be imported from</u>
