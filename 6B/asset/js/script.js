const flashMsg = document.querySelector('#btnAdd');
flashMsg.addEventListener('click', function () {
    Swal.fire({
        icon: 'success'
    });
});

const flashMsgDel = document.querySelector('#btn-hapus');
flashMsgDel.addEventListener('click', function () {
    Swal.fire({
        icon: 'success',
        title: 'Data Berhasil Di hapus'
    });
});

const formUbahData = document.querySelector('.btn-edit');
formUbahData.addEventListener('click', function () {
    const btnUbah = document.querySelector('#modal');
    btnUbah.innerHTML = 'Edit Data'
    btnAdd.innerHTML = 'Edit'
});

const formAddModal = document.querySelector('.btnAddModal');
formAddModal.addEventListener('click', function () {
    const addTit = document.querySelector('#modal');
    addTit.innerHTML = 'Add Data'
    btnAdd.innerHTML = 'Add'
})