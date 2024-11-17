const storedCart = () => {
    const storedApplied = localStorage.getItem('job-application');
    if (storedApplied) {
        return JSON.parse(storedApplied);
    }
    return [];
}

const saveJobApplication = (id) => {
    const storedJobApplication = storedCart();
    const exist = storedJobApplication?.find(jobId => jobId == id);
    if (!exist) {
        storedJobApplication.push(id);
        localStorage.setItem('job-application', JSON.stringify(storedJobApplication));
    }
}

export { storedCart, saveJobApplication }