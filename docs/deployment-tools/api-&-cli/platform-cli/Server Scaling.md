---
title: Server Scaling
slug: server-scaling
sidebar_position: 6
---

<!-- ## CLI Tutorial: Server Scaling -->

When the environment is already created, in some cases it may be required to change its topology - for example, to scale a particular server or the whole environment layer (using the [vertical](/application-setting/scaling-and-clustering/automatic-vertical-scaling) and/or [horizontal](/application-setting/scaling-and-clustering/automatic-horizontal-scaling) scaling respectively) due to the changed incoming load. This may be accomplished with the corresponding **_changetopology_** CLI method:

```bash
~/jelastic/environment/control/changetopology --envName {env_name} --env '{"engine" : "{engine_type}"}' --nodes ['{"nodeType" : "{node_type}","count" : {nodes_amount}, "fixedCloudlets" : {cloudlets_amount}, "flexibleCloudlets" : {cloudlets_amount}}, {"nodeType" : "{node_type}", "count" : {nodes_amount}, "fixedCloudlets" : {cloudlets_amount}, "flexibleCloudlets" :  {cloudlets_amount}}']
```

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/ServerScaling/1.png)

</div>

The whole [set of possible parameters](/deployment-tools/api-&-cli/create-env-params) is the same as for the [createenvironment](/deployment-tools/api-&-cli/platform-cli/environment-creation) method, except the _–envName_ `{env_name}` - here it is used to point to the already existing environment, that should be adjusted.

As for the rest of options, in this example we use the following ones:

- `{engine_type}` - engine the instances of the chosen environment are powered by (an obligatory string)
- `{node_type}` - stack type identifier, according to the [list](/deployment-tools/cloud-scripting-&-jps/application-manifest)
- `{nodes_amount}` - amount of nodes to be set (applies [Horizontal Scaling](/application-setting/scaling-and-clustering/horizontal-scaling))
- `{cloudlets_amount}` - number of fixed (_fixedCloudlets_) and/or flexible (_flexibleCloudlets_) cloudlets to be allocated for the specified node type (applies [vertical scaling](/application-setting/scaling-and-clustering/automatic-vertical-scaling))

:::danger Note

For the proper work of horizontally scaled application server, do not miss to add a [load balancing node](/load-balancers/load-balancing) to your environment topology beforehand (if it’s absent).

:::

Reconfiguration of environment topology may take several minutes in order to be accomplished.
