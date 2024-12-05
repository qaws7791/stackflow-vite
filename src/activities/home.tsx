import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";
import { useFlow } from "../stackflow";
import BottomNavigation from "../components/bottom-navigation";
import { articles } from "../mock-api";

const HomeActivity: ActivityComponentType = () => {
  const { push } = useFlow();

  const moveToArticle = (articleId: string) => {
    push("ArticleActivity", {
      id: articleId,
    });
  };

  return (
    <div>
      <AppScreen appBar={{ title: "Home" }}>
        <h1>Articles</h1>
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
          }}
        >
          {articles.map((article) => (
            <li
              key={article.id}
              onClick={() => moveToArticle(article.id)}
              style={{
                cursor: "pointer",
                padding: "8px",
                borderBottom: "1px solid #ccc",
              }}
            >
              {article.title}
            </li>
          ))}
        </ul>
      </AppScreen>
      <BottomNavigation />
    </div>
  );
};

export default HomeActivity;
