import { getBlogPosts } from '@/lib/notion';
import Image from 'next/image';

export const revalidate = 3600; // 1시간마다 데이터 자동 갱신 (ISR)

export default async function HomePage() {
  const projects = await getBlogPosts();

  return (
    <main className="max-w-6xl mx-auto px-6 py-20">
      <header className="mb-16">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">My Recent Work</h1>
        <p className="text-lg text-slate-600">포트폴리오 프로젝트 아카이브입니다.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <article
            key={project.id}
            className="flex flex-col border rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all"
          >
            <div className="relative aspect-video bg-slate-100">
              {project.coverImage ? (
                <Image src={project.coverImage} alt={project.title} fill className="object-cover" />
              ) : (
                <div className="flex items-center justify-center h-full text-slate-400">
                  No Image
                </div>
              )}
            </div>
            <div className="p-6">
              <div className="flex gap-2 mb-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-bold px-2 py-1 bg-blue-50 text-blue-600 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">{project.title}</h3>
              <p className="text-slate-600 line-clamp-2 mb-4">{project.description}</p>
              <div className="text-sm text-slate-400">
                {project.startDate} — {project.endDate || 'Present'}
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
