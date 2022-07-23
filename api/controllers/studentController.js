import Student from "../models/Student.js";


/**
 * @access public
 * @route api/student 
 * @method GET
 */
export const getAllStudents = async (req, res) => {
    
    try {
        
        const students = await Student.find();
        res.status(200).json(students);

    } catch (error) {
        console.log(error);
    }

} 

/**
 * @access public
 * @route api/student 
 * @method POST
0 */
export const createStudent = async (req, res) => {

    try {
        
        const student = await Student.create(req.body);
        res.status(200).json(student);

    } catch (error) {
        console.log(error);
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
        console.log(error);
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
        console.log(error);
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
        console.log(error);
    }


}