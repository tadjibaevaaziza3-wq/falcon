
import React from 'react';
import { useLanguage } from '../LanguageContext';
import { Project } from '../types';

const Projects: React.FC = () => {
  const { t } = useLanguage();
  const expertiseProjects = t.projects.list.filter(p => p.category === 'EXPERTISE');
  const designProjects = t.projects.list.filter(p => p.category === 'DESIGN');

  const ProjectTable = ({ 
    title, 
    projects, 
    type
  }: { 
    title: string, 
    projects: Project[],
    type: 'EXPERTISE' | 'DESIGN'
  }) => (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 pl-2 border-l-4 border-falcon-500">{title}</h2>
      <div className="bg-white shadow-xl rounded-xl overflow-hidden border border-gray-200">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-falcon-900 text-white">
              <tr>
                <th scope="col" className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider w-1/5 whitespace-nowrap">
                  {type === 'EXPERTISE' ? t.projects.colPeriod : t.projects.colContract}
                </th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider w-1/4">
                  {t.projects.colClient}
                </th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider">
                  {t.projects.colWork}
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {projects.map((project) => (
                <tr key={project.id} className="hover:bg-falcon-50 transition-colors duration-150">
                  <td className="px-6 py-5 text-sm text-gray-900 font-semibold whitespace-pre-line align-top">
                    {type === 'EXPERTISE' ? project.period : project.contract}
                  </td>
                  <td className="px-6 py-5 text-sm text-falcon-800 font-bold whitespace-pre-line align-top">
                    {project.client.split('\n')[0]}
                  </td>
                  <td className="px-6 py-5 text-sm text-gray-600 whitespace-pre-line align-top">
                    {project.name}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-white min-h-screen">
      <div className="bg-falcon-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold text-white sm:text-4xl">{t.projects.headerTitle}</h1>
          <p className="mt-2 text-falcon-100 text-lg">{t.projects.headerSub}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ProjectTable 
          title={t.projects.table1Title} 
          projects={expertiseProjects} 
          type="EXPERTISE"
        />
        
        <ProjectTable 
          title={t.projects.table2Title} 
          projects={designProjects} 
          type="DESIGN"
        />
        
        <div className="mt-8 text-sm text-gray-500 bg-gray-50 p-6 rounded-lg border border-gray-200 italic">
          <p>{t.projects.footerNote}</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
