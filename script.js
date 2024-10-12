function saveData(event) {
    event.preventDefault();

    const companyName = document.getElementById('companyName').value;
    const nip = document.getElementById('nip').value;
    const city = document.getElementById('city').value;
    const street = document.getElementById('street').value;
    const houseNumber = document.getElementById('houseNumber').value;
    const apartmentNumber = document.getElementById('apartmentNumber').value;
    const postalCode = document.getElementById('postalCode').value;
    const comments = document.getElementById('comments').value;
    const industry = document.getElementById('industry').value;
    const isActive = document.getElementById('active').checked;

    const clientData = {
        companyName: companyName,
        nip: nip,
        city: city,
        street: street,
        houseNumber: houseNumber,
        apartmentNumber: apartmentNumber,
        postalCode: postalCode,
        comments: comments,
        industry: industry,
        isActive: isActive
    };

    console.log(clientData);
}

function insertAndLockData() {
    document.getElementById('companyName').value = 'UEK';
    document.getElementById('nip').value = '1234567890';
    document.getElementById('city').value = 'Kraków';
    document.getElementById('street').value = 'Ulicowa';
    document.getElementById('houseNumber').value = '15';
    document.getElementById('apartmentNumber').value = '24';
    document.getElementById('postalCode').value = '30-543';
    document.getElementById('comments').value = 'Brak uwag';
    document.getElementById('industry').value = 'IT';
    document.getElementById('active').checked = true;

    document.getElementById('companyName').disabled = true;
    document.getElementById('nip').disabled = true;
    document.getElementById('city').disabled = true;
    document.getElementById('street').disabled = true;
    document.getElementById('houseNumber').disabled = true;
    document.getElementById('apartmentNumber').disabled = true;
    document.getElementById('postalCode').disabled = true;
    document.getElementById('comments').disabled = true;
    document.getElementById('industry').disabled = true;
    document.getElementById('active').disabled = true;
}
