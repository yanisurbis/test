export default errorStatusCode => {
  switch (errorStatusCode) {
    case 0:
      return "Please, check your network connection."
    case 404:
      return "Please, check username, can't find anything."
    // TODO:? good or bad, null?
    case null:
      return null
    default:
      return "Something has happened, please, try again later."
  }
}
