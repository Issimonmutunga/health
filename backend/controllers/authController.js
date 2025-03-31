//BUSINESS LOGIC
const bycrypt = require(`bcryptjs`);
const jwt = require(`jsonwebtoken`);
const { validationResult } = require(`express-validator`);
const User = require(`../models/User`);

exports.register = async(req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors:errors.array() });
    
    try {
        const{ name, email, password} = req.body;

        //Check if user exists
        let user = await User.findOne({ where: { email }});
        if (user) return res.status(400).json({ msg: `User already exists`});

        //Hash password
        const salt = await bycrypt.genSalt(10);
        const hashedPassword = await bycrypt.hash(password, salt);

        //Create User
        user = await User.create({ name, email, password: hashedPassword });

        //Generate JWT token
        const token = jwt.sign({ id: user.id }, `your_jwt_secret`, { expiresIn: `1hr`});

        res.status(201).json({ token });
     } catch(error){
        console.error(error);
        res.status(500).send(`Server Error`);
     }
};

exports.login = async (req, res) => {
   const errors = validationResult(req);
   if (!errors.isEmpty()) return res.status(400).json({ errors:errors.array()});

   try {
      const { email, password } = req.body;
      
      //Check user existence
      const user = await User.findOne({ where: { email }});
      if (!user) return res.status(400).json({ msg: 'Invalid credentials '});

      //compare passwords
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials'});

      //Generate token
      const token = jwt.sign({ id: user.id }, 'your_jwt_secret',{ expiresIn: '1h'});
      res.json({ token });
   } catch (error) {
      console.error(error);
      res.status(500).send('Server error');
   }

};