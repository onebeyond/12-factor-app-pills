# [Dependencies](https://12factor.net/dependencies)

::: tip ***Explicitly declare and isolate dependencies***
All support libraries must be declared explicitly in a manifest and isolated from the surrounding environment.
:::
<br>  

![codebase-deploy](img/dependencies.png){ style="display: block; margin: 0 auto" }

## Avoid relying on implicit system-wide packages

*"A twelve-factor app **never relies on implicit existence of system-wide packages**"*. All dependencies must be fully and precisely declared via ***dependency declaration** manifest* and isolated using a ***dependency isolation** tool* to ensure no implicit dependencies from the environment.
Regardless of the toolchain, ***dependency declaration and isolation must always be used together – only one or the other is not sufficient to satisfy twelve-factor.***

Developers can declare the app's dependencies and let the dependency manager tool ensure that all dependencies are satisfied. Instead of packaging third-party libraries within a microservice, developers can specify all dependencies in the dependencies manifest.

For example, in NodeJS, [**npm**](https://www.npmjs.com/) be used as a package manager to manage app dependencies. It generates a ``package.json`` file where all the dependencies are explicitly declared with their exact version needed for the project. With a tool like [**nvm**](https://github.com/nvm-sh/nvm), developers can use different versions of libraries as well as runtime versions.
In Python, [**Pip**](https://pypi.org/project/pip/) can be used as package manager and [**Virtualenv**](https://virtualenv.pypa.io/en/latest/) can be used to create isolated Python environments.

## Simplify setup for new developers

New developers can check out the codebase onto their machine and set up the development environment by only requiring the language runtime and dependency manager installed as prerequisites. With a command such as ``npm install`` they can reproduce the project setup with deterministic results.

## Do not rely on implicit system tools

Although certain system tools, like ``curl``, while may exist on most systems, there is no guarantee they will exist on all system where the app may be deployed, or that the versions used will be compatible.
Therefore, if the app requires a system tool, it must be shipped with the app.
