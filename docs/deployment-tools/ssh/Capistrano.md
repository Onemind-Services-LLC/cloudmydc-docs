---
title: Capistrano
slug: capistrano
sidebar_position: 6
---

<!-- ## Capistrano -->

Capistrano is an open-source tool for executing scripts at the remote servers. Most commonly, it is used for deploying apps via SSH connection. Capistrano is written in Ruby as a component of the Ruby on Rails framework, therefore, it is widely used for Ruby apps deployment. Nevertheless, it can easily work with other programming languages, e.g. PHP.

Thus, in this instruction we will discover how to deploy a PHP application remotely, via the Capistrano tool. Initially you will need:

- an already created PHP environment with Apache application server;
- [SSH public key generated](/deployment-tools/ssh/generate-ssh-key) and [added to your platform](/deployment-tools/ssh/add-ssh-key) dashboard;
- GIT repository with PHP application you would like to deploy (for now Capistrano 3 tool supports GIT VCS type only);
- local copy of this project at your computer.

Let’s get started!

:::tip Note

Commands below should be executed at your local machine’s user, similar to one you’ve used during SSH key pair generation, in order to avoid permission/connection errors.

:::

## Install Capistrano

1. For using Capistrano, you need to have Ruby installed at your local computer. Therefore, execute the appropriate command:

```bash
apt-get install ruby rubygems
```

2. Then, install the Capistrano tool by entering the following command:

```bash
gem install capistrano
```

3. Ensure you have the **config** folder in the local directory with your project (as it is a default folder with configurations for Ruby on Rails). Create this folder if you don’t have it.

```bash
mkdir {path_to_your_project}/config
```

## Capify Your Application

After installation, you need to capify your application, i.e. configure Capistrano for app deployment. To do this, navigate to the root folder of your local PHP project and execute the next command:

```bash
cap install
```

This will create new files and directories in your project:

- **Capfile** is the main Capistrano file that takes care of the required configs and globs for custom tasks.
- **config/deploy/** folder with two files (**_staging.rb_** and **_production.rb_**) for an environment’s specific deployment settings.
- **_config/deploy.rb_** Ruby script which contains application configurations and Capistrano instructions.
- **_lib/capistrano/tasks/_** folder for your custom tasks.

:::tip Tip:

As an option, you can try the dedicated [_capistrano-jelastic_](https://github.com/gerardo-navarro/capistrano-jelastic) gem, maintained by [_gerado-navarro_](https://github.com/gerardo-navarro), for automating your Rails apps' deployment to the platform.

:::

## Set Custom Configurations

1. Navigate to the **_config/deploy.rb_** file and configure it corresponding to your settings. Initially it looks like following:

```bash
# config valid only for Capistrano 3.1
    lock '3.2.1'

    set :application, 'my_app_name'
    set :repo_url, 'git@example.com:me/my_repo.git'

    # Default branch is :master
    # ask :branch, proc { `git rev-parse --abbrev-ref HEAD`.chomp }.call

    # Default deploy_to directory is /var/www/my_app
    # set :deploy_to, '/var/www/my_app'

    # Default value for :scm is :git
    # set :scm, :git

    # Default value for :format is :pretty
    # set :format, :pretty

    # Default value for :log_level is :debug
    # set :log_level, :debug

    # Default value for :pty is false
    # set :pty, true

    # Default value for :linked_files is []
    # set :linked_files, %w{config/database.yml}

    # Default value for linked_dirs is []
    # set :linked_dirs, %w{bin log tmp/pids tmp/cache tmp/sockets vendor/bundle public/system}

    # Default value for default_env is {}
    # set :default_env, { path: "/opt/ruby/bin:$PATH" }

    # Default value for keep_releases is 5
    # set :keep_releases, 5

    namespace :deploy do

      desc 'Restart application'
      task :restart do
        on roles(:app), in: :sequence, wait: 5 do
          # Your restart mechanism here, for example:
          # execute :touch, release_path.join('tmp/restart.txt')
        end
      end

      after :publishing, :restart

      after :restart, :clear_cache do
        on roles(:web), in: :groups, limit: 3, wait: 10 do
          # Here we can do anything such as:
          # within release_path do
          #   execute :rake, 'cache:clear'
          # end
        end
      end

    end
```

Modify the next strings:

- enter a name for your application:

```bash
set :application, "my_app_name"
```

- specify URL to the VSC repository with your PHP application code:

```bash
set :repo_url, "git@example.net:me/my_repo.git"
```

:::tip Note

You need to have an SSH public key attached to your GIT account (the same one that you’ve added to the platform dashboard). Otherwise, you’ll get a “Permission denied” error while trying to deploy your application.

You can also use the **_https:_** link of the following type:

```bash
set :repo_url, "https://example.net/GIT_user_name/repo_name.git"
```

In this case, authentication is not required and you can state a URL to any PHP open-source repository you would like to deploy.

:::

- uncomment the following line and state the directory your application will be deployed to (this value is default for the platform PHP app servers):

```bash
# set :deploy_to, '/var/www/webroot'
```

- uncomment the following lines:

```bash
set :scm, :git
set :format, :pretty
set :pty, true
```

- delete the strings with tasks code at the end of the file (starting from **_namespace :deploy do_** command) and paste the following lines instead:

```bash
    namespace :deploy do
        desc 'Restart Apache'
        task :apache do
            on roles(:app) do
                execute :sudo, "service httpd restart"
            end
        end

        desc 'Creating symlink'
        task :symlink do
            on roles(:app) do
                execute :rm, "-rf /var/www/webroot/ROOT"
                execute :ln, "-s /var/www/webroot/current /var/www/webroot/ROOT"
            end
        end

        desc 'Restart Apache and create symlink'
        task :restart
        before :restart, :symlink
        before :restart, :apache

    end

    after 'deploy:publishing', 'deploy:restart'
```

You can also configure additional settings in this file (e.g. specify a repository branch or link additional files/folders) if it is required.

Save the changes you’ve made.

2. Then navigate to the **_config/deploy/staging.rb_** file. The default content is:

```bash
# Simple Role Syntax
    # ==================
    # Supports bulk-adding hosts to roles, the primary server in each group
    # is considered to be the first unless any hosts have the primary
    # property set.  Don't declare `role :all`, it's a meta role.

    role :app, %w{deploy@example.com}
    role :web, %w{deploy@example.com}
    role :db,  %w{deploy@example.com}

    # Extended Server Syntax
    # ======================
    # This can be used to drop a more detailed server definition into the
    # server list. The second argument is a, or duck-types, Hash and is
    # used to set extended properties on the server.

    server 'example.com', user: 'deploy', roles: %w{web app}, my_property: :my_value

    # Custom SSH Options
    # ==================
    # You may pass any option but keep in mind that net/ssh understands a
    # limited set of options, consult[net/ssh documentation](http://net-ssh.github.io/net-ssh/classes/Net/SSH.html#method-c-start).
    #
    # Global options
    # --------------
    #  set :ssh_options, {
    #    keys: %w(/home/rlisowski/.ssh/id_rsa),
    #    forward_agent: false,
    #    auth_methods: %w(password)
    #  }
    #
    # And/or per server (overrides global)
    # ------------------------------------
    # server 'example.com',
    #   user: 'user_name',
    #   roles: %w{web app},
    #   ssh_options: {
    #     user: 'user_name', # overrides user setting above
    #     keys: %w(/home/user_name/.ssh/id_rsa),
    #     forward_agent: false,
    #     auth_methods: %w(publickey password)
    #     # password: 'please use keys'
    #   }
```

Firstly, edit three **_role_** : strings in the _Simple Role Syntax_ section by pasting **_{nodeid-uid@your.SSH.host}_** instead of **_{deploy@example.com}_**. Use the following values:

- **_nodeid_** - node ID value of the Apache application server container in your environment;
- **_uid_** - number before @ symbol in your SSH connection string. After that, modify the server settings line (Extended Server Syntax section):
- specify your SSH host, e.g. **_server ‘gate.jelastic.com’_**
- enter _{nodeid}\_{uid}_ value for **user** parameter, e.g. **user: ‘190403-136’**

Thus, your server settings line will look like following:

```bash
server 'gate.jelastic.com', user: '190403-136', roles: %w{web app}, my_property: :my_value
```

Finally, specify the server port which will be used for the SSH connection:

```bash
set :ssh_options, {
    port: 3022
}
```

Don’t forget to save these custom configurations.

3. Open the **Capfile** (located in the root folder of your local project) and add the next line to it:

```bash
Rake::Task[:staging].invoke
```

## Configure SSH Agent

1. Ensure you have your **_ssh-agent_** up and running in your system. 2. Add your private SSH key to the agent. It should correspond to the public key that you’ve added to the dashboard.

```bash
ssh-add {full_path_to_the_necessary_private_SSH_key}
```

3. You can also check if the correct key was added by entering **_ssh-add -l_** command.

## Check Configurations

Now, let’s make sure that everything was configured properly.

Navigate to the root folder of your local project and run the command below:

```bash
cap staging deploy:check
```

Capistrano will connect to the remote container, create the required folders in the deployment directory (stated within _set :deploy_to_ parameter), and check both remote and local servers for the presence of all necessary files, required rights, tools, etc.

If something is missed, you’ll receive a corresponding error message.

## Deploy Application

Finally, proceed to the application deployment. To do this, execute the command below in the project’s root folder:

```bash
cap staging deploy
```

When this operation is successfully completed, navigate to your environment’s URL and ensure your app has been deployed.
