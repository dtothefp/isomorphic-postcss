/**
 * Create action constants and ensure uniqueness by
 * putting in a namespace
 *
 * ex.
 * ACTION: NAMESPACE_ACTION
 *
 * @param {string} prefix the html tag name
 * @param {array} actions
 * @returns {object}
 */
function mirror(prefix, actions) {
  return actions.reduce((acc, action) => ({
    ...acc,
    [action]: `${prefix.toUpperCase()}_${action}`
  }), {});
}

export const init = mirror('init', [
  'PENDING',
  'SUCCESS',
  'ERROR'
]);
