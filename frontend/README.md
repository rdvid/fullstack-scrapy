# Frontend Application Readme

This readme provides instructions for running market scrappy frontend application built with HTML, CSS, and JavaScript.

**Table of Contents**

* [Prerequisites](#prerequisites)
* [Installation](#installation)
* [Usage](#how-to-use)
* [E2E Tests](./e2e/README.md)
* [Next Features](#next-features)

## Prerequisites

* **Node:** Node (18.0 or higher)
* **Web browser:** Any modern web browser like Chrome, Firefox, Safari, Edge, etc
* **Basic understanding of HTML, CSS, and JavaScript:** Familiarity with these technologies will be helpful to understand the code and modify the application

## Installation

**1. Clone the repository:**

If you want to contribute to the project or make modifications, cloning will be the way as well:

```
git clone https://github.com/rdvid/fullstack-scrapy.git
```

**2. Download the files (alternative):**

Alternatively, you can download the application files as a ZIP archive and extract them to a local directory.

**3. Open terminal in project root and install dependencies:**

Once you have the files downloaded or cloned, open `root` in terminal and run `npm install` to run the application.

**4. Docker-compose:**  In wsl2/linux terminal run `docker-compose up` in order to set redis on

**5. Run the Api and Redis:** Follow the [Backend docs](../README.md#⚠️-requirements) to learn more about the backend instructions (this project is useless without the api)

**6. Serve the front app** With everything up-to-date you can run the frontend in root directory using `npm run serve`

## Usage

The application provides the following functionality:

* **Search** Emit a call through a search bar for an api who make a request to amazon search page and scrap some data such as title, image url, price, review and reviewCount from all the products in page 1 results.

## E2E-tests

This project uses `Playwright` to perform e2e tests and ensure quality features.

See the [E2E Documentation](./e2e/README.md) for overall playwright use and more details such as test architeture, basic commands and how to write a proper test.

## Next Features

* Next features will be based on:
    * Multithread behaviour with Queue
    * Enhance E2E Tests implementation
    * Dark theme and other marketplace integrations
