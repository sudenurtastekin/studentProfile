export default function StudentInfo({ student }) {
  if (!student) {
    return <p className="loading-message">Veri yükleniyor...</p>; 
  }

  return (

    <div className="student-info-container">
      <h2 className="student-info-title"> Öğrenci Bilgileri </h2>
      <p className="student-info-item"><strong>Öğrenci Adı:</strong> <span>{student.name}</span></p>
      <p className="student-info-item"><strong>Öğrenci Numarası:</strong> <span>{student.studentNumber}</span></p>
      <p className="student-info-item"><strong>Email:</strong> <span>{student.email}</span></p>
      <p className="student-info-item"><strong>Telefon:</strong> <span>{student.phone}</span></p>
    </div>
  );
}
