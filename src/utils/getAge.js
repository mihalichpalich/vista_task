const getAge = (dateold, datenew) => {
    const ynew = datenew.getFullYear();
    const mnew = datenew.getMonth();
    const dnew = datenew.getDate();
    const yold = dateold.getFullYear();
    const mold = dateold.getMonth();
    const dold = dateold.getDate();

    let diff = ynew - yold;

    if (mold > mnew) {
        diff--
    } else {
        if (mold === mnew)
        {
            if (dold > dnew) diff--;
        }
    }

    return diff;
};

export default getAge