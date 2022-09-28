
first run the below to build container images from dockerfile  commands layer

$docker build -t image-name-container . // This Wit -t reprsent the container name and last params is (.) means the current directory found the Dockerfile and run the commands

optionaly u can check the docker image 
$docker image ls


third run container and assigned it name to specfied 

$docker run --name container-name image-name-container // --name to spefices name for container runinig now should assign the port  

fourth u can check the containers runinig 

$docker ps // with option -a to print all 


as u like if u want to remove container should stop runing first or use -f option
$docker rm container-name -f 



also u can use sum option with command run 

-d => to run in background it's not in shoing logs in current terminal 
-p => to assing port application to tcp for ur server by use -p 3000:3000 
-v => to be able for hot realod when update passed all updates in container without rebuild container this work as two bind way