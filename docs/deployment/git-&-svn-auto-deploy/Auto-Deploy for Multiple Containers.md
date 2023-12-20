---
title: Auto-Deploy For Multiple Containers
slug: auto-deploy-for-multiple-containers
sidebar_position: 2
---

import obj from './Auto-DeployforMultipleContainers.json'

<!-- ## GIT & SVN Auto-Deploy for Multiple Containers -->

When handling a highly-visited project, it’s commonly recommended to leverage the platform [Multi-Nodes](/application-setting/scaling-and-clustering/horizontal-scaling) feature for ensuring enough performance for your app. Also, you need to consider that with the [auto-deploy option](/deployment/git-&-svn-auto-deploy/auto-deploy-overview) enabled for such a project, all of the containers within your application server layer will be updated <u>simultaneously</u>.

Nevertheless, in case you’d like to achieve more high-availability (i.e. for the redeployment to be performed implicitly and <u>consequentially</u> at each node), here are a few options this can be ensured through:

- initiate this operation manually with the corresponding **Update from GIT/SVN** button (or **Build and Deploy** for Maven projects) next to app’s context:

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/Auto-DeployforMultipleContainers/5upload.png)

</div>

- use the appropriate [CLI method](/deployment-tools/api-&-cli/platform-cli/platform-cli-overview) for VCS projects' management:

```bash
~/jelastic/environment/vcs/update --envName {env_name} --project {app_context}
```

- run redeployment through the direct update [API request](https://cloudmydc.com/) - see the details within the **Environment > Vcs** section of the linked documentation

In all of these cases, your application servers' containers will be redeployed one-by-one, and, thus, no downtime will be caused. Furthemore, for more convenience, you can also define the operation of update to be run automatically (e.g. once per required period or upon the source code changes) through building and integrating your own scripts with the abovedescribed CLI or API methods implemented.

:::tip Note

If you’ve faced any issues while configuring auto-update for your VCS project or still have some questions left, feel free to appeal for our technical experts' assistance at [Stackoverflow](https://stackoverflow.com/questions/tagged/jelastic).

:::
