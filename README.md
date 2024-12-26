<a href="https://lif31up-blog.notion.site/React-11d16899260a81f497a5ea80299b2926">한글 문서</a>
## React Design Patterns & Implementation Methods
This repository serves as a study guide for design patterns and implementation techniques in React. It focuses on various aspects such as React components, hooks, states, tools, and best practices in modern front-end development. You'll explore how to create efficient, scalable, and maintainable React applications using various tools and libraries.

### Key Technologies & Tools
This repository covers the following key technologies and patterns commonly used in modern React development:

* `Tailwind CSS`: Utility-first CSS framework for building responsive and customizable UI designs.
* `Next.js`: A React framework for building server-side rendered (SSR) and statically generated (SSG) web applications.
* `TypeScript`: A statically typed superset of JavaScript that enhances development by adding type checking, improving refactoring, and reducing bugs.
* `DOM Control`: Understanding and manipulating the DOM in a React environment, handling updates efficiently, and optimizing performance.
* `Recoil`: A state management library for React that provides a simple and flexible way to manage global state using atoms and selectors.

## Applied Design Patterns
#### Container/HOC Component
Handles the logic, state management, and data fetching. A function that takes a component and returns a new component. Useful for sharing common logic between container components.
* `component/common/CommonComps.tsx/FetchingComp`
#### Presentational Component
Focuses purely on the rendering and UI. It is typically stateless and relies on props passed down from the container.
* `component/common/CommonComps.tsx/DataComp`
#### Render Props
A pattern where a function is passed as a prop to share logic between components.
* `component/common/CommonComps.tsx/DataProvider`
* `component/common/CommonComps.tsx/DataContainer`
#### Hooks for Separation
Using custom hooks (useFetch, useUsers) to encapsulate state and logic, while keeping components clean.
* `component/common/FeatureComps.tsx/EffectComp`
* `utils/hook/ReusableHook.ts`
#### ObserverAPI Container to Trigger Animation
Render props design apptern applied to bserverAPI to trigger animation, intergrating with Tailwind CSS/SCSS
* `component/common/ObserverContainer.tsx/ObserverContainer`
* `/styles/_animation.scss`
