## Specs

**Redux Toolkit** is used for _state management_ in the application. The *redux* folder contains all the necessary files for setting up and configuring the _Redux_ store using _Redux Toolkit_, including **slices, actions, thunks and selectors**.

## Components

- **Redux Toolkit** provides a simpler and more opinionated way of using _Redux_, which can help to *reduce* boilerplate code and *improve* developer productivity. It also includes several useful _features out of the box_, such as _Immer_ for immutable state updates and _Redux DevTools_ for debugging.
- **The Redux store** is initialized in the _createStore.js_ file, which combines all the _slices and middleware_. The store is then passed to the _top-level component_ of the application using the _Provider_ component from the "_react-redux_ library.
- **Slices** are a simpler way to define _reducers and actions_ together, as they combine both in a _single file_.
-**Actions** are functions that are dispatched to the _Redux store_ to update the _state_,
-**Reducers** specify how the _state_ should be updated in response to an _action_. 
-**Selectors** are _functions_ that _retrieve_ specific pieces of state from the _store_.
-**Thunk** is a _function_ that allows for _delayed_ evaluation of an action. It can be used to _handle asynchronous logic_, such as fetching data from an API, before dispatching an action to the _Redux store_.











