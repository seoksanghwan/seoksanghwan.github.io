import { ProjectListSkeleton } from '@/components/ProjectList';

export default function ProjectsLoading() {
  return (
    <div className="max-w-[1200px] mx-auto px-6 py-12">
      <ProjectListSkeleton />
    </div>
  );
}
