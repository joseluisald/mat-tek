import React, { useState } from 'react';
import { Brand } from '../types';

interface BrandLogoProps {
  brand: Brand;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  brand,
  className = '',
  size = 'md'
}) => {
  const [imgError, setImgError] = useState(false);

  const sizeClasses = {
    sm: 'h-8 px-2 text-xs',
    md: 'h-12 sm:h-14 px-3 sm:px-4 text-sm',
    lg: 'h-16 px-5 text-base',
  }[size];

    return (
        <div className={`flex items-center justify-center ${sizeClasses} ${className}`}>
            <img
                src={brand.logoUrl}
                alt={`Logo ${brand.name}`}
                onError={() => setImgError(true)}
                className="max-h-full max-w-full object-contain filter contrast-105"
                referrerPolicy="no-referrer"
            />
        </div>
    );
};
