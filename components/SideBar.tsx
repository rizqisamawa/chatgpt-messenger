import NewChat from "./NewChat";

function SideBar() {
  return (
    <div className="p-2 flex-col h-screen">
      <div className="flex-1">
        <div>
          <NewChat />
          <div>{/* ModelSelection */}</div>
          {/* Map Through the CharTows */}
        </div>
      </div>
    </div>
  );
}

export default SideBar;
