# useLocalStorage

<div align="center">

![npm](https://img.shields.io/npm/dt/nodejs-health-checker?style=for-the-badge)<br>
[![npm version](https://badge.fury.io/js/nodejs-health-checker.svg)](https://badge.fury.io/js/nodejs-health-checker)
![test](https://github.com/penseapp/uselocalstorage/workflows/test/badge.svg?branch=master)
![GitHub Workflow Status (event)](https://img.shields.io/github/workflow/status/penseapp/uselocalstorage/test)
[![Coverage Status](https://coveralls.io/repos/github/penseapp/uselocalstorage/badge.svg?branch=master)](https://coveralls.io/github/penseapp/uselocalstorage?branch=master)
[![License Status](https://img.shields.io/github/license/penseapp/uselocalstorage)](https://img.shields.io/github/license/penseapp/uselocalstorage)
[![Issues Status](https://img.shields.io/github/issues/penseapp/uselocalstorage)](https://img.shields.io/github/issues/penseapp/uselocalstorage)
[![Tag Status](https://img.shields.io/github/v/tag/penseapp/uselocalstorage)](https://img.shields.io/github/v/tag/penseapp/uselocalstorage)
[![Languages Status](https://img.shields.io/github/languages/count/penseapp/uselocalstorage)](https://img.shields.io/github/languages/count/penseapp/uselocalstorage)
[![Repo Size Status](https://img.shields.io/github/repo-size/penseapp/uselocalstorage)](https://img.shields.io/github/repo-size/penseapp/uselocalstorage)

</div>

This is a react hook that allows you to use the power of browser localstorage
and the useState react hook combined!

The API is the same, and you'll see no difference between them!

## Example live action

You can check a live version of this application on: https://penseapp-uselocalstorage.web.app/

## TL;DR

```tsx
import { useLocalStorage } from "@penseapp/uselocalstorage";

const [state, setState] = useLocalStorage<string>(
  "keyName",
  "useLocalStorage",
  false // or a number
);
```

## How to install

```sh
yarn add @penseapp/uselocalstorage
```

or

```sh
npm i @penseapp/uselocalstorage
```

## How to use

Import the lib on your component

```tsx
import { useLocalStorage } from "@penseapp/uselocalstorage";
```

Simple change the `useState` to `useLocalStorage` on any hooks and it's done.
Now you can reload your browser and your state will maintein

```tsx
import React, { useState } from "react";
import { useLocalStorage } from "@penseapp/uselocalstorage";

const App: React.FC = () => {
-  const [state, setstate] = useState<boolean>(false);
+  const [state, setstate] = useLocalStorage<boolean>(false);

  return (
    <>
      Your React component...
    </>
  );
};

export default App;
```

## API / Props

| Name         | Type            | Required | Default            | Description                                     |
| ------------ | --------------- | -------- | ------------------ | ----------------------------------------------- |
| key          | string          | true     |                    | Key name from `localStorage` (Should be unique) |
| initialValue | any (Generic)   | true     |                    | Same as the `useState` hook                     |
| expire       | number or false | false    | 60 \* 30 (seconds) | Time in seconds to expiry (false to infinite)   |

## localStorage expire

This lib use as dependecy the [expired-storage](https://www.npmjs.com/package/expired-storage), so you can controll your state by how much time it should persist on localStorage

You have two options:

- Set the time in seconds
- Set false to infinite
