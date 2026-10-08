"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { ShieldCheck } from 'lucide-react';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function WorkingPrincipleDark() {
  return (
    <section className="py-16 lg:py-24 bg-white relative overflow-hidden border-t border-slate-100">
      <div className="container mx-auto px-4 max-w-[1400px] relative z-10">
        
        {/* SEO Hidden Text (Screen Readers only) */}
        <div className="sr-only">
          <h2>DOWNDRAFT TABLE WORKING PRINCIPLE</h2>
          <h3>From the work surface to the collection system.</h3>
          <ol>
            <li><strong>01 Generate:</strong> The machining or finishing operation releases dust or fume near the active work area.</li>
            <li><strong>02 Capture:</strong> A fan creates inward airflow through the table surface and any specified rear extraction panels.</li>
            <li><strong>03 Separate:</strong> Compatible filter or water collection systems separate particulates from the extracted air stream.</li>
            <li><strong>04 Manage:</strong> Collected material is removed and the discharge arrangement is selected for the process and site.</li>
          </ol>
          <p>Capture performance depends on airflow distribution, workspace obstruction, cross-drafts and how the operator uses the bench. Filtration efficiency alone does not describe total exposure control.</p>
        </div>

        {/* Header Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-12 text-center max-w-3xl mx-auto flex flex-col items-center"
        >
          <div className="flex items-center justify-center gap-2 text-primary-gray font-bold text-xs uppercase tracking-[0.2em] mb-4">
            DOWNDRAFT TABLE WORKING PRINCIPLE
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0f1b3a] leading-[1.05] tracking-tight mb-4">
            From the work surface <br />
            <span className="text-primary-blue">to the collection system.</span>
          </h2>
        </motion.div>

        {/* Infographic Image */}
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={fadeInUp}
          className="relative w-full rounded-[2rem] overflow-hidden"
        >
          {/* Desktop Image */}
          <div className="hidden md:block relative w-full aspect-[16/9] md:aspect-[21/9] lg:aspect-[2.5/1]">
            <Image
              src="/Downdraft Extraction System Workflow.png"
              alt="Downdraft Table Working Principle Workflow"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Mobile Image */}
          <div className="block md:hidden relative w-full aspect-[4/5] sm:aspect-square">
            <Image
              src="/Industrial Downdraft Extraction Infographic.png"
              alt="Downdraft Table Working Principle Mobile Workflow"
              fill
              className="object-contain"
              priority
            />
          </div>
        </motion.div>

        {/* Footer Banner */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-4 lg:-mt-16 flex justify-center w-full relative z-20 px-4"
        >
          <div className="bg-[#f0f5ff] rounded-xl lg:rounded-2xl py-3 px-4 lg:py-4 lg:px-8 flex flex-col lg:flex-row items-center justify-center gap-2 lg:gap-6 border border-blue-100 shadow-md max-w-6xl mx-auto text-center w-full">
            
            <div className="flex items-center gap-3 lg:gap-4 shrink-0">
              <div className="bg-[#0052ff] text-white p-1.5 lg:p-2.5 rounded-full shadow-md flex items-center justify-center">
                <ShieldCheck size={20} strokeWidth={2.5} />
              </div>
              <div className="hidden lg:block w-[2px] h-10 bg-blue-200/60"></div>
              <span className="text-[#0052ff] font-black text-xs lg:text-[15px] tracking-wide uppercase max-w-[150px] lg:max-w-none text-left leading-tight">
                Capture Performance
              </span>
            </div>

            <div className="hidden lg:block w-[2px] h-10 bg-blue-200/60"></div>

            <p className="text-slate-600 text-left text-[9.5px] lg:text-[13px] leading-relaxed font-medium">
              Capture performance depends on airflow distribution, workspace obstruction, cross-drafts and how the operator uses the bench. <br className="hidden xl:block" />
              Filtration efficiency alone does not describe total exposure control.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
