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
  - [Live Demo](#live-demo)
  - [Technologies](#🔧-technologies-i-used)
- [Highlights](#✨-highlights)
  -[Process fluxogram](#process-architeture)
  -[Deploy Archteture](#live-demo-architeture)
- [Requirements](#⚠️-requirements)
- [How to use](#📖-how-to-use)
- [Next Features](#⚙️-next-features)
- [Collabs](#📫-find-a-bug-or-have-any-suggestion)
  - [Pull Requests](#pull-requests)
  - [Issues](#issues)
- [About me](#⭐-meet-the-dev)

## 💡 What is it?

A fullstack application designed to scrapping amazon homepage and get infos like products name, prices, reviews and image urls.

### Live Demo 

We're on!!!

If you want to use the service:
- ✨ You can use our service through [Web-Site](https://frontend-scrappy.netlify.app) ✨
- ✨ You can check our REST API through [APi](https://fullstack-scrapy.onrender.com/api-docs) ✨

**Please have patience to use the live demo. Responses can be a little bit slow due the fact that the service is hosted by `Render` in Free Tier Plan**


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

### Process architeture

<div align="center">
  <h3>A basic request follows this fluxogram:</h3>
  <img src="https://f005.backblazeb2.com/file/debbuggers/market-scrappy.drawio.png" alt="request fluxogram">
</div>

- User make a input through searchbar.
- FetchAPI will perform a request to API.
- Before perform a response, redis will try to locate a key/value with the keyword provided.
- If not find any, the Cheerio inside express controller will perform a request, get the html from amazon page and extract all the data necessary.
- After all, controller will return an array of products (or an error).

**Whenever the user enter the page, the localStorage will be consulted. The last successful request products will be storage and will be rendered in the next visit**

### Live Demo Architeture

<div align="center">
  <h3>Live Deploy graphical representation:</h3>
  <img src="https://f005.backblazeb2.com/file/debbuggers/market-scrappy-2.jpg" alt="deploy fluoxgram">
</div>

- The main source code (here o/) has the fullstack application.
  - Backend
    - Cheerio inside Express
    - Express inside root repository in Github
    - All the repo deployed by Render through github integration
  - Frontend
    - Just vanilla application powered by [Parcel](https://parceljs.org/) and hosted by [Netfily](https://www.netlify.com/)
    - Storage on [Bitbucket](https://bitbucket.org/product)
- In order to deploy, i'm using [Render](https://render.com/)
  - Live [Redis](https://redis.io/) instance is another application aside hosted in render too 

**Honored mention to a CronJob hosted in [Cron-job-free](https://cron-job.org/en/) to make api constantly alive**

## ⚠️ Requirements

You'll need:
- Node (18 or higher) (optional)
- Docker
- Docker-compose

In order to run the backend application locally and use it with the frontend UI, you will need to run `docker-compose up --build` in wsl2 or linux terminal in the root of project directory in your local environment.

**This command will setup the local `Redis` container, crucial to provide api performance.**

Thats all. I swear. xD.

You can use it with with a API Client such as Postman or Insomnia or use our GUI (highly recommended). To use it follow the [Frontend docs](./frontend/README.md)

If your goal is to run locally and make editions in this application or even work with her in local dev environ thigs will change a bit.

- you'll need at least the `Redis` container up. (mandatory).
- remove the host property in `src > config > redis.ts`

After run `npm install` and `npm run dev` you'll able to perform requests in postman or proceed to [Frontend docs](./frontend/README.md) normally.


## 📖 How to use

The api have just one route `/api/scrape?keyword=` where keyword is a string. The api will do a request to amazon using the keyword as a search param and will use cheerio to scrap all the data from the first page and deliver back as a json.

To run locally, clone the `.env.default` and remove the `.default` of the copy. 

```

  USER_AGENT='Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36'

  # Redis
  REDIS_HOST='127.0.0.1'
  REDIS_PORT=6379
  REDIS_USERNAME=
  REDIS_PASSWORD=

```

As you can see, the `REDIS_HOST` points to your local ip by default, considering that you have a docker image running through your docker and you want to run the application locally, this is enough setup to start.

change this variables to alter the redis instance that you want to use.

`USER_AGENT` is a cheerio requirement to bypass Amazon firewall. Without a default user agent the request will fall into suspicious client and will be rejected. You can use the default if you want or catch one from a header of some request headers from your local browser.


### Jest tests

This API have Jest implementation. To work with Jest and learn how things works upon here check the [Unit Test Docs](./tests/README.md)

## ⚙️ Next Features

The development process starts but never ends. Next features will be focused on:

- [ ] Swagger UI implement
- [ ] CronJob to preserve live status
- [ ] Reverse Proxy w/ Anti-robot spam firewall
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
