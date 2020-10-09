const express = require('express');

const app = express();

app.use(express.static('./dist/project-name'));

app.get('/*', function (req, res) {
  res.sendFile('index.html', { root: 'dist/project-name' }
  );
});

app.listen(process.env.PORT || 8080, () => {
    console.log(`Server is running on port ${PORT}.`);
}); 

