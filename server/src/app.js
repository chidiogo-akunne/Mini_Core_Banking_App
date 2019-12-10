require('dotenv/config')
import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from'cookie-parser';
import logger from'morgan';
import graphqlHTTP from 'express-graphql';
import mongoose from 'mongoose';
import cors from 'cors'
import schema from './schema/schema';

import indexRouter from'./routes/index';
import usersRouter from'./routes/users';
import adminRouter from './routes/admin';

const app = express();

//connect to mongodb atlas
mongoose.connect("mongodb+srv://Chidiogo:65572449@mini-banking-app-nfqoe.mongodb.net/test?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true
})


app.listen(5000, () => {
  console.log('now listening for request on port 5000')
})

// view engine setup
app.set('views', path.join(__dirname, '../', 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/admin', adminRouter);

app.use('/graphql', graphqlHTTP({
  schema, 
  graphiql: true
}))

// catch 404 and forward to error handler
app.use(function(_req, _res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, _next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app;
