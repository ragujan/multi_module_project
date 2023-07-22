import React, { useEffect, useState } from "react";
import Table from "../Table";

function Tab1() {
  const [instituteName, setInsituteName] = useState("");
  const [jsonData,setJsonData] = useState([]);
  const add = async () => {
    let url = "http://localhost:8080/add_common_institute";

    if (instituteName === "" || instituteName === NaN) {
      return;
    }
    const formData = new FormData();
    formData.append("name", instituteName);
    await fetch(url, { method: "POST", body: formData })
      .then((res) => res.text())
      .then((text) => {
        console.log(text);
        if (text === "Success") {
          setInsituteName("");
          loadTable()
        }
      });
  };
  const loadTable = async () => {
    let url = "http://localhost:8080/view_common_institutes";

    await fetch(url, { method: "GET" })
      .then((res) => res.json())
      .then((json) => {
        console.log(json['rows']);

              setJsonData(json['rows'])


      });
  };

  useEffect(()=>{
    loadTable()
  },[])
  return (
    <div className="h-[400px] w-full flex flex-col ">
      {/* form */}
      <div className="grid grid-cols-5">
        <div className="flex flex-col gap-y-3">
          <span>Name</span>
          <div className="flex flex-row gap-x-4">
            <input
              type="text"
              placeholder="name"
              className="px-3 pb-0 text-black"
              onChange={(event) => {
                setInsituteName(event.target.value);
              }}
              value={instituteName}
            />
            <button
              onClick={() => add()}
              className="bg-secondary-blue px-3 pb-1 rounded-lg"
            >
              Add
            </button>
      
          </div>
        </div>
      </div>

      <div className="py-3">
        <Table json={jsonData} />
      </div>
    </div>
  );
}

export default Tab1;
