# learn-a-countries-frontend

This is a frontend part of my learn-a-countries application. To create a docker container follow this steps:

1) Clone app from GitHub using "git clone https://github.com/MateuszBorka/learn-a-countries-frontend/" command (you should be in a folder, where you won't app to be installed) or simply downloading ZIP of repository from web page using "Clone" button.
2) Make sure that Docker engine is running on your PC.
3) Go to the main folder of repository(Learn-a-countries-frontend).
4) Use console command "docker build -t learn-a-countries-front:1 .". That will craete a docker image, from which you will create a container.
5) Use console command "docker run -d -p 8081:8081 learn-a-countries-front:1". This command will run a docker container, that is listening in port 8081.

Now if you go to the "localhost:8081" (if you already have launched backend part of application(https://github.com/MateuszBorka/Learn-a-countries)) you will see an app window. If you don't see list of continents, that means, that your backend part of app isn't working properly, and you should try to launch it again.


