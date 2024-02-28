## Unit Tests with Jest

This document outlines the structure and local usage of the ``jest`` within this project. including how to run, good practices inside this project and how im organizing myself in the test creation process.

**Table of Contents**

* [Purpose](#purpose)
* [Test Structure](#test-folder-structure)
* [Writing tests](#writing-tests)
* [Table of Commands](#table-of-commands)
* [Next Steps](#next-steps)

### Purpose

The test folder is dedicated to host all unit tests and file-related.

### Test Folder Structure

The test folder adheres to a clear and organized structure, promoting maintainability and scalability:

**mocks:** Mocks are a good practice to ensure that our app is working without bother with third-party services. We count that these guys know what they doing and focus only in things that we can control (a.k.a our code)

### Writing tests

**Check the example above**

```
    import { AxiosRequestConfig } from "axios";
    import { getProducts } from "../src/utils/utils";

    describe('jest config', ()=>{
        test('adds 1 + 2 to equal 3', () => {
            expect('antedeguemon').toBe('antedeguemon');
        });
    })

```

In this project we will work following this order of relevance. To put our tests in right place consider the following: 

1. ```filecontext.spec.ts```
2. ```describe block to group related tests```
3. ```test case itself```

so before you create a file, check if there's already a block in one file who matches with your test context proposal.

### Table of Commands

| Command (npm run) | Description |
|---|---|
| **test** | **runs every {}.test.ts files (except those with skip notation)** |


- `for more commands check the Jest documentation`

### Next Steps

* **Expand test coverage:** Continuously add new test cases to cover all aspects of the project's functionality.
* **Integrate with CI/CD:** Integrate automated testing into your continuous integration and continuous delivery (CI/CD) pipeline for seamless testing and deployment.
* **Explore advanced testing techniques:** Consider incorporating more advanced testing techniques like end-to-end (E2E) testing or performance testing as needed.
* **Enhance coverage and mock use:** implement and extend the mock culture upon the implementation

