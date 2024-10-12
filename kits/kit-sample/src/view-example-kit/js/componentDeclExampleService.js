import { eventBus } from '@headless/interop';

export const increment = (value) => {
  eventBus.publish( {
    topic: 'notifyUpdateComponentDeclExample',
    payload: {
        count: value + 1
    }
  });
  return value + 1;
};

export const loadComponent = () => {
    console.log('ComponentDeclExample loaded');
    return 23
}

export const updateComponent = () => {
    console.log('ComponentDeclExample updated');
}

export const unloadComponent = () => {
    console.log('ComponentDeclExample unloaded');
}

export const notifyUpdate = () => {
    console.log('Notification: value has been updated!');
}