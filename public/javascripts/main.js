const input = document.getElementById('search-input')
const url_link = document.getElementById('url-link')
const form = document.getElementById('search-form')
const copyButton = document.getElementById('copy-btn')
const copyText = document.getElementById('copy-link')

if (form) {
  form.addEventListener('submit', (event) => {
    const re = new RegExp('^(http:\\/\\/|https:\\/\\/)(.+)', 'i')
    const str = input.value
    if (!re.test(str)) {
      event.preventDefault()
      event.stopPropagation()
      alert('請輸入正確格式')
    } else {
      url_link.value = re.exec(str)
    }
  })
}

if (copyButton) {
  copyButton.addEventListener('click', () => {
    navigator.clipboard.writeText(copyText.innerHTML).then(() => {
      alert('copied')
    })
  })
}




