import React, { useState } from "react";
import ReactPlayer from "react-player";
import { useParams, useNavigate } from "react-router-dom";
import { lessonsData } from "./LessonsData";
import { type LessonItem } from "./LessonsData";

const Lessons: React.FC = () => {
  const { id = "" } = useParams<{ id?: string }>();
  const navigate = useNavigate();
  const lesson: LessonItem | undefined = lessonsData[id];
  const [showTranscript, setShowTranscript] = useState(false);

  if (!id || !lesson) {
    return <div>Lección no encontrada</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center bg-[#edf0f3] min-h-screen p-4">
      <button className="absolute top-4 left-4" onClick={() => navigate(-1)}>
        <img src="/8.png" alt="Atrás" className="w-8 h-8" />
      </button>

      {lesson && (
        <>
          <h2 className="text-2xl font-bold text-[#e86f61] mb-4 ">
            {lesson.title}
          </h2>

          <div className="rounded-md overflow-hidden shadow-md mb-15 ">
            <ReactPlayer
              src={lesson.videoUrl}
              className="w-full h-200"
              width="80rem"
              height="600px"
              controls
            />
          </div>

          <div className="w-full  p-4 mb-10">
            <h3 className="text-center text-lg font-semibold text-[#e86f61] pb-12">
              Vocabulario
            </h3>
            <div className="flex justify-center flex-wrap gap-4 ">
              {lesson.vocabulary.map((item) => (
                <div key={item.word} className="flex flex-col items-center">
                  <img
                    src={item.imageUrl}
                    alt={item.word}
                    className="w-50 h-70 object-contain"
                  />
                  <span className="mt-2">{item.word}</span>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`fixed left-0 bottom-0 w-full transition-all duration-500 ${
              showTranscript ? "translate-y-0" : "translate-y-[80%]"
            }`}
          >
            <div className="bg-white rounded-t-3xl p-4 shadow-lg h-[300px] overflow-auto">
              <h3 className="text-center font-semibold mb-2 text-[#e86f61]">
                Transcripción
              </h3>
              <p
                className="text-[#e86f61] pt-10 text-center pl-12 pr-12"
                style={{ whiteSpace: "pre-line" }}
              >
                {lesson?.transcription}
              </p>
            </div>
          </div>

          <button
            className={`fixed left-0 transition-all duration-500 ${
              showTranscript ? "bottom-[290px]" : "bottom-8"
            }`}
            onClick={() => setShowTranscript(!showTranscript)}
          >
            <img
              src="/8.png"
              alt="Transcripción"
              className="w-16 h-16 rotate-90 cursor-pointer bg-white rounded-tl-4xl p-2 "
            />
          </button>

          <button className="absolute bottom-4 right-4">
            <img src="/8.png" alt="Siguiente" className="w-8 h-8 rotate-180" />
          </button>
        </>
      )}
    </div>
  );
};

export default Lessons;
