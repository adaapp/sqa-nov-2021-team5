# sqa-nov-2021-team5

## Communication

Our main communication platform within the team will be Discord. This is because it is easily accessible to everyone in the team, and provides a good way of sending and recieving files / documents.

Our main external communication platform will be the following google meet: https://meet.google.com/kie-tnqx-xvx

## Team Members

The tabbelow le shows our teams members, in addition to their roles and account links.

|  Name  |     Role     |                                                           GitHub                                                            |                                             LinkedIn                                             |
| :----: | :----------: | :-------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------: |
| Simone |      UX      |     [![Foo](https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-16.png)](https://github.com/simtor)      |  [![Foo](https://linkedin.com/favicon.ico)](https://www.linkedin.com/in/simone-ram-8b64a914b/)   |
|  Sukh  | Scrum Master |  [![Foo](https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-16.png)](https://github.com/SukhVirdiADA)   |        [![Foo](https://linkedin.com/favicon.ico)](https://www.linkedin.com/in/sukhvirdi/)        |
| Harman |    DevOps    | [![Foo](https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-16.png)](https://github.com/harmankalair123) | [![Foo](https://linkedin.com/favicon.ico)](https://www.linkedin.com/in/harman-kalair-592249199/) |
| Kacper |      QA      | [![Foo](https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-16.png)](https://github.com/orangeNotebook)  |        [![Foo](https://linkedin.com/favicon.ico)](https://www.linkedin.com/in/kacper-k/)         |

## Roles and Responsibilities

The table below shows all of the roles within our team and their corresponding responsibilities.

|     Role     |                                                                         Responsibility                                                                          |
| :----------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|     All      |                                All roles will take part in writing tests and doing development work due to the small team size.                                 |
|    DevOps    |                                                        In charge of the CI Pipeline and GitHub workflows                                                        |
| Scrum Master |                Managing the Kanban board, sprints and created tickets. In addition to being in charge of project documentation (eg. test plan).                 |
|      UX      | In charge of designing the user interfaces and ensuring a good user experience. Includes collaboration with DevOps to conduct pre-project UI testing via Figma. |
|      QA      |  Making sure everything is of a high quality and adheres to our chosen SQA standard. Includes performing code reviews and following our code review strategy.   |

## Pull Request Rules

When creating a pull request on Github we will adopt some rules which will ensure that we are following the industry standard. After initalizing a pull request we will be forwarded to the review page, within this page it is optional to add a summary of the proposed changes, review the changes made by commits, add labels, milestones, and add assignees where necessary. Once we have created a pull request, we will push the commit from our topic branch and add them to the existing pull request. This will mean that other contributors within the project, specifically the `QA member` will review the proposed changes, add review comments, contribute to the pull request, and even add commits to the pull request. After the QA member and the original contributor are happy with the proposed changes, we will merge the pull request into the main branch. 


## Programming Standards

We will adopt React Coding Standards for the front-end of our application, this includes the following:

- React UI component's name will be in PascalCase.
- All other helper files will be camelCase.
- All the folder names will be camelCase. 
- CSS files will be named the same as the component PascalCase. Global CSS which applies to all components will be placed in global.css and should be named in camelCase.
- CSS class names will use a standard naming convention or any standard practice. 
- Test files will be named the same as the component or non-component file.

To ensure we have clean source code we will follow some basic rules:
1) Use and adopt the DRY principle (Don't repeat yourself).
2) Create multiple files instead of writing a big file - componentization of code. 
3) Place all of our CSS files in one common folder.
4) Avoid Inline CSS as and when possible.
5) Use `linter` to make our code easier to follow.
6) Review our code before creating a pull request.
7) Split our code into multiple smaller functions. Each with a single repsonsibility.
8) Create many utility files that help us remove duplicate code from multiple files.
9) Seperate all the service calls into a seperate file.
10) Thoroughly format each line of code which `prettier` can help us with. 
