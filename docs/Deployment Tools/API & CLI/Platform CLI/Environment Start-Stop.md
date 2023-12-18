---
title: Environment start-stop
slug: environment-start-stop
sidebar_position: 3
---

## CLI Tutorial: Environment Start/Stop

Among the most common operations for environment management provided by CLI, the *start* and *stop* ones can be denoted. Wise usage of these methods can help to significantly cut your spends, especially for development and testing environments (for example, you can stop them for the nighttime, while you are sleeping, and start again at the morning to continue the development).

1. In order to stop an environment, that is temporarily non-required, execute the following command (where the highlighted ***{env_name}*** placeholder needs to be substituted with the corresponding environment name):

```bash
~/jelastic/environment/control/stopenv --envName {env_name}
```

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/EnvironmentStart-Stop/1.png)

</div>

As you can see, CLI responses with the “result” property equal to *0*, meaning that the operation passed successfully and without errors.

2. Later on, you can start your environment with a similar *startenv* method and make it operable again:

```bash
~/jelastic/environment/control/startenv --envName {env_name}
```

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/EnvironmentStart-Stop/2.png)

</div>

Yes, the environment management is that simple!