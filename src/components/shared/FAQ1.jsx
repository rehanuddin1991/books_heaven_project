import React from 'react'

const FAQ1 = () => {
  return (
    <div>
        <div class="overflow-x-auto">
  <table class="table">
     
    <thead>
      <tr>
        <th>Serial</th>
        <th>Question</th>
        <th>Answer</th>
        
      </tr>
    </thead>
    <tbody>
      
      <tr>
        <th>1</th>
        <td>What is React.js and Explain the concept of components in React?</td>
        <td>React is a JavaScript library for building single-page interfaces.React allows us to
            create reusable UI components. <br />
            <span className='text-[indigo]'>
              Components are like functions that return HTML elements.Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML.


            </span></td>
         
      </tr>

      <tr className='bg-[darkcyan] text-[white]'>
        <th>2</th>
        <td>What is JSX in React, and how does it work? </td>
        <td> JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement()  and/or appendChild() methods.

JSX converts HTML tags into react elements.</td>
         
      </tr>

      <tr>
        <th>3</th>
        <td>What is the Virtual DOM, and how does React use it to optimize performance? 
        </td>
        <td>React JS Virtual DOM is an in-memory representation of the DOM. DOM refers to the Document Object Model that represents the content of XML or HTML documents as a tree structure so that the programs can be read, accessed and changed in the document structure, style, and content.
            <br />A component can contain a state. Whenever the state of any component is changed react updates its Virtual DOM tree. Though it may sound like it is ineffective the cost is not much significant as updating the virtual DOM doesn’t take much time.

            React maintains two Virtual DOM at each time, one contains the updated Virtual DOM and one which is just the pre-update version of this updated Virtual DOM. Now it compares the pre-update version with the updated Virtual DOM and figures out what exactly has changed in the DOM like which components have been changed. This process of comparing the current Virtual DOM tree with the previous one is known as ‘diffing’. Once React finds out what exactly has changed then it updates those objects only, on real DOM.
          </td>
         
      </tr>


      <tr className='bg-orange-600 text-[white] '>
        <th>4</th>
        <td>  Explain the concept of  props  in React and how they are used?
        </td>
        <td> React Props are like function arguments in JavaScript and attributes in HTML.

To send props into a component, use the same syntax as HTML attributes: </td>
         
      </tr>


      <tr>
        <th>5</th>
        <td> What is "state" in React, and how does it differ from props? 
        </td>
        <td> The React state allows us to hold data within a function component.
    <br />
    The key difference between state and props is that state is managed within a component, while props are passed from a parent component to a child component. State is used to manage internal component data, while props are used to pass data from a parent component to a child component.

         </td>
         
      </tr>


      <tr className='bg-[darkcyan] text-[white]'>
        <th>6</th>
        <td>Explain the useState hook and provide an example of how it is used 
        </td>
        <td>  The React useState Hook allows us to track state in a function component.

State generally refers to data or properties that need to be tracking in an application. 
<br />
example <br />
const [data, setData]=useState([]) <br />
function() setData(data+5) <br />
print data  <br /> ===result will be 5 each time the function will call data will increment with 5.
 
<br /> </td>
         
      </tr>

      <tr>
        <th>7</th>
        <td> What is the purpose of the useEffect hook in React, and when would you use it? 
        </td>
        <td> The useEffect Hook allows you to perform side effects in your components.

Some examples of side effects are: fetching data, directly updating the DOM, and timers. when we need to render if an array changed or we need to set timer or we need to fetch data from server we should use 
useEffect. if we mentioned dependency array useEffect will render based on given array. </td>
         
      </tr>
     
       
    </tbody>
  </table>
</div>
      
    </div>
  )
}

export default FAQ1
