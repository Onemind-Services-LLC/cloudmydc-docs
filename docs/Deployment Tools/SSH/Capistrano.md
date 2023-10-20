---
sidebar_position: 6
---

## Capistrano

Capistrano is an open-source tool for executing scripts at the remote servers. Most commonly, it is used for deploying apps via SSH connection. Capistrano is written in Ruby as a component of the Ruby on Rails framework, therefore, it is widely used for Ruby apps deployment. Nevertheless, it can easily work with other programming languages, e.g. PHP.

Thus, in this instruction we will discover how to deploy a PHP application remotely, via the Capistrano tool. Initially you will need:

- an already created PHP environment with Apache application server;
- [SSH public key generated](https://cloudmydc.com/) and [added to your platform](https://cloudmydc.com/) dashboard;
- GIT repository with PHP application you would like to deploy (for now Capistrano 3 tool supports GIT VCS type only);
- local copy of this project at your computer.

Let’s get started!

:::tip Note

Commands below should be executed at your local machine’s user, similar to one you’ve used during SSH key pair generation, in order to avoid permission/connection errors.

:::

## Install Capistrano

1. For using Capistrano, you need to have Ruby installed at your local computer. Therefore, execute the appropriate command:

<div style={{
    width: '100%',
    border: '1px solid #eee',
    borderRadius: '7px',
    boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
    overflow: 'hidden',
    margin: '0 0 1rem 0',
}}>
        <div style={{
            display: "flex",
        }}>
        <div style={{ width: '5%', background: 'red',
        padding: '10px 20px 5px 20px', color: 'white' }}>
          1
        </div>
        <div style={{
            padding: '10px 20px 5px 20px',
        }}>
           apt-get install ruby rubygems
        </div>
    </div>
</div>

2. Then, install the Capistrano tool by entering the following command:

<div style={{
    width: '100%',
    border: '1px solid #eee',
    borderRadius: '7px',
    boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
    overflow: 'hidden',
    margin: '0 0 1rem 0',
}}>
        <div style={{
            display: "flex",
        }}>
        <div style={{ width: '5%', background: 'red',
        padding: '10px 20px 5px 20px', color: 'white' }}>
          1
        </div>
        <div style={{
            padding: '10px 20px 5px 20px',
        }}>
           gem install capistrano
        </div>
    </div>
</div>

3. Ensure you have the **config** folder in the local directory with your project (as it is a default folder with configurations for Ruby on Rails). Create this folder if you don’t have it.

<div style={{
    width: '100%',
    border: '1px solid #eee',
    borderRadius: '7px',
    boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
    overflow: 'hidden',
    margin: '0 0 1rem 0',
}}>
        <div style={{
            display: "flex",
        }}>
        <div style={{ width: '5%', background: 'red',
        padding: '10px 20px 5px 20px', color: 'white' }}>
          1
        </div>
        <div style={{
            padding: '10px 20px 5px 20px',
        }}>
           
        </div>
    </div>
</div>

## Capify Your Application

After installation, you need to capify your application, i.e. configure Capistrano for app deployment. To do this, navigate to the root folder of your local PHP project and execute the next command:

<div style={{
    width: '100%',
    border: '1px solid #eee',
    borderRadius: '7px',
    boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
    overflow: 'hidden',
    margin: '0 0 1rem 0',
}}>
        <div style={{
            display: "flex",
        }}>
        <div style={{ width: '5%', background: 'red',
        padding: '10px 20px 5px 20px', color: 'white' }}>
          1
        </div>
        <div style={{
            padding: '10px 20px 5px 20px',
        }}>
           cap install
        </div>
    </div>
</div>

This will create new files and directories in your project:

- **Capfile** is the main Capistrano file that takes care of the required configs and globs for custom tasks.
- **config/deploy/** folder with two files (**_staging.rb_** and **_production.rb_**) for an environment’s specific deployment settings.
- **_config/deploy.rb_** Ruby script which contains application configurations and Capistrano instructions.
- **_lib/capistrano/tasks/_** folder for your custom tasks.

:::tip Tip:

As an option, you can try the dedicated [_capistrano-jelastic_](https://cloudmydc.com/) gem, maintained by [_gerado-navarro_](https://cloudmydc.com/), for automating your Rails apps' deployment to the platform.

:::

## Set Custom Configurations

1. Navigate to the **_config/deploy.rb_** file and configure it corresponding to your settings. Initially it looks like following:

<div style={{
    width: '100%',
    border: '1px solid #eee',
    borderRadius: '7px',
    boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
    overflow: 'hidden',
    margin: '0 0 1rem 0',
}}>
        <div style={{
            display: "flex",
        }}>
        <div style={{ width: '5%', background: 'red',
        padding: '10px 20px 5px 20px', color: 'white' }}>
          1
        </div>
        <div style={{
            padding: '10px 20px 5px 20px',
        }}>
           
        </div>
    </div>
</div>

Modify the next strings:

- enter a name for your application:

<div style={{
    width: '100%',
    border: '1px solid #eee',
    borderRadius: '7px',
    boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
    overflow: 'hidden',
    margin: '0 0 1rem 0',
}}>
        <div style={{
            display: "flex",
        }}>
        <div style={{ width: '5%', background: 'red',
        padding: '10px 20px 5px 20px', color: 'white' }}>
          1
        </div>
        <div style={{
            padding: '10px 20px 5px 20px',
        }}>
           set :application, "my_app_name"
        </div>
    </div>
</div>

- specify URL to the VSC repository with your PHP application code:

<div style={{
    width: '100%',
    border: '1px solid #eee',
    borderRadius: '7px',
    boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
    overflow: 'hidden',
    margin: '0 0 1rem 0',
}}>
        <div style={{
            display: "flex",
        }}>
        <div style={{ width: '5%', background: 'red',
        padding: '10px 20px 5px 20px', color: 'white' }}>
          1
        </div>
        <div style={{
            padding: '10px 20px 5px 20px',
        }}>
           set :repo_url, "git@example.net:me/my_repo.git"
        </div>
    </div>
</div>

:::tip Note

You need to have an SSH public key attached to your GIT account (the same one that you’ve added to the platform dashboard). Otherwise, you’ll get a “Permission denied” error while trying to deploy your application.

You can also use the **_https:_** link of the following type:

<div style={{
    width: '100%',
    border: '1px solid #eee',
    borderRadius: '7px',
    boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
    overflow: 'hidden',
    margin: '0 0 1rem 0',
}}>
        <div style={{
            display: "flex",
        }}>
        <div style={{ width: '5%', background: 'red',
        padding: '10px 20px 5px 20px', color: 'white' }}>
          1
        </div>
        <div style={{
            padding: '10px 20px 5px 20px',
        }}>
           set :repo_url, "https://example.net/GIT_user_name/repo_name.git"
        </div>
    </div>
</div>

In this case, authentication is not required and you can state a URL to any PHP open-source repository you would like to deploy.

:::

- uncomment the following line and state the directory your application will be deployed to (this value is default for the platform PHP app servers):

<div style={{
    width: '100%',
    border: '1px solid #eee',
    borderRadius: '7px',
    boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
    overflow: 'hidden',
    margin: '0 0 1rem 0',
}}>
        <div style={{
            display: "flex",
        }}>
        <div style={{ width: '5%', background: 'red',
        padding: '10px 20px 5px 20px', color: 'white' }}>
          1
        </div>
        <div style={{
            padding: '10px 20px 5px 20px',
        }}>
           # set :deploy_to, '/var/www/webroot'
        </div>
    </div>
</div>

- uncomment the following lines:

<div style={{
    width: '100%',
    border: '1px solid #eee',
    borderRadius: '7px',
    boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
    overflow: 'hidden',
    margin: '0 0 1rem 0',
}}>
        <div style={{
            display: "flex",
        }}>
        <div style={{ width: '5%', background: 'red',
        padding: '10px 20px 5px 20px', color: 'white' }}>
          1
2
3
        </div>
        <div style={{
            padding: '10px 20px 5px 20px',
        }}>
           
        </div>
    </div>
</div>

- delete the strings with tasks code at the end of the file (starting from **_namespace :deploy do_** command) and paste the following lines instead:

<div style={{
    width: '100%',
    border: '1px solid #eee',
    borderRadius: '7px',
    boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
    overflow: 'hidden',
    margin: '0 0 1rem 0',
}}>
        <div style={{
            display: "flex",
        }}>
        <div style={{ width: '5%', background: 'red',
        padding: '10px 20px 5px 20px', color: 'white' }}>
          1
        </div>
        <div style={{
            padding: '10px 20px 5px 20px',
        }}>
           
        </div>
    </div>
</div>

You can also configure additional settings in this file (e.g. specify a repository branch or link additional files/folders) if it is required.

Save the changes you’ve made.

2. Then navigate to the **_config/deploy/staging.rb_** file. The default content is:

<div style={{
    width: '100%',
    border: '1px solid #eee',
    borderRadius: '7px',
    boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
    overflow: 'hidden',
    margin: '0 0 1rem 0',
}}>
        <div style={{
            display: "flex",
        }}>
        <div style={{ width: '5%', background: 'red',
        padding: '10px 20px 5px 20px', color: 'white' }}>
          1
        </div>
        <div style={{
            padding: '10px 20px 5px 20px',
        }}>
           
        </div>
    </div>
</div>

Firstly, edit three **_role_** : strings in the _Simple Role Syntax_ section by pasting **_{nodeid-uid@your.SSH.host}_** instead of **_{deploy@example.com}_**. Use the following values:

- **_nodeid_** - node ID value of the Apache application server container in your environment;
- **_uid_** - number before @ symbol in your SSH connection string. After that, modify the server settings line (Extended Server Syntax section):
- specify your SSH host, e.g. **_server ‘gate.jelastic.com’_**
- enter _{nodeid}\_{uid}_ value for **user** parameter, e.g. **user: ‘190403-136’**

Thus, your server settings line will look like following:

<div style={{
    width: '100%',
    border: '1px solid #eee',
    borderRadius: '7px',
    boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
    overflow: 'hidden',
    margin: '0 0 1rem 0',
}}>
        <div style={{
            display: "flex",
        }}>
        <div style={{ width: '5%', background: 'red',
        padding: '10px 20px 5px 20px', color: 'white' }}>
          1
        </div>
        <div style={{
            padding: '10px 20px 5px 20px',
        }}>
           
        </div>
    </div>
</div>

Finally, specify the server port which will be used for the SSH connection:

<div style={{
    width: '100%',
    border: '1px solid #eee',
    borderRadius: '7px',
    boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
    overflow: 'hidden',
    margin: '0 0 1rem 0',
}}>
        <div style={{
            display: "flex",
        }}>
        <div style={{ width: '5%', background: 'red',
        padding: '10px 20px 5px 20px', color: 'white' }}>
          1
        </div>
        <div style={{
            padding: '10px 20px 5px 20px',
        }}>
           
        </div>
    </div>
</div>

Don’t forget to save these custom configurations.

3. Open the **Capfile** (located in the root folder of your local project) and add the next line to it:

<div style={{
    width: '100%',
    border: '1px solid #eee',
    borderRadius: '7px',
    boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
    overflow: 'hidden',
    margin: '0 0 1rem 0',
}}>
        <div style={{
            display: "flex",
        }}>
        <div style={{ width: '5%', background: 'red',
        padding: '10px 20px 5px 20px', color: 'white' }}>
          1
        </div>
        <div style={{
            padding: '10px 20px 5px 20px',
        }}>
           Rake::Task[:staging].invoke
        </div>
    </div>
</div>

## Configure SSH Agent

1. Ensure you have your **_ssh-agent_** up and running in your system. 2. Add your private SSH key to the agent. It should correspond to the public key that you’ve added to the dashboard.

<div style={{
    width: '100%',
    border: '1px solid #eee',
    borderRadius: '7px',
    boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
    overflow: 'hidden',
    margin: '0 0 1rem 0',
}}>
        <div style={{
            display: "flex",
        }}>
        <div style={{ width: '5%', background: 'red',
        padding: '10px 20px 5px 20px', color: 'white' }}>
          1
        </div>
        <div style={{
            padding: '10px 20px 5px 20px',
        }}>
           
        </div>
    </div>
</div>

3. You can also check if the correct key was added by entering **_ssh-add -l_** command.

## Check Configurations

Now, let’s make sure that everything was configured properly.

Navigate to the root folder of your local project and run the command below:

<div style={{
    width: '100%',
    border: '1px solid #eee',
    borderRadius: '7px',
    boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
    overflow: 'hidden',
    margin: '0 0 1rem 0',
}}>
        <div style={{
            display: "flex",
        }}>
        <div style={{ width: '5%', background: 'red',
        padding: '10px 20px 5px 20px', color: 'white' }}>
          1
        </div>
        <div style={{
            padding: '10px 20px 5px 20px',
        }}>
           cap staging deploy:check
        </div>
    </div>
</div>

Capistrano will connect to the remote container, create the required folders in the deployment directory (stated within _set :deploy_to_ parameter), and check both remote and local servers for the presence of all necessary files, required rights, tools, etc.

If something is missed, you’ll receive a corresponding error message.

## Deploy Application

Finally, proceed to the application deployment. To do this, execute the command below in the project’s root folder:

<div style={{
    width: '100%',
    border: '1px solid #eee',
    borderRadius: '7px',
    boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
    overflow: 'hidden',
    margin: '0 0 1rem 0',
}}>
        <div style={{
            display: "flex",
        }}>
        <div style={{ width: '5%', background: 'red',
        padding: '10px 20px 5px 20px', color: 'white' }}>
          1
        </div>
        <div style={{
            padding: '10px 20px 5px 20px',
        }}>
           cap staging deploy
        </div>
    </div>
</div>

When this operation is successfully completed, navigate to your environment’s URL and ensure your app has been deployed.
