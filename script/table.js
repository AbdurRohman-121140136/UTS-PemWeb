if (localStorage) {
    const data = localStorage.getItem("data");
    if (data) {
        const dataArray = JSON.parse(data);
        const tableData = document.getElementById("tableData");

        dataArray.forEach(function (mahasiswa) {
            const row = tableData.insertRow(tableData.rows.length);
            row.insertCell(0).textContent = mahasiswa.name;
            row.insertCell(1).textContent = mahasiswa.nim;
            row.insertCell(2).textContent = mahasiswa.programStudi;
            row.insertCell(3).textContent = mahasiswa.email;
            row.insertCell(4).textContent = mahasiswa.password;
            row.insertCell(5).textContent = mahasiswa.jenisKelamin;
            row.insertCell(6).textContent = mahasiswa.tanggalLahir;
            row.insertCell(7).textContent = mahasiswa.agama;
            row.insertCell(8).textContent = mahasiswa.sekolahAsal;
            row.insertCell(9).textContent = mahasiswa.alamat;
        });
    }
}