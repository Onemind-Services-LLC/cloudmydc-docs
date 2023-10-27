---
sidebar_position: 8
---

## How to Install Hasura GraphQL Engine

<div style={{
    display: 'grid',
    gridTemplateColumns: '0.15fr 1fr'
}}>
<div>

![Locale Dropdown](./img/HasuraGraphQLInstallation/01--hasura-logo.png)

</div>

<div>

**[Hasura](https://cloudmydc.com/)** is an open-source engine based on the GraphQL query language for API. It allows you to create a connection, manage, and configure event triggers for the PostgreSQL database in minutes. Hasura helps you build GraphQL applications backed by PostgreSQL or incrementally move your existing projects.

</div>

</div>

In this tutorial, we’ll overview two examples of the Hasura GraphQL engine installation at the platform:

- [Automatic Deployment with Local PostgreSQL Database](https://cloudmydc.com/)
- [Manual Deployment with External PostgreSQL Database](https://cloudmydc.com/)

## Automatic Deployment with Local PostgreSQL Database

1. Log in the dashboard and click **[Marketplace](https://cloudmydc.com/)** at the top-left corner.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/HasuraGraphQLInstallation/02-platform-marketplace-button.png)

</div>

2. Search for the **_Docker Engine CE_** package and initiate its installation.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/HasuraGraphQLInstallation/03--install-docker-engine-ce-from-marketplace.png)

</div>

3. To automatically create Hasura and PostgreSQL database in the same container, choose the Deploy containers from compose.yml option, and provide the default config from the [Hasura on Docker](https://cloudmydc.com/) repository:

_[https://raw.githubusercontent.com/hasura/graphql-engine/master/install-manifests/docker-compose/docker-compose.yamldeploy hasura from compose.yml](https://cloudmydc.com/)_

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/HasuraGraphQLInstallation/04--deploy-hasura-from-compose.yml.png)

</div>

:::danger Note

The installation requires a [public IP](/docs/ApplicationSetting/External%20Access%20To%20Applications/Public%20IP), which is a paid option available for billing users only.

:::

Configure the remaining Environment, [Display Name](https://cloudmydc.com/), [region](/docs/EnvironmentManagement/Environment%20Regions/Choosing%20a%20Region) (if available) fields up to your needs, and click **Install**.

4. After a successful installation, you can access the Hasura console to ensure that everything works properly.

_http://**{envDomain}**:8080/console_

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/HasuraGraphQLInstallation/05--hasura-admin-panel.png)

</div>

That’s it! Now, you can provide **Data** for your database via the same-named tab at the top and try out GraphQL queries afterward.

## Manual Deployment with External PostgreSQL Database

In case you already have a database, you can connect to it with the Hasura GraphQL engine.

1. Create a clean standalone **_Docker Engine CE_** via [platform Marketplace](/docs/Deployment%20Tools/Cloud%20Scripting%20&%20JPS/Marketplace).

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/HasuraGraphQLInstallation/06--create-clean-docker-engine-ce.png)

</div>

2. After creation connect to the container via [Web SSH](/docs/Deployment%20Tools/SSH/SSH%20Access/Web%20SSH) and create a file with the following content (e.g. **_nano docker-run.sh_**):

```bash
docker run -d --restart=always -p 80:8080 \
-e HASURA_GRAPHQL_DATABASE_URL=postgres://{username}:{password}@{host}/{dbname} \
-e HASURA_GRAPHQL_ENABLE_CONSOLE=true \
-e HASURA_GRAPHQL_ADMIN_SECRET=myadminsecretkey \
hasura/graphql-engine:v1.0.0
```

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/HasuraGraphQLInstallation/07--prepare-hasura-installation-command.png)

</div>

For the detailed information on the docker run command, refer to the official documentation. In our case, the parameters are the following:

- **-d** - runs your services in the background
- **–restart=always** - to always start the daemon (e.g. after container restart)
- **-p 80:8080** - configures port redirect from the 80 port of the Docker Engine container to the 8080 one of the Hasura image running inside
- **-e** - sets environment variables (refer to the [full list](https://cloudmydc.com/) for additional details)
  - HASURA_GRAPHQL_DATABASE_URL - connection link to your PostgreSQL database with special characters being URL encoded (if located at the platform, the required details can be viewed in the PostgreSQL after-creation email)
  - HASURA_GRAPHQL_ENABLE_CONSOLE - enables Hasura console
  - HASURA_GRAPHQL_ADMIN_SECRET - configures admin secret key to access console, myadminsecretkey in our case
- **hasura/graphql-engine:v1.0.0** - Docker image to be installed

3. Make this file executable and run it to create Hasura Docker container.

```bash
chmod +x docker-run.sh
./docker-run.sh
```

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/HasuraGraphQLInstallation/08--install-hasura-with-custom-configurations.png)

</div>

You can additionally run the **_docker ps_** command to ensure that the Hasura service is up and running.

4. In our case, the application console is on the port 80 so that you can click **Open in Browser** next to your environment for an automatic redirect. Otherwise, the required port should be added to the environment URL.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/HasuraGraphQLInstallation/09--hasura-access-protection-with-admin-secret.png)

</div>

According to our settings, admin secret key should be provided to access console (_myadminsecretkey_ in our case).

5. Now, you can start working with your database via GraphQL API. For example, from the **_GraphiQL_** tab.

:::danger Note

If there are existing tables that should be tracked by Hasura, go to the **Data** tab and allow access to the required ones.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/HasuraGraphQLInstallation/10--hasura-track-existing-tables.png)

</div>

:::

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/HasuraGraphQLInstallation/11--working-in-hasura-admin-panel.png)

</div>

Alternatively, you can use GraphQL Endpoint (specified at the top of the page) to create your POST request to the database via any preferred tool or script.
