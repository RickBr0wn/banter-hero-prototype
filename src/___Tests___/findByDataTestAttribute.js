export const findByDataTestAttribute = (component, attribute) =>
  component.find(`[data-test='${attribute}']`)
