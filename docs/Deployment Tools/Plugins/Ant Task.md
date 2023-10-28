---
sidebar_position: 1
---

!Content Code incomplete

## Ant Task Plugin

**[Apache Ant](https://ant.apache.org/)** is an open-source Java-based software tool for the build processes automation. It supplies many built-in tasks allowing to compile, assemble, test and run Java applications. Ant is an extremely flexible building tool, which does not force you to use any specific coding rules, directories layout, etc.

So, to deploy your Java applications into the platform with the help of Apache Ant, perform the following steps:

1. Install the [_Apache Ant_](https://ant.apache.org/) build tool and [_Ivy_](https://ant.apache.org/ivy/) manager.

2. To add the [Ant Task plugin](https://github.com/jelastic/jelastic-ant-task) by the platform, build **_jar_** from the files in the linked repository and add it to the /lib-task folder of your Apache Ant.

3. Add the **_ivy.xml_** file to your Java project to define tasks used in your build file and manage dependencies. For example:

```bash
<ivy-module version="2.0">
    <info organisation="com.jelastic" module="jelastic-ant-task"/>
    <dependencies>
        <dependency org="com.google.code.gson" name="gson" rev="2.8.1"/>
        <dependency org="org.apache.httpcomponents" name="httpcore" rev="4.4"/>
        <dependency org="org.apache.httpcomponents" name="httpclient" rev="4.4"/>
        <dependency org="org.apache.httpcomponents" name="httpmime" rev="4.3.4"/>
        <dependency org="commons-codec" name="commons-codec" rev="1.4"/>
        <dependency org="commons-logging" name="commons-logging" rev="1.1.1"/>
    </dependencies>
</ivy-module>
```

4. Create the **_build.xml_** task for deployment and specify your PaaS account credentials inside. For example:

```bash
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns:ivy="antlib:org.apache.ivy.ant" name="PaaS Test Task Deploy" basedir="." default="deploy">
 
    <property name="lib.dir" value="lib"/>
    <property name="ivy.default.ivy.user.dir" value="${basedir}/lib"/>
    <property name="ant.lib.task" value="${basedir}/lib-task/"/>
 
    <path id="lib.path.id">
        <fileset dir="${lib.dir}"/>
        <fileset dir="${ant.lib.task}"/>
    </path>
 
    <target name="deploy" description="Use the Task">
        <ivy:retrieve pattern="${lib.dir}/[artifact].[ext]" type="jar" />
 
        <taskdef name="jelastic" classname="com.jelastic.Jelastic" classpathref="lib.path.id"/>
        <jelastic email="<!-- account_email -->"
                  password="<!-- account_password-->"
          dir="<!-- target_directory -->"
                  filename="<!-- deployment_archive -->"
                  context="<!-- project_context -->"
          environment="<!-- environment_name -->"
          apihoster="<!-- hoster_domain -->"
                >
        </jelastic>
    </target>
</project>
```

Now, you can deploy your Java project with Ant and it will be automatically added to your environment.
