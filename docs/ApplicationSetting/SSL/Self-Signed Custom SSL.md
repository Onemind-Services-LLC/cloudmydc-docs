---
title: Self-signed custom ssl
slug: self-signed-custom-ssl
sidebar_position: 6
---

## Self-Signed Custom SSL Certificates

One of the ways to secure your application is to use SSL-encrypted (Secure Sockets Layer) connection. With the platform, you can use both [Built-In SSL](/docs/ApplicationSetting/SSL/Built-In%20SSL) and [Custom SSL](/docs/ApplicationSetting/SSL/Custom%20SSL) certificates.

Herewith, all custom SSL certificates require to be signed, and usually, this is done by the Certificate Authority (CA) companies (e.g. Let’s Encrypt). In this case, your certificate becomes reliable after signing, so others can trust it and any connection to your site or application is performed without issues.

Nevertheless, you can sign your custom certificate yourself and still receive a secure connection, but such a certificate will be untrusted. As a result, while opening your application, it will require a visitor to pass through the warning message, that highly recommends him to leave your web page, because of the untrusted secure connection.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/Self-SignedCustomSSL/01-ssl-warning.png)

</div>

Most of these users will leave such a page, so we suggest that you don’t use the self-signed certificates for production solutions, but it can still be used for development/testing examples or for your private site with a small audience.

So, let’s find out how to generate such a certificate and apply it to the environment.

## Generate a Self-Signed SSL Certificate

In order to generate a self-signed certificate, you need to buy a **Domain Name** first (e.g. _mysite.com_). You can do this using any domain registrar.

Once that is done, you are ready to proceed to the generation of your SSL certificate with the help of any preferred tool. We’ll use OpenSSL as an example. Depending on the operating system you are using, perform the following steps:

- [for Windows](/docs/ApplicationSetting/SSL/Self-Signed%20Custom%20SSL#for-windows)
- [for Linux/MacOS/FreeBSD](/docs/ApplicationSetting/SSL/Self-Signed%20Custom%20SSL#for-linuxmacosfreebsd)

You are also able to generate the required files using our [Elastic Virtual Private Server](/docs/ApplicationSetting/SSL/Self-Signed%20Custom%20SSL#elastic-vps).

## For Windows

[Download](https://code.google.com/archive/p/openssl-for-windows/downloads) the latest OpenSSL tool version. Extract the received archive and run the tool by double-clicking the **_openssl.exe_** file in the _bin_ folder. Subsequently, the files created with OpenSSL will appear in the same _bin_ directory by default.

1. First, you need to generate an SSH private key for your root certificate (this is what signs all issued certificates). Create it as follows:

```bash
genrsa -out {filename} {length}
```

where:

- **_{filename}_** - name of the output key file with **.key** extension (e.g. _rootCA.key_)
- **_{length}_** - private key length in bits (e.g. _2048_)

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/Self-SignedCustomSSL/02-windows-generate-key.png)

</div>

2. Then you should generate the root CA certificate based on the prepared key. Use the **_req_** command with the **_x509_** option flag for outputting a self-signed root certificate instead of a certificate request:

```bash
req -config {config_path} -x509 -new -key {keyname} -days {days} -out {filename}
```

where:

- **_{config_path}_** - path to the _openssl.cnf_ configuration file, located in the directory with extracted OpenSSL files (specified according to the _C:\path\to\openssl.cnf_ format)
- **_{keyname}_** - your root key name (the one you’ve generated in the previous step, _rootCA.key_ in our case)
- **_{days}_** - number of days the current certificate will be valid
- **_{filename}_** - the preferred name of the output certificate file with **.crt** extension (e.g. _rootCA.crt_)

Set the required information for your CA certificate by answering the appeared question.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/Self-SignedCustomSSL/03-windows-generate-root-certificate.png)

</div>

As a result, you’ll receive a self-signed root certificate for your own CA.

3. Now, you can create a private key and self-signed certificate for your purchased hostname. Let’s start with the key: generate it in the same way you did for the root one.

```bash
genrsa -out {filename} {length}
```

where:

- **{filename}** - name of the output key file with **.key** extension (e.g. _host.key_)
- **_{length}_** - private key length in bits (e.g. _2048_)

:::danger note

DO NOT protect your key with a passphrase; otherwise, you’ll get an error during its addition to the platform dashboard.

:::

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/Self-SignedCustomSSL/04-windows-self-signed-certificate.png)

</div>

4. Next thing you need is a certificate signing request (CSR). Execute the following command:

```bash
req -config {config_path} -new -key {keyname} -out {filename}
```

where:

- **_{config_path}_** - path to the openssl.cnf configuration file, located in the directory with extracted OpenSSL files (specified according to the _C:\path\to\openssl.cnf_ format)
- **_{keyname}_** - your server key name (the one you’ve generated in the previous step, _host.key_ in our case)
- **_{filename} _**- the desired name of the output request file with **.csr** extension (e.g. _host.csr_)
  You’ll see a set of questions appear again. Answer them to complete the certificate information with your data.

:::danger note

The Common Name parameter value has to be equal to your purchased domain name; otherwise, your certificate won’t be validated.

:::

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/Self-SignedCustomSSL/05-windows-signing-request.png)

</div>

5. The final step is the generation of your self-signed certificate based on the created request with the help of a root CA certificate. For that, we’ll use the **_x509_** command with the following options:

- **_-req_** - means that a certificate request input file format is expected
- **_-CAcreateserial_** - initiates the creation of the CA serial number file (if it does not exist)

```bash
x509 -req -in {requestname} -CA {CA_certificate} -CAkey {CA_key} -CAcreateserial -out {filename} -days {days}
```

where:

- **_{requestname}_** - name of the input request file (_host.csr_ in our case)
- **_{CA_certificate}_** - specifies the CA certificate that will be used for signing (_rootCA.crt_ in our case)
- **_{CA_key}_** - sets the CA private key to sign a certificate with (_rootCA.key_ in our case)
- **_{filename}_**- the desired name of the output certificate file with **.crt** extension (e.g. _host.crt_)
- **_{days}_** - number of days the current certificate will be valid

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/Self-SignedCustomSSL/06-windows-get-self-signed-certificate.png)

</div>

Great! Now you have the self-signed SSL certificate for your application.

## For Linux/MacOS/FreeBSD

In case you don’t have the OpenSSL tool installed yet, get it with the appropriate command (according to your OS package manager) executed within your terminal. E.g. for Ubuntu/Debian Linux distribution use the following one:

```bash
    sudo apt-get install openssl
```

When the installation process is completed, proceed to generation of the required files. All newly created with OpenSSL files will appear in the **home** directory of your local machine user by default.

1. First, you need to generate an SSH private key for your root certificate (this is what signs all issued certificates). Create it as follows:

```bash
openssl genrsa -out {filename} {length}
```

where:

- **_{filename}_** - name of the output key file with **.key** extension (e.g. _rootCA.key_)
- **_{length}_** - private key length in bits (e.g. _2048_)

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/Self-SignedCustomSSL/07-unix-generate-key.png)

</div>

2. Then you should generate the root CA certificate based on the prepared key. Use the req command with the **_x509_** option flag for outputting a self-signed root certificate instead of a certificate request:

```bash
openssl req -x509 -new -key {keyname} -days {days} -out {filename}
```

where:

- **_{keyname}_** - your root key name (the one you’ve generated in the previous step, _rootCA.key_ in our case)
- **_{days}_** - number of days the current certificate will be valid
- **_{filename}_** - the preferred name of the output certificate file with **.crt** extension (e.g. _rootCA.crt_)

Set the required information for your CA certificate by answering the appeared question.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/Self-SignedCustomSSL/08-unix-generate-root-certificate.png)

</div>

As a result, you’ll receive a self-signed root certificate for your own CA.

3. Now you can create a private key and self-signed certificate for your purchased domain. Let’s start with the key: generate it in the same way you did for the root one.

```bash
openssl genrsa -out {filename} {length}
```

where:

- **_{filename}_** - name of the output key file with **.key** extension (e.g. host.key)
- **_{length}_**- private key length in bits (e.g. _2048_)

:::tip Note

DO NOT protect your key with a passphrase; otherwise, you’ll get an error during its addition to the platform dashboard.

:::

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/Self-SignedCustomSSL/09-unix-self-signed-certificate.png)

</div>

4. The next thing you need is a certificate signing request (CSR). Execute the following command:

```bash
openssl req -new -key {keyname} -out {filename}
```

where:

- **_{keyname}_** - your server key name (the one you’ve generated in the previous step, _host.key_ in our case)
- **_{filename}_** - the desired name of the output certificate file with **.csr** extension (e.g. _host.csr_)

You’ll see a set of questions appear again. Answer them to complete the certificate information with your data.

:::danger note

The Common Name parameter value has to be equal to your purchased domain name; otherwise, your certificate won’t be validated.

:::

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/Self-SignedCustomSSL/10-unix-signing-request.png)

</div>

5. The final step is the generation of your self-signed certificate, based on the created request with the help of the root CA certificate. For that, we’ll use the **_x509_** option with the following flags:

- **_-req_** - means that a certificate request input format is expected
- **_-CAcreateserial_** - initiates the creation of the CA serial number file (if it does not exist)

```bash
openssl x509 -req -in {requestname} -CA {CA_certificate} -CAkey {CA_key} -CAcreateserial -out {filename} -days {days}
```

where:

- **_{requestname}_** - name of the input request file (_host.csr_ in our case)
- **_{CA_certificate}_**- specifies the CA certificate that will be used for signing (_rootCA.crt_ in our case)
- **_{CA_key}_** - sets the CA private key to sign a certificate with (_rootCA.key_ in our case)
- **_{filename}_** - desired name of the output certificate file with **.crt** extension (e.g. host.crt)
- **_{days}_** - number of days the current certificate will be valid

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/Self-SignedCustomSSL/11-unix-get-self-signed-certificate.png)

</div>

Great! Now you have the self-signed SSL certificate for your application.

## Elastic VPS

You also have the possibility to create your self-signed certificate using the [Elastic VPS](/docs/Elastic%20VPS/Elastic%20VPS%20Overview/General%20Information) server. For that you need to:

- create an environment with Elastic VPS inside
- connect to it in a preferred way (using [public IP](/docs/ApplicationSetting/External%20Access%20To%20Applications/Public%20IP) or via [SSH Gateway](/docs/Deployment%20Tools/SSH/SSH%20Overview))
- access the OpenSSL shell with the corresponding **_openssl_** command
- create a self-signed certificate following the [Linux/MacOS/FreeBSD](/docs/ApplicationSetting/SSL/Self-Signed%20Custom%20SSL#for-linuxmacosfreebsd) section of this guide (the only difference is all the commands should be executed without the **_openssl_** word at their beginning, as you are already inside the OpenSSL shell)

Once the generation process is finished, you need to download the created certificate files (e.g. via [configuration file manager](/docs/ApplicationSetting/Configuration%20File%20Manager)) to apply them to the necessary environment afterward.

## Attach Certificates

Now, follow the steps as for any other custom SSL upload:

- [Adjust Environment Topology](/docs/ApplicationSetting/SSL/Custom%20SSL)
- [Domain Name and A Record Settings](/docs/ApplicationSetting/SSL/Custom%20SSL)
- [Upload Certificate to the Environment](/docs/ApplicationSetting/SSL/Custom%20SSL)

That’s it! If you enter the bound custom domain name (or the attached external IP address) into your browser’s address bar with the **_https://_** connection protocol, you’ll see the mentioned warning message opened, informing you that the used SSL certificate is not trusted.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/Self-SignedCustomSSL/01-ssl-warning.png)

</div>

Since it’s your site, click the **Proceed anyway** button (or the similar one depending on your browser).

:::danger note

For some browsers (e.g. Mozilla FireFox), even if you’ve decided to proceed, it’s required to add this page to your browser’s exceptions list before you are able to continue.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/Self-SignedCustomSSL/12-ssl-warning-2.png)

</div>

:::

After that, you’ll be redirected to your site via the encrypted protocol.

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/Self-SignedCustomSSL/13-https-access.png)

</div>

Now, you can be sure all interactions with your application are performed safely.
