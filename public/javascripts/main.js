const input = document.querySelector('input')
const form = document.querySelector('form')

if (form) {
  form.addEventListener('submit', (event) => {
    const re = new RegExp('^(http:\\/\\/|https:\\/\\/)[\\d\\w]{1,}', 'i')
    const str = input.value
    if (!re.test(str)) {
      event.preventDefault()
      event.stopPropagation()
      alert('請輸入正確格式')
    }
  })
}





