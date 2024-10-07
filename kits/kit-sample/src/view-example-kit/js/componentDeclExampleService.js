export const increment = (value) => {
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