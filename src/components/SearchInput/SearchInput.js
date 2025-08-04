import React, { useState } from 'react';

function SearchInput({ data }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredData, setFilteredData] = useState(data);

    function handleChange(event) {
        setSearchTerm(event.target.value);
        const newFilteredData = data.filter((item) =>
            item.toLowerCase().includes(event.target.value.toLowerCase())
        );
        setFilteredData(newFilteredData);
    }

    return (
        <div>
            <input type="text" value={searchTerm} onChange={handleChange} />
            <ul>
                {filteredData.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default SearchInput;