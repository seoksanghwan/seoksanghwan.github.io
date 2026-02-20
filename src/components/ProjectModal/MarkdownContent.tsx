import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';
import 'highlight.js/styles/github-dark.css';
import 'github-markdown-css/github-markdown-dark.css';

type MarkdownContentProps = {
  content: string;
  isLoading: boolean;
};

export const MarkdownContent = ({ content, isLoading }: MarkdownContentProps) => {
  if (isLoading) {
    return (
      <p className="text-[#aaa] text-[1.6rem] animate-pulse text-center py-20">
        상세 내용을 불러오는 중입니다...
      </p>
    );
  }

  return (
    <div className="markdown-body github-markdown-dark">
      <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]}>
        {content}
      </ReactMarkdown>
    </div>
  );
};
