const input = document.querySelector('input')
const form = document.querySelector('form')
const copyButton = document.getElementById('copy-btn')
const copyText = document.getElementById('copy-link').innerHTML

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

if (copyButton) {
  copyButton.addEventListener('click', () => {
    navigator.clipboard.writeText(copyText).then(() => {
      console.log(copyText)
      alert('copied')
  })
  })
}




