@Echo Off
:A
echo enter the password to start.
set/p "pass=>"
if NOT %pass%==Rat1234 goto:FAIL
chdir /d F:\rat-project\backend
net start mongodb
net start Apache2.4 
start "" http://localhost/rat-project/
node server.js
cmd /k
:FAIL
echo Invalid password
goto :A
