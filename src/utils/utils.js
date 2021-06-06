
export const updateObjectInArr = (items, itemId, objPropName, newObjProp) => {
  return items.map(el => (el[objPropName] === itemId) ? {...el, ...newObjProp} :  el)
}