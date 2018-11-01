const baseUrl = 'http://tic-tac-toe.wdibos.com'

const onSignUpFromApi = function (id) {
  return $.ajax({
    url: baseUrl + `/sign-up/${id}`,
    method: 'POST',
    data: createObject
  })
}
