import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export interface ProductCardProps {
  name: string;
  tagline: string;
  description: string;
  features: string[];
  accentFrom: string;
  accentTo: string;
  href: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  name,
  tagline,
  description,
  features,
  accentFrom,
  accentTo,
  href,
}) => (
  <article
    className="glass-card flex flex-col overflow-hidden group"
    style={{
      '--hover-border': accentFrom,
    } as React.CSSProperties}
  >
    {/* Colored top accent strip */}
    <div
      className="h-[3px] w-full"
      style={{ background: `linear-gradient(90deg, ${accentFrom}, ${accentTo})` }}
    />

    <div className="p-7 flex flex-col flex-1 gap-4">
      {/* Product name */}
      <div>
        <p
          className="text-[11px] font-medium uppercase tracking-[0.14em] mb-2"
          style={{ color: accentFrom }}
        >
          {tagline}
        </p>
        <h3 className="text-xl font-medium text-white">{name}</h3>
      </div>

      {/* Description */}
      <p className="text-[14px] leading-relaxed text-white/65 flex-1">
        {description}
      </p>

      {/* Feature pills */}
      <div className="flex flex-wrap gap-2">
        {features.map((f) => (
          <span
            key={f}
            className="text-[11px] font-medium px-3 py-1 rounded-full"
            style={{
              background: `${accentFrom}26`,
              color: accentFrom,
              border: `1px solid ${accentFrom}40`,
            }}
          >
            {f}
          </span>
        ))}
      </div>

      {/* CTA */}
      <Link
        to={href}
        className="inline-flex items-center gap-1.5 text-[13px] font-medium mt-2 group/link"
        style={{ color: accentFrom }}
      >
        Learn More
        <ArrowRight
          size={14}
          className="transition-transform duration-200 group-hover/link:translate-x-1"
        />
      </Link>
    </div>
  </article>
);
