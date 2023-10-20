---
sidebar_position: 3
---

## CLI Tutorial: Environment Start/Stop

Among the most common operations for environment management provided by CLI, the *start* and *stop* ones can be denoted. Wise usage of these methods can help to significantly cut your spends, especially for development and testing environments (for example, you can stop them for the nighttime, while you are sleeping, and start again at the morning to continue the development).

1. In order to stop an environment, that is temporarily non-required, execute the following command (where the highlighted ***{env_name}*** placeholder needs to be substituted with the corresponding environment name):

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

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/EnvironmentStart-Stop/1.png)

</div>

As you can see, CLI responses with the “result” property equal to *0*, meaning that the operation passed successfully and without errors.

2. Later on, you can start your environment with a similar *startenv* method and make it operable again:

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

<div style={{
    display:'flex',
    justifyContent: 'center',
    margin: '0 0 1rem 0'
}}>

![Locale Dropdown](./img/EnvironmentStart-Stop/2.png)

</div>

Yes, the environment management is that simple!