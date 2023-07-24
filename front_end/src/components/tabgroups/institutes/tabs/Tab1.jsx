import React, { useEffect, useState, useMemo } from "react";
import Table from "../Table";

function Tab1() {
  const [instituteName, setInsituteName] = useState("");
  const [jsonData, setJsonData] = useState([]);

  const [sortState, setSortState] = useState({
    sort: "common_institute_division_id",
    ascending: false,
  });

  const sortedData = useMemo(() => {
    const field = sortState.sort;
    const ascending = sortState.ascending;

    return [...jsonData].sort((a, b) => {
      if (a[field] < b[field]) {
        return ascending ? -1 : 1;
      }
      if (a[field] > b[field]) {
        return ascending ? 1 : -1;
      }
      return 0;
    });
  }, [sortState, jsonData]);

  const handleSortChange = (sort) => {
    if (sortState.sort === sort) {
      setSortState((prevState) => {
        return {
          ...prevState,
          ascending: !prevState.ascending,
        };
      });
    } else {
      setSortState({
        sort: sort,
        ascending: true,
      });
    }
  };

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
          loadTable();
        }
      });
  };
  const loadTable = async () => {
    let url = "http://localhost:8080/view_common_institutes";

    await fetch(url, { method: "GET" })
      .then((res) => res.json())
      .then((json) => {
        setJsonData(json["rows"]);
        console.log("loadtable");
      });
  };

  useEffect(() => {
    loadTable();
  }, []);

  useEffect(() => {
    console.log("sorted data ", sortedData);
  }, []);
  //   useEffect(() => {
  //     sortJson();
  // }, [sortState,jsonData]);

  return (
    <div className="h-[100%] w-full flex flex-col ">
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
              className="px-3 pb-1 rounded-lg bg-secondary-blue"
            >
              Add
            </button>
          </div>
        </div>
      </div>

      <div className="py-3">
        <Table
          
          onSortChange={handleSortChange}
          json={sortedData}
        />
      </div>
    </div>
  );
}

export default Tab1;
