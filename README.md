
## **react-pwa-installer-prompt**

Provide your own custom install flow, directly within your app,  Progressive Web App (PWA) directly within the user interface of your app makes easier for users to install your PWA on their mobile or desktop device. 

## Installation
    npm i --save react-pwa-installer-prompt
    
## Package is helpfull for

**In-app install flow** : Even though most of the browser provides an option to Add to home screen, some users don't realize that they can install a PWA. It can be helpful to provide an in-app experience. So, that you can promote and enable installation of your PWA.

This package reduces the pain of the development and gives you a wings to have your custom implementation to display promotion with a simple steps.

    import React from 'react';
    import PWAInstallerPrompt from 'react-pwa-installer-prompt';
    
    const App = () => {
      return (
        <PWAInstallerPrompt 
          render={({ onClick }) => (
            <button type="button" onClick={onClick}> // make sure you pass onClick
              Install
            </button>
          )}
          callback={(data) => console.log(data)} 
        />
      );
    }
    
    export default App;
 
## Pre-Requisites
Make sure that your PWA is installable and Proper configured Manifest file

## Demo
Visit here for the [demo](https://bit.ly/33QBYj9). (Shows `+` icon in the omnibox).

For the good experience open-up in mobile https://naveenh.xyz. (Install option will be popped in the footer).

## Props
|Props| Type |Description|
|--|--|--|
| render | component  | Your custom component to show in-app promo. It is mandatory to pass onClick in the button or any element where click event triggers| 
|callback|object|Package has identified the events which are being triggers during installation process, When ever an event changes the callback gives you the installation status. |


Ex: You can have a custom component for in-app promo

    import React from 'react';
    import { Row, Col, Button } from 'antd';
    import PWAInstallerPrompt from 'react-pwa-installer-prompt'
    import './index.css';
    
    const Install = () => {       
      return (  
        <PWAInstallerPrompt 
          render={({ onClick }) => (
            <Row align="middle" justify="center">
              <Col span={16}>
                  Keep App, For Offline & Quick Access!
              </Col>
              <Col span={6}>
                <Button type="dashed" onClick={onClick}>
                  Install
                </Button>
              </Col>
            </Row>
          )}
          callback={(data) => console.log(data)} 
        />
      )
    }
    export default Install

Callback properties:

    {
        isInstallAllowed: true, // true, if app in not installed and when user has cancelled the request
        isInstallWatingConfirm: false, // true, if user has clicked on install and not confirmed 
        isInstalling: false, // true, if being installed
        isInstallCancelled: false, // true, if user has cancelled 
        isInstallSuccess: false, // true, if install success
        isInstallFailed: false // true, if installation is failed
    }
