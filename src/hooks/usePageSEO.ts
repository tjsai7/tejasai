import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description?: string;
}

export const usePageSEO = ({ title, description }: SEOProps) => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = `${title} | Teja Sai — Senior Product & UX Designer`;

    if (description) {
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', description);
      }
    }

    return () => {
      document.title = previousTitle;
    };
  }, [title, description]);
};
