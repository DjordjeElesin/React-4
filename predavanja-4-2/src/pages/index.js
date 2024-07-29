import Input from "./components/Input";
import PreviousState from "./components/PreviousState";
import RenderCount from "./components/RenderCount";
import ChangeColor from "./components/ChangeColor";
import Stopwatch from "./components/Stopwatch";
import FetchWithDependency from "./components/FetchwithDependency";
import CountdownTimer from "./components/CountdownTimer";
import ClickCounter from "./components/ClickCounter";
import AutoSaveForm from "./components/AutoSaveForm";
import ToggleVisibility from "./components/ToggleVisibility";
import DynamicFontSize from "./components/DynamicFontSize";
import AddClassOnClick from "./components/AddClassOnClick";
import SmoothScroll from "./components/SmoothScroll";

export default function Home() {
  return (
   <>
    <Input/>
    <PreviousState/>
    <RenderCount/>
    <ChangeColor/>
    <Stopwatch/>
    <FetchWithDependency/>
    <CountdownTimer/>
    <ClickCounter/>
    <AutoSaveForm/>
    <ToggleVisibility/>
    <DynamicFontSize/>
    <AddClassOnClick/>
    <SmoothScroll/>
   </>
  );
}
