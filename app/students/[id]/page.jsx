"use client"
import { useState, useEffect } from 'react';
import StudentInfo from '../studentInfo';
import Attendance from '../attendance';
import PrivateNotes from '../privateNotes';
import studentsData from '../student.json';
import ExamResults from '../examResults';
import { useRouter } from 'next/navigation'; 



export default function StudentDetail({ params }) {
  const [student, setStudent] = useState(null);
  const [activeTab, setActiveTab] = useState('studentInfo'); 
  const { id } = params;
  const router = useRouter();

  useEffect(() => {
    const foundStudent = studentsData.find(student => student.id === parseInt(id));
    setStudent(foundStudent);
  }, [id]);

  if (!student) {
    return <p>Öğrenci verileri yükleniyor...</p>;
  }

  return (
    <div className="student-detail-container">
      <div className="sidebar">
        <ul>
          <li onClick={() => setActiveTab('studentInfo')}>İletişim Bilgileri</li>
          <li onClick={() => setActiveTab('attendance')}>Devamsızlık Bilgileri</li>
          <li onClick={() => setActiveTab('examResults')}>Not Bilgileri</li>
          <li onClick={() => setActiveTab('privateNotes')}>Özel Notlar</li>
        </ul>
        <button onClick={() => router.back()} className="back-button">
          Back
        </button>
      </div>

      <div className="content">
        <h1>{student.name}</h1>
        {activeTab === 'studentInfo' && <StudentInfo student={student} />}
        {activeTab === 'attendance' && <Attendance attendance={student.attendance} />}
        {activeTab === 'examResults' && <ExamResults examResults={student.examResults} />}
        {activeTab === 'privateNotes' && <PrivateNotes student={student} />}
      </div>
    </div>
  );
}
