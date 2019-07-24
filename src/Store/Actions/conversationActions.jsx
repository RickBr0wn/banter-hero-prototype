export const createConversation = (conversation, id) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore()
    const profile = getState().firebase.profile
    const authorId = getState().firebase.auth.uid
    const oldConversation = getState().firestore.data.projects[id].conversation
    const newConversation = {
      comment: conversation,
      authorFirstName: profile.firstName,
      authorLastName: profile.lastName,
      authorId: authorId,
      createdAt: new Date(),
    }
    firestore
      .collection('projects')
      .doc(id)
      .set({
        conversation: [...oldConversation, newConversation],
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: authorId,
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({ type: 'CREATE_CONVERSATION', conversation })
      })
      .catch(err => {
        dispatch({ type: 'CREATE_CONVERSATION_ERROR', err })
      })
  }
}
