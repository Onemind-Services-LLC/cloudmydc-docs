---
title: System requirements
slug: system-requirements
sidebar_position: 2
---

## Kubernetes Cluster: System Requirements

**Kubernetes Cluster** package may not be available in some [regions](/docs/EnvironmentManagement/Environment%20Regions/Choosing%20a%20Region) due to the hardware specifics of the particular platform. In such a case, please contact your hosting provider support.

The minimum and optimal consumption of RAM, CPU, and storage depends on the cluster size, installed components, active workload, etc.

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
            gridTemplateColumns: '0.7fr 1fr 1fr',
            overflow: 'hidden',
        }}>
            <div style={{
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                padding: '20px',
                borderRight: '1px solid var(--ifm-toc-border-color)',
            }}>
                Resources <sup>[1]</sup>
            </div>
            <div style={{
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                padding: '20px',
                borderRight: '1px solid var(--ifm-toc-border-color)',
            }}>
               Development Cluster <sup>[2]</sup>
            </div>
            <div style={{
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                padding: '20px',
                borderRight: '1px solid var(--ifm-toc-border-color)',
            }}>
               Production Cluster <sup>[3]</sup>
            </div> 
        </div>
        <div style={{
            width: '100%',
            height: 'auto',
            border: '1px solid var(--ifm-toc-border-color)',
            display: 'grid', 
            gridTemplateColumns: '1fr 2fr 1fr',
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
                <i>Cloudlets</i>
            </div>
            <div style={{
                padding: '20px',
                wordBreak: 'break-all'
            }}>14
            </div>
            <div style={{
                wordBreak: 'break-all',
                 padding: '20px',
            }}>33
            </div>
        </div> 
        <div style={{
            width: '100%',
            height: 'auto',
            border: '1px solid var(--ifm-toc-border-color)',
            display: 'grid', 
            gridTemplateColumns: '1fr 2fr 1fr',
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
                <i>RAM & CPU</i>
            </div>
            <div style={{
                padding: '20px',
                wordBreak: 'break-all'
            }}>1.4 GiB RAM, 419 MHz CPU
            </div>
            <div style={{
                wordBreak: 'break-all',
                 padding: '20px',
            }}>3.6 GiB RAM, 947 MHz CPU
            </div>
        </div> 
        <div style={{
            width: '100%',
            height: 'auto',
            border: '1px solid var(--ifm-toc-border-color)',
            display: 'grid', 
            gridTemplateColumns: '1fr 2fr 1fr',
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
                <i>Storage <sup>[4]</sup></i>
            </div>
            <div style={{
                padding: '20px',
                wordBreak: 'break-all'
            }}>5.65 GB
            </div>
            <div style={{
                wordBreak: 'break-all',
                 padding: '20px',
            }}>15.01 GB
            </div>
        </div> 
    </div> 
</div>

:::tip Note

- **_[1]_** Measurements were performed on the bare development and production clusters without any additional load. Thus, the specified values are minimum system requirements, which can be much higher for the loaded clusters (especially production one).
- **_[2]_** Development cluster topology - one master, one worker, one storage node, no monitoring tools, sample Hello World deployment.
- **_[3]_** Production cluster topology - API balancer, three masters, two workers, one storage node, monitoring tools, sample Hello World deployment
- **_[4]_** Fast disks are critical for etcd (key-value storage used by K8s) performance, while slow etcd may lead to cluster instability due to failed workloads. Useful links: [Disk Requirements](https://etcd.io/docs/v3.5/op-guide/hardware/#disks), [Benchmark Information](https://etcd.io/docs/v3.5/op-guide/performance/#benchmarks), [How to Run Benchmark](https://github.com/etcd-io/etcd/tree/main/tools/benchmark), and [Download Benchmark](https://github.com/etcd-io/etcd/tree/main/tools/benchmark).

:::

Herewith, the development cluster is recommended only as a **sandbox environment**. For **production purposes**, a highly available topology with multi-masters is the preferred option. Next, based on the expected load, the required number of workers can be added manually, or the appropriate [automatic horizontal scaling](/docs/ApplicationSetting/Scaling%20And%20Clustering/Automatic%20Horizontal%20Scaling) can be configured. Adding more master nodes makes sense only if there is a significant number of requests coming from clients (_kubectl, dashboard, continuous integration_ job, _K8s-native_ applications, etc.).
