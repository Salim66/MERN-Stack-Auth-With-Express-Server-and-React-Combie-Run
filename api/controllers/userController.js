
import bcrypt from 'bcryptjs';
import User from '../models/User.js';
import createError from './errorController.js';


/**
 * @access public
 * @route api/user 
 * @method GET
 */
export const getAllUser = async (req, res, next) => {
    
    try {
        
        const users = await User.find();
        res.status(200).json(users);

    } catch (error) {
        next(error);
    }

} 

/**
 * @access public
 * @route api/user 
 * @method POST
0 */
export const createUser = async (req, res, next) => {

    // make hash password
    const salt = await bcrypt.genSalt(10);
    const hash_pass = await bcrypt.hash(req.body.password, salt);

    try {
        
        const user = await User.create({ ...req.body, password: hash_pass });
        res.status(200).json(user);

    } catch (error) {
        next(error);
    }

} 

/**
 * @access public 
 * @route api/user/id 
 * @method GET
 */
export const getSingleUser = async (req, res, next) => {

    try {
        
        let { id } = req.params;

        const user = await User.findById(id);

        if(!user){
            return next(createError(404, 'Single User Not Found!'));
        }

        if(user){
            res.status(200).json(user);
        }


    } catch (error) {
        next(error);
    }

}

/**
 * @access public 
 * @route api/user/id
 * @method PUT
 */
export const updateUser = async (req, res, next) => {
    
    try {
        
        let { id } = req.params;

        const user = await User.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(user);

    } catch (error) {
        next(error);
    }

}

/**
 * @access public 
 * @route api/user/id 
 * @method DELETE 
 */
export const deleteUser = async (req, res, next) => {
    
    try {
        
        let { id } = req.params;

        const user = await User.findByIdAndDelete(id);
        res.status(200).json(user);

    } catch (error) {
        next(error);
    }


}


// Login User

/**
 * @access public
 * @route api/user/login 
 * @method POST
0 */
export const userLogin = async (req, res, next) => {

    res.send('Logged in user');

} 


/**
 * @access public
 * @route api/user/register
 * @method POST
0 */
export const userRegister = async (req, res, next) => {

    // make hash password
    const salt = await bcrypt.genSalt(10);
    const hash_pass = await bcrypt.hash(req.body.password, salt);

    try {
        
        const user = await User.create({ ...req.body, password: hash_pass });
        res.status(200).json(user);

    } catch (error) {
        next(error);
    }

} 