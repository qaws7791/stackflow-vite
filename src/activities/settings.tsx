import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";
import { useFlow } from "../stackflow";

const SettingsActivity: ActivityComponentType = () => {
  const { pop } = useFlow();

  const onClick = () => {
    pop();
  };

  return (
    <AppScreen appBar={{ title: "Settings" }}>
      <div>
        <h1>Settings</h1>
        <button onClick={onClick}>Go back</button>
      </div>
    </AppScreen>
  );
};

export default SettingsActivity;
