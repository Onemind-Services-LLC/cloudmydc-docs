---
title: FTP/FTPS Support
slug: ftp-ftps-support
sidebar_position: 4
---

**File Transfer Protocol (FTP)** is a standard network protocol used to transfer files from one host to another over a TCP-based network.

**FTP** is built on a client-server architecture and uses separate control and data connections between the client and the server.

For secure transmission that hides (encrypts) the username and password, and encrypts the content, it is used FTP secured with SSL **(FTPS)**.

The platform supports both **FTP** and **FTPS**.

Unlike HTTP, the FTP protocol is stateful: you establish a control connection for the duration of an FTP session that typically spans multiple data transfers.

**FTP Usage:**

- uploading/downloading resources
- downloading and reading [logs](/application-setting/built-in-monitoring/log-files) for analysing
- editing configurations
- syncing files
- deploying applications (not recommended)

With Platform FTP feature is available for both application servers and databases.

:::tip Note

Currently, FTP add-on is not compatible with [Docker containers](/container/container-types).

:::

To benefit from FTP with the platform, you need to meet three requirements:

- to have **FTP client** installed (for example, FileZilla)
- to have **compute node** added to the environment
- to attach **Public IP** for the node in your environment

[![Locale Dropdown](./img/FTP-FTPS%20Support/video1.jpg)](https://youtu.be/kreqXdtaU6Y)

Let’s go step-by-step the process of adding FTP to your environment:

- [Create Environment](/deployment-tools/ftp-ftps-support#create-environment)
- [Install FTP](/deployment-tools/ftp-ftps-support#install-ftp)
- [Using FTP](/deployment-tools/ftp-ftps-support#using-ftp)
- [Transfer Files](/deployment-tools/ftp-ftps-support#transfer-files)
- [Download Log Files](/deployment-tools/ftp-ftps-support#download-log-files)
- [Synchronize Files](/deployment-tools/ftp-ftps-support#synchronize-files)
- [Edit Configuration Files](/deployment-tools/ftp-ftps-support#edit-configuration-files)
- [Deploy Application via FTP](/deployment-tools/ftp-ftps-support#deploy-application-via-ftp)
- [Switching FTPS](/deployment-tools/ftp-ftps-support#switching-ftps)
- [Reset FTP Password](/deployment-tools/ftp-ftps-support#reset-ftp-password)
- [State Custom FTP Password](/deployment-tools/ftp-ftps-support#state-custom-ftp-password)
- [Uninstall FTP](/deployment-tools/ftp-ftps-support#uninstall-ftp)

## Create Environment

1. Log in to the platform dashboard.

2. Click **Create environment** to set up a new environment.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/FTP-FTPS%20Support/01-create-environment.png)

</div>

3. In the opened wizard select **application server** (e.g._Tomcat_) or **database** (e.g. _MySQL_) and switch on **Public IP**.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/FTP-FTPS%20Support/02-environment-wizard.png)

</div>

Wait just a few seconds for your environment to be created.

## Install FTP

1. Click **Add-ons** button for your application server (or database).

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/FTP-FTPS%20Support/03-tomcat-add-ons.png)

</div>

2. In the opened tab you’ll see the list of all applications available for adding to your environment. Find FTP and click **Install**.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/FTP-FTPS%20Support/04-ftp-add-on.png)

</div>

3. Сonfirm the installation by clicking **Install** button in the opened window.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/FTP-FTPS%20Support/05-install-ftp-add-on.png)

</div>

4. After adding FTP to the environment you’ll get the email with credentials for accessing (FTP links, Login, Password, IPs etc.).

## Using FTP

## Through FTP Client

1. Install and open any **FTP client** (e.g. _FileZilla_).

2. Enter your _Host_, _Username_ and _Password_ using the FTP credentials you’ve got in the email after installation. Perform the connection.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/FTP-FTPS%20Support/06-filezilla-ftp-connect.png)

</div>

3. Now you can see the list of the **config** folders in your FTP client.

4. You can make the changes you need (_download, copy, delete the files etc_.) right from your **FTP client**.

5. If you refresh the data in the **config** tab for your server (or database) in the platform dashboard, you’ll see all changes made through FTP client.

## Through Browser

1. Click **Add-ons** button for your application server (or database).

2. Find FTP in the list of applications. There you’ll see the list of IPs available.

3. Click on the IP link. In the opened browser tab fill in your FTP credentials (_Username_ and _Password_ which you’ve got in the email after installation).

4. After that the list of **config** folders are going to be opened. Here you can look through the files in all the folders.

## Transfer Files

1. Install and open any **FTP client** (we use _FileZilla_ as an example).

2. Enter your _Host_, _Username_ and _Password_ using the FTP credentials you’ve got via email after FTP installation. Perform the connection by clicking **Quickconnect**.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/FTP-FTPS%20Support/07-filezilla-ftp-connected.png)

</div>

3. You can upload or download files simply by double-clicking on them. To transfer directories and/or multiple files select them, right-click the selection and then click on **Upload/Download** in the popup menu.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/FTP-FTPS%20Support/08-ftp-upload-file.png)

</div>

4. You can simply drag the files from one directory and drop them on the other one for transferring.

5. Add your files to the queue if you want to transfer them later.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/FTP-FTPS%20Support/09-ftp-add-file-to-queue.png)

</div>

6. One more useful feature is directory comparison. To quickly see differences between files on the local machine and the server, choose **View > Directory Comparison**, select either compare file size or compare modification time and click **Enable**.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/FTP-FTPS%20Support/10-ftp-directory-comparison.png)

</div>

## Download Log Files

1. Install and open any **FTP client** (we use _FileZilla_ as an example).

2. Enter your _Host_, _Username_ and _Password_ using the FTP credentials you’ve got via email after FTP installation. Perform the connection by clicking **Quickconnect**.

3. Now you can simply export your logs: navigate to the **logs** folder, select the log file you need, download it as it’s shown in the screenshot below and open in any convenient editor to review.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/FTP-FTPS%20Support/11-ftp-download-logs.png)

</div>

## Synchronize Files

1. Install and start _GoodSync_. Click the **Browse** button on the left side.

2. In the opened window choose the **FTP** tab, fill in the required fields (_Host_, _Username_, _Password_) and click **Go** button.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/FTP-FTPS%20Support/12-goodsync-ftp-connect.png)

</div>

3. Then choose the necessary folder on your server and click **OK**.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/FTP-FTPS%20Support/13-goodsync-choose-ftp-folder.png)

</div>

4. After that click the **Browse** button on the right side and choose the local folder you would like to back up or sync your data to.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/FTP-FTPS%20Support/14-goodsync-choose-local-folder.png)

</div>

5. Then in the main window click the **Analyze** button. You will be shown all the differences in the chosen folders.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/FTP-FTPS%20Support/15-goodsynch-analyze-differences.png)

</div>

6. Click the **Sync** button to perform the synchronization.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/FTP-FTPS%20Support/16-goodsynch-ftp-synchronization.png)

</div>

## Edit Configuration Files

1. Open your config editor (we use _Sublime Text 2_ as an example).

2. Connect to your server (or database) via FTP (if you use Sublime click **File->FTP/SFTP->Browse server**) and you can start edit your files.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/FTP-FTPS%20Support/17-sublime-file-configuration.png)

</div>

## Deploy Application via FTP

:::tip Note

We don’t recommend to deploy your apps in such a way because application you’ve deployed won’t be shown in the platform dashboard, so if you want to redeploy or delete your application you have to do this manually. Also such a deployment procedure is not suitable for GlassFish application server.

:::

Let’s consider a short example on how to deploy **Railo** to your environment through FileZilla.

1. Install and open any **FTP client** (we use _FileZilla_ as an example).

2. Connect to your environment via FTP: Enter your **Host**, **Username** and **Password** and click on the **Quickconnect** button.

3. Copy your application files into the **ROOT** folder (or create another context for your app and copy your files in it).

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/FTP-FTPS%20Support/18-deploy-application-via-ftp.png)

</div>

4. Now you can return to the platform dashboard and make sure that everything is ok. For that click **Open in Browser** button for your environment.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/FTP-FTPS%20Support/19-open-in-browser.png)

</div>

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/FTP-FTPS%20Support/20-railo-application.png)

</div>

## Switching FTPS

1. Navigate to your **FTP client > File > Site manager** (as an example, we use FileZilla).

2. Create **New Site** and fill in required data:

- **Host** (use your FTP credentials)
- **Protocol** (FTP - File Transfer Protocol)
- **Encryption** (Require explicit FTP over TLS)
- **Logon** Type (Interactive)
- **User** (use your FTP credentials)

3. Click **Connect**.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/FTP-FTPS%20Support/21-filezilla-ftps-connection.png)

</div>

4. Enter password.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/FTP-FTPS%20Support/22-password-for-ftps-connection.png)

</div>

5. Now you are connected through FTPS.

## Reset FTP Password

1. Click **Add-ons** button for your application server (or database).

2. Find FTP in the list of applications and click **Reset Password** button.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/FTP-FTPS%20Support/23-ftp-add-on-reset-password.png)

</div>

3. You’ll be sent the email with a new FTP password.

## State Custom FTP Password

You can change the password of FTP-addon, installed at your environment. Using custom password instead of one, which was automatically generated and sent to you via email while FTP-addon installation or password resetting, highly improves your application security.

Your FTP password can be changed via SSH following the next steps:

1. [generate](/deployment-tools/ssh/generate-ssh-key) an SSH key and [add](/deployment-tools/ssh/add-ssh-key) it to your dashboard.

2. [Access](/deployment-tools/ssh/ssh-access/overview) a necessary container with the installed FTP-addon via SSH.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/FTP-FTPS%20Support/24-ssh-access-to-container.png)

</div>

3. Execute the following command inside the container:

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
           sudo /usr/bin/passwd jelastic-ftp
        </div>
    </div>
</div>

4. Enter and confirm your new password.

:::tip Note

After new password entering you can see some warning messages, e.g. **_BAD PASSWORD: it is based on a dictionary word_** or **_BAD PASSWORD: is too simple_**.

It’s just a recommendation for increasing your password reliability, ignore them if you consider your custom password to be secure enough. Password will be changed anyway.

:::

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/FTP-FTPS%20Support/25-change-ftp-password.png)

</div>

Now you can use a new password for accessing your environment via FTP protocol.

## Uninstall FTP

1. Click **Add-ons** button for your application server (or database).

2. Find FTP in the list of applications and click **Uninstall**.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/FTP-FTPS%20Support/26-uninstall-ftp-add-on.png)

</div>

:::danger Note

If you install FTP in the environment with one application server (e.g. _Tomcat_) horizontal scaling of this environment will clone this server together with FTP. In such a way FTP will be installed on both instances with the same credentials.

But this does not apply to **GlassFish** server. If FTP has been installed in the environment with one GlassFish it will not be cloned to the newly added GlassFish servers. So to have FTP installed on both instances at first you need to disable FTP and then reinstall it one more time. In such a way it will be enabled on both servers.

:::
