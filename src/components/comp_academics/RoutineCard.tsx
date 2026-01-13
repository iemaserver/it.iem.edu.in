'use client';

import React, { useState } from 'react';

// Define types for flexibility
type RoutineCell = string | { text: string; rowspan?: number; colspan?: number; style?: React.CSSProperties };
type RoutineRow = RoutineCell[];

const routines: Record<string, RoutineRow[]> = {
  "2ND YEAR": [
    ["Day", "09:30 -10:20", "10:20-11:10", "11:10-12:00", "12:00-12:50", "12:50-01:40", "01:40-02:30", "02:30-03:20", "03:20-04:10", "04:10-05:00"],
    
    // Monday
    [{ text: "Monday", rowspan: 2 }, { text: "ESP IV", colspan: 2 }, "F&A(M1)", "F&A(M1)", { text: "L", rowspan: 2, style: { verticalAlign: "middle", fontWeight: "bold", color: "#7a2fe3" } }, { text: "Gr A: COA Lab (PSP+SBS+AR) IT Lab 6", colspan: 2 }, "AIML", { text: "Mentoring", rowspan: 10, style: { verticalAlign: "middle", writingMode: "vertical-rl", transform: "rotate(180deg)" } }],
    [{ text: "ARC (LG 2.1)", colspan: 2 }, "AB (LG 2.1)", "PSP (LG 2.1)", { text: "Gr B: AIML Lab (BG+RNB) IT Lab 1", colspan: 2 }, "SSG (LG 2.1)"],

    // Tuesday
    [{ text: "Tuesday", rowspan: 2 }, { text: "Gr A: AIML Lab (BG+RNB) IT Lab 1", colspan: 2 }, "DM", "AP(OOP)", { text: "U", rowspan: 2, style: { verticalAlign: "middle", fontWeight: "bold", color: "#7a2fe3" } },"DAA", { text: "Gr A: AP(OOP) Lab (SJ+SDB) IT Lab 7", colspan: 2 }, ],
    [{ text: "Gr B: COA Lab (PSP+SBS+AR) IT Lab 6", colspan: 2 }, "AVC (LG 2.1)", "SWB (LG 2.1)","SSB (LG 2.1)", { text: "Gr B: DAA Lab (SSB+AVC) IT Lab 5", colspan: 2 }, ],

    // Wednesday
    [{ text: "Wednesday", rowspan: 2 }, { text: "SDP IV", colspan: 2 }, "DM", "AP(OOP)", { text: "N", rowspan: 2, style: { verticalAlign: "middle", fontWeight: "bold", color: "#7a2fe3" } },  "AP(OOP)", "DM", "COA",],
    [{ text: "LG 2.1", colspan: 2 }, "AVC (LG 2.1)", "SDB (LG 2.1)", "SJ (LG 2.1)", "AKM (LG 2.1)", "KS (LG 2.1)"],

    // Thursday
    [{ text: "Thursday", rowspan: 2 }, { text: "PPT", colspan: 2 }, { text: "Gr A: DAA Lab (SSB+PBL) IT Lab 5", colspan: 2 }, { text: "C", rowspan: 2, style: { verticalAlign: "middle", fontWeight: "bold", color: "#7a2fe3" } },"COA", "DAnalytics",  "AIML"],
    [{ text: "Science Auditorium", colspan: 2 }, { text: "Gr B: AP(OOP) Lab (SJ+SDB) IT Lab 7", colspan: 2 }, "SMU (LG 2.1)", "SDas (LG 2.1)", "KD (LG 2.1)"],

    // Friday
    [{ text: "Friday", rowspan: 2 },"DAnalytics", "F&A(M1)",  "DAA", "COA", { text: "H", rowspan: 2, style: { verticalAlign: "middle", fontWeight: "bold", color: "#7a2fe3" } }, "AIML", "DAA", "EVS"],
    ["KD (LG 2.1)","AB (LG 2.1)",  "SWB (LG 2.1)", "SBS (LG 2.1)","RNB (LG 2.1)","PBL (LG 2.1)", "SD / Kakoli Dutta (LG 2.1)",  ]
  ],

  "3RD YEAR": [
    ["Day", "09:30 -10:20", "10:20-11:10", "11:10-12:00", "12:00-12:50", "12:50-01:40", "01:40-02:30", "02:30-03:20", "03:20-04:10", "04:10-05:00"],
    
    // Monday
    [{ text: "Monday", rowspan: 2 }, "CN", "ICS",{ text: "NLP / ServiceNow", colspan: 2 },{ text: "L", rowspan: 2, style: { verticalAlign: "middle", fontWeight: "bold", color: "#7a2fe3" } },"ICS", "CC&IOT", "SComp / GT", { text: "Mentoring", rowspan: 10, style: { verticalAlign: "middle", writingMode: "vertical-rl", transform: "rotate(180deg)" } }],
    ["RD (LG 4.7)", "MBS (LG 4.7)",{ text: "MDey / PBL (LG 4.7)", colspan: 2 }, "BD (LG 4.7)", "Saikat Dutt (LG 4.7)", "SGH / AVC (LG 4.7)",],

    // Tuesday
    [{ text: "Tuesday", rowspan: 2 }, "CN", "CC&IOT",  "ESP VI", "ICS", { text: "U", rowspan: 2, style: { verticalAlign: "middle", fontWeight: "bold", color: "#7a2fe3" } }, "ESP VI", "CC&IOT", "CN"],
    ["SUBH (LG 4.7)","SJ (LG 4.7)",  "TaB (LG 4.7)", "KS (LG 4.7)",  "MG (LG 4.7)", "KK (LG 4.7)","D.Sobya (LG 4.7)",],

    // Wednesday
    [{ text: "Wednesday", rowspan: 2 },"NLP / ServiceNow", "GEN AI",  { text: "Gr A: CN Lab (SuBh+PB) IT Lab 2", colspan: 2 }, { text: "N", rowspan: 2, style: { verticalAlign: "middle", fontWeight: "bold", color: "#7a2fe3" } }, { text: "Gr A: ICS Lab (PC+RD) IT Lab 4", colspan: 2 }, "GEN AI"],
    ["RNB / PBL (LG 4.7)","SGH (LG 4.7)",  { text: "Gr B: CC&IOT Lab (AB+KS) IT Lab 8", colspan: 2 }, { text: "Gr B: IPM Lab (SSG+SD) IT Lab 3", colspan: 2 }, "KD (LG 4.7)"],

    // Thursday
    [{ text: "Thursday", rowspan: 2 }, { text: "SDP VI", colspan: 2 }, { text: "Gr A: CC&IOT Lab (AB+KS) IT Lab 8", colspan: 2 }, { text: "C", rowspan: 2, style: { verticalAlign: "middle", fontWeight: "bold", color: "#7a2fe3" } }, "CN", { text: "Gr A: IPM Lab (SSG+MG) IT Lab 3", colspan: 2 }],
    [{ text: "SHT (LG 4.7)", colspan: 2 }, { text: "Gr B: CN Lab (SuBh+PB) IT Lab 2", colspan: 2 }, "RD (LG 4.7)", { text: "Gr B: ICS Lab (PC+RD) IT Lab 4", colspan: 2 }],

    // Friday
    [{ text: "Friday", rowspan: 2 }, { text: "PPT", colspan: 2 }, "SComp / GT", "SComp / GT", { text: "H", rowspan: 2, style: { verticalAlign: "middle", fontWeight: "bold", color: "#7a2fe3" } }, "GEN AI", "CC", "CC"],
    [{ text: "Science Auditorium", colspan: 2 }, "SUBH / SDB (LG 4.7)", "SGH / SDB","SGH", "MG", "MG", ],
  ],

  "4TH YEAR": [
    ["Day", "09:30 -10:20", "10:20-11:10", "11:10-12:00", "12:00-12:50", "12:50-01:40", "01:40-02:30", "02:30-03:20", "03:20-04:10", "04:10-05:00"],
    
    // Monday
    [{ text: "Monday", rowspan: 2 }, "Advanced AI", "HCI",  { text: "ESP VIII", colspan: 2 }, { text: "L", rowspan: 2, style: { verticalAlign: "middle", fontWeight: "bold", color: "#7a2fe3" } },"SSIC", "GC", "GC", { text: "Mentoring", rowspan: 10, style: { verticalAlign: "middle", writingMode: "vertical-rl", transform: "rotate(180deg)" } }],
    ["ADB","SJ", { text: "DDSI", colspan: 2 }, "SD", "SGH", "KS",],

    // Tuesday
    [{ text: "Tuesday", rowspan: 2 }, "Advanced AI","SSIC", "HCI", "HCI",{ text: "U", rowspan: 2, style: { verticalAlign: "middle", fontWeight: "bold", color: "#7a2fe3" } },  { text: "SDP VIII", colspan: 2, rowspan: 2 }, "CL&IPR",],
    ["ADB", "SD", "SJ", "SBS", "SWB",],

    // Wednesday
    [{ text: "Wednesday", rowspan: 2 }, "Advanced AI", "GC", "BioInf", "BioInf", { text: "N", rowspan: 2, style: { verticalAlign: "middle", fontWeight: "bold", color: "#7a2fe3" } }, { text: "PROJECT", colspan: 3, rowspan: 2 }],
    ["ADB", "KS", "SSB","G.Kamei"],

    // Thursday
    [{ text: "Thursday", rowspan: 2 }, "SSIC",  { text: "PROJECT", rowspan: 2 },"CL&IPR", { text: "PROJECT", rowspan: 2 }, { text: "C", rowspan: 2, style: { verticalAlign: "middle", fontWeight: "bold", color: "#7a2fe3" } }, { text: "PROJECT", colspan: 3, rowspan: 2 }],
    ["SD", "MBS",],

    // Friday
    [{ text: "Friday", rowspan: 2 }, "CL&IPR", "BioInf",  { text: "PROJECT", colspan: 2, rowspan: 2 }, { text: "H", rowspan: 2, style: { verticalAlign: "middle", fontWeight: "bold", color: "#7a2fe3" } }, { text: "PROJECT", colspan: 3, rowspan: 2 }],
    ["MBS", "SSB",],
  ]
};

export default function RoutineCard() {
  const [selectedYear, setSelectedYear] = useState<string | null>("2ND YEAR");

  return (
    <section className="routine-section py-8 px-2 md:px-8 bg-gray-50 min-h-screen" id="routine-section">
      <div className="max-w-7xl mx-auto">
        
        {/* Year Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {Object.keys(routines).map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`px-6 py-3 rounded-full font-bold transition-all shadow-md transform hover:scale-105
                ${selectedYear === year 
                  ? 'bg-gradient-to-r from-[#7a2fe3] to-[#9b5de5] text-white shadow-lg' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'}
              `}
            >
              {year} Time Table
            </button>
          ))}
        </div>

        {/* Table Container */}
        {selectedYear && routines[selectedYear].length > 0 && (
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
            {/* Scrollable Wrapper */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse min-w-[1200px] text-sm md:text-base">
                {/* Header */}
                <thead>
                  <tr className="bg-[#f0e6fc] text-[#4a148c]"> 
                    {routines[selectedYear][0].map((col, idx) => (
                      <th
                        key={idx}
                        colSpan={typeof col === "object" ? col.colspan || 1 : 1}
                        rowSpan={typeof col === "object" ? col.rowspan || 1 : 1}
                        // Added border class here
                        className={`p-4 border border-gray-300 text-center font-bold uppercase tracking-wider
                            ${idx === 0 ? "sticky left-0 bg-[#f0e6fc] z-20 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)]" : ""}
                        `}
                      >
                        {typeof col === "object" ? col.text : col}
                      </th>
                    ))}
                  </tr>
                </thead>
                
                {/* Body */}
                <tbody className="divide-y divide-gray-100">
                  {routines[selectedYear].slice(1).map((row, rowIndex) => {
                    const dayGroupIndex = Math.floor(rowIndex / 2);
                    const rowBgClass = dayGroupIndex % 2 === 0 ? "bg-white" : "bg-[#fbf7ff]"; 

                    return (
                        <tr 
                            key={rowIndex} 
                            className={`${rowBgClass} hover:bg-purple-50 transition-colors duration-150`}
                        >
                        {row.map((col, colIndex) => {
                            const cellText = typeof col === 'object' ? col.text : col;
                            const cellStyle = typeof col === 'object' ? col.style : {};
                            const isDay = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].includes(cellText);

                            return (
                            <td
                                key={colIndex}
                                rowSpan={typeof col === 'object' && col.rowspan ? col.rowspan : undefined}
                                colSpan={typeof col === 'object' && col.colspan ? col.colspan : undefined}
                                // Added border class here
                                className={`p-3 border border-gray-300 text-center text-gray-700
                                    ${isDay ? "sticky left-0 bg-[#7a2fe3] text-white font-bold z-10 shadow-md border-white" : ""}
                                `}
                                style={cellStyle}
                            >
                                {/* Special Styling for Break/Lunch/Mentoring */}
                                {["L", "U", "N", "C", "H", "Mentoring"].includes(cellText) ? (
                                    <span className="font-black text-[#7a2fe3] opacity-50 text-xl block h-full flex items-center justify-center">
                                        {cellText}
                                    </span>
                                ) : (
                                    cellText
                                )}
                            </td>
                            );
                        })}
                        </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}