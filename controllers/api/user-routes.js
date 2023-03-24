const router = require('express').Router();
const { User } = require('../../models');

//See all users who have singed up to the page
router.get('/', async (req, res) => {
  try {
    const dbUserData = await User.findAll({
    });

    if (dbUserData.length > 0) {
      res.status(200).json({
        message: "These are the users",
        data: dbUserData
      });
    } else {
      res.status(200).json({
        message: "There are no users",
        data: []
      });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});


// Creates a new user by user name, email and the password and creates the session after adding the user
//The password is hashed in the Users Model File
router.post('/', async (req, res) => {
  try {
    const dbUserData = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.logged_in = true;

      res.status(200).json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


//Login function that checks the email and the password
//If the email and password are wrong, they inform the user
//If the email and password are correct, it informs the user they are logged in
router.post('/login', async (req, res) => {
  try {

    const dbUserData = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!dbUserData) {
      res.status(400).json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    const validPassword = await dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    req.session.save(() => {
      req.session.logged_in = true;
      console.log(
        '🚀 ~ file: user-routes.js ~ line 57 ~ req.session.save ~ req.session.cookie',
        req.session.cookie
      );

      res.status(200).json({ message: 'You are now logged in!' });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});



// Logout function that destroys the session 
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;