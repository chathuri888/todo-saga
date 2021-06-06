export const setPriorityColor = (task) => {
  const colorValue =
    (task === 'low' && '#00bf9c') ||
    (task === 'med' && '#fcbd01') ||
    (task === 'high' && '#fe5162') ||
    (task === '' && '#d3d8dc')
  return colorValue
}

export const toUpperFristLetter = (task) => {
  return task.slice(0, 1).toUpperCase() + task.slice(1, task.length)
}
