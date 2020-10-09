const express = require('express');

const app = express();

app.use(express.static('./dist/angular-todolist'));

app.get('/*', function (req, res) {
  res.sendFile('index.html', { root: 'dist/angular-todolist' }
  );
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

