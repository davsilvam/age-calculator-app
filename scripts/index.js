// selecionando inputs na DOM
let inputDay = document.querySelector('#day')
let inputMonth = document.querySelector('#month')
let inputYear = document.querySelector('#year')

// selecionando os resultados na DOM
let resultYears = document.querySelector('#result-years')
let resultMonths = document.querySelector('#result-months')
let resultDays = document.querySelector('#result-days')

// função para calcular a idade
function calculateAge() {
  // declaração dos anos, meses e dias de vida do usuários, sem valor inicial
  let yearsOld, monthsOld, daysOld

  // captura do ano, mês e dia atual
  const currentYear = new Date().getFullYear()
  const currentMonth = new Date().getMonth() + 1
  const currentDay = new Date().getDate()

  // selecionando o grupo de cada input
  const wrappers = document.querySelectorAll('.card form .wrapper')

  wrappers.forEach((wrapper) => {
    // limpando erros
    wrapper.classList.remove('error')
    wrapper.querySelector('.error-message').textContent = ''
  })

  // verificando se o input de dia está vazio, se sim, ele ativa um erro e para a função no return
  if (inputDay.value === '') {
    inputDay.parentElement.classList.add('error')
    inputDay.parentElement.querySelector('.error-message').textContent =
      'The field is required'

    return
  }

  // verificando se o input de mês está vazio, se sim, ele ativa um erro e para a função no return
  if (inputMonth.value === '') {
    inputMonth.parentElement.classList.add('error')
    inputMonth.parentElement.querySelector('.error-message').textContent =
      'The field is required'

    return
  }

  // verificando se o input de ano está vazio, se sim, ele ativa um erro e para a função no return
  if (inputYear.value === '') {
    inputYear.parentElement.classList.add('error')
    inputYear.parentElement.querySelector('.error-message').textContent =
      'The field is required'

    return
  }

  // verificando se o input de dia é um valor invalido (acima de 31 ou 0 e negativos), se sim, ele ativa um erro e para a função no return
  if (inputDay.value > 31 || inputDay.value <= 0) {
    inputDay.parentElement.classList.add('error')
    inputDay.parentElement.querySelector('.error-message').textContent =
      'Must be a valid day'

    return
  }

  // verificando se o input de mês é um valor invalido (acima de 12 ou 0 e negativos), se sim, ele ativa um erro e para a função no return
  if (inputMonth.value > 12 || inputMonth.value <= 0) {
    inputMonth.parentElement.classList.add('error')
    inputMonth.parentElement.querySelector('.error-message').textContent =
      'Must be a valid month'

    return
  }

  // verificando se o input de ano é um valor invalido (ano acima do ano atual), se sim, ele ativa um erro e para a função no return
  if (inputYear.value > currentYear) {
    inputYear.parentElement.classList.add('error')
    inputYear.parentElement.querySelector('.error-message').textContent =
      'Must be in the past'

    return
  }

  // calculo de diferença dos dias atuais para sua data de nascimento
  yearsOld = currentYear - inputYear.value
  monthsOld = currentMonth - inputMonth.value
  daysOld = currentDay - inputDay.value

  // cálculos doidos que não sei explicar
  if (inputDay.value > currentDay) {
    daysOld = 31 - (inputDay.value - currentDay)
    monthsOld--
  }

  if (monthsOld < 0) {
    monthsOld = 11
    yearsOld--
  }

  if (monthsOld == 12) {
    monthsOld = 0
    yearsOld++
  }

  if (inputMonth.value > currentMonth) {
    monthsOld = 12 - (inputMonth.value - currentMonth)
  }

  // inserção do resultado na DOM
  resultYears.innerText = yearsOld
  resultMonths.innerText = monthsOld
  resultDays.innerText = daysOld
}
