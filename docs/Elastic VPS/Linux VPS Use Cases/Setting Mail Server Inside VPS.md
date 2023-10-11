---
sidebar_position: 2
---

With the platform it is possible to integrate mail server to your virtual private machine. Below, we’ll guide you through the steps required to get one on within the [CentOS VPS](https://cloudmydc.com/). For that, you need to access the required container over SSH protocol using the preferable connection flow (e.g. [web-based client for CentOS](https://cloudmydc.com/) in our case) and carry out the following steps:

- [Install and Test Mail Server](https://cloudmydc.com/)
- [Configure Authorized Networks](https://cloudmydc.com/)

## Set Up and Test Mail Server

In the current guide we are going to leverage the [Postfix](https://cloudmydc.com/) mail server, so follow the next steps to install it within your VPS container and verify if it works as intended.

1. Run the Postfix installer with the following yum command:install postfix on vps

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/SettingMailServerInsideVPS/01.png)

</div>

2. During the installation process, you’ll need to confirm (i.e. press and submit the ‘**y**' response) the following points:

- total download size

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/SettingMailServerInsideVPS/02.png)

</div>

- importing GPG key

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/SettingMailServerInsideVPS/03.png)

</div>

3. When the installation is finished, you can test mail server operability with the following command:

```bash
echo thisistestmail | mail -s test {your_email}
```

Here, the **_{your_email}_** placeholder is an email address, the test email will be sent to.

4. Now, check the specified email inbox to ensure a letter was sent.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/SettingMailServerInsideVPS/4.png)

</div>

Great! Email server is installed and we can proceed to applying the appropriate configurations.

## Configure Postfix Authorized Networks

For the proper workflow of the recently installed Postfix mail server, you may need to apply some settings within its main configuration file. For example, you can manually specify the list of “trusted” clients, that will be able to relay emails through the Postfix:

1. Edit the **_main.cf_** file, located in the **etc/postfix** directory with the following content:

- when Postfix should forward emails only from the local machine, uncomment (remove # at the start of the string) the following line:

```bash
mynetworks_style = host
```

- alternatively, you can adjust the list of “trusted” clients manually using the next parameter (in this case the previous setting will be ignored):

```bash
mynetworks = {server1 IP address}, {server2 IP address}
```

2. After editing configuration files, you need to reload Postfix in order to apply changes you’ve made.

```bash
/etc/init.d/postfix restart
```

3. Now you can send messages from the previously specified client (the local machine or the stated server(s)).
   However, you also need to adjust your application to work properly with the newly installed mail server. For that, add the code of the following type to your applicatication configuration file deployed to VPS container.

```bash
package com.mkyong.common;
import java.util.Properties;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

public class SendMailTLS {
   public static void main(String[] args) {
       Properties props = new Properties();
       props.put("mail.smtp.auth", "false");
       props.put("mail.smtp.starttls.enable", "false");
       props.put("mail.smtp.host", "host");
       props.put("mail.smtp.port", "25");
           try {
           Session session = Session.getInstance(props);
           Message message = new MimeMessage(session);
           message.setFrom(new InternetAddress("from-email@jelastic.com"));
           message.setRecipients(Message.RecipientType.TO,
               InternetAddress.parse("to-email@jelastic.com"));
           message.setSubject("Testing Subject");
           message.setText("Text of the message");
           Transport.send(message);
           System.out.println("Done");
       } catch (MessagingException e) {
           throw new RuntimeException(e);
       }
   }
}
```

That’s all. The mail server has been successfully adjusted to work with application deployed to VPS container.

:::tip Note

Some settings may differ depending on the currently used [PaaS installation](https://cloudmydc.com/) (i.e. hosting provider platform). Refer to the Postfix [official documentation](https://cloudmydc.com/) to reveal more details considering required mail server configurations.

:::
