---
title: Environment variables
slug: environment-variables
sidebar_position: 1
---

import obj from './EnvironmentVariables.json'

**Environment variables** are used to store the values of the frequently used parameters that are provided to a software program at runtime. The utilization of such placeholders makes your application more portable and flexible.

The most common use of variables is to make quick adjustments to specific values that are utilized multiple times in your application code. Follow the linked guide if you need to create such [custom environment variables](http://localhost:3000/docs/environment-management/environment-variables/custom-environment-variables) for your project.

Another use case for variables is to configure the application through the set of predefined values (enable/disable features, change behavior, etc.). The platform supplements most of the certified software stacks with a number of default variables, which can be used by developers to help with application hosting.

## Default Environment Variables

Click this abstract to view a full list of default variables used within the platform containers.

Or use the categorized groups below to narrow the search.

:::danger Note

Variables marked with “**+**” in the **Editable** column can be freely adjusted to customize your container. Herewith, a restart is required to apply changes.

It is <u>not recommended</u> to adjust variables marked with “**-**” as such an action won’t apply any actual
changes to the container; however, it may break some internal logic.

:::

There are a number of options that can be used with all of the [platform-managed stacks](/docs/quickstart/software-stack-versions):

<div style={{
        width: '100%',
        margin: '0 0 5rem 0',
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
            gridTemplateColumns: '1fr 0.8fr 2fr',
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
                Variable Name
            </div>
            <div style={{
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                padding: '20px',
                borderRight: '1px solid var(--ifm-toc-border-color)',
                wordBreak: 'break-all'
            }}>
               Editable*	
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
          return <div key={idx} style={{
            width: '100%',
            height: 'auto',
            border: '1px solid var(--ifm-toc-border-color)',
            display: 'grid', 
            gridTemplateColumns: '1fr 0.8fr 2fr',
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
                {item.VariableName}
            </div>
            <div style={{
                padding: '20px',
                wordBreak: 'break-all',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                {item.Editable}
            </div>
            <div style={{
                wordBreak: 'break-all',
                 padding: '20px',
            }}>
                {item.Description}
            </div>
        </div> 
        })}
    </div> 
</div>

### Java

<u>Click here to list Java variables.</u>

### PHP

<u>Click here to list PHP variables.</u>

### Ruby

<u>Click here to list Ruby variables.</u>

### Node.js

<u>Click here to list Node.js variables.</u>

### Go (Golang)

<u>Click here to list Go (Golang) variables.</u>

### .NET Core

<u>Click here to list .NET Core variables.</u>

### Load Balancers

<u>Click here to list Load Balancers variables.</u>

### Databases

<u>Click here to list Databases variables.</u>

### Other Stacks

<u>Click here to list Other Stacks variables.</u>
