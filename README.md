# [kantor-galeria.pl](https://kantor-galeria.pl)

Currency Exchange Point web app.

### What for?

Allows to update the exchange rate by making changes to the table in the admin panel.
Every 24 hours, it saves exchange rates in the form of a chart where you can see the price history of the last 7 days

## Technology used in this project

This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app`.

**Core tech / platforms:**
- Typescript
- Next.js
- [Prisma](https://www.prisma.io/) - setup with postgreSQL database
- [Supabase](https://supabase.com/) - postgreSQL database hosting
- [tRPC](https://trpc.io/) - for end-to-end typesafe API. Such a great developer experience!
- [Auth0](https://auth0.com/)
- [Emotion Styled Components](https://emotion.sh/docs/styled)
- [Formik](https://formik.org/) - for handling forms
- [dnd kit](https://dndkit.com/) - my personal favorite when it comes to dnd
- Github Actions - **cron** for saving exchange rates history to charts

## How to get started?

1. Install install dependencies by running:

```bash
npm install
# or
yarn install
```

2. Add required environment variables. Check *.env.example* and *src/env/schema.mjs* to see what you need! I know, there are quite a few of them out there. However you don't need to be worried, if you forget any variable, you will get the information when you run the app.

3. Next step is Prisma.

```bash
# start with this, to see your possibilities
npx prisma

# create migrations and apply them to your database
npx prisma migrate dev

# push the Prisma schema state to the database
npx prisma db push

# generate artifacts (basically all types e.g. Prisma Client). After this command, I recommend restarting your IDE or Typescript Server to make sure everything works fine.
npx prisma generate
```
