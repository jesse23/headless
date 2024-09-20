# Headless UI
Try to build UI framework in a headless way, so that it can be used in any environment.

# Key Concepts
## ViewModel
ViewModel is a class that contains all the data and logic for a view. It is a headless class that can be

### Data
- Data is the state of the ViewModel.
- Data update is immutable.
- Data update will be independent of the render cycle.

### Props
- Props is the input of the ViewModel.
- Props value should be immutable.
- Props value depends on the render cycle.

### Dispatch
- Dispatch is a function that update data and trigger re-render.
- Dispatch will update data/ctx immediately, but the re-render might be batched.

### Action
- Action is a function that take input from data, run with application logic, and dispatch the result back to data.
- As one solution of data flow, action can fetch data from event and props too
- Bach Action will be executed in sequence except for event action
- Action has no responsibility to guarantee the input is up to date.
- If Action has input from props, data, ctx and eventData, the best practice will be:
  - Always store eventData to data explicitly
  - Then process the calculation by onUpdate hook

### Hook
- Hook is callback function that can be used to listen to ViewModel lifecycle.
- Input in hook is guaranteed to be up to date.

## Ctx
- Ctx is the global state for all the ViewModel. Dispatch to Ctx will trigger re-render for root level of the ViewModel.
- Ctx update should be immutable.

## Component Tree
- Usually when Parent Component gets rerendered, all the children component will also get rerendered. 
- The time to render is not guaranteed since the view framework will decide the batch and the schedule, but the end result is fixed.

## EventBus
- EventBus is a global event system that can be used to communicate between ViewModel.

### Event Publish
- Event Publish will be done immediately after the event is triggered.
- Since event subscription is not guaranteed, if a batch of event is getting published, there is no difference between in sequence or in parallel.
- Event Publish could carry data, the data will be the latest

### Event Subscription
- Event Subscription will be done as soon as component is mounted.
- It is not guaranteed that the event will be listened right after it is getting mounted.

### Event Handler
- Event Handler will trigger an action in ViewModel.
- Event Handler could be triggered immediately, no need to wait for the next render cycle. But handler shouldn't assume the timing for it is getting triggered.
- Given Action can take data from event, props, or data, the event data and ctx will be the latest, data and prop might be the stale value.
  - If event is triggered by current component, the data will be the latest too but we shouldn't assume that.
- If Event Handler has closure, the state of the closure should be guaranteed by the developer.

# Advance Concepts
### DataProvider
DataProvider is just a specific Data + Action that as a sub scope to support complex View like Table.

### Atomic Data
Atomic Data is a pair of data and dispatch which will be passed remotely.

# Advance Components
## Command Bar
- For a given page frame, there will be limited number of command bar.
- Naturally, command bar will be a singleton and will be in a contribution model.

## Table
- Most of the Table will need DOM manipulation.
- Table, for custom cell, will need to be a component again.

## Popup / Dialog
- Popup / Dialog will need certain DOM manipulation, or special web framework API like createPortal.
- The component hierarchy for Popup / Dialog will be different from the DOM hierarchy.
- DOM Reference should be up to date along with the web framework update.
- DOM Event Sequence should be coexist with view model lifecycle and web framework lifecycle.

## Splitter
- Splitter component usually will need to know the previous and next component.
- The best practice will be the container approach, but from usability perspective, Approach like below might be more convenient with caveats:
```jsx
<PreviousComponent />
<Splitter />
<NextComponent />
```

## Form
- Most of the Form practice will be directly mapping from a View Model Object.
- There will be very few requirement for using TextBox like widget alone.
- Given a field, it will need a Property Object to control all behavior in the field UX.