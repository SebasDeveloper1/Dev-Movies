const fs = require('fs');

fs.writeFileSync(
  './.env',
  `API_URL=${process.env.API_URL}\nAPI_KEY=${process.env.API_KEY}\nAPI_TRENDING=${process.env.API_TRENDING}\nAPI_CATEGORIES=${process.env.API_CATEGORIES}\nAPI_DISCOVER=${process.env.API_DISCOVER}\nAPI_SEARCH=${process.env.API_SEARCH}\nAPI_MOVIE_DETAIL=${process.env.API_MOVIE_DETAIL}\nAPI_MOVIE_RECOMENDATIONS=${process.env.API_MOVIE_RECOMENDATIONS}\nAPI_MOVIE_VIDEO=${process.env.API_MOVIE_VIDEO}\n`
);
