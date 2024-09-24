import React from 'react'

const FAQ = () => {
  return (
    <div className='mt-4 '>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" checked="checked" readOnly />
        <div className="collapse-title text-xl font-medium">What is React.js and Explain the concept of components in React?</div>
        <div className="collapse-content text-xl">
          <p className='text-[darkcyan]'>React is a JavaScript library for building single-page interfaces.React allows us to
            create reusable UI components. <br />
            <span className='text-[indigo]'>
              Components are like functions that return HTML elements.Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML.


            </span>


          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">What is JSX in React, and how does it work?</div>
        <div className="collapse-content">
          <p  className='text-[midnightblue]'>JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement()  and/or appendChild() methods.

            JSX converts HTML tags into react elements.</p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">What is the Virtual DOM, and how does React use it to optimize performance?</div>
        <div className="collapse-content">
          <p  className='text-[midnightblue]'>React JS Virtual DOM is an in-memory representation of the DOM. DOM refers to the Document Object Model that represents the content of XML or HTML documents as a tree structure so that the programs can be read, accessed and changed in the document structure, style, and content.
            <br />A component can contain a state. Whenever the state of any component is changed react updates its Virtual DOM tree. Though it may sound like it is ineffective the cost is not much significant as updating the virtual DOM doesn’t take much time.

            React maintains two Virtual DOM at each time, one contains the updated Virtual DOM and one which is just the pre-update version of this updated Virtual DOM. Now it compares the pre-update version with the updated Virtual DOM and figures out what exactly has changed in the DOM like which components have been changed. This process of comparing the current Virtual DOM tree with the previous one is known as ‘diffing’. Once React finds out what exactly has changed then it updates those objects only, on real DOM.
          </p>
        </div>
      </div>

      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium"> Explain the concept of "props" in React and how they are used?</div>
        <div className="collapse-content">
          <p  className='text-[midnightblue]'>          React Props are like function arguments in JavaScript and attributes in HTML.

To send props into a component, use the same syntax as HTML attributes:
<br />
 

          </p>
        </div>
      </div>


      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium"> What is "state" in React, and how does it differ from props?</div>
        <div className="collapse-content">
          <p  className='text-[midnightblue]'>The React state allows us to hold data within a function component.
    <br />
    The key difference between state and props is that state is managed within a component, while props are passed from a parent component to a child component. State is used to manage internal component data, while props are used to pass data from a parent component to a child component.

          </p>
        </div>
      </div>


      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">Explain the useState hook and provide an example of how it is used</div>
        <div className="collapse-content">
          <p  className='text-[midnightblue]'>  The React useState Hook allows us to track state in a function component.

State generally refers to data or properties that need to be tracking in an application.
<br />
          </p>
        </div>
      </div>


      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">What is the purpose of the useEffect hook in React, and when would you use it?</div>
        <div className="collapse-content">
          <p  className='text-[midnightblue]'  > The useEffect Hook allows you to perform side effects in your components.

Some examples of side effects are: fetching data, directly updating the DOM, and timers.
          </p>
        </div>
      </div>

    </div>
  )
}

export default FAQ
