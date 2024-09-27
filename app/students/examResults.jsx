"use client";

import React from 'react';

export default function ExamResults({ examResults }) { 
  return (
    <div className="exam-results-container">
      <h2 className="exam-results-title">Sınav Sonuçları</h2>
      {examResults && examResults.length > 0 ? (
        examResults.map((result, index) => (
          <ul key={index} className="exam-results-list">
            {Object.entries(result).map(([subject, score]) => (
              <li key={subject} className={`exam-result-item ${score < 50 ? 'low-score' : ''}`}>
                <strong>{subject}</strong>: {score !== "not finalized" ? score : 'Henüz sonuçlanmadı'}
              </li>
            ))}
          </ul>
        ))
      ) : (
        <p className="no-exam-results">Sınav sonuçları bulunamadı.</p>
      )}
    </div>
  );
}
