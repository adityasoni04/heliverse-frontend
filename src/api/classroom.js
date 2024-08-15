import axios from 'axios';

export const createClassroom = async (classroomData) => {
    try {
        const response = await axios.post('https://heliverse-backend-09l6.onrender.com/api/v1/principal/create-classroom', classroomData, {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        return response.data;
    } catch (error) {
        throw new Error('Failed to create classroom');
    }
};

export const assignTeacherToClassroom = async (assignmentData) => {
    try {
        const response = await axios.post('https://heliverse-backend-09l6.onrender.com/api/v1/principal/assign-teacher', assignmentData, {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        return response.data;
    } catch (error) {
        throw new Error('Failed to assign teacher to classroom');
    }
};

export const getClassrooms = async () => {
    try {
        const response = await axios.get('https://heliverse-backend-09l6.onrender.com/api/v1/principal/classrooms', {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch classrooms');
    }
};

export const getClassroomTimetable = async () => {
    try {
        const response = await axios.get('https://heliverse-backend-09l6.onrender.com/api/v1/teacher/timetable', {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch timetable');
    }
};
