import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { getBlogPosts, ProjectPost } from '../utils/notion';
import { Post } from '../types/notion';

export const usePosts = (): UseQueryResult<ProjectPost[], Error> => {
  return useQuery({
    queryKey: ['notion', 'posts'],
    queryFn: getBlogPosts,
  });
};
