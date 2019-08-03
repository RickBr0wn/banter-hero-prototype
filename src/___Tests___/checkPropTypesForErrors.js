import checkPropTypes from 'check-prop-types'

export const checkPropTypesForErrors = (component, expectedProps) =>
  // eslint-disable-next-line react/forbid-foreign-prop-types
  checkPropTypes(component.propTypes, expectedProps, 'props', component.name)
