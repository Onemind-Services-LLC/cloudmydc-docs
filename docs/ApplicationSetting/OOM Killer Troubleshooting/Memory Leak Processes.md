---
sidebar_position: 3
---

import obj from './MemoryLeakProcesses.json'

## OOM Killer Resolutions: Processes with High Risk of Memory Leak

Pay special attention to the processes in this group as to the most probable cause of your out-of-memory issues (sorted based on server role):

- [Load Balancers](/docs/ApplicationSetting/OOM%20Killer%20Troubleshooting/Memory%20Leak%20Processes#load-balancers)
- [Application Servers](/docs/ApplicationSetting/OOM%20Killer%20Troubleshooting/Memory%20Leak%20Processes#application-servers)
- [Database Servers](/docs/ApplicationSetting/OOM%20Killer%20Troubleshooting/Memory%20Leak%20Processes#database-servers)
- [Common Processes for Different-Type Stacks](/docs/ApplicationSetting/OOM%20Killer%20Troubleshooting/Memory%20Leak%20Processes#common-processes-for-different-type-stacks)

## Load Balancers

### Common recommendations

Allocate more RAM to a corresponding node - handled services could just require more memory for normal operability.

Related processes

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
            gridTemplateColumns: '0.3fr 1fr',
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
                Process
            </div>
            <div style={{
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                padding: '20px',
                borderRight: '1px solid var(--ifm-toc-border-color)',
                wordBreak: 'break-all'
            }}>
               Resolution
            </div>
        </div>
         <div  style={{
            width: '100%',
            height: 'auto',
            border: '1px solid var(--ifm-toc-border-color)',
            display: 'grid', 
          gridTemplateColumns: '0.3fr 1fr',
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
            }}>varnishd
            </div>
            <div style={{
                padding: '20px',
                wordBreak: 'break-all'
            }}>Allocate more RAM to a node - handled services could just require more memory for normal operability
            </div>
        </div> 
    </div> 
</div>

## Application Servers

Click on points within the list below to view some common recommendations on dealing with memory shortage issues considering used programming language, as well as appropriate resolutions for the most demanding related processes:

- <u>Java</u>
- <u>PHP</u>
- <u>Ruby</u>
- <u>Python</u>
- <u>NodeJS</u>

## Database Servers

Click on the required DB stack within the list below to reveal appropriate common recommendations on coping with OOM issues, as well as resolutions for particular killed processes:

- <u>MySQL</u>
- <u>MongoDB</u>
- <u>PostgreSQL</u>
- <u>Redis</u>

## Common Processes for Different-Type Stacks

### Common recommendations

Processes in this section can be run and, subsequently, killed within different node types. Thus, OOM resolutions for them vary and depend on a process itself - see the table below to find the appropriate recommendations.

### Related processes

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
            gridTemplateColumns: '0.3fr 0.3fr 1fr',
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
                Process
            </div>
            <div style={{
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                padding: '20px',
                borderRight: '1px solid var(--ifm-toc-border-color)',
                wordBreak: 'break-all'
            }}>
               Stack
            </div>
            <div style={{
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                padding: '20px',
                borderRight: '1px solid var(--ifm-toc-border-color)',
                wordBreak: 'break-all'
            }}>
               Resolution
            </div>
        </div>
        {obj.data1.map((item, idx) => {
            return <div key={idx}  style={{
            width: '100%',
            height: 'auto',
            border: '1px solid var(--ifm-toc-border-color)',
            display: 'grid', 
          gridTemplateColumns: '0.3fr 0.3fr 1fr',
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
            }}>{item.Process}
            </div>
            <div style={{
                padding: '20px',
                wordBreak: 'break-all'
            }}>{item.Stack}
            </div>
            <div style={{
                padding: '20px',
                wordBreak: 'break-all'
            }}>{item.Resolution}
            </div>
        </div> 
        })}
    </div> 
</div>
