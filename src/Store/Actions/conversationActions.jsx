import uuid from 'react-uuid'

export const createConversation = (conversation, id) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore()
    const profile = getState().firebase.profile
    const authorId = getState().firebase.auth.uid
    const oldConversation = getState().firestore.data.projects[id].conversation
    const newConversation = {
      id: uuid(),
      comment: conversation,
      authorFirstName: profile.firstName,
      authorLastName: profile.lastName,
      authorId: authorId,
      createdAt: new Date(),
    }

    firestore
      .collection('projects')
      .doc(id)
      .set(
        {
          conversation: [...oldConversation, newConversation],
        },
        { merge: true }
      )
      .then(() => {
        dispatch({ type: 'CREATE_CONVERSATION', conversation })
      })
      .catch(err => {
        dispatch({ type: 'CREATE_CONVERSATION_ERROR', err })
      })
  }
}
