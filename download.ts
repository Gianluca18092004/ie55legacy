const downloadIE55sp2 = (form) => {
    window.location.replace(`http://ie55browserforbetter.tk/ie55sp2/${form.lang.value}/IE5SETUP.EXE`);
    return false;
};

const downloadSingle = (file:string) => {
    window.location.replace(file);
    return false;
};