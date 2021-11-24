This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Run the development server

```bash
npm run dev
```

By default, the app runs locally on [http://localhost:3000](http://localhost:3000).


## Deploying

Currently this app is configured to deploy to [Vercel](https://vercel.com). I may change
this in the future but this is fine for now given the low traffic
and minimal requirements.

## Structure and Architecture

This is a pretty simple server-side rendered React app. All data
is imported into the `data` directory by a separate process that is not
part of this project. Everything is built statically from that data set.

In the future I might make all of that dynamic using [SWR](https://swr.vercel.app/) for
fetching data client-side.


## React Usage

[React](https://reactjs.org) version 17.0.2 is used. There is no dependency on Redux or other 
state management libraries because the site is pretty much static.

Where any state is used, I am using [React State Hooks](https://reactjs.org/docs/hooks-state.html).

I have tried to keep this using React Functional components as those are 
just cleaner. So far I have not found anything I cannot do with functional 
components, especially with React Hooks. 

## More to come!

This is a passion project so updates are not terribly frequent and I add
things when I can. If you like or want to contribute, let me know. 

11/24/2021

