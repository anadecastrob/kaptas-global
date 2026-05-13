// shim para prop-types usado pelo react-simple-maps
const PropTypes = {
  any: null,
  array: null,
  bool: null,
  func: null,
  number: null,
  object: null,
  string: null,
  symbol: null,
  node: null,
  element: null,
  elementType: null,
  instanceOf: () => null,
  oneOf: () => null,
  oneOfType: () => null,
  arrayOf: () => null,
  objectOf: () => null,
  shape: () => null,
  exact: () => null,
  checkPropTypes: () => null,
  resetWarningCache: () => null,
};
PropTypes.isRequired = null;
export default PropTypes;
