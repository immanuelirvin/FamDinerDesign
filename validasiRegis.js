var submitRegis = document.getElementById("submit-register");

submitRegis.addEventListener("click", function(){
    var nama = document.getElementById("input-nama").value;
    var regisEmail = document.getElementById("regis-email").value;
    var gender = document.getElementsByName("name-gender");
    var city = document.getElementById("city").value;
    var inputpass = document.getElementById("input-password-regis").value;
    var confirminputpass = document.getElementById("input-confirm-password").value;

    if(nama == null || nama == ""){
        alert("Nama harus diisi");
    }

    if(!regisEmail.endsWith(".com")){
        alert("Email salah tidak sesuai dengan format, harus diakhiri dengan .com");
    }else if(regisEmail[0]=='@' || regisEmail[0]=='.' || regisEmail[0]=='_'){
        alert("Email salah tidak boleh dimulai menggunakan @, . , _");
    }else if(regisEmail[regisEmail.indexOf("@")-1] == '@' || regisEmail[regisEmail.indexOf("@")+1] == '@'){
        alert("Email salah tidak sesuai dengan format, tidak boleh menggunakan @ bersebelahan");
    }

    var isChecked = false;
    for(var i=0;i<gender.length; i++){
        if(gender[i].checked){
            isChecked = true;
            break;
        }
    }
    if(isChecked == false){
        alert("Gender harus dipilih");
    }

    if(city == 0){
        alert("City harus dipilih");
    }

    var isCapital = false;
    var isNumber = false;
    var i = 65; // A
    var j = 91; // Z+1
    var n = inputpass.length;

    for(var x=i;x<j ;x++){
        var capitalChar =  String.fromCharCode(x);
        for(var z=0;z<n;z++){
            if(inputpass[z] == capitalChar){
                isCapital = true;
                break;
            }
        }
    }
    
    for(var x=48;x<58 ;x++){
        var numberChar =  String.fromCharCode(x);
        for(var z=0;z<n;z++){
            if(inputpass[z] == numberChar){
                isNumber = true;
                break;
            }
        }
    }

    
    if(inputpass == ""){
        alert("Password harus diisi");
    }else if(inputpass.length<8){
        alert("Password minimal harus 8 karakter");
    }else if(isCapital==false){
        alert("Password minimal 1 huruf kapital");
    }else if(isNumber == false){
        alert("Password minimal harus ada 1 angka");
    }

    if(confirminputpass == ""){
        alert("Confirm password harus diisi")
    }else if(inputpass !== confirminputpass){
        alert("Confirm password isinya harus sama persis dengan field Password")
    }
})