---
title: Environment creation
slug: environment-creation
sidebar_position: 2
---

## CLI Tutorial: Environment Creation

Creation of environments via command line can come in handy for the variety of different solutions (e.g. handling [complex DevOps scenarios](https://cloudmydc.com/)). So, let’s consider the ways this can be accomplished through.

1. At the beginning, we’ll consider a few variants this operation can be implemented through.

- The most straightforward way to create a new environment with CLI is to declare the required parameters manually via the appropriate command. Simply execute the following **_createenvironment_** method with your custom parameters specified:

```bash
~/jelastic/environment/control/createenvironment --env '{"shortdomain" : " {env_name}", "engine" : " {engine_type}"}' --nodes '[{"nodeType" : " {node_type}", "fixedCloudlets" :  {cloudlets_amount}, "flexibleCloudlets" :  {cloudlets_amount}}]'
```

In the example above, the highlighted placeholders should be substituted with the following data:

- **_{env_name}_** - name for the new environment
- **_{engine_type}_** - engine for being used in this environment
- **_{node_type}_** - stack type identifier, according to the [list](/docs/deployment-tools/cloud-scripting-&-jps/application-manifest)
- **_{cloudlets_amount}_** - number of fixed and flexible cloudlets to allocate for a particular node

:::tip Tip

The more detailed information on available parameters can be found within the corresponding [API method](https://docs.jelastic.com/api/#!/api/environment.Control-method-CreateEnvironment) description and at the [CreateEnvironment API](/docs/deployment-tools/api-&-cli/create-env-params) overview.

:::

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/EnvironmentCreation/1.png)

</div>

Pay attention that in the image above CLI responded with the _result_ property equal to 0 - this means that the performed operation has passed successfully and without errors (this is applicable for all of the commands you run).

- The second option, supported by platform CLI, is to use JSON file with all of your environments' parameters stated inside. Created once, such file can be used multiple times, which is much faster and convenient than defining everything manually each time.

For example, let’s create a simple JSON with the next environment topology:

```bash
{
  "env": {
    "shortdomain": "{env_name}",
    "engine": "{engine_type}"
  },
  "nodes": [
    {
      "nodeType": "{node_type}",
      "fixedCloudlets": "{cloudlets_amount}",
      "flexibleCloudlets": "{cloudlets_amount}"
    }
  ]
}
```

Just don’t forget to change the highlighted parameters in the same way it was described within the previous step.

Now, all you need to do in order to create an environment is to use the **_createenvironment_** method with just a single –myparams parameter, that includes path to your .json file as a value (or just its name if it’s located within the user’s home folder):

```bash
~/jelastic/environment/control/createenvironment --myparams {path_to_file}
```

In addition, you can redefine or add some of the settings (namely – _shortdomain_, _region_ and _displayName_) to the env section of your configuration file, by stating them inside square brackets within this method parameters. For example, with the optional – _shortdomain_ string (like in the image below) you can override the same-named setting from JSON, so the environment will be created with the same topology but under a different name.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/EnvironmentCreation/2.png)

</div>

2. Creation of a [Docker-based environment](/docs/container/container-deployment/custom-containers-deployment) is almost similar to the above described methods, but includes a few specific parameters. So, in order to get a Docker container using platform CLI, you need to execute the following line:

```bash
~/jelastic/environment/control/createenvironment --env '{"shortdomain" : "{env_name}"}' --nodes '[{"nodeType" : "docker", "fixedCloudlets" : {cloudlets_amount}, "flexibleCloudlets" : {cloudlets_amount}, "docker" : {"image" : "{image_name}"}}]'
```

According to the command above, the _nodeType_ parameter needs to be stated in **_docker_** and the newly added **_{image_name}_** placeholder should be replaced with the address of Docker template you’d like to deploy (in the _server.com/images/image_name:tag_ format).

Herewith:

- in case a template is located within the Registry Hub, the registry hostname can be skipped
- optionally, you can add the version tag after the “:” separator at the end of image address
- in order to get authenticated at a private **_registry_**, the additional registry parameter should be declared, with _url_ to it and the appropriate credentials (i.e. _password_ and _user_) stated as values.

:::tip Note

The full list of the special Docker parameters can be found at the appropriate [document](/docs/deployment-tools/api-&-cli/create-env-params).

:::

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/EnvironmentCreation/3.png)

</div>

In a short while, your Docker-based environment will be created, being ready to work.
