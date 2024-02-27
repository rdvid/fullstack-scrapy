<div align="center">
  <img src="https://readme-typing-svg.demolab.com?font=monospace&size=32&duration=4000&pause=2200&color=F1F1F1&center=true&vCenter=true&width=940&lines=Market+Scrappy" alt="Market Scrappy typed out" width="90%" align="middle"/>
</div>

<div align="center">

![Typescript](https://img.shields.io/badge/Typescript-000000?style=for-the-badge&logo=typescript&logoColor=blue)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![Redis](https://img.shields.io/badge/Redis-000000?style=for-the-badge&logo=redis&logoColor=red)
![Docker](https://img.shields.io/badge/Docker-000000?style=for-the-badge&logo=docker&logoColor=blue)
![Eslint](https://img.shields.io/badge/Eslint-000000?style=for-the-badge&logo=eslint&logoColor=violet)
![Jest](https://img.shields.io/badge/Jest-000000?style=for-the-badge&logo=jest&logoColor=red)
![Git](https://img.shields.io/badge/Git-000000?style=for-the-badge&logo=git&logoColor=red)

</div>
<p align="center">
   <img height=300 width=500 src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbW1rb3Z0OTIwc3FyeHExNjZzOTNrenpwZjJxZ2ZhNzJlOWpkcW9uZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/MbdbKo343XcqLeRE8S/giphy.gif" alt="regular show gif">  
</p>

<p align="center"><italic>"I told my girl that i am a data scientist, but all I did was spent the past three days scrapping amazon products while trying to avoid antiscrapping firewall and copyright infringement. I hope that it counts like a Msc. Degree"</italic></p>

**Table of Contents**

- [What is it](#💡-what-is-it)
- [Highlights](#✨-highlights)
- [Requirements](#⚠️-requirements)
- [How to use](#📖-how-to-use)
- [Next Features](#⚙️-next-features)
- [Collabs](#📫-find-a-bug-or-have-any-suggestion)
  - [Pull Requests](#pull-requests)
  - [Issues](#issues)
- [About me](#⭐-meet-the-dev)

## 💡 What is it?

A fullstack application designed to scrapping amazon homepage and get infos like products name, prices, reviews and image urls.

### 🔧 Technologies i used

- Backend: 
  - Typescript
  - Express
  - Cheerio
  - Docker-compose
  - Redis
  - Swagger
- Frontend
  - Html5 + Css3
  - Javascript
  - Fontawesomeicons
  - Playwright
- Tools
  - RedisInsight
  - Insomnia (API Client)
  - Eslint (badly used i assume)


## ✨ Highlights

Some features that i'm proud for implement:

- Cache middleware to improve data fetch
- Dockerized (it works in OUR machine)
- Swagger
- Unit tests with Jest
- E2E tests with Playwright

## ⚠️ Requirements

You'll need:
- Node (18 or higher)
- Docker
- Docker-compose

In order to run the backend application and use it with the frontend UI, you will need to run `docker-compose up` in wsl2 or linux terminal in the root of project directory in your local environment.

**This command will setup the local `Redis` container, crucial to provide api performance.**

After this, you can run `npm install` to install all dependencies and run `npm run dev` to serve the api with nodemon in your local machine.

You can use it with with a API Client such as Postman or Insomnia or use our GUI (highly recommended). To use it follow the [Frontend docs](./frontend/README.md)

## 📖 How to use

The api have just one route `/api/scrape?keyword=` where keyword is a string. The api will do a request to amazon using the keyword as a search param and will use cheerio to scrap all the data from the first page and deliver back as a json.

## ⚙️ Next Features

The development process starts but never ends. Next features will be focused on:

- [ ] Swagger UI implement
- [ ] Implement other data sources aside of Amazon (i.e: Olx, Kabum, Submarino)
- [ ] Login system and Dashboard for data analisys
- [ ] Maybe a email sender for PDF report generation with Aws lambda for cloud study purposes (?)
- [ ] More pattern improvement, exploring themes like Queue and Load Balancing for heavy stress contexts


## 📫 Find a bug or have any suggestion?

### Pull Requests 

1. Fork this repo.
2. Create a branch: `git checkout -b <branch_name>`.
3. Do your alterations and tell then in your commit message: `git commit -m '<commit_message>'`
4. Send then to origin fork: `git push origin <project-name> / <local>`
5. Create a pull request detailing your implementation.

[How to create a pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

### Issues

1. Access the Issues Section:
2. Click the “New issue” button.
3. In the “Title” field, type a descriptive title for your issue.
4. In the comment body field, provide a detailed description of the issue you’re facing or the feature you’d like to request.
5. Apply labels to categorize the issue.
    - `Enhancement` for new features
    - `Bug` for some issue in usability
6. Click “Submit new issue” to create the issue.



## ⭐ Meet the dev

<h3 align=center>With ❤️ by:</h2>

<table align="center">
  <tr>
    <td align="center">
      <a href="#">
        <img src="https://avatars.githubusercontent.com/u/60834135" alt="Foto de Rafael David" width=115><br>
        <sub>
          <b>Rafael David</b>
        </sub>
      </a>
    </td>
  </tr>
</table>