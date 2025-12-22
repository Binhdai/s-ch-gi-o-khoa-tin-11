
export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface Exercise {
  question: string;
  solution: string;
}

export interface Lesson {
  id: string;
  title: string;
  objectives: string[];
  keyKnowledge: string[];
  exercises: Exercise[];
  quizzes: QuizQuestion[];
  content: string;
  illustration?: string;
}

export interface Chapter {
  id: string;
  title: string;
  lessons: Lesson[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface UserProgress {
  completedLessonIds: string[];
  scores: Record<string, number>;
}
