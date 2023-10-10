---
sidebar_position: 5
---

import obj from './QuotasSystem.json'

While working with the platform, you can notice some features being completely or partially restricted (e.g. [public IP](https://cloudmydc.com/) option or number of [cloudlets](https://cloudmydc.com/) per container) by your particular service hosting provider. In most cases, such limitations are provided for trial accounts only, so [upgrading](https://cloudmydc.com/) will automatically unlock access to all of the platform functionality.

:::tip Note
If you still require some quotas enlargement after account conversion, please, contact your hosting service provider to get an assistance.
:::

The actual account permissions can be viewed via the **Quotas & Pricing > Account Limits** window at the platform dashboard.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/QuotasSystem/01-quotas-and-pricing-account-limits.png)

</div>

<div>
<div style={{
    width: '100%',
    color: 'var(--table-color-primary)',
    background: 'var(--table-bg-primary-t2)', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center',
    padding: '20px'
}}>
    Quotas
</div>
{obj.data1.map((item, idx) => {
    return <div key={idx} style={{ background: 'var(--table-bg-primary-t1)', padding: '10px', borderBottom: '2px solid #fff'}}>
    {item}
</div>
})}
</div>
