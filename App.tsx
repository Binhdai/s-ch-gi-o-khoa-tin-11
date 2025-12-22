
import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Chatbot from './components/Chatbot';
import QuizSection from './components/QuizSection';
import { textbookData } from './data';
import { Lesson, UserProgress } from './types';

const App: React.FC = () => {
  const [selectedLesson, setSelectedLesson] = useState<Lesson>(textbookData[0].lessons[0]);
  const [progress, setProgress] = useState<UserProgress>(() => {
    const saved = localStorage.getItem('informatics_progress');
    return saved ? JSON.parse(saved) : { completedLessonIds: [], scores: {} };
  });

  useEffect(() => {
    localStorage.setItem('informatics_progress', JSON.stringify(progress));
  }, [progress]);

  const allLessons = textbookData.flatMap(c => c.lessons);
  
  const handleQuizComplete = (score: number) => {
    if (score >= 80) {
      setProgress(prev => ({
        ...prev,
        completedLessonIds: prev.completedLessonIds.includes(selectedLesson.id) 
          ? prev.completedLessonIds 
          : [...prev.completedLessonIds, selectedLesson.id],
        scores: { ...prev.scores, [selectedLesson.id]: score }
      }));
    }
  };

  const isLessonLocked = (lessonId: string) => {
    const currentIndex = allLessons.findIndex(l => l.id === lessonId);
    if (currentIndex === 0) return false;
    const prevLesson = allLessons[currentIndex - 1];
    return !progress.completedLessonIds.includes(prevLesson.id);
  };

  const handleNextLesson = () => {
    const currentIndex = allLessons.findIndex(l => l.id === selectedLesson.id);
    if (currentIndex < allLessons.length - 1) {
      setSelectedLesson(allLessons[currentIndex + 1]);
      window.scrollTo(0, 0);
    }
  };

  const currentChapter = textbookData.find(c => c.lessons.some(l => l.id === selectedLesson.id));

  return (
    <div className="flex flex-col md:flex-row h-screen overflow-hidden bg-[#f1f5f9]">
      <Sidebar 
        onSelectLesson={(lesson) => !isLessonLocked(lesson.id) && setSelectedLesson(lesson)} 
        currentLessonId={selectedLesson.id}
        progress={progress}
        isLocked={isLessonLocked}
      />
      
      <main className="flex-1 overflow-y-auto">
        {/* Navbar Header */}
        <div className="sticky top-0 z-20 bg-white/90 backdrop-blur-xl border-b border-slate-200 px-6 py-4 flex justify-between items-center shadow-sm">
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center text-slate-400 text-xs font-bold uppercase tracking-widest gap-2">
              <i className="fas fa-folder-open"></i>
              <span>{currentChapter?.id.replace('-', ' ')}</span>
              <i className="fas fa-chevron-right text-[8px]"></i>
            </div>
            <h2 className="font-bold text-slate-800 text-sm md:text-base truncate max-w-[200px] md:max-w-none">
              {selectedLesson.title}
            </h2>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <div className="flex justify-between text-[10px] font-bold text-slate-400 mb-1">
                <span>TIẾN ĐỘ</span>
                <span>{Math.round((progress.completedLessonIds.length / allLessons.length) * 100)}%</span>
              </div>
              <div className="w-32 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-teal-500 transition-all duration-700"
                  style={{ width: `${(progress.completedLessonIds.length / allLessons.length) * 100}%` }}
                ></div>
              </div>
            </div>
            <button className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-teal-50 hover:text-teal-600 transition-colors">
              <i className="fas fa-bell"></i>
            </button>
          </div>
        </div>

        <div className="max-w-5xl mx-auto p-4 md:p-10 space-y-10">
          {/* Main Content Area */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-10">
              {/* Theory Content */}
              <article className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-teal-400 to-emerald-400"></div>
                <div className="p-6 md:p-10 space-y-8">
                  <div className="space-y-4">
                    <span className="inline-block px-3 py-1 rounded-full bg-teal-50 text-teal-600 text-[10px] font-bold uppercase tracking-wider">
                      Lý thuyết trọng tâm
                    </span>
                    <h1 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">
                      {selectedLesson.title}
                    </h1>
                  </div>

                  <div className="prose prose-slate prose-lg max-w-none">
                    <div className="p-6 bg-slate-50 rounded-2xl border-l-4 border-teal-500 italic text-slate-700 leading-relaxed shadow-inner">
                      "{selectedLesson.content}"
                    </div>
                  </div>

                  <div className="space-y-6 mt-8">
                    <h3 className="text-xl font-bold text-slate-800 flex items-center gap-3">
                      <span className="w-8 h-8 bg-slate-900 text-white rounded-lg flex items-center justify-center text-sm">01</span>
                      Nội dung bài học
                    </h3>
                    <div className="grid gap-4">
                      {selectedLesson.keyKnowledge.map((item, i) => (
                        <div key={i} className="flex gap-4 p-4 rounded-xl bg-white border border-slate-100 hover:border-teal-200 transition-colors shadow-sm">
                          <i className="fas fa-check-circle text-teal-500 mt-1"></i>
                          <p className="text-slate-600 text-sm md:text-base leading-relaxed">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>

              {/* Exercises Area */}
              <section className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-3">
                    <i className="fas fa-book-reader text-orange-500"></i>
                    Thực hành & Ví dụ
                  </h2>
                </div>
                <div className="space-y-4">
                  {selectedLesson.exercises.map((ex, i) => (
                    <div key={i} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                      <div className="flex gap-4">
                        <div className="w-10 h-10 shrink-0 bg-orange-50 text-orange-500 rounded-full flex items-center justify-center font-bold">
                          {i + 1}
                        </div>
                        <div className="space-y-4 flex-1">
                          <p className="font-bold text-slate-800 pt-2">{ex.question}</p>
                          <div className="bg-slate-50 p-4 rounded-xl text-sm text-slate-600 border border-slate-100">
                            <p className="font-bold text-teal-600 mb-2 flex items-center gap-2">
                              <i className="fas fa-key text-xs"></i> LỜI GIẢI CHI TIẾT
                            </p>
                            {ex.solution}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar widgets */}
            <div className="space-y-8">
              {/* Objectives Widget */}
              <div className="bg-slate-900 text-white rounded-3xl p-6 shadow-xl">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <i className="fas fa-star text-yellow-400"></i> Mục tiêu
                </h3>
                <ul className="space-y-4">
                  {selectedLesson.objectives.map((obj, i) => (
                    <li key={i} className="flex gap-3 text-xs md:text-sm text-slate-300 leading-relaxed">
                      <span className="text-teal-400 font-bold">•</span>
                      {obj}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Progress Widget */}
              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm text-center space-y-4">
                <div className="w-20 h-20 bg-teal-50 text-teal-600 rounded-full flex items-center justify-center mx-auto text-2xl font-black">
                  {progress.scores[selectedLesson.id] || 0}%
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Kết quả bài này</h4>
                  <p className="text-xs text-slate-400 mt-1">Hoàn thành bài tập để cập nhật</p>
                </div>
              </div>

              {/* Quick Chat Widget */}
              <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl p-6 text-white shadow-lg">
                <i className="fas fa-magic text-2xl mb-4"></i>
                <h4 className="font-bold mb-2">Bạn bị kẹt?</h4>
                <p className="text-xs text-indigo-100 mb-4 leading-relaxed">Hãy hỏi trợ lý AI ngay nếu bạn không hiểu bất kỳ phần nào của bài học này.</p>
                <button className="w-full bg-white text-indigo-600 py-2 rounded-xl text-sm font-bold hover:bg-indigo-50 transition-colors">
                  Chat với Gemini
                </button>
              </div>
            </div>
          </div>

          {/* Interaction Section */}
          <div className="pt-10 border-t border-slate-200">
            <QuizSection 
              quizzes={selectedLesson.quizzes} 
              onComplete={handleQuizComplete} 
            />
          </div>

          {/* Next Lesson Control */}
          {progress.completedLessonIds.includes(selectedLesson.id) && (
            <div className="flex justify-center pt-8">
              <button 
                onClick={handleNextLesson}
                className="group flex items-center gap-3 bg-slate-900 text-white px-10 py-4 rounded-2xl font-bold hover:bg-teal-600 transition-all transform hover:scale-105 shadow-xl"
              >
                <span>Học tiếp bài tiếp theo</span>
                <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
              </button>
            </div>
          )}

          <div className="h-20"></div>
        </div>
      </main>

      <Chatbot />
    </div>
  );
};

export default App;
