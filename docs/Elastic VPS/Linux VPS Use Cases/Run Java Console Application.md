---
sidebar_position: 1
---

## Java Console Application with CentOS VPS

In the current tutorial we’ll overview how to install a sample of Java console application to your [СentOS](/docs/Elastic%20VPS/Elastic%20VPS%20Overview/CentOS%20VPS) virtual private server and check its operability. For that, you’ll need to execute the following operations:

- [install Java](/docs/Elastic%20VPS/Linux%20VPS%20Use%20Cases/Run%20Java%20Console%20Application#install-java-to-vps)
- [upload application](/docs/Elastic%20VPS/Linux%20VPS%20Use%20Cases/Run%20Java%20Console%20Application#upload-application-to-vps)
- [access application via SSH](/docs/Elastic%20VPS/Linux%20VPS%20Use%20Cases/Run%20Java%20Console%20Application#a%D1%81%D1%81ess-application-via-ssh)
- [check app operability](/docs/Elastic%20VPS/Linux%20VPS%20Use%20Cases/Run%20Java%20Console%20Application#check-application-operability)

## Install Java to VPS

In order to install Java to your VPS container, carry out the next steps, while being connected over SSH protocol by means of [SSH Gate](/docs/Elastic%20VPS/Elastic%20VPS%20Management/Linux%20VPS%20Access%20via%20SSH%20Gate) or [public IP](/docs/Elastic%20VPS/Elastic%20VPS%20Management/Linux%20VPS%20Access%20via%20Public%20IP).

1. Enter the following command to initiate Java package download.

```bash
wget {utility_address}
```

Where **_{utility_address}_** is a link to the required Java download source.

:::tip Note

The appropriate AuthParam parameter should be specified in the URL, which indicates that you’ve accepted the Oracle licence agreement and can freely download software.

:::

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/RunJavaConsoleApplication/01-install-java-vps-ssh.png)

</div>

2. Next, execute the command below to unpack the previously downloaded Java **_rpm_** package.

```bash
rpm -ivh {java_rpm_package}
```

Where **_{java_rpm_package}_** is downloaded Java package with AuthParam parameter indicated.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/RunJavaConsoleApplication/02-vps-execute-java-rpm.png)

</div>

3. And now let’s check, whether everything is properly set up by inquiring the installed Java version.

```bash
java -version
```

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/RunJavaConsoleApplication/03-java-version-vps.png)

</div>

Great! Java is successfully installed, so let’s move further to the application uploading.

## Upload Application to VPS

Prepare your Java application to be uploaded to VPS container. You may use the following example, that will listen the specified port for connections:

```bash
import java.io.IOException;
import java.io.ObjectOutputStream;
import java.net.InetAddress;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.Date;
import java.util.logging.Level;
import java.util.logging.Logger;

public class VdsSocket {

   public static void main(String[] args) {
      try {
           int port = 7777;
           InetAddress thisIp = null;
           ServerSocket ss = new ServerSocket(port);

           System.out.println  ("**********************************************************************");
           System.out.println("Socket Listener listens port: " + port);
           System.out.println("**********************************************************************");

           while (true) {
               Socket s = ss.accept();
               String address = s.getRemoteSocketAddress().toString();
               System.out.println("new client has been detected:");
               System.out.println("Socket. Remote Address: " + address);

               ObjectOutputStream oos = new ObjectOutputStream(s.getOutputStream());

               oos.writeObject("Request time: "+ new Date());
               oos.writeObject("Socket. Remote Address: " + address);
           }
       } catch (IOException ex) {
       }
   }
}
```

Once your application is ready, you need to pack it into a **_.jar_** archive and upload it to VPS container via preferred file transfer client. In our example, we’ll upload vdssocket.jar file by means of [WinSCP](https://winscp.net/eng/index.php) tool. For that, let’s perform the following steps.

1. Access WinSCP client and connect to your VPS container using credentials received via email upon server installation:

- **Host name** - attached Public IP address
- **User name** - login (i.e. root)
- **Password** - received password

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/RunJavaConsoleApplication/04-winscp-connect-to-vps.png)

</div>

Click on the **Login** button to initiate connection setup.

2. Once connected to your VPS node, navigate to the **_home_** directory and create a new **_standalone_java_** context inside. Then drag the required **_.jar_** file with your application and drop it into the newly created folder.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/RunJavaConsoleApplication/05-upload-java-app-to-vps.png)

</div>

Within the appeared transfer settings dialog, click **Copy** to start uploading. Once it is finished, you’ll see file in directory on the remote VPS.

## Aссess Application via SSH

Access your VPS container via [SSH protocol](/docs/Deployment%20Tools/SSH/SSH%20Access/Overview) to locate the recently uploaded application.

1. Move to the directory you’ve created in the previous section and inspect its content to ensure application archive is present.

```bash
cd /home//standalone_java/
ls
```

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/RunJavaConsoleApplication/06-java-standalone-application-directory.png)

</div>

2. In order to run the uploaded app, execute the next command from inside of the **_standalone_java_** directory.

```bash
java -jar vdssocket.jar
```

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/RunJavaConsoleApplication/07-vps-run-java-application.png)

</div>

That’s it! Now, as you can see, the specified port is listened to.

## Check Application Operability

To check the application proper workflow, we’ll connect to VPS container over the [Telnet](https://en.wikipedia.org/wiki/Telnet) protocol. For that, [install](<https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2008-R2-and-2008/cc771275(v=ws.10)?redirectedfrom=MSDN#bkmk_installcmd>) a Telnet client and run it.

1. Establish connection to your VPS container by executing the following command:

```bash
o {public_IP_address} {port_number}
```

where

- **_public_IP_address_** - attached external IP
- **_port_number_** - port your app listens to

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/RunJavaConsoleApplication/08-vps-telnet-test.png)

</div>

2. If everything works properly, you’ll be displayed a message with data about the **Request time** and **Remote address**.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/RunJavaConsoleApplication/09-telnet-request-time-remote-address.png)

</div>

3. Now, upon switching back to your SSH tool, you’ll see a notification about new client connected to your server and its **Remote Address**.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/RunJavaConsoleApplication/10-vps-new-client-connection.png)

</div>

That’s all. Your Java console application is setup and works properly!
