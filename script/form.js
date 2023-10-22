function handleSubmit(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const nim = document.getElementById("nim").value;
    const programStudi = document.getElementById("programStudi").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const jenisKelamin = document.querySelector('input[name="jenisKelamin"]:checked').value;
    const tanggalLahir = document.getElementById("tanggalLahir").value;
    const agama = document.getElementById("agama").value;
    const sekolahAsal = document.getElementById("sekolahAsal").value;
    const alamat = document.getElementById("alamat").value;

    const mahasiswa = {
        name,
        nim,
        programStudi,
        email,
        password,
        jenisKelamin,
        tanggalLahir,
        agama,
        sekolahAsal,
        alamat,
    };

    if (localStorage) {
        const data = localStorage.getItem("data");
        let dataArray = [];
        if (data) {
            dataArray = JSON.parse(data);
        }
        dataArray.push(mahasiswa);
        localStorage.setItem("data", JSON.stringify(dataArray));
    }

    alert("Data berhasil disimpan");

    document.getElementById("studentForm").reset();
}

const form = document.getElementById("studentForm");
form.addEventListener("submit", handleSubmit);