
        function openlogin(){
            var userid =document.getElementById('username').value;
            var pass =document.getElementById('password').value;
            if( userid =='aaditya.malikk' && pass =='adityainstagram'){
                window.open("aaditya_profile.html")
                alert("succesfully login")
            }
            else if(userid =='aryanmalikk__' && pass =='aryaninstagram'){
                window.open("aryan_profile.html")
                alert("succesfully login")

            }
            else if(userid =='chaudharyy_ayush' && pass =='ayushinstagram'){
                window.open("profile_ayush.html")
                alert("succesfully login")

            }
            else if(userid =='himanshumalik76' && pass =='himanshuinstagram'){
                window.open("himanshuprofile.html")
                alert("succesfully login")

            }

            else{
                alert("Incorrect Username Or Password")
            }
            
            
        }
        // alert("enter username and password")
       

    