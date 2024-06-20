const jwt = require('jsonwebtoken');
const User = require('../models/user');
const { hashPassword,comparePasswords,generate_random_pass } = require('../utils/auth_utils');


exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: 'email or password not provided' });
        }

        const user = await User.findOne({email:email})
        console.log(user)
        if (!user) {
            return res.status(401).json({ error: 'Invalid email ' });
        }

        // Check if the password is correct
        const isPasswordValid = comparePasswords(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Invalid password' });
        }

        // Generate and send a JWT token with 1 day expiry
        const token = jwt.sign({ userId: user.id,firstName:user.firstName, lastname:user.lastName, email:user.email}, process.env.SECRET_KEY, { expiresIn: '1d' });
        res.status(200).json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.register = async (req, res) => {
    try {
        const { email, password, firstName, lastName} = req.body;
        console.log(req.body)
        if (!email || !password || !firstName || !lastName) {
            return res.status(400).json({ error: 'One or more required fields are missing' });
        }



        // lower case the email and also trim all the white spaces
        const newEmail = email.toLowerCase().trim();

        // Check if the email is already taken
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ error: 'email is already taken' });
        }

        const hashedPassword = hashPassword(password);

        // Create a new user in the database
        const newUser = await User.create({
            email: newEmail,
            password: hashedPassword,
            firstName,
            lastName,
        });
        

        res.status(201).json({ message: 'Registration successful', user: newUser });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

exports.logout = (req, res) => {
    res.status(200).json({ message: 'Logout successful' });
};
