---
title: Statistics
slug: statistics
sidebar_position: 2
---

## Statistics Monitoring

Statistics monitoring is an easy but powerful tool that helps to manage environments smartly. The information, provided by the platform in-built statistics module, covers all the billable resources' consumption, so it can help to adjust the topology according to your needs and to cut the spends greatly.

## View Statistics

You can track the usage statistics for all the nodes in your environment: _application servers, balancers, web servers_ and _databases_. For that, just click the corresponding button next to the desired instance (or set of the same-typed nodes):

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/Statistics/env.png)

</div>

In the opened tab you’ll find the statistics on all the types of consumed resources and their limits:

- **RAM** - memory consumption (in _MiB_)
- **CPU** - processor load (in _MHz_)
- **Network** - internal and external traffic (in _MB_)
- **Disk** - stored data amount (in _MB_) and I/O operations amount (in _IOPS_)

The _RAM_ and _CPU_ limits depend on the number of [cloudlets](http://localhost:3000/docs/platform-overview/cloudlet). The Disk can be set within the allowed range, while _Network_ and _IOPS limits_ are defined by your hosting provider. Also, be aware that _Network_ is limited not by the total usage but by the amount of external traffic per second (_Mbps_).

You can further analyze the presented statistics by varying the _Interval_ and _Duration_ settings and enabling/disabling the particular sections at the top tools panel:

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/Statistics/statistics.png)

</div>

:::danger Note

The platform collects statistics every minute and stores it for an hour to implement an accurate [**_Pay-per-Use_**](/docs/account-and-pricing/pricing-model-overview) charging approach. Afterward, the data is automatically aggregated into the one-hour blocks, using one of the two methods based on the particular resource type:

- a sum of all values for _CPU, Network, Disk IOPS_ and _Disk IO_
- the maximum value for _RAM_ and _Disk_

:::

Using the statistics data you can easily track the resources consumption of your application (hover over for the details on a particular time frame), thus analyze and predict your future spends and, as a result, be able to choose the best way to manage your environment. For even more convenience, you can configure the set of [load alerts](/docs/application-setting/built-in-monitoring/load-alerts) to be notified about the consumption level growth or wane to the specified percentage via email. This can greatly help you to save your money!

See the linked document to get additional information on [resources charging](/docs/Account&Pricing/Resource%20Charging/Pricing%20FAQ).

And below we’ll consider the specifics of I/O usage tracking in more details.

## I/O Usage Monitoring

The **Input/Output Operations per Second** amount monitoring is the very common and popular storage measurement method, which helps to analyze the container’s efficiency based on its ability to handle a particular number of read and write operations simultaneously without the performance degradation.

:::tip Note

Currently IOPS statistics for the Windows-based nodes is not provided.

:::

1. IOPS data is shown within the Disk statistics section by means of the second axis to the right of the graph (we’ve disabled all the rest of sections to concentrate on the information we are actually interesting in):

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/Statistics/disk-1.png)

</div>

Obviously, the more operations are handled - the higher the system load is. Thus, to avoid the hardware efficiency degradation, the allowed IOPS amount is limited - the appropriate threshold (defined by your hosting provider) is marked with the red dotted line at the top of the graph.

Reaching this point implies that the performance of your container can be negatively affected, so it is needed to enlarge the number of servers used or to optimize the application itself.

2. Upon hovering over the particular point at the Disk/IOPS graph, you’ll see the popup tooltip with the following details:

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/Statistics/disk-2.png)

</div>

- **date and time** of the gathered stats
- **Disk** - the amount of space container is actually using
- **Disk space limit** - the maximum amount of data that is allowed to be stored in a container
- **IOPS** - the number of I/O operations handled during the stated _Interval_
- **IOPS limit** - the maximum number of I/O operations, allowed to be performed by container during the stated Interval

:::tip Note

Both limits (i.e. for _Disk_ space and _IOPS_) are displayed in a single line, named **Limit** in the chart’s legend. The particular threshold values for each of these resource types can be seen at the appropriate axes to the left and right - for the _used disk space_ and the _amount of IOPS_ respectively.

:::

3. As it was mentioned above, the **IOPS limit** depends on the _Interval_ chosen. So, for example, if you state _1 hour_ Interval for your environment, the prior limit for _1 minute_ (which is equal to _6000_ - see the image in the previous step) will be increased in 60 times (as 1 hour = 60 minutes):

_6000 _ 60 = 360 000\*

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/Statistics/disk-3.png)

</div>

In such a way, you are provided with the actual disk load information and get the ability to monitor its state in real time.
