---
title: System Requirements
slug: system-requirements
sidebar_position: 2
---

import obj from './SystemRequirements.json'

The minimum and optimal consumption of RAM, CPU, and storage depends on the cluster size, installed components, active workload, etc.

<div style={{
    overflow: "auto",
    marginBottom: "2rem"
}}>
    <table style={{
        width: "max-content",
        margin: "0 auto",
        maxWidth: "500px"
    }}> 
    <tr style={{
        color: 'var(--table-color-primary)',
        background: 'var(--table-bg-primary-t2)'
    }}>
        <th>Resources</th>
        <th>Development</th>
        <th>Production</th>
    </tr>
    {obj.data1.map((item, index) => {
        return <tr key={index}>
        <td style={{
            background: 'var(--table-bg-primary-t1)',
        }}>{item.Resource}</td>
        <td>{item.Development}</td>
        <td>{item.Production}</td>
    </tr>
    })}
    </table>
</div>

:::tip Note

- Measurements were performed on the bare development and production clusters without any additional load. Thus, the specified values are minimum system requirements, which can be much higher for the loaded clusters (especially production one).
- Development cluster topology includes:
  - 1 NetBox container
  - 1 worker (default queue)
  - 1 Redis
  - 1 PostgreSQL
  - 1 NGINX
  - 1 shared load balancer with built-in SSL
- Production cluster topology includes:
  - 2 NetBox containers
  - 1 worker (default queue)
  - 1 Redis
  - 2 PostgreSQL with 1 pgpool running in a master-slave configuration
  - 1 NGINX with public IP

:::

The development cluster is recommended only as a **sandbox environment**. For production purposes, a highly available topology with PostgreSQL clustered setup is recommended. Depending on the expected load, the required number of workers can be added manually, or appropriate automatic horizontal scaling can be configured.
