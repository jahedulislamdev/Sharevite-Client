const percentageCalculate = (project) => {
    const percentage = Math.min(
        Math.round((project.collected / project.goal) * 100),
        100,
    );
    return percentage;
};
export default percentageCalculate;
