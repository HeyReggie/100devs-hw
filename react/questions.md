### What is React.js?

React is an open source JavaScript library built by facebook that helps developers quickly build great looking user interfaces or reusable UI components.

### Why would you use React?

React makes it easy to build and reuse components that typically exist all over web pages. Instead of having to recreate the same buttons, forms, search bars, and anything else a user might be interacting with, you can create a single component for each of those and insert them as needed.

The other major benefit is something called the Virtual DOM and State. Each component exists within its own DOM and has its own 'State' which is basically its current rendered status. Take something like the 'likes' on a post. With vanilla JS, everytime you 'like' a post, the entire page has to refresh which can get really resource intensive when lots of little actions like that are happening all over the place. With React, you can 'like' a post, which will change the state of that component and only the total number of likes will rerender. All because of the Virtual DOM. This creates a much smoother user experience.

### What are components?

I explained it a little in the answer above but in short, components are everything on a webpage that exists as a standalone piece and can be reused. A nav bar, a button, a form, a search field, a list, each item on a list. These can all be components.

### What is JSX?

JSX or JavaScript eXtension is a React extension that makes it easy for web developers to modify their DOM by using simple, HTML-style code. This is currently compatible across all major browsers and is the key to being able to use the Virtual DOM.

### What are props?

Props is short for properties and these are the assigned style properties of an individual component. They are essentially object arguments that get passed into components.

### What is state?

The state is an instance of a React Component. Its an object that holds some information that may change over the lifetime of the component.

### What are the difference between functional and class based components?

Functional components are simply JS functions that take props as and argument and return a React element. Class based components are classes that require you to extend from React and use the render method to return HTML. The main difference in modern React is that you can use Hooks in functional components and you can't in class components.

### Give an example of a functional and class based component.

```// Functional
import React from 'react'

const FunctionalComponent = () => {
    return <h1>Hello World!</h1>;
}
```

```// Class Based
import React from 'react'

class ClassComponent extends React.Component {
    render() {
        return <h1>Hello World!</h1>
    }
}
```

### What are React Hooks?

Hooks are functions that let you 'hook into' React state and lifecyle features from function components. They are a more modern feature of React that allows you to use React without having to use classes.

### How does useState work?

useState is one of the built in Hooks within React. It allows you to add React state to function components. In other words, it allows you declare state variables within a function that persist even after the function exits. It is the same as using this.state within class based components.

### Give an example of useState.

```
import React, { useState } from 'react'; // bring in the useState hook

function Example() {
    const [count, setCount] = useState(0) // declare a new state variable which holds a pair of values.
// returns a function that lets us increment the count on each click. React then re-renders the Example component on each click and passes the new 'count' value to it.
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
            Click Me
            </button>
        </div>
    )
}
```
