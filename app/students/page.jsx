"use client"
import { useState } from 'react';
import Link from 'next/link';
import ClassData from './student.json';
import ClassCategories from './classCategories.json';

export default function Students() {
  const [selectedClass, setSelectedClass] = useState('');
  
  const handleChange = (e) => {
    setSelectedClass(e.target.value);
  };

  const filteredStudents = selectedClass
    ? ClassData.filter((student) => student.classId === parseInt(selectedClass))
    : ClassData; 

  return (
    <div className="student-list-container">
      <select value={selectedClass} onChange={handleChange}>
        <option value="">Tüm Sınıflar</option>
        {ClassCategories.map((classCategory) => (
          <option key={classCategory.id} value={classCategory.id}>
            {classCategory.name}
          </option>
        ))}
      </select>

      <ul className="student-list">
        {filteredStudents.length > 0 ? (
          filteredStudents.map((student) => (
            <li key={student.id} className="student-item">
              <Link href={`/students/${student.id}`}>
                <button className="student-link">{student.name}</button>
              </Link>
            </li>
          ))
        ) : (
          <p>Bu sınıfa ait öğrenci bulunamadı.</p>
        )}
      </ul>
    </div>
  );
}
