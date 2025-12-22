
import React, { useState } from 'react';
import { QuizQuestion } from '../types';

interface QuizSectionProps {
  quizzes: QuizQuestion[];
  onComplete: (score: number) => void;
}

const QuizSection: React.FC<QuizSectionProps> = ({ quizzes, onComplete }) => {
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const handleSubmit = () => {
    let correctCount = 0;
    quizzes.forEach(q => {
      if (userAnswers[q.id] === q.correctAnswer) {
        correctCount++;
      }
    });
    const finalScore = Math.round((correctCount / quizzes.length) * 100);
    setScore(finalScore);
    setShowResult(true);
    onComplete(finalScore);
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="bg-gradient-to-r from-teal-600 to-emerald-600 p-6 text-white">
        <h3 className="text-xl font-bold flex items-center gap-3">
          <i className="fas fa-tasks"></i> Kiểm tra kiến thức
        </h3>
        <p className="text-teal-50 text-sm mt-1">Hoàn thành trên 80% để mở khóa bài học tiếp theo</p>
      </div>

      <div className="p-6 space-y-8">
        {quizzes.map((q, idx) => (
          <div key={q.id} className="space-y-4">
            <p className="font-semibold text-slate-800">
              Câu {idx + 1}: {q.question}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {q.options.map((opt, optIdx) => (
                <button
                  key={optIdx}
                  onClick={() => !showResult && setUserAnswers({ ...userAnswers, [q.id]: optIdx })}
                  className={`text-left p-4 rounded-xl border-2 transition-all ${
                    userAnswers[q.id] === optIdx
                      ? showResult
                        ? optIdx === q.correctAnswer
                          ? 'border-emerald-500 bg-emerald-50 text-emerald-700'
                          : 'border-rose-500 bg-rose-50 text-rose-700'
                        : 'border-teal-500 bg-teal-50 text-teal-700'
                      : 'border-slate-100 hover:border-teal-200 text-slate-600'
                  }`}
                >
                  <span className="inline-block w-8 font-bold">{String.fromCharCode(65 + optIdx)}.</span>
                  {opt}
                </button>
              ))}
            </div>
          </div>
        ))}

        {!showResult ? (
          <button
            onClick={handleSubmit}
            disabled={Object.keys(userAnswers).length < quizzes.length}
            className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-4 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-teal-100"
          >
            Nộp bài kiểm tra
          </button>
        ) : (
          <div className={`p-6 rounded-2xl text-center space-y-3 ${score >= 80 ? 'bg-emerald-50' : 'bg-rose-50'}`}>
            <p className="text-lg font-bold">Kết quả của bạn: {score}%</p>
            {score >= 80 ? (
              <p className="text-emerald-700 font-medium">🎉 Tuyệt vời! Bạn đã mở khóa bài học tiếp theo.</p>
            ) : (
              <div className="space-y-3">
                <p className="text-rose-700 font-medium">Rất tiếc, bạn cần đạt ít nhất 80% để vượt qua.</p>
                <button 
                  onClick={() => setShowResult(false)}
                  className="bg-white text-slate-800 px-6 py-2 rounded-full border border-slate-200 font-semibold shadow-sm hover:bg-slate-50"
                >
                  Thử lại
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizSection;
