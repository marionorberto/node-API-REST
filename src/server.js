/* eslint-disable eol-last */
import app from './app';

require('dotenv').config();

app.listen(process.env.PORT, () => {
  console.log(`http://localhost:${process.env.PORT}`);
  console.log(`server is running at port:${process.env.PORT}`);
});
