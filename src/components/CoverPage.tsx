import React from 'react';
import { testMetadata } from '../data';

export const CoverPage: React.FC = () => {
  return (
    <div className="a4-sheet p-10 flex flex-col justify-between exam-font text-black text-sm select-text">
      <div>
        {/* Top Header Row */}
        <div className="flex justify-between items-start mb-4">
          <div>
            <span className="font-bold text-xs uppercase tracking-wide">TEST BOOKLET NO. </span>
            <span className="font-bold text-sm tracking-widest">{testMetadata.bookletNo}</span>
          </div>

          <div className="text-center">
            <div className="text-xs font-bold uppercase">TEST BOOKLET CODE</div>
            <div className="border-2 border-black px-4 py-1 mt-1 inline-block">
              <span className="text-2xl font-black tracking-wider">{testMetadata.bookletCode}</span>
            </div>
          </div>
        </div>

        {/* Roll Number Box */}
        <div className="mb-6">
          <div className="text-xs font-bold uppercase mb-1">ROLL NUMBER</div>
          <div className="flex">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="w-8 h-8 border border-black border-r-0 last:border-r flex items-center justify-center bg-white"></div>
            ))}
          </div>
        </div>

        {/* Title & Subtitle */}
        <div className="text-center my-6">
          <h1 className="text-3xl font-black tracking-tight uppercase mb-1.5">
            {testMetadata.testSeries}
          </h1>
          <h2 className="text-xl font-bold tracking-normal mb-1">
            {testMetadata.partTest}
          </h2>
          <h3 className="text-lg font-bold tracking-wide text-stone-800">
            {testMetadata.targetExam}
          </h3>
          <p className="italic font-bold text-sm mt-3">
            Do not open this Test Booklet until you are asked to do so.
          </p>
        </div>

        {/* Syllabus Dashed Box */}
        <div className="border border-dashed border-black p-4 my-6 rounded-xs bg-stone-50/50">
          <div className="relative text-center -mt-7 mb-2">
            <span className="bg-white px-3 font-bold text-base uppercase border border-black inline-block rounded-xs">
              Syllabus
            </span>
          </div>
          <div className="space-y-2 text-xs leading-relaxed mt-3">
            <div>
              <span className="font-bold uppercase">PHYSICS : </span>
              <span>{testMetadata.syllabus.physics}</span>
            </div>
            <div>
              <span className="font-bold uppercase">CHEMISTRY : </span>
              <span>{testMetadata.syllabus.chemistry}</span>
            </div>
            <div>
              <span className="font-bold uppercase">BIOLOGY : </span>
              <span>{testMetadata.syllabus.biology}</span>
            </div>
          </div>
        </div>

        {/* Instructions Box */}
        <div className="border border-black/80 bg-stone-100/60 p-4 my-6 text-[11px] leading-snug rounded-xs">
          <div className="font-bold text-xs uppercase mb-2 border-b border-black/30 pb-1">
            Important Instructions :
          </div>
          <div className="grid grid-cols-2 gap-x-6 gap-y-2">
            <div>
              <p className="mb-2">
                <span className="font-bold">1.</span> This test is of <span className="font-bold">3 Hours</span> duration.
              </p>
              <p className="mb-2">
                <span className="font-bold">2.</span> The Test Booklet contains <span className="font-bold">180 multiple-choice questions</span> [four options (1), (2), (3) & (4) with a single correct answer] from <span className="font-bold">Physics (45 Questions)</span>, <span className="font-bold">Chemistry (45 Questions)</span> & <span className="font-bold">Biology (90 Questions)</span>. <span className="font-bold">All questions are compulsory.</span>
              </p>
              <p>
                <span className="font-bold">3.</span> Each question carries <span className="font-bold">4 marks</span>. For each correct response, the candidate will get <span className="font-bold">4 marks</span>. For each incorrect response, <span className="font-bold">1 mark</span> will be deducted from the total score. No mark will be deducted for unanswered questions. The maximum marks is <span className="font-bold">720</span>.
              </p>
            </div>
            <div>
              <p className="mb-2">
                <span className="font-bold">4.</span> Use <span className="font-bold">Blue/Black Ball Point Pen only</span> for writing particulars on this page/special Answer Sheet (OMR).
              </p>
              <p className="mb-2">
                <span className="font-bold">5.</span> Do not encode or darken more than one circle for answering a particular question for it will be treated as a wrong answer.
              </p>
              <p className="mb-2">
                <span className="font-bold">6.</span> Rough work is to be done on the rough sheets provided in the Examination Hall.
              </p>
              <p>
                <span className="font-bold">7.</span> Calculators, Slide Rules, Log Tables, Geometry Box, Electronic Digital Watches with facilities of calculators, cellular phones, pagers or any other electronic gadget are not allowed inside the Examination Hall.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Candidate Form Particulars */}
      <div className="space-y-4 pt-4 border-t border-black/40 text-xs">
        <div className="flex items-end">
          <span className="whitespace-nowrap font-medium">Name of the Candidate (in Capital) :</span>
          <span className="flex-1 border-b border-black ml-2 h-4"></span>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2 flex items-end">
            <span className="whitespace-nowrap font-medium">Centre Name (in Capital) :</span>
            <span className="flex-1 border-b border-black ml-2 h-4"></span>
          </div>
          <div className="flex items-end">
            <span className="whitespace-nowrap font-medium">Date :</span>
            <span className="flex-1 border-b border-black ml-2 h-4"></span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 pt-2">
          <div className="flex items-end">
            <span className="whitespace-nowrap font-medium">Candidate's Signature :</span>
            <span className="flex-1 border-b border-black ml-2 h-4"></span>
          </div>
          <div className="flex items-end">
            <span className="whitespace-nowrap font-medium">Invigilator's Signature :</span>
            <span className="flex-1 border-b border-black ml-2 h-4"></span>
          </div>
        </div>
      </div>
    </div>
  );
};
