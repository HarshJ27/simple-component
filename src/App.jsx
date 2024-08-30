import { useState } from "react";

function App() {
  const [selections, setSelections] = useState({
    allPages: false,
    page1: false,
    page2: false,
    page3: false,
    page4: false,
  });

  const handleSelection = (event) => {
    const { name, checked } = event.target;

    if (name === "allPages") {
      setSelections({
        allPages: checked,
        page1: checked,
        page2: checked,
        page3: checked,
        page4: checked,
      });
    } else {
      setSelections({
        ...selections,
        [name]: checked,
        allPages:
          checked && selections.page1 && selections.page2 && selections.page3 && selections.page4,
      });
    }
  };

  const handleDone = () => {
    // Implement what happens when the Done button is clicked
    console.log("Selected options:", selections);
  };

  return (
    <>
<div className="h-screen flex flex-col items-center justify-center">
      <div className="selection-form p-4 rounded-lg shadow-2xl w-1/4 bg-white">
        <div className="checkbox-group space-y-2">
          <div className="checkbox-item flex justify-between">
            <label>All pages</label>
            <input
              type="checkbox"
              name="allPages"
              checked={selections.allPages}
              onChange={handleSelection}
              className="mr-2 w-4 h-4 border-gray-200"
            />
          </div>
          <hr className="my-4 border-gray-300" />
          <div className="checkbox-item flex justify-between pt-3">
            <label>Page 1</label>
            <input
              type="checkbox"
              name="page1"
              checked={selections.page1}
              onChange={handleSelection}
              className="mr-2 w-4 h-4"
            />
          </div>
          <div className="checkbox-item flex justify-between pt-3">
            <label>Page 2</label>
            <input
              type="checkbox"
              name="page2"
              checked={selections.page2}
              onChange={handleSelection}
              className="mr-2 w-4 h-4"
            />
          </div>
          <div className="checkbox-item flex justify-between pt-3">
            <label>Page 3</label>
            <input
              type="checkbox"
              name="page3"
              checked={selections.page3}
              onChange={handleSelection}
              className="mr-2 w-4 h-4"
            />
          </div>
          <div className="checkbox-item flex justify-between pt-3">
            <label>Page 4</label>
            <input
              type="checkbox"
              name="page4"
              checked={selections.page4}
              onChange={handleSelection}
              className="mr-2 w-4 h-4"
            />
          </div>
        </div>
        <hr className="my-4 border-gray-300" />
        <button
          onClick={handleDone}
          className="mt-4 px-4 py-2 w-full bg-[#FFCE22] text-black rounded-[4px] hover:bg-[#FFD84D]"
        >
          Done
        </button>
      </div>
    </div>
    {/* </div> */}
    </>
  )
}

export default App
