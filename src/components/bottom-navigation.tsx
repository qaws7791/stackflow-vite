import { HouseIcon, SettingsIcon } from "lucide-react";
import { useFlow } from "../stackflow";
import { useStack } from "@stackflow/react";

export default function BottomNavigation() {
  const flow = useFlow();
  const stack = useStack();

  const removeAllActives = () => {
    stack.activities.forEach(() => {
      flow.pop({
        animate: false,
      });
    });
  };

  const pushToActivity = (activity: "SettingsActivity") => {
    //check if current activity is the same as the activity we want to push
    const currentActivity = stack.activities[stack.activities.length - 1];
    if (currentActivity.name === activity) {
      console.log("Already in this activity");
      return;
    }

    flow.push(activity, {});
  };

  return (
    <div className="bottom-navigation">
      <div onClick={removeAllActives} className="bottom-navigation__item">
        <HouseIcon />
        <span>Home</span>
      </div>
      <div
        onClick={() => pushToActivity("SettingsActivity")}
        className="bottom-navigation__item"
      >
        <SettingsIcon />
        <span>Settings</span>
      </div>
    </div>
  );
}
