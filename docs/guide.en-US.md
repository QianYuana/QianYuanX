---
toc: content
title: introduce
nav:
  title: Guide
  path: /guide
---

# QianYuan X

QianYuan X is a component library based on Ant Design 4.x, which is free and open source. It encapsulates common business scenarios used in work and packages them as a dumi component library for convenient use.

The component library consists of three parts: Components, Algorithm Modules, and Hooks. It mainly aims to improve the development efficiency of colleagues and exercise logical thinking. Hopefully, it can be helpful to everyone.

## Project Introduction

**compoentLibrary**: Initially built using Vite and React, the interface is not very complete. Additionally, the code is not compatible in some cases under controlled and uncontrolled modes. Therefore, we decided to switch to a different mode. (This project is no longer maintained)

**dumiCompoent**: Built on dumi, it can more intuitively and clearly display components, allowing everyone to easily find the components they want to use. You can directly view the source code on GitHub for integration during usage. (This project will be continuously maintained)

**Development Direction**
In the future, we will share various knowledge with everyone. Currently, we are studying the knowledge of front-end framework construction and mastering front-end engineering. We believe we will meet you soon! You can leave your STAR, and you will be the first to know when we release updates.

**directory structure**

```bash
.
├── README.md
└── QianYuanX
    ├── src
    │   ├── Algorithm
    │   │   ├── closure
    │   │   │   ├── index.md
    │   │   │   └── index.en-US.md
    │   │   └──...
    │   ├── Components
    │   │   ├── DataSelect
    │   │   │   ├── index.en-US.md
    │   │   │   ├── index.tsx
    │   │   │   ├── index.md
    │   │   │   └── index.css
    │   │   └──...
    │   ├── Hooks
    │   │   ├── useFocus
    │   │   │   ├── index.en-US.md
    │   │   │   ├── index.tsx
    │   │   │   ├── index.md
    │   │   │   └── index.css
    │   │   └── ...
    │   └── index.ts
    ├── .dumirc.ts
    ├── .eslintrc.js
    ├── .gitignore
    ├── .prettierrc
    ├── package.json
    └── tsconfig.json

```

**Home**
![image](https://github.com/QianYuana/YuanComponent/assets/102220953/5135899d-830a-4b09-abac-a7a028d48b0d)

**Guide**
![image](https://github.com/QianYuana/YuanComponent/assets/102220953/85da1cd5-885a-4c75-8c39-06fb8cf16c0b)

**Components**
![image](https://github.com/QianYuana/YuanComponent/assets/102220953/6ca01515-b65c-4114-b0d6-90d9ff69807d)

**Usage**
Previously, the library was published to `GitHub Packages`, but frequent modifications to the source code made this process inconvenient. Therefore, we will no longer publish the package. When using the library, you can copy the code to your `utils` folder. When needed, you can directly copy the code from the project, modify it as needed, and use it.
