import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../ui/Button';

export const CTABanner: React.FC = () => {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const navigate = useNavigate();

  return (
    <section
      ref={ref}
      className="border-t border-[#1E3460] py-section"
      style={{ background: 'linear-gradient(135deg, #112143 0%, #4B3F72 100%)' }}
    >
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="font-display font-bold text-white"
            style={{ fontSize: 'clamp(26px, 3.5vw, 40px)' }}
          >
            Ready to Eclipse the Competition?
          </h2>
          <p className="mt-4 text-[#ADE1E5] text-base max-w-md mx-auto">
            Every day you wait is a day your competitors gain ground. Let's close that gap.
          </p>
          <div className="mt-8">
            <Button variant="primary" size="lg" onClick={() => navigate('/contact')}>
              Start a Conversation <ArrowRight size={18} />
            </Button>
          </div>
          <p className="mt-4 font-mono text-xs text-[#ADE1E5]/70">
            No commitment required · Response within 24 hours
          </p>
        </motion.div>
      </div>
    </section>
  );
};
