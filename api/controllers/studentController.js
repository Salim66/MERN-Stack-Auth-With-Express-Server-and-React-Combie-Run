import Student from "../models/Student.js";
import bcrypt from 'bcryptjs';


/**
 * @access public
 * @route api/student 
 * @method GET
 */
export const getAllStudents = async (req, res, next) => {
    
    try {
        
        const students = await Student.findd();
        res.status(200).json(students);

    } catch (error) {
        next(error);
    }

} 

/**
 * @access public
 * @route api/student 
 * @method POST
0 */
export const createStudent = async (req, res) => {

    // make hash password
    const salt = await bcrypt.genSalt(10);
    const hash_pass = await bcrypt.hash(req.body.password, salt);

    try {
        
        const student = await Student.create({ ...req.body, password: hash_pass });
        res.status(200).json(student);

    } catch (error) {
        next(error);
    }

} 

/**
 * @access public 
 * @route api/student/id 
 * @method GET
 */
export const getSingleStudent = async (req, res) => {

    try {
        
        let { id } = req.params;

        const student = await Student.findById(id);
        res.status(200).json(student);

    } catch (error) {
        next(error);
    }

}

/**
 * @access public 
 * @route api/student/id
 * @method PUT
 */
export const updateStudent = async (req, res) => {
    
    try {
        
        let { id } = req.params;

        const student = await Student.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(student);

    } catch (error) {
        next(error);
    }

}

/**
 * @access public 
 * @route api/student/id 
 * @method DELETE 
 */
export const deleteStudent = async (req, res) => {
    
    try {
        
        let { id } = req.params;

        const student = await Student.findByIdAndDelete(id);
        res.status(200).json(student);

    } catch (error) {
        next(error);
    }


}