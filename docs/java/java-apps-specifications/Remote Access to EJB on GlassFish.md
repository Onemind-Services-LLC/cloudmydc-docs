---
title: Remote access to ejb on glassfish
slug: remote-access-to-ejb-on-glassfish
sidebar_position: 3
---

## Remote Access to EJB on GlassFish

**Enterprise Java Beans** (EJB) is a server-side architecture part of Java EE. Its specification contains two kinds of client views: remote and local ones. In one case, your Java app may require the session and entity beans with local home and component interfaces and in another case - with remote ones.

Let’s find out what are the differences between these interfaces and which of them you need to choose to work with.

If you are sure that other clients and EJBs will access your bean via a single JVM, you can use a **_local client view_**. It is also suitable for the case your beans are associated one with another. Such an access is performed within direct calling of methods, not through the remote method invocation (RMI).

For the case your client is placed on the other JVM, i.e. you would like to use your bean in the distributed environment, then there is a necessity to work with the **_remote client view_**. All the methods' calls from the remote interfaces will be handled by it. It is also preferably to use RCV while working with parameters, passed by value between the client application and bean.

Let’s examine how to deploy Java Bean to the PaaS hosting and use EJB remote client to work with it.

## A. Create the environment

1. Log in to your PaaS account.

2. Click the **Create environment** button in order to open the environment topology wizard. Pick up **GlassFish** as your application server and set cloudlet limits for it accordingly to the resources consumption needs of your Java enterprise application. Enable the **Public IP** for GlassFish, type the name for your environment and click **Create**.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/RemoteAccesstoEJBonGlassFish/create-environment-with-glassfish.png)

</div>

Wait about a minute for your environment to be created.

3. In order to see the **Public IP** of your GF server press the additional button next to it.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/RemoteAccesstoEJBonGlassFish/glassfish-public-ip.png)

</div>

## B. Create the application

1. At the very beginning, create a new directory to place your EJB and client application files in.

2. Then create your **Session Bean**. It will be used to access the deployed application via the remote client app through executing business tasks inside the server.

```bash
package com;
import javax.ejb.Stateless;

@Stateless
public class EJBTest implements EJBTestRemote {

    @Override
    public String getName(String name) {
        return "name is: " + name;
    }
}
```

3. The next step is creating the **Enterprise Java Beans** interface. It is necessary for the remote client in order to access the beans.

```bash
package com;
import javax.ejb.Remote;

public interface EJBTestRemote {
    public String getName (String name);
}
```

4. Build a new module and pack it into the file with **.ear** extension.

5. The following code is an example of remote client application, which is used to access the bean. It performs the remote connection to your EJB through the Public IP of GlassFish application server and calls the **getName()** method, which, in its turn, returns the data to the client

```bash
package ejbclient;
import com.EJBTestRemote;
import java.util.Properties;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.naming.InitialContext;
import javax.naming.NamingException;

public class Main {

    private static InitialContext ic;
    //private String host="",port="";

    public void loadProperties(String h, String p) {
        try {
            Properties props = new Properties();

            System.out.println("h: " + h + " p: " + p);

            props.setProperty("java.naming.factory.initial",
                    "com.sun.enterprise.naming.SerialInitContextFactory");
            props.setProperty("java.naming.factory.url.pkgs",
                    "com.sun.enterprise.naming");
            props.setProperty("java.naming.factory.state",
                    "com.sun.corba.ee.impl.presentation.rmi.JNDIStateFactoryImpl");
            props.setProperty("org.omg.CORBA.ORBInitialHost", h);
            props.setProperty("org.omg.CORBA.ORBInitialPort", p);

            ic = new InitialContext(props);
        } catch (NamingException ex) {
            Logger.getLogger(Main.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    public static void main(String a[]) {

        try {

            new Main().loadProperties("{GlassFish_Public_IP}", "23700");
            EJBTestRemote etr = (EJBTestRemote) ic.lookup("com.EJBTestRemote");
            System.out.println(etr.getName("Jelastic"));

        } catch (NamingException ex) {
        }
    }
}
```

:::tip Note

All the numbers of ports begin with additional 2 digit for the reason the platform works with **gfcluster** only.

:::

As an example of **.ear** file you can use [this](https://cloudmydc.com/) package.

## C. Deploy the application

1. Navigate to the platform dashboard, open the **Deployment manager** and upload the created **.ear** within it.Hope this tutorial on the basics of remote interfaces usage helped you. Enjoy!

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/RemoteAccesstoEJBonGlassFish/upload-archive.png)

</div>

2. Deploy the uploaded package to the GlassFish environment, created in the step A of this instruction.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/RemoteAccesstoEJBonGlassFish/deploy-archive.png)

</div>

3. Finally, run your application (press **Open in browser** button next to the environment) and check the results.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/RemoteAccesstoEJBonGlassFish/remote-access-result.png)

</div>

Hope this tutorial on the basics of remote interfaces usage helped you. Enjoy!
