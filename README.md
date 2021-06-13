# 🚀 Better GitHub Profile

> Use your GitHub profile to create a personal website

[Demo page](https://www.aabuhijleh.com/)

<p align="center">
    <img src="https://user-images.githubusercontent.com/42934634/121816709-d0c1a380-cc85-11eb-9772-877c8fdb36a9.png" alt="example" />
</p>

## How it works? 🙋‍♀️

The content of this website is generated dynamically using the [GitHub GraphQL API](https://docs.github.com/en/graphql) which is used to download your [profile README.md](https://docs.github.com/en/github/setting-up-and-managing-your-github-profile/managing-your-profile-readme) and other profile data such as your company, email, twitter username...etc

An extra file `extend.json` is required to be in your profile readme repository

[See this example](https://github.com/aabuhijleh/aabuhijleh/blob/main/extend.json)

```ts
// Your "extend.json" file should have this schema

interface ExtendedData {
  resume: string;
  about: {
    paragraphs: string[];
    skills: string[];
    imageUrl: string;
  };
  jobs: Job[];
  featuredProjects: FeaturedProject[];
  otherProjects: Project[];
  contactMessage: string;
}

interface Job {
  title: string;
  company: string;
  companyUrl: string;
  date: {
    from: string;
    to: string;
  };
  accomplishments: string[];
}

interface Project {
  name: string;
  description: string;
  technologies: string[];
  date: {
    from: string;
    to: string;
  };
  repoUrl?: string;
  externalUrl?: string;
}

type FeaturedProject = Project & { imageUrl: string };
```

## Try it out 🧪

By default, the app uses the profile of the username set in `src/constants/defaults.ts`

To use a different profile, you can use this URL parameter

```
/?username={username}
```

## Development 💻

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)

```sh
# install dependencies
$ npm install

# run the app in development
$ npm start

# build the app for production
$ npm run build
```

You need to generate a [GitHub key](https://docs.github.com/en/graphql/guides/forming-calls-with-graphql#authenticating-with-graphql) to use the GraphQL API. Add this key as an environment variable `REACT_APP_GITHUB_KEY` in a `.env` file that needs to be created at the project's root directory

## Todos 📝

- ~~Use GitHub GraphQL API instead of REST~~
- ~~Use styled components~~
- ~~Add more customization options~~
- Make the website responsive
