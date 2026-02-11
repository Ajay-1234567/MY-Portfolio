// @flow strict
import * as React from 'react';
import Image from 'next/image';

function FloatingCard({ project, delay = 0, position = 'top-right' }) {
    const positionClasses = {
        'top-right': 'top-20 right-0',
        'bottom-left': 'bottom-20 left-0',
        'middle': 'top-1/2 right-10 -translate-y-1/2',
    };

    return (
        <div
            className={`absolute ${positionClasses[position]} hidden lg:block animate-float`}
            style={{ animationDelay: `${delay}s` }}
        >
            <div className="bg-white rounded-2xl shadow-2xl p-4 hover:shadow-3xl transition-all duration-300 hover:scale-105 border border-gray-100">
                <div className="relative w-48 h-32 mb-3 rounded-lg overflow-hidden">
                    <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        className="object-cover"
                        sizes="192px"
                    />
                </div>
                <h4 className="font-bold text-gray-900 text-sm mb-1">{project.name}</h4>
                <p className="text-xs text-gray-500">{project.role}</p>
            </div>
        </div>
    );
}

export default FloatingCard;
