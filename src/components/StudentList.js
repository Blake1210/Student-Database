import React, { useState } from 'react';
import { useStudentContext } from '../utils/StudentContext';

export default function studentList() {
    const {students, addStudent, removeStudent, courses } = useStudentContext();
    const [newStudentName, setNewStudentName] = useState('');
    const [newStudentCourse, setNewStudentCourse] = useState('');
}