<h1 align="center"> Team's 5 Roman Numeral Prototype </h1>

<p align="center"> <img src=https://user-images.githubusercontent.com/56550489/147671449-92049dc4-91d2-42ea-aec9-4d38600be3cc.png> </p>

## Our Project

Our project aim is to create a full stack Roman Numerals Encoder/Decoder application using a frontend Framework called `React` and `Node.js` for the backend runtime environment.

## Setting up and running the program

### Installing dependencies

Navigate to the `/client` directory in a terminal and
`yarn install`

in a seperate terminal, navigate to the `/server` directory and
`yarn install`

### Running the program

In order to run the program you have to open the `/client` directory on one terminal and the `/server` directory on another.

Enter `yarn start` in both terminals to run the front-end react web page and the express back-end.

### Testing the program

In order to run the automated test scripts for the front end, navigate to the `/client` directory and enter `yarn test` in the terminal.

In order to run the automated test scripts for the server, navigate to the `/server` directory and enter `yarn test` in the terminal.

## Types of Testing Adopted

Prior to starting development we will create tests using `Jest` in order to adhere to our test driven development strategy, following development we will create front-end `snapshot testing` (also using `Jest`). Upon completition of development, we will create `manual QA tests scripts` based on our requirements, and perform manual testing on the front-end. Finally, once all of our tests have passed, and development has concluded, we will try and get an external party, or third party to conduct manual UAT testing.

## Communication

Our main communication platform within the team will be Discord. This is because it is easily accessible to everyone in the team, and provides a good way of sending and recieving files / documents.

Our main external communication platform will be the following google meet: https://meet.google.com/kie-tnqx-xvx

## Team Members

The table below displays our teams members, in addition to their roles and account links.

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

## Ceremonies: Stand-Ups and Weekly Retrospectives

After gathering requirements, we held a Sprint Planning session - where we distributed the requirements into their respective sprints. Following this, we held daily stand-ups and started working on the first sprint. After the first sprint (server development) we held a retrospective session and evaluated what was working in regards to our development strategy, the document can be found in the [documents](https://github.com/adaapp/sqa-nov-2021-team5/tree/main/documents) directory. We will reiterate this process two more times as we will undertake a total of 3 sprints to ensure that back-end development, front-end development and additional testing plus documentation (manual test scripts and UAT testing - if possible) are complete. 

## Pull Request Rules

When creating a pull request on Github we will adopt some rules which will ensure that we are following the industry standard.

After initalizing a pull request we will be forwarded to the review page, within this page it is optional to add a summary of the proposed changes, review the changes made by commits, add labels, milestones, and add assignees where necessary. Once we have created a pull request, we will push the commit from our topic branch and add them to the existing pull request. This will mean that other contributors within the project, specifically the `QA member` will review the proposed changes, add review comments, contribute to the pull request, and even add commits to the pull request. After the QA member and the original contributor are happy with the proposed changes, we will merge the pull request into the main branch.

## Programming Standards

We will adopt React Coding Standards for the front-end of our application, this includes the following:

- React UI component's name will be in PascalCase.
- All other helper files will be camelCase.
- All the folder names will be camelCase.
- CSS files will be named the same as the component PascalCase. Global CSS which applies to all components will be placed in global.css and should be named in camelCase.
- CSS class names will use a standard naming convention or any standard practice.
- Test files will be named the same as the component or non-component file.

To ensure we have clean source code we will follow some basic rules:

1. Use and adopt the DRY principle (Don't repeat yourself).
2. Create multiple files instead of writing a big file - componentization of code.
3. Place all of our CSS files in one common folder.
4. Avoid Inline CSS as and when possible.
5. Use `linter` to make our code easier to follow.
6. Review our code before creating a pull request.
7. Split our code into multiple smaller functions. Each with a single repsonsibility.
8. Create many utility files that help us remove duplicate code from multiple files.
9. Seperate all the service calls into a seperate file.
10. Thoroughly format each line of code which `prettier` can help us with.

## Definiton of Done

Upon completing any user story, we will see whether the Product has met the Definiton of Done. DoD (Definiton of Done) includes the conditions and criteria that the software solution has to meet in order to be accepted by the customer. What Done means to us is that the code is developed to our standards, reviewed, implemented with Test-Drive Devleopment, tested with 100 percent test automation, integrated and documented.

We need to check whether the user story is compliant with the initial assumptions of the single backlog item, which it was described in. On this stage we also control quality of written code and check if all necessary elements of our process were carried out, here is our checklist:

- Produced code for presumed functionalities
- Assumptions of User Story met
- Project builds without errors
- Unit tests written and passing
- Project deployed on the test environment identical to production platform
- Tests on devices/browsers listed in the project assumptions passed
- Feature ok-ed by UX designer
- QA performed & issues resolved
- Feature is tested against acceptance criteria
- Feature ok-ed by Scrum Master
- Refactoring completed
- Any configuration or build changes documented
- Documentation updated
- Peer Code Review performed

## UI Testing

The UI Testing will be completed using Jest and Automated snapshot tests will be able to be found within the frontend src directory. In addition, the frontend will also be tested via manual QA test scripts (located in [documents](https://github.com/adaapp/sqa-nov-2021-team5/tree/main/documents) folder).

## Automated Tests

The automated unit test scripts are present within both the front-end of the application and the back-end. In the back-end tests scripts test the logic of the application such as converting roman numerals to normal numerals (vice versa); in the frontend the tests are used to ensure that each component is rendered and rendered correctly. Smoke tests are also included within the documentation directory. 

## CI/CD Pipeline

Two GitHub Actions pipelines have been created, these run all of the automated tests within the project after a pull request has been created. This ensures that all of our tests pass prior to merging to the main branch will notifies us whether the entire application is still functional even after many changes.

## SQA Standard

We have adopted a standard called `IEEE Standard for Software Quality Assurance Processes` with the intention to enable our software project to use SQA processes to produce and collect evidence that form the basis for giving a justified statement of confidence that the software product confirms to its established requirements. The purpose of this standard is to provide uniform, minimum acceptable requirements for SQA processes in support of our software project.

We will conform to this standard by ensuring that the requirements are achieved, these requirements describe SQA processes, activities, and tasks. Sixteen activities are identified in this clause and are grouped into three major areas: process implementation, product assurance actitivies, and additional product assurance, this can be seen in the image below:

![image](https://user-images.githubusercontent.com/56550489/144634113-6a2625aa-d5d7-4f66-a8a0-f26b4bf386a9.png)

For additional explanation on the IEEE Standard please click on the following [link](https://github.com/adaapp/sqa-nov-2021-team5/files/7650810/730-2014.pdf) for further details.
