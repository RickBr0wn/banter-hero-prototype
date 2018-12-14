import { CREATE_PROJECT, CREATE_PROJECT_ERROR } from '../../Constants/projects'

const initState = {
  projects: [
    {
      id: '1',
      title: 'My first random banter',
      body:
        'Id anim veniam id exercitation cupidatat consectetur velit do quis elit et laborum id in. ',
    },
    {
      id: '2',
      title: 'My second random banter',
      body:
        'Consequat in laborum eiusmod cillum culpa eu aliqua reprehenderit dolore laboris sint do deserunt eu.',
    },
    {
      id: '3',
      title: 'My third random banter',
      body:
        'Minim fugiat Lorem aute consequat Lorem ea Lorem labore et eu elit.',
    },
  ],
}

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case CREATE_PROJECT:
      console.log('Created project: ', action.project)
      return state
    case CREATE_PROJECT_ERROR:
      console.log('Create project error: ', action.err)
      return state
    default:
      return state
  }
}

export default projectReducer
