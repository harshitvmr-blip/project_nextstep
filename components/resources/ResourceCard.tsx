import React from 'react';
import { Resource } from '../../types';
import Card from '../ui/Card';

interface ResourceCardProps {
  resource: Resource;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ resource }) => {
  return (
    <Card className="h-full flex flex-col">
      <img
        src={resource.image || 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=200&fit=crop'}
        alt={resource.title}
        className="w-full h-40 object-cover"
      />
      <div className="p-6 flex flex-col flex-grow">
        <span className="text-sm font-semibold text-pastel-blue-dark uppercase mb-2">
          {resource.type}
        </span>
        <h3 className="text-xl font-bold text-brand-dark">{resource.title}</h3>
        <p className="text-slate-600 mt-2 text-sm flex-grow">{resource.summary}</p>
        <div className="mt-4 pt-4 border-t border-pastel-grey dark:border-pastel-grey">
          <a
            href={resource.link}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-pastel-blue-dark hover:underline hover:text-pastel-blue transition-colors"
          >
            Read More &rarr;
          </a>
        </div>
      </div>
    </Card>
  );
};

export default ResourceCard;
