import LanguageSwitchButton from "./LanguageSwitchButton";

const NavigationBar = () => {
  return (
    <div className="flex justify-between px-24  ">
      <ul className="flex">
        <li>Home</li>
        <li>Projects</li>
        <li>Info</li>
        <li>Hire Me</li>
      </ul>
      <LanguageSwitchButton/>
    </div>
  );
}


export default NavigationBar