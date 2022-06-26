const downloadIE55sp2 = (form) => {
    window.location.replace(`http://ie55browserforbetter.tk/ie55sp2/${form.lang.value}/IE5SETUP.EXE`);
    return false;
};

const downloadIE55sp3win2k = (form) => {
    window.location.pathname=`/ie55sp2/win95/Windows2000-KB999999-x86-${form.lang.value}.EXE`;
    return false;
};