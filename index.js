const submitData = async () => {
  let firstNameDOM = document.querySelector('input[name=firstname]')
  let lastNameDOM = document.querySelector('input[name=lastname]')
  let ageDOM = document.querySelector('input[name=age]')

  let genderDOM = document.querySelector('input[name=gender]:checked')
  let interestDOMs = document.querySelectorAll('input[name=interests]:checked')

  let descriptionDOM = document.querySelector('textarea[name=description]')

  let messageDOM = document.getElementById('message')
  
  let interest = ''

  for (let i = 0; i < interestDOMs.length; i++) {
    interest += interestDOMs[i].value
    if (i != interestDOMs.length - 1) {
      interest += ', '
    }
  }

  let userData = {
    firstname: firstNameDOM.value,
    lastname: lastNameDOM.value,
    age: ageDOM.value,
    gender: genderDOM.value,
    description: descriptionDOM.value,
    interests: interest
  }

  console.log('submit data', userData)

  try {
    const response = await axios.post('http://localhost:8000/users',userData)
    console.log('response', response.data)
    
    messageDOM.innerText='save complete'
    messageDOM.className='message success'
  } catch (error){
    if(error.response){
      console.log(error.response.data.message)
    }
    messageDOM.innerText='save not complete'
    messageDOM.className='message danger'
  }

}