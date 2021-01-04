const axios = require('axios');


(async () => {
  const response = await axios.get('https://opentdb.com/api.php?amount=10&type=multiple');
  console.log(`クイズデータ :`, response.data.results);
})();