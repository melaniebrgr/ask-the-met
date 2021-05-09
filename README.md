# Ask the Met

Visiting the Metropolitan Museum or Art in New York is not always feasible, even when there isn't a pandemic on. This shouldn't prevent us from appreciating and learning about the Met's collection though. With this simple app you can view a random piece or art, and create a list of questions and answers about it to review later.

## Architecture Description

An art-oriented question and answer app.

### Users

Users are student of art history, and are expected to be handful per day.

### Requirements

- An example question and answer is shown by default
- Previously created questions and answers should be listed, and the answer only revealed on click.
- Questions should be persisted
- Questions can be sortable for convenience
- Questions can be deleted
- Questions can be edited
- How to use the app should be communicated through tooltips
- Optional: tests

### Additional context

Tech stack must include react and redux. Optionally, depending on time, the supplementary stack will be tailwind (theming), react hook form (forms).

### Architecture characteristics

Architecture characterists are the "ilities" particular to an application that can or should influence to overall application architecture. In the case of "Ask the Met", one such characteristic could be **resilience**. If the internet goes down or is unavailable, as a ~~user~~ art-lover, I want my questions and answers to be saved. Accordingly, offline caching was be explored and localstorage used to persist Q&As. Is the art-lover refreshes the page or closes and reopens the browser the QAs are hydrated from localstorage. After successful localstorage in a "real" app I would upload the QAs to the db.

### Modules

To discover the core modules of the application I tried an "event storming" approach where I assumed events are used to communicate within and without the application (a.k.a a standard redux app). Then events were grouped by type to derived the modules. For the ~~user~~ art-lover, the following core events are envisioned (subject to change):

- Art requested
- Q&A submitted
- Q&A editted
- Q&A deleted
- Q&A sorted

Based on these, an initial set of components might be:

- Art presenter component ("Art requested")
- Q&A capture component ("Q&A submitted")
- Q&A editor component (Q&A editted, "Q&A deleted")
- Q&A presenter component ("Q&A sorted")

![modules](./assets/ask-the-met.png)

## Stories

- [x] As an art-lover I want to formulate a question and answer about a piece and save it.
- [x] As an art-lover I want to get a new, random art piece and see basic information about it.
- [x] As an art-lover I only want to see the answers on click.
- [x] As an art-lover I want to be able to edit or delete questions and answers I previously submitted.
- [x] As an art-lover I want to organize my questions alphabetically.
- [x] As an art-lover I want to understand how to use the app (through tooltips).

## Improvements

Like a piece of art, an application is never done, we only stop working on it. Here's what I would like to do additionally:

- Improve unit test coverage, ideally any component or util that contains logic is covered by a unit test
- Add e2e test coverage, ideally the core user flow of the application is covered by an e2e test
- Extract common components to a component library, e.g. primary and secondary buttons
- Introduce ramda and use it for data transformation
- Add animation and/or transitions for a more natural feeling UI/UX
- Replace plain localstorage with [Redux Persist](https://www.npmjs.com/package/redux-persist)
- Persist QAs to a database
- Handle error cases and introduce monitoring, e.g. Sentry

## Getting started

- Clone the repo
- `yarn install`
- `yarn start`
