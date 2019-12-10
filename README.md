# Mini_Core_Banking_App



Run the server with

```bash
cd server
yarn
yarn tsc -w
yarn start
```

---

Then run the client

```bash
cd client
yarn
yarn start
```

---

You can choose to create an offline or online database but it has to be indicated in bin/www

```javascript
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true
});
```

---

- API Endpoints

  - Create account

  `/admin/createaccount method: 'POST'`

  - Close account

  `/admin/closeaccount method: 'PATCH'`

  - Get all accounts

  `/admin/allaccounts method: 'GET'`

  - Admin Login

  `/admin/login method: 'POST'`

  - Admin Signup

  `/admin/signup method: 'POST'`

The client side was generated using `create-react-app`