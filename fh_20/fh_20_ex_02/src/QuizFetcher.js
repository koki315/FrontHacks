const axios = require('axios');

const API_URL = 'https://opentdb.com/api.php?amount=10&type=multiple'
class QuizFetcher {

  
  constructor(){
    this.results = [];
  }

  static async fetch() {
      const response = await axios.get(API_URL);
      const data = response.data;
      // console.log(data);
      return data;
  }
};


module.exports = QuizFetcher;