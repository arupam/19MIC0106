const express = require('express');
const app = express();

const words = ['bonfire', 'cardio', 'case', 'character', 'bonsai','apple','banana', 'carrot', 'dog', 'elephant', 'flower', 'guitar', 'house', 'ice cream', 'jacket', 'kite', 'lemon', 'monkey', 'notebook', 'orange'];

app.get('/prefixes', (req, res) => {
  const keywords = req.query.keywords.split(',');
  console.log(keywords);
  const results = []; // to store response

  keywords.forEach(keyword => {
    const prefixObj = { keyword, status: 'not_found', prefix: 'not_applicable' };
    
    if (words.includes(keyword)) {
    
      for (let i = 1; i <= keyword.length; i++) {
        const prefix = keyword.substring(0, i);

        if (words.filter(w => w.startsWith(prefix)).length === 1) {
          prefixObj.status = 'found';
          prefixObj.prefix = prefix;
          break;
        }
      }
    }

    results.push(prefixObj);
  });

  res.json(results);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
