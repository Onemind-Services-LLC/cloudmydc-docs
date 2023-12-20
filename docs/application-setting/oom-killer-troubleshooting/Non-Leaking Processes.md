---
title: Non-Leaking Processes
slug: non-leaking-processes
sidebar_position: 4
---

import obj from './Non-LeakingProcesses.json'

<!-- ## OOM Killer Resolutions: Non-Leaking Processes -->

Processes, listed in this section, could be terminated by OOM killer in attempt to free RAM for other operations, though commonly they do not cause memory leak problems by themselves:

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
        {obj.data1.map((item, idx) => {
           return  <div key={idx} style={{
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
            }}>{item.Process}
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
