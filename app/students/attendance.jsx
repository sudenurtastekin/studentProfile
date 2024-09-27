export default function Attendance({ attendance }) {
  if (!attendance || attendance.length === 0) {
    return <p>Devamsızlık kaydı bulunmamaktadır.</p>;
  }

  const absenceCount = attendance.filter(day => !day.isAttended).length; 
  const showAttendance = true; 

  return (
    <>
      <div>
        <h2>Devamsızlık Kayıtları</h2>
        {showAttendance && (
          <div className="accordion-content">
            <ul>
              {attendance.map((day, index) => (
                <li key={index}>
                  {day.date}: {day.isAttended ? 'Katıldı' : 'Katılmadı'}
                </li>
              ))}
            </ul>
            <div>Toplam devamsızlık: <strong>{absenceCount} gün</strong></div>

            {absenceCount >= 5 && (
              <div className="alert alert-warning">
                Öğrenci 5 günden fazla devamsızlık yapmıştır! 
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}
