export type Article = {
  id: string;
  title: string;
  content: string;
};

// generate random 100 articles about random topics
export const articles: Article[] = [
  ...Array.from({ length: 100 }, (_, index) => ({
    id: index.toString(),
    title: `Article ${index + 1}`,
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, purus nec malesuada tincidunt, metus ligula ultricies nunc, nec ultricies nunc nunc nec nunc. Nullam auctor, purus nec malesuada tincidunt  ${
      index + 1
    }`,
  })),
];

export const getArticles = (): Article[] => {
  return articles;
};

export const getArticle = (id: string): Article | undefined => {
  return articles.find((article) => article.id === id);
};
