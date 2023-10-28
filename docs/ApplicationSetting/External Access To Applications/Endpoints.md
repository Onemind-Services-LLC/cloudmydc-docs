---
sidebar_position: 5
---

import obj from './EndPoints.json'

## Endpoints: A Direct Connection to the Cloud

<div style={{
    display: 'grid',
    gridTemplateColumns: '0.15fr 1fr',
    gap: '10px'
}}>
<div>
<div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'cetner',
}}>

<!-- Image Url changes -->

![Locale Dropdown](./img/Endpoints/1-logo.png)

</div>
</div>
<div>

The **Endpoints** feature at the platform refers to the possibility of TCP/UDP ports mapping via the Shared Load Balancer, which is intended to simplify the instances' collaboration with third-party tools and resources.

</div>
</div>
This is achieved through providing the ability to establish the direct connection (over either raw TCP or UDP protocol) to the corresponding node, without the mandatory <a href="/docs/ApplicationSetting/External%20Access%20To%20Applications/Public%20IP">public IP</a> address attached.

Such linking can be used to enable a great variety of different tasks, like remote database management, direct apps' [deployment from IDE](/docs/Windows&.NET/DOT%20NET%20Core) (for _IIS_), running multiple project copies on a single instance, accessing a server’s admin panel with no external address bound, etc.

:::tip

Beside the increased convenience, with endpoints you can cut your spends for the External IP usage, which, otherwise, would be required for such operations. Obviously, endpoints can’t completely replace them, but may become useful in some elementary jobs, and being combined with other platform features (like automatic [vertical](/docs/ApplicationSetting/Scaling%20And%20Clustering/Automatic%20Vertical%20Scaling) and [horizontal](/docs/ApplicationSetting/Scaling%20And%20Clustering/Automatic%20Horizontal%20Scaling) scaling, [discounts tiers](/docs/Account&Pricing/Automatic%20Discounts), etc.) such an approach can help you to significantly save your money.

:::

Follow the instruction below to find out how to work with endpoints at the platform and discover a few interesting use-cases to try them by yourself.

## Endpoints Managing

The list of endpoints can be accessed via the environment **Settings** menu, that opens through selecting the same-named button for a particular environment.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/Endpoints/3-endpoints.png)

</div>

Within the opened tab, switch to the **Endpoints** menu item. Now you can start working with your mapping’s list:

- [add new endpoint](/docs/ApplicationSetting/External%20Access%20To%20Applications/Endpoints#adding-endpoints)
- [edit/remove the existing endpoint](/docs/ApplicationSetting/External%20Access%20To%20Applications/Endpoints#editremove-endpoint)

## Adding Endpoints

To create a new endpoint, click the **Add** button from the top tools' pane and fill in the appeared **_Add Endpoint_** form with the relevant data:

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/Endpoints/4-add.png)

</div>

- **Node** - select the instance you’d like to set the endpoint for (here only the comprised in the chosen environment nodes are displayed)
- **Name** - either type the title for a new endpoint or choose one of the preconfigured options (the corresponding list is provided just down the page)
- **Private port** - specify the preferred local node’s port to be used for mapping (it’s substituted automatically in case the predefined _Name_ was selected)
- **Protocol** - select either TCP or UDP

The rest of fields, i.e. **Public port** and **Access URL**, will be configured by the platform automatically.

Select **Add** when ready.

:::tip

For more convenience, we provide the embedded list of predefined endpoint configurations, based on the protocol or purpose implied:

<div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}}>

<div style={{
        width: '80%',
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
            gridTemplateColumns: '1fr 1fr',
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
                Connection Name
            </div>
            <div style={{
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                padding: '20px',
                borderRight: '1px solid var(--ifm-toc-border-color)',
                wordBreak: 'break-all'
            }}>
               Private Port
            </div>
        </div>
        {obj.data1.map((item, idx) => {
          return <div key={idx} style={{
            width: '100%',
            height: 'auto',
            border: '1px solid var(--ifm-toc-border-color)',
            display: 'grid', 
            gridTemplateColumns: '1fr 1fr',
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
                {item.ConnectionName}
            </div>
            <div style={{
                padding: '20px',
                wordBreak: 'break-all'
            }}>
                {item.PrivatePort}
            </div>
        </div> 
        })}
    </div> 
</div>
</div>

<div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 0 3rem 0'
}}>

<div style={{
        width: '80%',
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
            gridTemplateColumns: '1fr',
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
                Optional*
            </div>
        </div>
        {obj.data2.map((item, idx) => {
          return <div key={idx} style={{
            width: '100%',
            height: 'auto',
            border: '1px solid var(--ifm-toc-border-color)',
            display: 'grid', 
            gridTemplateColumns: '1fr 1fr',
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
                {item.ConnectionName}
            </div>
            <div style={{
                padding: '20px',
                wordBreak: 'break-all'
            }}>
                {item.PrivatePort}
            </div>
        </div> 
        })}
    </div> 
</div>
</div>

**\*Optional** values availability depends on the type of the chosen node:

- _database nodes_ are provided with the default endpoint, named after themselves and with the appropriate port stated
- _Windows-based containers_ have the additional [_RDP_](/docs/Windows&.NET/Windows%20RD%20Access) (_3389_) connection
- _IIS application server_ has the _DEPLOY_ (_8172_) connection for the direct project [deployment from IDE](/docs/Windows&.NET/DOT%20NET%20Core)

:::

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/Endpoints/6-added.png)

</div>

Here you’ll find the **Public port** and **Access URL** actual values already displayed. You can use these parameters to perform the required operations - just click on a particular string to get the opportunity to easily copy it.

:::tip Note

that for linking functionality to work properly with the [VPS](/docs/Elastic%20VPS/Elastic%20VPS%20Overview/General%20Information) and [Docker®](/docs/Container/Container%20Deployment/Custom%20Containers%20Deployment) containers, the corresponding private ports (stated during the endpoint addition) at these nodes should be opened by the owner manually.

:::

## Edit/Remove Endpoint

Any existing endpoint can be easily edited or removed in case of further unnecessity. For that, just select the desired connection within the endpoints list and click the **Edit** (either use double-click on the required line) or **Remove** button, located at the tools' pane above.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/Endpoints/7-edit-remove.png)

</div>

Depending on the option chosen, you’ll see the following:

- **Edit** - in the appeared **_Edit Endpoint_** form (which is completely similar to the **_Add_** one) you can modify all the abovementioned settings except the **Node** choosing (as this makes no sense - you could just add a new similar endpoint to the required instance).

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/Endpoints/8-edit-2.png)

</div>

Once the required changes are made, just **Apply** them with the same-named button at the bottom of the frame.

- **Remove** - the special pop-up frame will appear, where you need to confirm your decision:

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/Endpoints/9-remove.png)

</div>

Just after that, the corresponding endpoint will be removed from the list.

## Endpoints Use-Cases

Once the required mappings are configured, you can apply them for running different tasks. To make it easier to start, below we’ll describe a few most common endpoints' use-cases that you can benefit from.

As an example, we will use an environment with the **Apache** application server and **MySQL** database (you can create the similar one following [this](/docs/EnvironmentManagement/Setting%20Up%20Environment) guide):

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/Endpoints/2-env.png)

</div>

Now, let’s learn how to use endpoints for:

- [establishing remote access to your database](/docs/ApplicationSetting/External%20Access%20To%20Applications/Endpoints#database-management)
- [running multiple project copies on a single app server](/docs/ApplicationSetting/External%20Access%20To%20Applications/Endpoints#multiple-development-stages-at-a-single-app-server)

## Database Management

With endpoints, gaining remote access to your DB instance becomes pretty easy, as using this feature eliminates the necessity to acquire any additional options like a Public IP. To show this, we’ll consider two simple ways of performing this operation: through [embedded OS terminal](/docs/ApplicationSetting/External%20Access%20To%20Applications/Endpoints#connection-via-terminal) and [third-party DB client](/docs/ApplicationSetting/External%20Access%20To%20Applications/Endpoints#connection-via-local-client).

## Connection via Terminal

The most common approach is to use the embedded terminal of your local machine, as this does not require any additional installations or configurations and provides sufficient functionality for a simple connection establishment - just a single command is required:

```bash
mysql -h {host} -P {port} -u {user} -p
```

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/Endpoints/10-ssh.png)

</div>

where:

- **_{host}_** - endpoint Access URL without the port suffix specified (_node30292-env-with-endpoints.jelastic.com in our case_)
- **_{port}_** - public port number assigned (_10011_ in this example)
- **_{user} _**- database user name (the platform has sent it to you via email during the environment creation - by default it stands for _root_ for all the new MySQL servers)

After the connection validation, you’ll be requested for the appropriate DB user’s password (it can also be found in the abovementioned email) in order to access your database.

That’s all! Now you can start working with your database through executing the required SQL queries.

## Connection via Local Client

In the case you require advanced functionality or if you are used to managing the data stored within your database with more convenience, a type of database desktop client may come in handy here. It will provide you with a user-friendly graphic interface and the variety of included features to accelerate your work.

For an example of such a client, that will help to establish the remote connection to our database through the created endpoint, we’ll use one of the most popular DB management tools - [MySQL Workbench](https://www.mysql.com/products/workbench/).

1. Run the abovementioned application and click the **New Connection** button.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/Endpoints/11-wb-1.png)

</div>

2. In the appeared **_Setup New Connection_** frame, fill in the following fields at the top:

- **Connection Name** - set an appellation for your connection (_e.g. jelastic-db_)

- **Connection Method** - choose the Standard (_TCP/IP_) method

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/Endpoints/12-wb-2.png)

</div>

Then, specify the required DB data inside the **_Parameters_** tab beneath:

- **Hostname** - endpoint URL without the port number specified at the end (_node30292-endpoints.jelastic.com_ in our case)

- **Port** - the endpoint’s public port (we got port _10011_ assigned during its addition)

- **Username** - name of the admin DB user (the platform has sent it to you via email during the environment creation - by default it stands for root for all the new MySQL servers)

- **Password** - either click **Store in Keychain** to enter and save your pass (which can be found within the same email) or skip this field to specify it during each connection attempt

- **Default Schema** - the database schema to be used by default (can be also left blank) Click **OK** to complete.

3. Double-click on the newly appeared connection record to initiate its establishment and specify your password in the appeared frame (if you haven’t saved it before).

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/Endpoints/13-wb-3.png)

</div>

You can also tick _Save password in keychain_ if you don’t want to enter it manually each time you need to access your database. Click the **OK** button to proceed.

4. In a minute, you’ll be connected to your DB.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/Endpoints/14-wb-4.png)

</div>

Great! Now you can start organizing your data using all the provided benefits of the full-featured management client.

Just in the same way you can connect to any other database server within the platform or, for example, [backup and restore](/docs/Database/MySQL-MariaDB-Percona/Dump%20Import-Export) your data within dump files.

## Multiple Development Stages at a Single App Server

Beside the elementary operations of DB management, endpoints also give the ability to implement a variety of useful and interesting solutions for other servers. Below we’ll examine one of such beneficial possibilities this feature ensures - how to use a single application server as your production and development environment simultaneously (with the Apache instance from our environment as an example).

1. So, map the endpoint to your **Apache** server with the preferred unused private port opened.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/Endpoints/16-ap-2.png)

</div>

:::danger note

Do not choose port _80_ as private port for this task, as Apache uses it by default for the incoming HTTP-requests handling. Otherwise, the whole process, described below, will become pointless.

:::

2. Now, [deploy](/docs/Deployment/Deployment%20Guide) your application twice to different contexts (_e.g. prod and dev_).

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/Endpoints/15-ap-1.png)

</div>

3. The next step is configuring Apache itself - thus, click the **Config** button next to this server and open its main configuration file (the **_conf > httpd.conf_** one).

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/Endpoints/17-ap-3.png)

</div>

4. Scroll down and add the following string to the registry of listened ports:

```bash
Listen 0.0.0.0:{port}
```

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/Endpoints/18-ap-4.png)

</div>

Here, the **{port}** parameter should be substituted with the private port number you’ve stated during the addition of the endpoint (we’ve chosen the 81st one).

5. After that, move to the end of the file and duplicate the **VirtualHost** section, specifying the corresponding port number (the same as in the step above - 81st in our case) within its heading.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/Endpoints/19-ap-5.png)

</div>

Then adjust the appropriate _DocumentRoot_ locations for both virtual hosts with the corresponding projects (_prod_ - for the default one and _dev_ - for the custom section beneath).

6. **Save** the performed changes and **Restart** the Apache server to apply them.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/Endpoints/20-ap-6.png)

</div>

7. Now you can connect to your prod project as usual, e.g. using the **Open in browser** button (or entering the external [custom domain](/docs/ApplicationSetting/Domain%20Name%20Management/Custom%20Domain%20Name) if one was additionally bound to your app), while for accessing its dev version, you just need to specify the used endpoint’s Access URL.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/Endpoints/21-production-and-dev-access.png)

</div>

As a result, you’ve got two connection points to your two projects, which allow you to perform any desired testing or development tasks at one of the copies, with zero influence on the another one. Moreover, they can be swapped in a few clicks if necessary.

Stay tuned for more useful examples of practical endpoints' usage in the nearest future.
