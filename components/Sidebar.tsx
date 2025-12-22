
import React from 'react';
import { textbookData } from '../data';
import { Chapter, Lesson, UserProgress } from '../types';

interface SidebarProps {
  onSelectLesson: (lesson: Lesson) => void;
  currentLessonId: string;
  progress: UserProgress;
  isLocked: (id: string) => boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ onSelectLesson, currentLessonId, progress, isLocked }) => {
  return (
    <aside className="w-full md:w-80 bg-white border-r border-slate-200 h-screen overflow-y-auto flex-shrink-0 flex flex-col shadow-2xl z-30">
      <div className="p-8 border-b border-slate-100 bg-white sticky top-0 z-10">
        <div className="flex items-center gap-4 mb-2">
          <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center text-white shadow-2xl rotate-3">
            <i className="fas fa-brain text-xl"></i>
          </div>
          <div>
            <h2 className="text-xl font-black text-slate-800 tracking-tighter italic">INFOPRO 11</h2>
            <p className="text-[9px] font-black text-teal-600 uppercase tracking-[0.2em]">Learning Platform</p>
          </div>
        </div>
      </div>
      
      <nav className="flex-1 p-6 space-y-10">
        {textbookData.map((chapter: Chapter, chapterIdx: number) => (
          <div key={chapter.id} className="space-y-4">
            <div className="flex items-center gap-3 px-2">
              <span className="w-6 h-6 bg-slate-100 rounded text-[10px] flex items-center justify-center font-bold text-slate-500">
                0{chapterIdx + 1}
              </span>
              <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-widest overflow-hidden text-ellipsis whitespace-nowrap">
                {chapter.title.split(':')[1] || chapter.title}
              </h3>
            </div>
            <div className="space-y-2">
              {chapter.lessons.map((lesson: Lesson) => {
                const locked = isLocked(lesson.id);
                const completed = progress.completedLessonIds.includes(lesson.id);
                
                return (
                  <button
                    key={lesson.id}
                    disabled={locked}
                    onClick={() => onSelectLesson(lesson)}
                    className={`w-full text-left px-4 py-4 rounded-2xl text-sm transition-all flex justify-between items-center group relative overflow-hidden ${
                      currentLessonId === lesson.id
                        ? 'bg-slate-900 text-white shadow-xl scale-[1.02]'
                        : locked
                        ? 'text-slate-300 cursor-not-allowed grayscale'
                        : 'text-slate-600 hover:bg-slate-50 border border-transparent hover:border-slate-200'
                    }`}
                  >
                    {currentLessonId === lesson.id && (
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-teal-400"></div>
                    )}
                    <div className="flex items-center gap-4 overflow-hidden relative z-10">
                       <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] border ${
                         currentLessonId === lesson.id ? 'border-teal-400 text-teal-400' : 'border-slate-200 text-slate-400'
                       }`}>
                          {locked ? <i className="fas fa-lock text-[8px]"></i> : <span>{lesson.id.split('-')[1]}</span>}
                       </div>
                       <span className="truncate font-semibold tracking-tight">{lesson.title.split(':')[1] || lesson.title}</span>
                    </div>
                    {completed && currentLessonId !== lesson.id && (
                      <div className="flex items-center gap-1 bg-emerald-100 text-emerald-600 px-2 py-0.5 rounded-full relative z-10">
                        <i className="fas fa-check text-[8px]"></i>
                        <span className="text-[9px] font-black">{progress.scores[lesson.id]}%</span>
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      <div className="p-6 border-t border-slate-100 bg-slate-50/50">
         <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4 group cursor-pointer hover:border-teal-400 transition-all">
            <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors">
              <i className="fas fa-trophy"></i>
            </div>
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase">Rank hiện tại</p>
              <p className="text-xs font-bold text-slate-800">Tân thủ</p>
            </div>
         </div>
      </div>
    </aside>
  );
};

export default Sidebar;
