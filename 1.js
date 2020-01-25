 function profil(name, age) {

     var data = {
         name: name,
         age: age,
         address: "Garut",
         hobbies: ["futsal", "main gitar"],
         is_married: true,
         list_school: [{
             "name": "Politekik Piksi Ganesha",
             "year_in": "2013",
             "year_out": "2016",
             "major": "Manajemen Informatika"
         }],
         skills: [{
             "skill_name": "html, Javascript, css, php, laravel",
             "level": "beginner"
         }],
         interest_in_coding: true
     }
     var data_json = JSON.stringify(data);
     return console.log(data_json);
 }

 var nama = 'Dicky Setiawan';
 var umur = 23;
 profil(nama, umur);


