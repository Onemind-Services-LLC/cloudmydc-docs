---
title: Maven Configuration
slug: maven-configuration
sidebar_position: 2
---

import obj from './MavenConfiguration.json'

<!-- ## Maven Build Node Configuration -->

**Maven** is a tool for compiling and managing Java projects. At PaaS, it’s provisioned out-of-box to cover all the main stages of your Java application lifecycle - from building & deploying till their pushing onto production.

Herewith, all the adjustable Maven server settings can be set and/or changed with:

Herewith, all the adjustable Maven server settings can be set and/or changed with:

- configuration files
- [environment variables](/container/container-configuration/variables)

## Maven Configuration Files

The main Maven build node configuration files can be located within the following server directories:

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
       gridTemplateColumns: '1fr 2fr',
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
                Folder
            </div>
            <div style={{
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                padding: '20px',
                borderRight: '1px solid var(--ifm-toc-border-color)',
                wordBreak: 'break-all'
            }}>
               Path
            </div>
        </div>
        {obj.data1.map((item, idx) => {
          return <div key={idx} style={{
            width: '100%',
            height: 'auto',
            border: '1px solid var(--ifm-toc-border-color)',
            display: 'grid', 
            gridTemplateColumns: '1fr 2fr',
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
                {item.Folder}
            </div>
            <div style={{
                padding: '20px',
                wordBreak: 'break-all'
            }}>
                {item.Path}
            </div>
        </div> 
        })}
    </div> 
</div>

## PROJECTS

The **PROJECTS** folder is used for storing files of the unpacked project that were added to, built and deployed via Maven node.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/MavenConfiguration/01-maven-configs-projects.png)

</div>

## conf

The conf directory contains the following files:

- [**_settings.xml_**](https://cloudmydc.com/) - contains the main Maven configurations
- [**_toolchains.xml_**](https://cloudmydc.com/) - allows to set which JDK (or other tool) should be used by embedded plugins during the project build
- [**_variables.conf_**](https://cloudmydc.com/) - is used to set your custom variables, to configure memory settings, etc

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/MavenConfiguration/02-maven-configs-conf.png)

</div>

## hooks

The **hooks** folder stores custom scripts (so-called [hooks](https://cloudmydc.com/)), which should be executed prior or after application build/deploy operations.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/MavenConfiguration/03-maven-configs-hooks.png)

</div>

## keys

The **keys** directory is used as a location for uploading private keys which are needed for your application.

Just generate your key, save it as a simple file and upload to the **keys** folder. Now, you can use it for different cases (e.g. for authentication between nodes) by simply stating the appropriate **_/var/lib/jelastic/keys/{key}_** path.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/MavenConfiguration/04-maven-configs-keys.png)

</div>

## latest

The **latest** folder contains all JDK libraries, tools, binaries, etc. Here you can edit already available files or upload additional if required.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/MavenConfiguration/05-maven-configs-latest.png)

</div>

## vcs

In the **vcs** directory, you can find a list of **_{project_name}.properties_** files, which contain all information about your projects. Herewith, these configuration files are not editable, but can be viewed to inspect parameters for a particular project.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/MavenConfiguration/06-maven-configs-vcs.png)

</div>

## Maven-Specific Variables

In addition to the configuration files, Maven build node can be managed through providing (or adjusting) some of the environment variables, integrated specifically for this stack template:

1. Click the **Additionally** button next to your Maven node and navigate to the **Variables** section.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/MavenConfiguration/07-variables-button.png)

</div>

2. In the opened window, you’ll see the list of default variables for the stack, which can be adjusted up to your needs.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/MavenConfiguration/08-maven-env-variables.png)

</div>

Below, the Maven-specific variables are listed:

- **_MAVEN_OPTS_** - allows to define values for the most essential Java server options, e.g. _-Xmx, -Xms, -Xmn_, etc
- **_MAVEN_RUN_ARGS_** - specifies additional [Maven command-line parameters](https://cloudmydc.com/), which should be set for all Maven projects (for example, to define the number of process threads)
- **_MAVEN*RUN_ARGS*{project}_** - sets additional parameters for a particular project; herewith, **note** that the **_{project}_** name should be stated with underscores “\_” instead of spaces and dashes
- **_MAVEN_DEPLOY_ARTIFACT_** - defines an artifact to be deployed (all projects)
- **_MAVEN*DEPLOY_ARTIFACT*{project}_** - provides an artifact for a particular project (higher priority than _MAVEN_DEPLOY_ARTIFACT_)

In this way, with the platform you can take a full control over the Maven build node and configure it as required according to your Java project specifics.
