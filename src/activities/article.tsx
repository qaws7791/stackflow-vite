import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";
import { getArticle } from "../mock-api";

type ArticleParams = {
  id: string;
};

const ArticleActivity: ActivityComponentType<ArticleParams> = ({ params }) => {
  const article = getArticle(params.id);

  if (!article) {
    return (
      <AppScreen appBar={{ title: "Article" }}>
        <div>
          <h1>Article not found</h1>
          <p>Article with id {params.id} not found</p>
        </div>
      </AppScreen>
    );
  }

  return (
    <AppScreen
      appBar={{
        title: "Article",
      }}
    >
      <div>
        <h1>{article.title}</h1>
        <p>{article.content}</p>
      </div>
    </AppScreen>
  );
};

export default ArticleActivity;
