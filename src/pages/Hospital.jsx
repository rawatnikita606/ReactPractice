import React, { useState } from "react";
import "./Hospital.css";

const Hospital = () => {
    // Sample dataset with 100 hospitals
    const hospitalData = Array.from({ length: 100 }, (_, index) => ({
        id: index + 1,
        hospitalName: `Hospital ${index + 1}`,
        bloodGroup: ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"][
            Math.floor(Math.random() * 8)
        ],
        mobile: `98765${index.toString().padStart(5, "0")}`,
        address: `City ${index + 1}, Street ${index + 1}`,
    }));

    const [data, setData] = useState(hospitalData);
    const [searchQuery, setSearchQuery] = useState("");

    // Handle Search
    const handleSearch = () => {
        const query = searchQuery.toLowerCase();
        const filteredData = hospitalData.filter(
            (item) =>
                item.hospitalName.toLowerCase().includes(query) ||
                item.bloodGroup.toLowerCase().includes(query)
        );
        setData(filteredData);
    };

    // Reset Search
    const handleReset = () => {
        setData(hospitalData);
        setSearchQuery("");
    };

    return (
        <div className="app">
            <h1 className="title">Hospital Blood Bank Directory</h1>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search by Hospital Name or Blood Group"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="search-input"
                />
                <button onClick={handleSearch} className="search-button">
                    Search
                </button>
                <button onClick={handleReset} className="reset-button">
                    Reset
                </button>
            </div>
            <table className="hospital-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Hospital Name</th>
                        <th>Blood Group</th>
                        <th>Mobile Number</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length > 0 ? (
                        data.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.hospitalName}</td>
                                <td>{item.bloodGroup}</td>
                                <td>{item.mobile}</td>
                                <td>{item.address}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5" style={{ textAlign: "center" }}>
                                No Results Found
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Hospital;
