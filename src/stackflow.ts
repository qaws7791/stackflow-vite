import { stackflow } from "@stackflow/react";
import { basicRendererPlugin } from "@stackflow/plugin-renderer-basic";
import { basicUIPlugin } from "@stackflow/plugin-basic-ui";
import ArticleActivity from "./activities/article";
import { historySyncPlugin } from "@stackflow/plugin-history-sync";
import HomeActivity from "./activities/home";
import SettingsActivity from "./activities/settings";

export const { Stack, useFlow } = stackflow({
  transitionDuration: 350,
  activities: { HomeActivity, ArticleActivity, SettingsActivity },
  plugins: [
    basicRendererPlugin(),
    basicUIPlugin({
      theme: "cupertino",
    }),
    historySyncPlugin({
      routes: {
        HomeActivity: "/",
        ArticleActivity: "/article/:id",
        SettingsActivity: "/settings",
      },
      fallbackActivity: () => "HomeActivity",
    }),
  ],
});
