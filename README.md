# Altium Aeronautics!

This project is built on Next.js, a modern web framework for the 2023 Florida TSA competition.

## Engineering Notebook

See/edit the [engineering notebook here](https://docs.google.com/document/d/11LtJvW9aZJ2__on8zBuYxzUkE73G3TwpArdAp0vSD_A/edit?usp=sharing).

_For Team Members:_ We are using the same template we use in engineering class. Any time you make a big visual change, enter your changes in the build day log. Please also take a screenshot of the page you changed and enter it in your build day entry.

## Prompt

**Topic:** Space Tourism: a company that will make you an astronaut

Create a fictitious company and design an appropriate website. The website should provide information starting with promotion, basic information, cost, planning, training, vehicles, safety, launch, and recovery.

## For the Team

### Editing

If you're on glitch, it is used a middle ground because github is blocked :(

Go to Tools > Import/Export > Import from Github and choose the repository superTyDev/altium. When you're done deploy (or the world will get jumbled).

The production deployment is at [altium.vercel.app](https://altium.vercel.app). To deploy go to Tools > Import/Export > Export to Github. If you have troubles tell Tyson.

### Making Pages

You can add pages in the pages directory by

1. Copying the template.jsx file
2. Replace every instance of template with the page title (including the file name)
3. Enter the page's **body** HTML content between the `return ()` parentheses
4. Use next components like `Head`, `Link`, `Script`, `Image` instead of normal html tags

   - You'll have to import these components at the top of the file (ex. `import Head from 'next/Head';`)

5. To add a stylesheet create the file Name.module.css in the styles folder. Then use `import styles from '../styles/Name.module.css';`

At this point you're probably wondering _why_. React allows static sites which are always on and have a nice preload functionality. Next.js makes this really fast.
