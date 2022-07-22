

/**
 * @access public
 * @route api/student 
 * @method GET
 */
export const getAllStudents = (req, res) => {
    res.send('Get All Students')
} 

/**
 * @access public
 * @route api/student 
 * @method POST
0 */
export const createStudent = (req, res) => {
    res.send('Create Student');
} 

/**
 * @access public 
 * @route api/student/id 
 * @method GET
 */
export const getSingleStudent = (req, res) => {
    res.send('Get Single Student');
}

/**
 * @access public 
 * @route api/student/id
 * @method PUT
 */
export const updateStudent = (req, res) => {
    res.send('Update Student');
}

/**
 * @access public 
 * @route api/student/id 
 * @method DELETE 
 */
export const deleteStudent = (res, req) => {
    res.send('Delete Student');
}