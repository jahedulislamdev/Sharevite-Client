const handleKeyDown = (e, locations, addLocation, removeLocation) => {
    const inputValues = e.target.value.trim();

    if ((e.key === "Enter" || e.key === ",") && inputValues !== "") {
        e.preventDefault();
        if (!locations.some((loc) => loc.tag === inputValues)) {
            addLocation({ tag: inputValues });
        }
        e.target.value = "";
    }

    if (e.key === "Backspace" && inputValues === "" && locations.length > 0) {
        e.preventDefault();
        removeLocation(locations.length - 1);
    }
};

export default handleKeyDown;
