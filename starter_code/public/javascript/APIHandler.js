class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
    // this.instance = axios.create({
    //   baseUrl: this.BASE_URL}
    // )

  }

  getFullList () {
    return axios.get(this.BASE_URL)
    .then( response => {
      response.data
    })
  }

  getOneRegister (id) {
    return axios.get(this.BASE_URL + id)
    .then( response => {
      console.log('DATA',response.data);
      response.data
    })
  }

  createOneRegister () {
    return axios.post(this.BASE_URL, characterInfo)
    .then(response =>{
      response.data})

    .catch(error => console.log(error))

  }

  updateOneRegister () {

  }

  deleteOneRegister () {

  }
}

